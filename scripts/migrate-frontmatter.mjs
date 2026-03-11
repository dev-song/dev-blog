import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, extname } from "path";

const BLOG_DIR = new URL("../src/data/blog", import.meta.url).pathname;

const files = readdirSync(BLOG_DIR).filter(f => extname(f) === ".md");

let updated = 0;
let skipped = 0;

for (const file of files) {
  const filePath = join(BLOG_DIR, file);
  const content = readFileSync(filePath, "utf-8");

  // 이미 pubDatetime이 있으면 건너뜀
  if (/^pubDatetime:/m.test(content)) {
    skipped++;
    continue;
  }

  // pubDate: "YYYY-MM-DD HH:MM:SS" → pubDatetime: YYYY-MM-DDTHH:MM:SS+09:00
  const newContent = content.replace(
    /^pubDate:\s*"(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})"/m,
    "pubDatetime: $1T$2+09:00"
  );

  if (newContent !== content) {
    writeFileSync(filePath, newContent, "utf-8");
    updated++;
  } else {
    // pubDate 형식이 다른 경우 경고
    const pubDateMatch = content.match(/^pubDate:\s*.+/m);
    if (pubDateMatch) {
      console.warn(`[WARN] Unrecognized pubDate format in ${file}: ${pubDateMatch[0]}`);
    }
    skipped++;
  }
}

console.log(`Done: ${updated} files updated, ${skipped} files skipped.`);
