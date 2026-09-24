# WebDesignss — Falling Human Edition

Gold-themed WebDesignss portfolio with the falling-human scroll-controlled video background, animated hero, 3D mesh footer, logo, and four interactive concept projects.

## Run locally

Use Node.js 22 or newer. Do not double-click `index.html`; this is a Vite/React application.

```bash
npm install
npm start
```

Then open `http://127.0.0.1:5173/`.

On Windows, `START-WEBSITE.cmd` can be used after Node.js is installed.

## GitHub Pages

This repository includes a GitHub Actions Pages workflow. Push the folder to a GitHub repository and set **Settings → Pages → Source** to **GitHub Actions** once. Each push to `main` installs the locked dependencies, builds the Vite production site, and deploys the `dist` output.

The Vite base path and public-asset references are configured for GitHub Pages project URLs as well as local development.

## Project structure

- `src/` — React application source
- `public/` — video, logo, favicon, and cursor assets
- `index.html` — Vite entry document
- `vite.config.js` — production build configuration
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment

No website content or visual design has been intentionally changed as part of the packaging/deployment repair.
