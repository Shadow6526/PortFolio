/**
 * CodeChef 3★ — achievement card.
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

import project1 from "@/assets/project-1.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "codechef-3star",
  title: "CodeChef 3★",
  date: "2026",
  badgeColor: "oklch(0.7 0.15 40)",
  sortOrder: 12,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Code2;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Achieved a maximum rating of 1722, earning the 3-Star rating in competitive programming contests on CodeChef.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Rating", value: "1722" },
  { label: "Stars", value: "3★" },
  { label: "Year", value: "2026" },
  { label: "Platform", value: "CodeChef" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [{ type: "image", src: project1, alt: "CodeChef 3 Star" }];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
