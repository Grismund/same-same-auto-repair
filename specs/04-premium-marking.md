# 4. Premium feature marking

> Part of the [Same Same Auto Repair spec](./00-overview.md).

Four features are premium (§6). Each needs:

1. **A star icon** immediately after the feature's section heading — inline SVG, filled, `--signal` colored, ~18px.
2. **The star is a button.** Tapping or clicking it opens a small popover (or a centered modal on mobile) containing:

   > **Included in the full package**
   >
   > This feature is part of the complete setup. Ask Seth about it.
   >
   > `[ Got it ]`

3. **A legend** near the top of the page, directly under the hero, quiet and small:

   > ★ Starred features are part of the full package.

Requirements: the star must be keyboard-focusable with `aria-label="Premium feature — what's this?"`, dismissible with Escape and by clicking outside, and it must **never block interaction with the feature itself**. Josh needs to be able to actually use the contact form and scheduler during the demo.

Copy discipline: the popover says "Included in the full package," not "Upgrade" or "Unlock." This is a demo for a warm lead, not a paywall.
