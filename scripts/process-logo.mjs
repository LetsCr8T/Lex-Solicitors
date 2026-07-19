// Processes the client logo (public/images/lex-logo.png) into trimmed web
// variants (dev-only, via sharp). Run with: npm run gen:logo
import sharp from "sharp";

const SRC = "public/images/lex-logo.png";
const NAVY = { r: 14, g: 32, b: 56 }; // #0E2038 (ink)

// 1) Trim the transparent padding down to the logo's actual bounds.
const { data: trimmed, info } = await sharp(SRC)
  .trim()
  .png()
  .toBuffer({ resolveWithObject: true });
const { width, height } = info;
console.log(
  `trimmed: ${width} x ${height} (ratio ${(width / height).toFixed(3)})`,
);

// 2) Light variant — the client's original colour, for dark (navy) backgrounds.
await sharp(trimmed).png().toFile("public/images/lex-logo-light.png");
console.log("wrote public/images/lex-logo-light.png");

// 3) Navy variant — recolour to ink using the logo's own alpha as a mask, for
//    light backgrounds (scrolled navbar, mobile drawer, 404).
const alpha = await sharp(trimmed)
  .extractChannel("alpha")
  .toColourspace("b-w")
  .raw()
  .toBuffer();
await sharp({ create: { width, height, channels: 3, background: NAVY } })
  .joinChannel(alpha, { raw: { width, height, channels: 1 } })
  .png()
  .toFile("public/images/lex-logo-dark.png");
console.log("wrote public/images/lex-logo-dark.png");
