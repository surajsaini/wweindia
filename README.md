# WWE India Superstars — Single Page Site

A fast, SEO-friendly single-page website built with vanilla HTML, CSS, and JavaScript. It lists WWE Superstars of Indian origin with bios and colorful brand social icons. All data and images are placeholders you can replace later.

## Features
- SEO: semantic HTML, descriptive titles/meta, Open Graph/Twitter cards, JSON-LD.
- Responsive: CSS grid cards, mobile-first layout, sticky header.
- Search + filters: type to filter by real or ring name; quick chips for gender/tag team.
- No popups: Cards show summary; socials open in a new tab. (Modal removed by request.)
- Lightweight: no frameworks, lazy-loaded images, inline icon set.
- Easy to update: edit `js/data.js` and replace images in `assets/placeholders/`.

## Replace placeholders
- Images: put your images in `assets/placeholders/` and update the `photo` field for each superstar in `js/data.js`.
- Social links: update `socials` object per superstar.
- Favicon/OG: replace `assets/favicon.png` and `assets/og-image.jpg`.

## Run locally
Open `index.html` directly or serve the folder.

Windows PowerShell example (optional):
```powershell
# From the repo root
Start-Process msedge.exe "$(Resolve-Path .)\index.html"
```

## Structure
- `index.html` — page shell
- `css/styles.css` — styles and layout
- `js/data.js` — placeholder superstar data
- `js/app.js` — rendering, search, filters; no modal
- `assets/` — logo, images (replace later)

## License
This project provides only placeholder bios and links you supplied. Please replace with official sources as needed and ensure you have rights to use any images.
