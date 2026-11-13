/**
 * 2nd Place - Team Coding Contest at Spring Fiesta 2025 — achievement card.
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

import project6 from "@/assets/project-6.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "spring-fiesta-2025-team-2nd",
  title: "2nd Place - Team Coding Contest at Spring Fiesta 2025",
  date: "2025",
  badgeColor: "oklch(0.85 0.18 160)",
  sortOrder: 5,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Award;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Finished 2nd in a team programming competition at Indian Institute of Information Technology Surat during Spring Fiesta 2025.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Position", value: "2nd Place" },
  { label: "Contest", value: "Spring Fiesta 2025" },
  { label: "Year", value: "2025" },
  { label: "Organizer", value: "IIIT Surat" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [
  { type: "image", src: project6, alt: "Spring Fiesta Team" },
];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
