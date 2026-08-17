# 7. README contents

> Part of the [Same Same Auto Repair spec](./00-overview.md).

Write `README.md` covering:

- What this is (demo site, not production)
- How to run locally (`python3 -m http.server` from the repo root — note that `./review/` needs a server, not `file://`)
- Where to edit: phone, email, testimonials, services, mock reviews, `GBP_REVIEW_URL` — all in the config block at the top of `main.js`
- How to add or replace photos in `assets/img/` and the naming convention used
- **A "Before this goes live" checklist:** replace sample testimonials, replace mock Google reviews with real ones, point `GBP_REVIEW_URL` at Josh's verified profile using the `writereview?placeid=` format, wire the contact form to Netlify Forms, verify no "licensed/insured" language crept in
