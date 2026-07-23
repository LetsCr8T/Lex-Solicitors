// Generates the 1200x630 Open Graph card from inline SVG (dev-only, via
// resvg-js). It shows the client's real logo on the light brand canvas.
// Favicons/app-icons are built separately by scripts/generate-favicons.mjs.
// Run with: npm run gen:assets
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "node:fs";

const NAVY = "#0E2038";
const CANVAS = "#F8FAFC";
const HAVEN = "#AFC6DE";
const SANS = "Arial, Helvetica, sans-serif";

// Embed the navy logo lockup (for the light canvas) as a data URI.
const logoHref =
  "data:image/png;base64," +
  readFileSync("public/images/Lex-Haven-Logo1.png").toString("base64");

// Logo intrinsic 1976x404 (≈4.89:1); render centred at 640px wide.
const LOGO_W = 640;
const LOGO_H = Math.round((LOGO_W * 404) / 1976); // ≈131
const LOGO_X = (1200 - LOGO_W) / 2;
const LOGO_Y = 214;
const TAG_Y = LOGO_Y + LOGO_H + 92;

function render(svg, width) {
  const r = new Resvg(svg, {
    font: { loadSystemFonts: true },
    fitTo: { mode: "width", value: width },
  });
  return r.render().asPng();
}

// 1200x630 Open Graph card — logo on the light canvas, with the same soft
// light-blue wash and faint pillar motif used across the site.
function ogCard() {
  const pillars = Array.from({ length: 4 }, (_, i) => {
    const x = 940 + i * 66;
    return `<rect x="${x}" y="70" width="16" height="490" rx="8" fill="${NAVY}" opacity="0.05"/>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="wash" cx="90%" cy="4%" r="70%">
      <stop offset="0%" stop-color="${HAVEN}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${HAVEN}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${CANVAS}"/>
  <rect width="1200" height="630" fill="url(#wash)"/>
  ${pillars}
  <rect x="22" y="22" width="1156" height="586" rx="22" fill="none" stroke="${NAVY}" stroke-opacity="0.10" stroke-width="2"/>
  <image href="${logoHref}" x="${LOGO_X}" y="${LOGO_Y}" width="${LOGO_W}" height="${LOGO_H}"/>
  <g text-anchor="middle">
    <rect x="540" y="${TAG_Y - 44}" width="120" height="2" fill="${NAVY}" opacity="0.28"/>
    <text x="600" y="${TAG_Y}" font-family="${SANS}" font-size="27" font-weight="600" letter-spacing="7" fill="${NAVY}" fill-opacity="0.82">EXPERTISE&#160;&#160;·&#160;&#160;INTEGRITY&#160;&#160;·&#160;&#160;RESULTS</text>
  </g>
</svg>`;
}

writeFileSync("public/og-image.png", render(ogCard(), 1200));
console.log("wrote public/og-image.png (1200x630)");
