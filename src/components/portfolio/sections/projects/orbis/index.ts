/**
 * Orbis — project slide.
 *
 * Controls one slide in the Projects carousel.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder`.
 */

import p1 from "@/assets/project-1.jpg";

// ================= METADATA ===============

// `sortOrder` controls carousel position (lower = earlier). `flg` = 1 shows
// "Download App"; `flg` = 0 shows "Live Demo". `id` must be unique.
export const metadata = {
  id: "orbis",
  name: "Orbis",
  flg: 1,
  sortOrder: 1,
};

// ================= SCREENSHOT ===============

// Imported above so Vite fingerprints the URL and it never 404s.
export const Icon = p1;

// ================= ABOUT ===============

// Slide description.
export const about = `A cross-platform productivity application for Android, Windows, and Linux featuring task management, assignment tracking, attendance monitoring, GPA/CGPA calculator, habit tracking, calendar integration, offline support, and Google Drive synchronization.`;

// ================= TECH STACK ===============

// Pills shown under the description.
export const tech = [
  "Flutter",
  "Dart",
  "Node.js",
  "Firebase",
  "Firestore",
  "Google Drive API",
];

// ================= LINKS ===============

// Use "" for platforms without a release; empty links are hidden. A demo of
// "#" is also treated as missing.
export const links = {
  demo: "https://drive.google.com/uc?export=download&id=1I8zCFUY2Hd2kVsHD8Oid4tq_aykUM1v3",
  linux:
    "https://drive.google.com/uc?export=download&id=1FSkalDvD3d6Q8D_ejMfDoZpSZkXay0Gk",
  windows:
    "https://drive.google.com/uc?export=download&id=1D-U2k1w8YT0dYhDle-BdM2yY6fdFpa2P",
  android:
    "https://drive.google.com/uc?export=download&id=1PXdbvl2TuEDIGSwuiTFr3W1a9XPM8Qba",
  mac: "https://drive.google.com/uc?export=download&id=1_LUUoItbPphT0nHHyRNHHM7CUZJLD4mt",
};
