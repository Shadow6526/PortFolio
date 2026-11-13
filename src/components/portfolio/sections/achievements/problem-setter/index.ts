/**
 * Problem Setter — achievement card.
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

import project5 from "@/assets/project-5.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "problem-setter",
  title: "Problem Setter",
  date: "2025",
  badgeColor: "oklch(0.65 0.25 280)",
  sortOrder: 16,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Code2;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Designed, reviewed, and tested algorithmic problems for weekly contests at LCS Coding Club, Indian Institute of Information Technology Surat.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Role", value: "Problem Setter" },
  { label: "Club", value: "LCS Coding Club" },
  { label: "Year", value: "2025" },
  { label: "Institution", value: "IIIT Surat" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [{ type: "image", src: project5, alt: "Problem Setting" }];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
