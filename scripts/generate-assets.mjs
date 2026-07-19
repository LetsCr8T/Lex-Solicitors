// Generates the 1200x630 Open Graph card from inline SVG (dev-only, via
// resvg-js). Favicons/app-icons are built from the client logo separately by
// scripts/generate-favicons.mjs. Run with: npm run gen:assets
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

const NAVY = "#0E2038";
const GOLD = "#B7955C";
const CANVAS = "#F8FAFC";
const SERIF = "Georgia, 'Times New Roman', serif";

function render(svg, width) {
  const r = new Resvg(svg, {
    font: { loadSystemFonts: true },
    fitTo: { mode: "width", value: width },
  });
  return r.render().asPng();
}

// 1200x630 Open Graph card.
function ogCard() {
  const pillars = Array.from({ length: 7 }, (_, i) => {
    const x = 760 + i * 70;
    return `<rect x="${x}" y="70" width="18" height="490" rx="9" fill="${CANVAS}" opacity="0.05"/>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  ${pillars}
  <rect x="100" y="96" width="96" height="96" rx="22" fill="${CANVAS}" stroke="${GOLD}" stroke-width="3"/>
  <text x="148" y="160" text-anchor="middle" font-family="${SERIF}" font-size="46" font-weight="600" fill="${NAVY}">LH</text>
  <text x="100" y="330" font-family="${SERIF}" font-size="100" font-weight="600" fill="${CANVAS}">Lex Haven</text>
  <text x="104" y="392" font-family="${SERIF}" font-size="34" font-weight="600" letter-spacing="14" fill="${GOLD}">SOLICITORS</text>
  <rect x="100" y="436" width="120" height="3" fill="${GOLD}"/>
  <text x="100" y="500" font-family="${SERIF}" font-size="32" fill="${CANVAS}" opacity="0.86">Expertise. Integrity. Results.</text>
</svg>`;
}

writeFileSync("public/og-image.png", render(ogCard(), 1200));
console.log("wrote public/og-image.png (1200x630)");
