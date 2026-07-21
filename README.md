# Next Gen Plant

Static site built with [Eleventy](https://www.11ty.dev/), hosted on GitHub Pages.

## Develop

```bash
npm install
npm start
```

Site runs at `http://localhost:8080`.

## News admin (recommended)

After deploy, open **[https://nextgenplant.co.uk/admin/](https://nextgenplant.co.uk/admin/)** (or `http://localhost:8080/admin/` while developing).

The editor is [Sveltia CMS](https://sveltiacms.app/). Saving a post commits a Markdown file to `src/whats-new/` on GitHub; the deploy workflow then rebuilds the site.

### Sign in (quick start)

1. Give the editor **write access** to the `NextGenPlant/NextGenSite` GitHub repo (Collaborator, or org membership with write).
2. Open `/admin/` → **Sign in with Token**.
3. Create a fine-grained personal access token with **Contents: Read and write** on this repo only, paste it in, and publish.

The token stays in that browser’s local storage.

### Sign in with GitHub (nicer for non-technical users)

Optional one-time setup (Cloudflare free tier):

1. Deploy [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) as a Cloudflare Worker.
2. Create a GitHub OAuth App (Homepage: `https://nextgenplant.co.uk`, callback: `https://YOUR-WORKER.workers.dev/callback`).
3. Put the Worker URL in `admin/config.yml` as `backend.base_url`, commit, and redeploy.

After that, `/admin/` shows a normal **Login with GitHub** button.

### Local editing without GitHub auth

1. In `admin/config.yml`, uncomment `local_backend: true`.
2. Run `npm start` and, in another terminal, `npx decap-server`.
3. Open `http://localhost:8080/admin/` — changes write to your local files.

Remember to comment `local_backend` out again before relying on production login.

## Add a news post by hand

Create `src/whats-new/your-slug.md`:

```markdown
---
title: Your headline
date: 2026-07-21
description: Short meta description
image: /wp-content/uploads/your-image.jpg
imageAlt: Alt text
excerpt: Short summary for the news listing and cards.
---

Post body in Markdown.
```

Layout and URL (`/whats-new/your-slug/`) are set automatically from the filename. Put images in `wp-content/uploads/`, then commit and push to `main`.

## Build

```bash
npm run build
```

Output is in `_site/` (not committed).
