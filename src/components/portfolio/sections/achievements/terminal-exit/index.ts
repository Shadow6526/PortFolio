/**
 * 1st Place - Solo Coding Contest Terminal Exit — achievement card.
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

import project3 from "@/assets/project-3.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "terminal-exit",
  title: "1st Place - Solo Coding Contest Terminal Exit",
  date: "2026",
  badgeColor: "oklch(0.85 0.18 160)",
  sortOrder: 8,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Trophy;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Won 1st place in Terminal Exit individual competition at Indian Institute of Information Technology Surat.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Position", value: "1st Place" },
  { label: "Contest", value: "Terminal Exit" },
  { label: "Year", value: "2026" },
  { label: "Organizer", value: "IIIT Surat" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [{ type: "image", src: project3, alt: "Terminal Exit" }];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
