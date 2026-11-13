/**
 * Codeforces Statistics Dashboard — project slide.
 *
 * Controls one slide in the Projects carousel.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder`.
 */

import p2 from "@/assets/project-2.jpg";

// ================= METADATA ===============

// `sortOrder` controls carousel position (lower = earlier). `flg` = 1 shows
// "Download App"; `flg` = 0 shows "Live Demo". `id` must be unique.
export const metadata = {
  id: "cf-dashboard",
  name: "Codeforces Statistics Dashboard",
  flg: 0,
  sortOrder: 2,
};

// ================= SCREENSHOT ===============

// Imported above so Vite fingerprints the URL and it never 404s.
export const Icon = p2;

// ================= ABOUT ===============

// Slide description.
export const about = `A full-stack analytics dashboard that visualizes Codeforces ratings, contest history, submission heatmaps, and performance trends using the official Codeforces API.`;

// ================= TECH STACK ===============

// Pills shown under the description.
export const tech = [
  "React.js",
  "Express.js",
  "Node.js",
  "Recharts",
  "Vercel",
  "Codeforces API",
];

// ================= LINKS ===============

// Use "" for platforms without a release; empty links are hidden. A demo of
// "#" is also treated as missing.
export const links = {
  demo: "https://cf-statistics.vercel.app",
  linux: "",
  windows: "",
  android: "",
  mac: "",
};
