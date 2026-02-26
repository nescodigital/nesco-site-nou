import { NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const CONTENT_DIR = join(process.cwd(), 'content');

const LANG_NAMES: Record<string, string> = {
  en: 'English',
  de: 'German',
};

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 500 });
  }

  try {
    const { pageKey, fields, targetLanguages } = await request.json();

    if (!pageKey || !fields || !targetLanguages?.length) {
      return NextResponse.json({ error: 'Missing pageKey, fields, or targetLanguages' }, { status: 400 });
    }

    const results: Record<string, Record<string, string>> = {};

    for (const lang of targetLanguages) {
      const langName = LANG_NAMES[lang] || lang;

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4096,
          messages: [
            {
              role: 'user',
              content: `Translate the following Romanian business text to ${langName}. Keep the same tone and style. Return only a JSON object with the same keys and translated values.\n\n${JSON.stringify(fields, null, 2)}`,
            },
          ],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error(`Translation to ${lang} failed:`, err);
        return NextResponse.json({ error: `Translation to ${lang} failed` }, { status: 500 });
      }

      const data = await res.json();
      const text = data.content?.[0]?.text || '';

      // Extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        return NextResponse.json({ error: `Could not parse ${lang} translation` }, { status: 500 });
      }

      results[lang] = JSON.parse(jsonMatch[0]);
    }

    // Write to language files
    await mkdir(CONTENT_DIR, { recursive: true });

    for (const lang of targetLanguages) {
      const filePath = join(CONTENT_DIR, `${lang}.json`);
      let existing: Record<string, object> = {};
      try {
        const raw = await readFile(filePath, 'utf-8');
        existing = JSON.parse(raw);
      } catch {
        // file doesn't exist yet
      }
      const existingPage = (existing[pageKey] as Record<string, string>) || {};
      existing[pageKey] = { ...existingPage, ...results[lang] };
      await writeFile(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf-8');
    }

    return NextResponse.json({ success: true, translated: Object.keys(results) });
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json({ error: 'Translation failed' }, { status: 500 });
  }
}
