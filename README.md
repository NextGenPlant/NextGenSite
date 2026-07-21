# Next Gen Plant

Static site built with [Eleventy](https://www.11ty.dev/), hosted on GitHub Pages.

## Develop

```bash
npm install
npm start
```

Site runs at `http://localhost:8080`.

## Add a news post

1. Create `src/whats-new/your-slug.md`:

```markdown
---
layout: post.njk
title: Your headline
date: 2026-07-21
description: Short meta description
image: /wp-content/uploads/your-image.jpg
imageAlt: Alt text
excerpt: Short summary for the news listing and cards.
permalink: /whats-new/your-slug/
---

Post body in Markdown.
```

2. Put the image in `wp-content/uploads/`.
3. Run `npm start` to preview. Footer + news index update automatically.
4. Commit and push to `main` — GitHub Actions builds and deploys.

## Build

```bash
npm run build
```

Output is in `_site/` (not committed).
