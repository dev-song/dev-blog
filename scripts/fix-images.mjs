/**
 * Removes broken local image references from migrated Tistory posts.
 * Original ./img/img*.png files do not exist in the repository.
 * Removes markdown image lines with ./img/ or ./images/ paths to prevent
 * Astro build failures caused by missing image files.
 */
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, extname } from "path";

const BLOG_DIR = new URL("../src/data/blog", import.meta.url).pathname;

const files = readdirSync(BLOG_DIR).filter(f => extname(f) === ".md");

let updated = 0;
let totalRemoved = 0;

for (const file of files) {
  const filePath = join(BLOG_DIR, file);
  const content = readFileSync(filePath, "utf-8");

  // Remove markdown image lines referencing local ./img/ or ./images/ paths
  // Pattern: ![...](./img/...) or ![...](./images/...)
  const newContent = content.replace(/!\[[^\]]*\]\(\.\/(img|images)\/[^)]*\)\n?/g, "");

  if (newContent !== content) {
    const removed = (content.match(/!\[[^\]]*\]\(\.\/(img|images)\/[^)]*\)/g) || []).length;
    writeFileSync(filePath, newContent, "utf-8");
    updated++;
    totalRemoved += removed;
  }
}

console.log(`Done: ${updated} files updated, ${totalRemoved} image references removed.`);
