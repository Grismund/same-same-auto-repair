# 2. Deployment constraints (GitHub Pages)

> Part of the [Same Same Auto Repair spec](./00-overview.md).

- Deployed as a **project site**, so it lives at `https://<user>.github.io/<repo>/`. **Every path must be relative** (`./assets/...`, `./review/`). An absolute path like `/assets/x.jpg` will 404.
- Include an empty **`.nojekyll`** file at the repo root.
- **No build step. No npm. No bundler.** Plain HTML, CSS, and vanilla JS.
- **Zero external network dependencies** — no CDN fonts, no icon libraries, no analytics. Seth may be presenting on shop wifi or a phone hotspot; the page must render perfectly offline after first load. Use a system font stack and inline SVG for all icons.
- Total page weight target: under 1.5 MB with images. Compress photos to max 1600px wide, quality ~80.

### File structure

```
/
├── index.html
├── review/
│   └── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/            ← Josh's photos, dropped in from the assets directory
├── .nojekyll
└── README.md           ← how to swap photos, phone, email, and review URL
```

Keep all copy and config constants (`PHONE`, `EMAIL`, `GBP_REVIEW_URL`, testimonials array, services array, mock reviews array) in a single clearly-commented block at the top of `main.js` so they can be edited without hunting through markup.
