/**
 * CodeStorm Rank 7 — achievement card.
 *
 * Controls one spotlight/milestone card and its detail modal.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder` (the first three by order form the spotlight row).
 */

import { Rocket } from "lucide-react";

import project4 from "@/assets/project-4.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "codestorm-rank-7",
  title: "CodeStorm Rank 7",
  date: "2025",
  badgeColor: "oklch(0.65 0.25 280)",
  sortOrder: 3,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Rocket;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Secured Rank 7 among 200 participants in CodeStorm organized by Indian Institute of Information Technology Bhagalpur.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Rank", value: "7" },
  { label: "Participants", value: "200" },
  { label: "Year", value: "2025" },
  { label: "Organizer", value: "IIIT Bhagalpur" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [
  { type: "image", src: project4, alt: "CodeStorm Contest" },
];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
