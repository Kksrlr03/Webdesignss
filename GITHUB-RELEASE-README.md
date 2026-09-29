# Web Designss — GitHub Pages release

1. Extract this ZIP. Put its CONTENTS in the repository root (index.html alongside assets, demos, scripts, styles and .github).
2. Commit and push to the main branch using GitHub Desktop or Git. The bird GLB is about 33 MB: use Git rather than the browser uploader for this file. No build or npm install is needed.
3. In GitHub Settings > Pages, choose GitHub Actions. The included deploy-pages.yml publishes the site.
4. CNAME preserves the existing webdesignss.com domain. If using only username.github.io/repository, remove CNAME and leave the custom-domain setting empty.

Do not upload this ZIP as the only repository file: GitHub Pages needs the extracted files.

## Included
Main site, interactive studio, bird/butterfly and forest assets, fonts, thumbnails, all six linked showcase websites, and their bundled assets.

## Checks completed
- Main site and six showcase sites loaded locally; project-subfolder URL compatibility checked.
- Main email, WhatsApp and Instagram destinations verified without sending messages.
- Interactive studio reveal and mobile layout switch checked.
- Forma section links repaired and FAQ expansion checked.
- VOLTRA finish switch and product detail dialog checked.
- NORTHWAKE planner calculated a two-night itinerary correctly.
- Denta health-check flow opens; specialist route adapted to static hosting.
- NOVA title details and streaming player opened; active video reached readyState 4 and played.
- ZIP integrity checked. No deploy file exceeds GitHub's 100 MB regular-file limit.

## Service boundaries
This is a static portfolio release. Demo booking, itinerary and enquiry flows do not create real reservations, accept payments or send server-side messages. Denta's misleading SMS/email confirmation was corrected. Some inherited concept-only social/legal/content links remain noninteractive where the supplied site has no destination.
NOVA streams third-party video previews; some demo imagery and fonts also use external providers and require internet access. Their future availability cannot be guaranteed by this ZIP. Main-site fonts and 3D assets are local.
Email links open the visitor's mail app; WhatsApp and Instagram open their respective services. No messages were sent in testing.
