import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'blog');
    const files = await readdir(dir);
    const images = files
      .filter((f) => /\.(jpg|jpeg|png|webp|avif)$/i.test(f))
      .map((f) => `/blog/${f}`);
    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}
