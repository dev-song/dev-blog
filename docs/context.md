# 프로젝트 컨텍스트

## 목적

개발자 블로그. 두 가지 유형의 콘텐츠를 다룬다:

- **TIL / 개념 정리** — 학습하며 발견한 것들, 짧은 메모
- **심층 기술 글** — 튜토리얼, 분석, 정리된 아티클

## 기술 스택

| 항목 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | Astro v5 | 정적 사이트 생성에 최적화, 콘텐츠 중심 |
| 테마 | astro-paper v5 | 미니멀 디자인 + 태그/검색 내장, 별도 구현 불필요 |
| 콘텐츠 형식 | MDX | Markdown + Astro/React 컴포넌트 삽입 가능 |
| 검색 | Pagefind | 빌드 타임에 인덱스 생성, 별도 서버 불필요 |
| 스타일 | Tailwind CSS v4 | astro-paper에 기본 포함 |
| 패키지 매니저 | pnpm | astro-paper 공식 기본값, 빠른 설치 |
| 배포 | GitHub Pages + GitHub Actions | 무료, main 브랜치 push 시 자동 배포 |

## 디렉토리 구조

```
dev-blog/
├── src/
│   ├── data/blog/         # MDX 포스트 파일 저장 위치
│   ├── pages/             # 라우팅 (index, posts, tags, search, archives)
│   ├── components/        # UI 컴포넌트
│   ├── layouts/           # 페이지 레이아웃
│   ├── utils/             # 유틸리티 함수 (정렬, 슬러그, OG 이미지 등)
│   ├── config.ts          # 블로그 메타데이터 설정
│   └── constants.ts       # SNS 링크, 공유 버튼 설정
├── public/                # 정적 파일 (favicon, OG 이미지)
├── docs/
│   └── context.md         # 이 파일 — 프로젝트 컨텍스트
├── astro.config.ts        # Astro 설정 (site URL, base, 마크다운 플러그인)
└── .github/workflows/
    ├── ci.yml             # PR 시 린트/빌드 검사
    └── deploy.yml         # main push 시 GitHub Pages 자동 배포
```

## 핵심 설정 파일

### `src/config.ts`
블로그 이름, 설명, 작성자, URL 등 전역 메타데이터. 대부분의 개인화는 여기서.

### `src/constants.ts`
SNS 링크(`SOCIALS`)와 포스트 공유 버튼(`SHARE_LINKS`). 쓰지 않는 항목은 비워두면 된다.

### `astro.config.ts`
- `site`: 배포 URL (`https://dev-song.github.io/dev-blog/`)
- `base`: 레포 경로 (`/dev-blog`) — 모든 내부 링크에 자동 적용됨

## 글 작성 가이드

### 파일 위치
`src/data/blog/` 안에 `.md` 또는 `.mdx` 파일로 작성.

### Frontmatter 형식
```yaml
---
title: "글 제목"
pubDatetime: 2026-03-11T00:00:00Z  # 발행일 (ISO 8601 형식)
description: "한 줄 설명"           # 목록 페이지와 OG 이미지에 사용됨
tags: ["tag1", "tag2"]             # 소문자, 복수 태그 가능
draft: false                       # true면 빌드에서 제외됨
---
```

### 태그 규칙
- 소문자 사용 (예: `javascript`, `til`, `css`)
- 하이픈으로 단어 구분 (예: `web-performance`)
- TIL 형식 글: `til` 태그 필수

### MDX 컴포넌트 사용
```mdx
import MyComponent from "../../components/MyComponent.astro";

<MyComponent prop="value" />
```

## 배포 방법

### 로컬 개발
```bash
pnpm dev          # 개발 서버 시작 (localhost:4321)
                  # ※ 검색은 dev 모드에서 동작하지 않음 (Pagefind는 빌드 후 동작)
```

### 로컬 빌드 및 검색 확인
```bash
pnpm build        # 프로덕션 빌드 + Pagefind 인덱스 생성
pnpm preview      # 빌드 결과 미리보기 (검색 동작 확인 가능)
```

### 프로덕션 배포
`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드하고 GitHub Pages에 배포한다.

배포 URL: `https://dev-song.github.io/dev-blog/`

## 주의사항

- **pnpm 일관성**: `npm`이나 `yarn`을 섞어 쓰면 lockfile 충돌 발생. 항상 `pnpm` 사용.
- **Pagefind 검색**: `pnpm dev`에서는 검색이 동작하지 않는다. `pnpm build && pnpm preview`로 확인.
- **GitHub Pages 설정**: GitHub 레포 → Settings → Pages → Source를 **GitHub Actions**로 설정해야 배포됨 (기본값인 "Deploy from a branch"에서 변경 필요).
- **base 경로**: 내부 링크는 Astro가 자동으로 `/dev-blog` 접두어를 붙여준다. 직접 경로를 하드코딩하지 말 것.
