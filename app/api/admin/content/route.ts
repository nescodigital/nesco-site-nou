import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const CONTENT_PATH = join(process.cwd(), 'content', 'ro.json');

export async function GET() {
  try {
    const raw = await readFile(CONTENT_PATH, 'utf-8');
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await writeFile(CONTENT_PATH, JSON.stringify(body, null, 2) + '\n', 'utf-8');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}
