/**
 * IICPC Preliminary Rank 1249 — achievement card.
 *
 * Controls one spotlight/milestone card and its detail modal.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder` (the first three by order form the spotlight row).
 */

import { Award } from "lucide-react";

import project3 from "@/assets/project-3.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "iicpc-preliminary-rank-1249",
  title: "IICPC Preliminary Rank 1249",
  date: "2025",
  badgeColor: "oklch(0.65 0.25 280)",
  sortOrder: 2,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Award;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Ranked 1249 among 12,408 participants from IITs, NITs, IIITs, and other institutions nationwide in the IICPC Preliminary round.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Rank", value: "1249" },
  { label: "Participants", value: "12,408" },
  { label: "Year", value: "2025" },
  { label: "Contest", value: "IICPC Preliminary" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [{ type: "image", src: project3, alt: "IICPC Contest" }];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
