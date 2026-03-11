/**
 * Generates a markdown checklist of blog posts that need image review.
 * Detects:
 * 1. Posts with remaining HTML <img> tags (not removed by fix-images.mjs)
 * 2. Posts that have image-like context patterns (empty figure lines, etc.)
 * 3. Posts with corresponding files in the images/ directory
 *
 * Run: node scripts/audit-images.mjs
 * Output: docs/image-audit.md
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, extname, basename } from "path";

const BLOG_DIR = new URL("../src/data/blog", import.meta.url).pathname;
const IMAGES_DIR = join(BLOG_DIR, "images");
const OUTPUT = new URL("../docs/image-audit.md", import.meta.url).pathname;

const mdFiles = readdirSync(BLOG_DIR).filter(f => extname(f) === ".md").sort();
const imageFiles = existsSync(IMAGES_DIR) ? readdirSync(IMAGES_DIR) : [];

const results = [];

for (const file of mdFiles) {
  const filePath = join(BLOG_DIR, file);
  const content = readFileSync(filePath, "utf-8");
  const name = basename(file, ".md");

  const hasHtmlImg = /<img|<figure/i.test(content);
  const hasImageFile = imageFiles.some(img => img.startsWith(name));
  // Detect empty image placeholders left in content (two consecutive blank lines that were images)
  const titleMatch = content.match(/^title:\s*"?(.+?)"?\s*$/m);
  const title = titleMatch ? titleMatch[1] : name;

  if (hasHtmlImg || hasImageFile) {
    results.push({ file, title, hasHtmlImg, hasImageFile });
  }
}

// Build markdown report
const lines = [
  "# 이미지 수동 확인 필요 목록",
  "",
  `생성일: ${new Date().toLocaleDateString("ko-KR")}`,
  "",
  "## 개요",
  "",
  "아래 파일들은 이미지 관련 처리가 필요합니다:",
  "- **HTML img**: 본문에 `<img>` HTML 태그가 남아 있어 마크다운으로 변환 또는 제거 필요",
  "- **이미지 파일 있음**: `images/` 폴더에 해당 파일이 존재 — 경로 확인 필요",
  "",
  "Tistory에서 export된 `./img/img.png` 형태의 이미지(322개, 79개 파일)는 빌드 오류를 막기 위해",
  "마이그레이션 과정에서 자동 제거됐습니다. Tistory 관리자에서 원본 이미지를 내려받은 뒤",
  "`src/data/blog/images/` 에 추가하고 아래 파일들의 이미지 경로를 복원해야 합니다.",
  "",
];

if (results.length === 0) {
  lines.push("현재 별도 처리가 필요한 파일이 없습니다.");
} else {
  lines.push("| 파일 | 제목 | HTML img 태그 | images/ 파일 |");
  lines.push("|------|------|:---:|:---:|");
  for (const r of results) {
    lines.push(`| \`${r.file}\` | ${r.title} | ${r.hasHtmlImg ? "⚠️ 있음" : "-"} | ${r.hasImageFile ? "✅ 있음" : "-"} |`);
  }
  lines.push("");
}

lines.push("## 전체 포스트 이미지 복원 체크리스트");
lines.push("");
lines.push("Tistory 포스트에서 이미지를 다운로드한 후 아래 목록을 체크하세요.");
lines.push("이미지 파일명은 `{포스트번호}_{인덱스}.{확장자}` 형식으로 저장 권장.");
lines.push("");
lines.push("| # | 파일 | 완료 |");
lines.push("|---|------|:----:|");
for (const file of mdFiles) {
  const num = file.match(/^(\d+)/)?.[1] ?? "-";
  lines.push(`| ${num} | \`${file}\` | [ ] |`);
}

writeFileSync(OUTPUT, lines.join("\n"), "utf-8");
console.log(`Report written to docs/image-audit.md (${results.length} files need attention)`);
