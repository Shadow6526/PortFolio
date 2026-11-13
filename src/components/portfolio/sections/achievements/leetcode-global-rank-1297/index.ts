/**
 * LeetCode Global Rank 1297 — achievement card.
 *
 * Controls one spotlight/milestone card and its detail modal.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder` (the first three by order form the spotlight row).
 */

import { Code2 } from "lucide-react";

import project4 from "@/assets/project-4.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "leetcode-global-rank-1297",
  title: "LeetCode Global Rank 1297",
  date: "2025",
  badgeColor: "oklch(0.75 0.18 60)",
  sortOrder: 15,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Code2;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Achieved Global Rank 1297 among 26,806 participants in LeetCode Biweekly Contest 170.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Global Rank", value: "1297" },
  { label: "Participants", value: "26,806" },
  { label: "Contest", value: "LeetCode Biweekly Contest 170" },
  { label: "Year", value: "2025" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [
  { type: "image", src: project4, alt: "LeetCode Global Rank" },
];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
