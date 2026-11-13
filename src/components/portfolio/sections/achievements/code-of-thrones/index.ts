/**
 * 2nd Place - Team Coding Contest Code of Thrones — achievement card.
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

import project4 from "@/assets/project-4.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "code-of-thrones",
  title: "2nd Place - Team Coding Contest Code of Thrones",
  date: "2026",
  badgeColor: "oklch(0.85 0.18 160)",
  sortOrder: 9,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Award;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Finished 2nd in Code of Thrones team competition at Indian Institute of Information Technology Surat.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Position", value: "2nd Place" },
  { label: "Contest", value: "Code of Thrones" },
  { label: "Year", value: "2026" },
  { label: "Organizer", value: "IIIT Surat" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [{ type: "image", src: project4, alt: "Code of Thrones" }];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
