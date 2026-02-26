import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.join(process.cwd(), 'app');
const CONTENT_PATH = path.join(process.cwd(), 'content', 'ro.json');
const TRANSLATIONS_FILE = path.join(process.cwd(), 'lib', 'translations.ts');

const EXCLUDED_DIRS = ['admin', 'api'];

// Romanian diacritics and common Romanian words to detect Romanian strings
const RO_DIACRITICS = /[ăâîșțĂÂÎȘȚ]/;
const RO_COMMON_WORDS = /\b(și|sau|pentru|într-|este|sunt|care|din|acest|această|mai|toate|cum|prin|când|doar|despre|aici|acum|dacă|poate|foarte|trebuie|afacerea|strategii|soluții|servicii|clienți|creștere|marketing|digital|gratuit|completează|programează|trimite|contactează|echipa|proiect|rezultate|buget)\b/i;

function getAllTsxFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip excluded dirs at top level of app/
      const relToApp = path.relative(APP_DIR, fullPath);
      const topDir = relToApp.split(path.sep)[0];
      if (EXCLUDED_DIRS.includes(topDir)) continue;
      getAllTsxFiles(fullPath, files);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      // Skip layout/not-found and non-page utility files
      if (entry.name === 'globals.css') continue;
      files.push(fullPath);
    }
  }
  return files;
}

function isRomanianText(text: string): boolean {
  if (text.length < 4) return false;
  // Must contain letters (not just numbers, symbols, CSS values, class names)
  if (!/[a-zA-ZăâîșțĂÂÎȘȚ]{2,}/.test(text)) return false;
  // Skip things that look like code/CSS/URLs
  if (/^(https?:|\/|#|0x|rgba|rgb|\d+px|[\d.]+rem|[\d.]+em|min\(|max\(|clamp\(|calc\(|linear-gradient|radial-gradient)/.test(text)) return false;
  if (/^[a-z_-]+$/.test(text)) return false; // kebab-case or snake_case identifiers
  if (/^\{.*\}$/.test(text)) return false; // template expressions
  if (/^[A-Z][a-zA-Z]+$/.test(text) && text.length < 20) return false; // likely component names
  // Check for Romanian indicators
  return RO_DIACRITICS.test(text) || RO_COMMON_WORDS.test(text);
}

function extractStrings(content: string): string[] {
  const strings: string[] = [];

  // Match string literals in JSX: "text" or 'text' that appear as content or prop values
  // Also match template literals `text`
  const patterns = [
    // JSX text content between > and < (not inside tags)
    />([^<>{]+)</g,
    // String props: "text" and 'text'
    /"([^"]{4,})"/g,
    /'([^']{4,})'/g,
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const text = match[1].trim();
      if (text && isRomanianText(text)) {
        // Clean up JSX expressions
        const cleaned = text.replace(/\{[^}]*\}/g, '').trim();
        if (cleaned.length >= 4 && isRomanianText(cleaned)) {
          strings.push(cleaned);
        }
      }
    }
  }

  return [...new Set(strings)];
}

function fileToPageName(filePath: string): string {
  const rel = path.relative(APP_DIR, filePath);
  const dir = path.dirname(rel);

  if (dir === '.' || dir === '') {
    const base = path.basename(rel, path.extname(rel));
    return base === 'page' ? 'homepage' : base;
  }

  // Use the directory name as page name
  return dir.replace(/\//g, '-').replace(/\\/g, '-');
}

function toFieldKey(text: string, index: number): string {
  // Create a readable key from the text
  const slug = text
    .toLowerCase()
    .replace(/[ăâ]/g, 'a')
    .replace(/[î]/g, 'i')
    .replace(/[ș]/g, 's')
    .replace(/[ț]/g, 't')
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .slice(0, 40);

  return slug || `field_${index}`;
}

// Main
function main() {
  const files = getAllTsxFiles(APP_DIR);
  console.log(`Found ${files.length} .tsx/.ts files to scan\n`);

  const result: Record<string, Record<string, string>> = {};

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const strings = extractStrings(content);

    if (strings.length === 0) continue;

    const pageName = fileToPageName(file);
    if (!result[pageName]) result[pageName] = {};

    const existingKeys = new Set(Object.keys(result[pageName]));

    strings.forEach((str, i) => {
      let key = toFieldKey(str, i);
      // Avoid duplicates
      if (existingKeys.has(key)) {
        key = `${key}_${i}`;
      }
      existingKeys.add(key);
      result[pageName][key] = str;
    });

    console.log(`  ${pageName}: ${strings.length} Romanian strings found`);
  }

  // Scan lib/translations.ts and map to "homepage"
  if (fs.existsSync(TRANSLATIONS_FILE)) {
    const transContent = fs.readFileSync(TRANSLATIONS_FILE, 'utf-8');
    const transStrings = extractStrings(transContent);
    if (transStrings.length > 0) {
      if (!result['homepage']) result['homepage'] = {};
      const existingKeys = new Set(Object.keys(result['homepage']));
      transStrings.forEach((str, i) => {
        let key = toFieldKey(str, i);
        if (existingKeys.has(key)) {
          key = `${key}_trans_${i}`;
        }
        existingKeys.add(key);
        result['homepage'][key] = str;
      });
      console.log(`  homepage (lib/translations.ts): ${transStrings.length} Romanian strings found`);
    }
  }

  // Ensure content directory exists
  const contentDir = path.dirname(CONTENT_PATH);
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  fs.writeFileSync(CONTENT_PATH, JSON.stringify(result, null, 2) + '\n', 'utf-8');

  const pageCount = Object.keys(result).length;
  const fieldCount = Object.values(result).reduce((sum, fields) => sum + Object.keys(fields).length, 0);
  console.log(`\nDone! Wrote ${fieldCount} fields across ${pageCount} pages to content/ro.json`);
}

main();
