/**
 * Controls one slide in the Projects carousel.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder`.
 */

import p2 from "@/assets/modx.png";

// ================= METADATA ===============

// `sortOrder` controls carousel position (lower = earlier). `flg` = 1 shows
// "Download App"; `flg` = 0 shows "Live Demo". `id` must be unique.
export const metadata = {
  id: "modx",
  name: "Modx",
  flg: 0,
  sortOrder: 3,
};

// ================= SCREENSHOT ===============

// Imported above so Vite fingerprints the URL and it never 404s.
export const Icon = p2;

// ================= ABOUT ===============

// Slide description.
export const about = `A fast, private, 100% offline desktop file converter for Linux, Windows, and macOS featuring an adaptive radial gesture menu, instant format conversion across 100+ file types, custom 3D action presets (merge, OCR, trim, compress), automated folder monitoring, and a scriptable CLI.`;

// ================= TECH STACK ===============

// Pills shown under the description.
export const tech = [
  "C#",   ".NET 10",   "Avalonia UI",   "XAML",   "FFmpeg",   "LibreOffice",   "Tesseract OCR",   "Linux X11/Wayland"
];

// ================= LINKS ===============

// Use "" for platforms without a release; empty links are hidden. A demo of
// "#" is also treated as missing.
export const links = {
  demo: "",
  linux: "",
  windows: "",
  android: "",
  mac: "",
};
