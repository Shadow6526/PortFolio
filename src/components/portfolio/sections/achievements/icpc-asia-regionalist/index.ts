/**
 * ICPC Asia Regionalist — achievement card.
 *
 * Controls one spotlight/milestone card and its detail modal.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder` (the first three by order form the spotlight row).
 */

import { Trophy } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "icpc-asia-regionalist",
  title: "ICPC Asia Regionalist",
  date: "2026",
  badgeColor: "oklch(0.65 0.25 280)",
  sortOrder: 1,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Trophy;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Secured Rank 195 in the ICPC Asia Mysuru Onsite Regional Contest, competing against top teams from across Asia.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Rank", value: "195" },
  { label: "Contest", value: "ICPC Asia Mysuru Onsite Regional" },
  { label: "Year", value: "2026" },
  { label: "Level", value: "Regional" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [
  { type: "image", src: project1, alt: "ICPC Regional Contest" },
  { type: "image", src: project2, alt: "ICPC Team Photo" },
];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
