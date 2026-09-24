# Web Designss — GitHub Pages deployment

This folder is prepared to deploy the site directly from the repository root.

## Recommended
1. Push the entire folder to the `main` branch.
2. GitHub → **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy-pages.yml` deploys the repository root.
5. Under **Custom domain**, use `webdesignss.com`.
6. Keep the `CNAME` file at repository root.

The site has no Node build requirement for GitHub Pages; it is a static HTML/CSS/JS site with its 3D/media assets already included.
