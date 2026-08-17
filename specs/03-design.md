# 3. Design direction

> Part of the [Same Same Auto Repair spec](./00-overview.md).

**Feel:** competent, direct, working-hands. Not a corporate auto chain, not a startup landing page. Josh's edge is that he's a real person who shows up — the design should feel like it belongs to a person, not a franchise.

**Palette** — cool graphite with a high-visibility safety accent, the vernacular of tools and shop signage:

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#16191D` | Body text, dark sections |
| `--steel` | `#3A4550` | Secondary text, borders |
| `--haze` | `#EEF0F2` | Section backgrounds, cards |
| `--paper` | `#FFFFFF` | Base |
| `--signal` | `#E8590C` | Primary CTA, accents — a safety/hazard orange, not a soft terracotta |
| `--go` | `#1B7F4B` | Call button only. Green reads as "act now" on a phone. |

Use `--signal` sparingly and deliberately: primary buttons, active states, the premium star. Everything else is graphite and white.

**Type:** system stack, but with intent — heavy weights and tight tracking for headings, generous line-height for body.

```css
--font-display: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--font-body: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
```

Headings: 800 weight, `letter-spacing: -0.02em`. Body: 400, `line-height: 1.6`, minimum `16px` on mobile.

**Layout:** mobile-first, single column, max content width `680px` on phone and `1080px` on desktop. Full-bleed photography, contained text. Sections separated by generous vertical padding (`64px` mobile, `96px` desktop) — not by decorative dividers.

**Signature element:** the **sticky bottom action bar** on mobile — two thumb-sized buttons, **Call** (green) and **Email** (graphite outline), fixed to the bottom of the viewport at all times. It's the whole thesis of the site made physical: Josh is one tap away. Make it feel solid — real height (56px), real weight, subtle top shadow. Hide it on desktop in favor of the header CTA.

**Quality floor:** visible keyboard focus rings, `prefers-reduced-motion` respected, semantic headings in order, all images with real `alt` text, tap targets ≥ 44px, contrast ≥ 4.5:1 for body text.

**Motion:** restrained. A gentle fade-and-rise on section entry via `IntersectionObserver`, and honest press states on buttons. Nothing else. No parallax, no counters, no typewriter effects.
