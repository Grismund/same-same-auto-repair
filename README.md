# Same Same Auto Repair — Demo Site

This is a **demo site** built for a sales pitch. It is not production-ready. Every feature works client-side only — no data is sent, saved, or processed.

## Local development

```bash
python3 -m http.server
```

Open [http://localhost:8000](http://localhost:8000). The `/review/` page requires a local server (won't work via `file://`).

## Configuration

All editable values live in a single config block at the top of [`assets/js/main.js`](assets/js/main.js):

- `PHONE` / `PHONE_LINK` — display and tel: link
- `EMAIL` / `EMAIL_LINK` — display and mailto: link
- `GBP_REVIEW_URL` — where 5-star reviews redirect to
- `SERVICES` — service names, descriptions, durations
- `TESTIMONIALS` — quote cards on main page
- `MOCK_REVIEWS` — Google reviews widget cards
- `CAROUSEL_IMAGES` — photo gallery entries

## Photos

Photos live in `assets/img/`. Naming convention:

- `hero-*.jpg` — hero background
- `work-*.jpg` — Josh working on vehicles
- `detail-*.jpg` — close-up parts/components

To add photos: drop them in `assets/img/`, add an entry to `CAROUSEL_IMAGES` in `main.js`, and add a matching `<div class="carousel__slide">` in `index.html`.

## Before this goes live

- [ ] Replace sample testimonials with real customer quotes
- [ ] Replace mock Google reviews with real ones (or remove section)
- [ ] Create Josh's Google Business Profile and point `GBP_REVIEW_URL` to it using `https://search.google.com/local/writereview?placeid=<PLACE_ID>` format
- [ ] Wire contact form to Netlify Forms (`data-netlify="true"` + honeypot)
- [ ] Compress any images over 500KB to max 1600px wide, quality ~80
- [ ] Verify no "licensed," "insured," "bonded," or "certified" language anywhere
- [ ] Test on a real phone
