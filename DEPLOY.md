# DEPLOY — getting the site live

The site is **static** (HTML/CSS/JS, no server code), so any static host works. Pick one.

## What to know first
- The homepage is `ui_kits/personal-site/index.html`; the root `index.html` redirects to it,
  so visitors land on the site automatically.
- It must be served over **http(s)** (not opened as a `file://` path) — the Live2D model is
  fetched at runtime. Every option below serves over https.
- No build step. Just commit the files as-is and host them.

## Option A — GitHub Pages (free, simplest with your VS Code + git plan)

1. In VS Code, commit and push everything to a GitHub repo (e.g. `Jeffiiii/jeffi`).
2. On GitHub: **Settings → Pages**.
3. Under "Build and deployment", **Source: Deploy from a branch**.
4. Choose **Branch: `main`**, **Folder: `/ (root)`**, then **Save**.
5. Wait ~1 minute. Your site is live at:
   `https://jeffiiii.github.io/<repo-name>/`
   (the root redirect sends visitors into the homepage).

To run it locally before pushing (so the Live2D model loads), from the project folder:
`python -m http.server 8080` → open `http://localhost:8080/` . (VS Code "Live Server"
extension also works.)

## Option B — Netlify or Vercel (free, custom domains, instant)

- **Netlify:** drag-and-drop the project folder at app.netlify.com, **or** "Add new site →
  Import from Git" and pick the repo. No build command; publish directory = `/` (root).
- **Vercel:** "Add New → Project" → import the repo. Framework preset = **Other**, no build
  command, output dir = root. Deploy.

Both give you `https://<name>.netlify.app` / `.vercel.app` instantly and let you attach a
custom domain (e.g. `jeffi.dev`) in their dashboard.

## Custom domain (optional)
Buy a domain (Namecheap/Cloudflare/Porkbun), then in the host's dashboard add it and point
your domain's DNS as they instruct (GitHub Pages → a `CNAME`; Netlify/Vercel → their
nameservers or a CNAME). HTTPS is automatic on all three.

## Before you go fully public — quick checklist
- Replace the **Live2D model** with Elysia's own licensed model (the bundled Changli rig is
  an example and is marked "not for livestream monetization").
- Swap **Gallery placeholder images** for your own photos.
- Replace **synthesized music** with real tracks if you want actual songs (see HANDOFF.md).
- Optional: self-host fonts + React/Babel instead of CDNs for resilience/offline.

## Updating the site later
Edit files in VS Code → commit → push. GitHub Pages / Netlify / Vercel redeploy
automatically on every push. (If a change doesn't show, hard-refresh: Cmd/Ctrl+Shift+R —
some files are cache-busted with `?v=…`, bump that string if needed.)
