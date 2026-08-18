# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Same Same Auto Repair (mobile mechanic in Denton, TX). Built as a sales demo site — vanilla HTML/CSS/JavaScript with no framework. Deployed to GitHub Pages.

## Build & Dev

```bash
npm run build              # Process templates + bundle CSS → outputs index.html, review/index.html, assets/css/styles.css
python3 -m http.server     # Local dev server at http://localhost:8000
```

**Always run `npm run build` after editing files in `src/`.** The generated `index.html`, `review/index.html`, and `assets/css/styles.css` are build outputs — edit the sources, not the outputs.

## Architecture

### Build System (`build.js`)
Custom build script that does two things:
1. **HTML templating**: Processes `@include('path')` directives in `src/pages/*.html`, pulling in partials from `src/partials/`. Supports nested includes.
2. **CSS bundling**: Concatenates all `src/css/*.css` files (sorted alphabetically by filename) into `assets/css/styles.css`.

### Source Structure
- **`src/pages/`** — Page templates with `@include` directives (index.html, review/index.html)
- **`src/partials/`** — HTML components (header, hero, services, contact, scheduler, etc.)
- **`src/css/`** — Numbered CSS files (01-base through 17-responsive), concatenated in order
- **`assets/js/main.js`** — All JavaScript: config data, interactivity, form logic (~720 lines)

### Configuration
All editable business data (phone, email, services, testimonials, reviews, carousel images, scheduler time slots) lives in `assets/js/main.js` lines 7–70.

### CSS Design Tokens
Custom properties defined in `01-base.css`: `--ink`, `--steel`, `--haze`, `--paper`, `--signal` (orange), `--go` (green). Max content width: `680px` (standard), `1080px` (large). Responsive breakpoints in `17-responsive.css`.

### Generated Files (do not edit directly)
- `index.html`
- `review/index.html`
- `assets/css/styles.css`
