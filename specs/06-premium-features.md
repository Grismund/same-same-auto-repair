# 6. Premium features (starred)

> Part of the [Same Same Auto Repair spec](./00-overview.md).

## 6.1 Contact form ★

Fields: Name, Phone, Vehicle year/make/model, What's going on (textarea), and an optional "Best time to reach you" select.

- Real client-side validation with inline error messages that name the fix ("Enter a phone number so Josh can call you back")
- On submit: no network request. Replace the form with a success panel: **"Got it. Josh will text you back — usually within an hour."** Include a note in small type: **Demo — nothing was sent.**
- Reset link so it can be demoed repeatedly on the call
- Do **not** wire up Netlify Forms attributes yet; this repo deploys to GitHub Pages. Add a comment marking where `data-netlify="true"` and the honeypot would go at launch.

## 6.2 Appointment scheduler ★ — Calendly-style, fully client-side

Mimic the Calendly flow in three steps inside a single card. All state in JS, nothing persisted.

**Step 1 — Pick a service.** List of the six services plus "Something else / not sure." Each shows an estimated duration (Brakes 2h, Alternator 1.5h, Starter 1.5h, Transmission 3h, Engine work 3h, Maintenance 1h, Not sure 1h).

**Step 2 — Pick a day and time.**
- A horizontal strip of the **next 14 days** starting tomorrow, generated from `new Date()` so it's never stale. Show weekday abbreviation and day number.
- **Sundays disabled** (hours are Mon–Sat).
- Selecting a day reveals a time-slot list beneath it: `8:00a, 9:30a, 11:00a, 12:30p, 2:00p, 3:30p, 5:00p`.
- **Deterministically grey out roughly a third of the slots as "Booked"** — derive it from the date (e.g. a simple hash of day-of-month + slot index) so it's stable across reloads and Seth doesn't get different results mid-demo. Scarcity sells; slots that are all wide open make Josh look idle.
- Show a timezone line: **All times Central**.

**Step 3 — Confirm.** Name, phone, vehicle, address (text input, no autocomplete/API). On submit, show a confirmation panel:
- **You're booked.** Service, day, time, duration
- Confirmation code — generate something plausible like `SSA-4B7K2`
- **"Josh will text you the morning of to confirm."**
- Small type: **Demo — this booking wasn't saved.**
- A **Book another** link that resets to step 1

Requirements: back navigation between steps, the selected day/time echoed in the header of step 3, full keyboard operability, and no dead ends. This is the feature most likely to make Josh say yes — it should feel finished.

## 6.3 Google reviews ★ (mocked)

Recreate the look of a Google reviews widget without calling any API.

- Header row: a **G** mark drawn as inline SVG in Google's four colors, **4.9**, five filled stars, **27 Google reviews**
- Three review cards: circular avatar with initials on a colored background, name, "3 weeks ago"-style relative date, five stars, and two or three sentences of review text
- A **"See all reviews on Google"** link — in the demo, point it at `#` with a comment showing where the real GBP URL goes

Sample reviews (mark clearly as sample data in code):

1. **James R.** — 2 weeks ago — "Called at 7am with a dead alternator, he was at my house by 10. Fair price, showed me the old part, cleaned up after himself. Saved me a tow."
2. **Priya N.** — 1 month ago — "Honest is the word. Told me the noise was a heat shield, not the exhaust, and charged me almost nothing to fix it. Another shop wanted $900."
3. **Kevin D.** — 1 month ago — "Brakes on my F-150 done in my own driveway for way less than the shop quoted. Texted me updates the whole time. Already booked him for my wife's car."

**Critical demo caveat to surface to Seth, not to Josh:** Josh currently has zero Google reviews. This section is aspirational. Add a prominent HTML comment above it:

```html
<!-- MOCK DATA. Josh has no Google reviews yet. At launch this section either
     pulls live from the Places API or gets hand-maintained. Do not ship as-is. -->
```

## 6.4 `/review` page ★

Lives at `review/index.html`, reachable at `./review/`. This is the review-funnel page Josh will text to customers after a job.

**Layout:** deliberately minimal — no header nav, no services, no carousel. One job only. Business name, then:

> ## How did we do?
> **Josh Steph · Same Same Auto Repair**
>
> Tap a rating to let us know.

Five large, tappable stars — minimum 52px each, laid out horizontally, with a hover/focus fill that cascades left-to-right so the interaction feels physical.

**Branching on tap:**

- **5 stars** → brief interstitial (**"Thanks! Taking you to Google…"**, ~1.2s) then `window.location.href = GBP_REVIEW_URL`. The delay matters — an instant redirect feels like a hijack; a beat of acknowledgment feels intentional.
- **1–4 stars** → open a **feedback modal**:
  - **"Sorry we missed the mark. What happened?"**
  - Textarea, plus optional name and phone
  - **Send feedback** button
  - On submit: modal closes, a brief toast reads **"Thanks — Josh will follow up with you personally."** The input is discarded. Small type in the modal footer: **Demo — feedback isn't saved yet.**
  - Escape and outside-click close it

**The 5-star target URL.** Put this in one clearly-labeled constant:

```js
// Borrowed listing for the demo — this is another Denton mobile mechanic's profile,
// used only so the 5-star path lands somewhere real. Swap to Josh's GBP once verified.
const GBP_REVIEW_URL = "https://www.google.com/maps/place/Denton+Mobile+Mechanic/@33.2089425,-97.4046755,11z/data=!4m12!1m2!2m1!1sdenton+mobile+mechanic!3m8!1s0x204d642e9763a77d:0xa9e1c5e7419deeed!8m2!3d33.2089425!4d-97.1162844!9m1!1b1!15sChZkZW50b24gbW9iaWxlIG1lY2hhbmljWhgiFmRlbnRvbiBtb2JpbGUgbWVjaGFuaWOSAQpjYXJfcmVwYWlymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU53TUhKSGIzZFJSUkFC4AEA-gEECCEQRQ!16s%2Fg%2F11kr76kbty";
```

**On opening the review dialog directly** — the URL above lands on the reviews *list*, not the write-review box. Two cleaner options, both worth noting in a comment:

- Shorter link to the same listing: `https://www.google.com/maps?cid=12241282859198705389`
- **Deep link straight into the write-review dialog:** `https://search.google.com/local/writereview?placeid=<PLACE_ID>` — this requires the `ChIJ...` Place ID, which the long URL above doesn't contain (`0x204d...:0xa9e1...` is the hex CID). Get it from Google's Place ID Finder by searching the business name. Once Josh's own profile is verified, use his Place ID with this format — it drops the customer directly onto the star-and-text box, which measurably improves completion.

For the demo, the URL Seth supplied is fine. Note the writereview format in the README so it's used at launch.

**Also add:** a small "← Back to site" link at the bottom of `/review`, and a link from the main page's premium section to `./review/` so Seth can demo it in one tap.
