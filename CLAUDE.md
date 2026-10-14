# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio + blog for Sachin Gadare, built on Next.js 14 (App Router), TypeScript, Tailwind, shadcn/ui (new-york style), Magic UI, and Framer Motion. Deployed on Vercel (https://sachin-spind.vercel.app/). Forked from dillionverma/portfolio.

## Commands

```bash
npm install      # or pnpm install — both package-lock.json and pnpm-lock.yaml are committed
npm run dev      # dev server
npm run build    # production build (also type-checks)
npm run lint     # next lint (extends next/core-web-vitals)
```

There is no test suite.

## Architecture

**Single data file drives the site.** [src/data/resume.tsx](src/data/resume.tsx) exports a `DATA` object (name, summary, skills, navbar, contact/social, work, education, projects). Almost all content edits happen there, not in components. It is a `.tsx` file because entries embed JSX icons (`<Icons.globe />`). `DATA.url` is also used as `metadataBase` and to build OG/canonical URLs.

**Home page** ([src/app/page.tsx](src/app/page.tsx)) is one server component that renders sections by mapping over `DATA.*` into card components (`ResumeCard`, `ProjectCard`, `HackathonCard`), each wrapped in `BlurFade` with staggered `BLUR_FADE_DELAY` multiples. The hackathons section is commented out in both `page.tsx` and `resume.tsx` — re-enable both together, since the page references `DATA.hackathons` directly.

**Blog pipeline** ([src/data/blog.ts](src/data/blog.ts)): posts are `.mdx` files in `/content` with gray-matter frontmatter (`title`, `publishedAt`, `summary`, optional `image`). Despite the extension, they are rendered as plain Markdown → HTML via unified (remark-parse → remark-rehype → rehype-pretty-code with shiki `min-light`/`min-dark` → rehype-stringify) and injected with `dangerouslySetInnerHTML`. JSX/MDX components inside posts will not work. [src/components/mdx.tsx](src/components/mdx.tsx) is unused leftover. The slug is the filename. Routes: `/blog` and `/blog/[slug]`. The Blog navbar link is currently commented out in `DATA.navbar`.

**SEO**: site-wide metadata (title, description, keywords, OG/Twitter with `/og.jpg`) lives in `layout.tsx`; the home page adds a canonical URL and Person/WebSite JSON-LD built from `DATA`; `src/app/sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt`. `DATA.url` must have no trailing slash, since URLs are built as `${DATA.url}/path`. Blog posts without an `image` fall back to `/og.jpg`. Favicons are in `/public` and declared in `layout.tsx` metadata, not as `src/app/icon.*` files, because a file-based icon would override the light/dark `icons` config; `ThemeFavicon` swaps them when the site theme toggles.

**Layout** ([src/app/layout.tsx](src/app/layout.tsx)): wraps everything in `ThemeProvider` (next-themes, class-based, default light) and `TooltipProvider`, adds Vercel Analytics/SpeedInsights and Google AdSense scripts (`ads.txt` at the root is related). The floating bottom `Navbar` (a Magic UI `Dock`) is built from `DATA.navbar` plus `DATA.contact.social` entries where `navbar: true`.

**UI components**: `src/components/ui/` holds shadcn primitives (add more via the shadcn CLI using [components.json](components.json)); `src/components/magicui/` holds animation components. Use `cn()` from `@/lib/utils` for class merging. The import alias `@/*` maps to `src/*`. Theme colors are CSS variables in [src/app/globals.css](src/app/globals.css).

Static assets (avatar, project images/videos, school logos) live in `/public` and are referenced by root-relative paths from `resume.tsx`.
