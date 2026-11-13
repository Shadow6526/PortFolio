/**
 * Federated Learning vs Peer-to-Peer Analysis — project slide.
 *
 * Controls one slide in the Projects carousel.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder`.
 */

import p3 from "@/assets/project-3.jpg";

// ================= METADATA ===============

// `sortOrder` controls carousel position (lower = earlier). `flg` = 1 shows
// "Download App"; `flg` = 0 shows "Live Demo". `id` must be unique.
export const metadata = {
  id: "federated-learning-p2p",
  name: "Federated Learning vs Peer-to-Peer Analysis",
  flg: 0,
  sortOrder: 3,
};

// ================= SCREENSHOT ===============

// Imported above so Vite fingerprints the URL and it never 404s.
export const Icon = p3;

// ================= ABOUT ===============

// Slide description.
export const about = `A research-oriented project comparing Federated Learning and Peer-to-Peer Machine Learning architectures with distributed aggregation techniques and robustness against poisoning, Sybil, and noise attacks.`;

// ================= TECH STACK ===============

// Pills shown under the description.
export const tech = [
  "Python",
  "Machine Learning",
  "Federated Learning",
  "P2P Networks",
];

// ================= LINKS ===============

// Use "" for platforms without a release; empty links are hidden. A demo of
// "#" is also treated as missing.
export const links = {
  demo: "#",
  linux: "#",
  windows: "#",
  android: "#",
  mac: "#",
};
