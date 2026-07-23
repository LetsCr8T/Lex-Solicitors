// Builds the favicon / app-icon set from the client logo's monogram (the
// interlocked "LH"), composited on a navy chip. Dev-only (sharp).
// Run with: npm run gen:favicons
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const NAVY = "#0e2038";
const SRC = "public/images/Lex-Haven-Logo2.png"; // client's white lockup

// 1) Find the monogram: scan columns for the first transparent gap that
//    separates the "LH" mark from the wordmark, then crop + trim to it.
const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const colCoverage = (x) => {
  let sum = 0;
  for (let y = 0; y < height; y++) sum += data[(y * width + x) * channels + 3];
  return sum;
};
const solid = height * 255 * 0.01; // ≥1% opaque = "content"
let started = false;
let monoWidth = Math.round(height * 1.1);
for (let x = 0; x < width; x++) {
  if (colCoverage(x) > solid) {
    started = true;
    continue;
  }
  if (started) {
    let g = x;
    while (g < width && colCoverage(g) <= solid) g++;
    if (g - x > height * 0.18) {
      monoWidth = x;
      break;
    } // real gap
  }
}
console.log(`monogram width: ${monoWidth}px`);

const monogram = await sharp(SRC)
  .extract({ left: 0, top: 0, width: monoWidth, height })
  .trim()
  .png()
  .toBuffer();

// 2) Composite the monogram (contained + padded) onto a navy chip.
async function chip(size, { rounded = true, pad = 0.18 } = {}) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(monogram)
    .resize({
      width: inner,
      height: inner,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();
  const m = await sharp(mark).metadata();
  const radius = rounded ? Math.round(size * 0.22) : 0;
  const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${NAVY}"/></svg>`;
  return sharp(Buffer.from(bg))
    .composite([
      {
        input: mark,
        left: Math.round((size - m.width) / 2),
        top: Math.round((size - m.height) / 2),
      },
    ])
    .png()
    .toBuffer();
}

function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry[0] = 32;
  entry[1] = 32;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

writeFileSync("src/app/icon.png", await chip(512));
writeFileSync("src/app/apple-icon.png", await chip(180, { rounded: false }));
writeFileSync("public/icon-192.png", await chip(192));
writeFileSync("public/icon-512.png", await chip(512));
writeFileSync(
  "public/icon-512-maskable.png",
  await chip(512, { rounded: false, pad: 0.3 }),
);
writeFileSync("src/app/favicon.ico", pngToIco(await chip(32)));
console.log(
  "wrote icon.png, apple-icon.png, icon-192/512, maskable, favicon.ico",
);
