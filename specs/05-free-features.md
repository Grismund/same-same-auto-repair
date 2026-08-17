# 5. Free features

> Part of the [Same Same Auto Repair spec](./00-overview.md).

## 5.1 Header

Business name as a wordmark (no logo file — set it in type). On desktop, a `Call (912) 332-8214` button on the right. On mobile, name only; the sticky bottom bar carries the CTAs.

## 5.2 Hero

- One strong photo of Josh working on a vehicle, full-bleed, with a dark gradient overlay for text legibility
- H1: **Mobile mechanic in Denton. I come to you.**
- Sub: **Brakes, starters, alternators, engine work — done in your driveway. Labor only, parts at cost, usually about half what a shop quotes.**
- Two buttons: **Call now** (green, `tel:`) and **Email Josh** (outline, `mailto:`)
- Small line beneath: **Denton and about 45 minutes out · Mon–Sat, 8am–6pm**

The hero's job is to answer "is this guy real and can he help me" in four seconds. Photo of a human doing the work does that better than a headline.

## 5.3 Call and Email buttons

- **Call:** `<a href="tel:+19123328214">`. Green (`--go`). Present in the hero, the sticky mobile bar, and the desktop header.
- **Email:** `<a href="mailto:josh@samesameautorepair.com?subject=Repair%20request">`. Graphite outline.
- Both must be real, working links — Seth will tap them on the call and it must actually open the dialer and mail app.

## 5.4 Services

Six cards, each with a simple inline SVG icon and one line of plain description. Two columns on mobile, three on desktop.

| Service | Line |
|---|---|
| Brakes | Pads, rotors, calipers, lines. Squealing, grinding, or a soft pedal. |
| Alternators | Battery light on, dimming headlights, dying while driving. |
| Starters | Clicking, cranking slow, or nothing at all when you turn the key. |
| Transmissions | Slipping, hard shifts, fluid leaks. Diagnosis and repair. |
| Engine work | Timing, gaskets, sensors, belts, cooling. Most jobs a shop would take. |
| Regular maintenance | Oil, filters, fluids, plugs, belts — on your schedule, at your place. |

Beneath the grid, one line: **Not sure what's wrong? Call and describe it. I'll tell you straight whether it's worth fixing.** That sentence is doing real sales work — it maps to how Josh actually earns trust.

## 5.5 Photo carousel

- Horizontal scroll-snap carousel of Josh's photos from `assets/img/`
- **CSS-first:** `scroll-snap-type: x mandatory` with `overflow-x: auto`. Native touch swipe on mobile, no JS scroll hijacking.
- Prev/next arrow buttons for desktop, and dot indicators showing position
- Keyboard: left/right arrows move between slides when the carousel has focus
- Every image needs a real caption and `alt` text describing the actual work
- Lazy-load everything after the first image

Build it to degrade gracefully: if fewer photos exist than expected, no empty slots or broken layout.

## 5.6 Testimonials

Five cards. Use these exactly — they're written to mirror how Josh actually wins jobs (price, showing up, honesty):

1. **"Quoted $1,400 at the dealership for my brakes. Josh did it in my driveway for $600 and showed me the old pads."** — Marcus T., Denton
2. **"Truck wouldn't start before a shift. He came out same evening, replaced the starter, and I made it to work."** — Rachel B., Corinth
3. **"Told me my transmission issue wasn't worth fixing on a car that old. Could've taken my money and didn't."** — Danny K., Sanger
4. **"Third mechanic I called and the only one who answered. Straight answer on price, showed up when he said."** — Alicia M., Denton
5. **"Does my oil changes and inspections in my apartment lot now. I'm never sitting in a waiting room again."** — Tyrone W., Lewisville

Add a code comment in the testimonials array: `// SAMPLE COPY — replace with real customer quotes before this site goes public.`

Style them as plain quotes with an attribution line. No star ratings here — stars belong to the Google reviews section, and duplicating them dilutes both.

## 5.7 Footer

Business name, phone, email, service area, hours. A line reading **Serving Denton, Corinth, Sanger, Lake Dallas, Argyle, Lewisville, and about 45 minutes around Denton.** No fake copyright year games — just `© 2026 Same Same Auto Repair`.
