# 8. Acceptance checklist

> Part of the [Same Same Auto Repair spec](./00-overview.md).

- [ ] Renders correctly at 360px, 390px, 768px, and 1440px wide
- [ ] `tel:` and `mailto:` links open the dialer and mail app on a real phone
- [ ] Sticky bottom bar visible on mobile at all scroll positions, hidden on desktop
- [ ] All four premium sections have a working, keyboard-accessible star popover
- [ ] Carousel swipes natively on touch and has working arrows plus dots on desktop
- [ ] Contact form validates, "submits," shows success, and can be reset
- [ ] Scheduler completes all three steps, generates a confirmation code, and resets cleanly
- [ ] Scheduler dates start tomorrow and skip Sundays; booked slots are stable across reloads
- [ ] 5 stars on `/review` redirects to the Google URL after a short acknowledgment
- [ ] 1–4 stars opens the feedback modal; submit closes it and shows the toast
- [ ] Zero network requests to third parties (verify in DevTools Network tab with cache disabled)
- [ ] Zero console errors
- [ ] Works from a `file://` open for the main page; `/review` path verified via local server
- [ ] Deployed to GitHub Pages and every asset loads at the `/<repo>/` subpath
- [ ] No instance of "licensed," "insured," "bonded," or "certified" anywhere in the source
- [ ] Every image has meaningful `alt` text
- [ ] Keyboard-only pass: every interactive element reachable with a visible focus ring
