# Beckmans Type Design Tool

Single-person, browser-based type design. Draw modular glyphs, shape joins, preview text, and export SVG/OTF/WOFF. Projects save locally in the current browser; download an editable JSON backup for portability and recovery. No shared rooms or Cloudflare connection.

Live: https://sgdotcom.github.io/beckmans-type-design-tool/

Run `npm ci`, `npm run dev`, or `npm run build`. GitHub Pages publishes main automatically.

The festival desks, projection and Cloudflare Worker are preserved in `archive/festival/` and tag `festival-shared-archive-2026-10-14`. The festival session and full font/SVG exports were downloaded separately; visitor data is not committed to the public source repository. The archived cloud store remains preserved for recovery; the current app cannot read or write it.

Geometry is shared by paint and exports. See public/clipper-notices.txt and dependency licence notices.
