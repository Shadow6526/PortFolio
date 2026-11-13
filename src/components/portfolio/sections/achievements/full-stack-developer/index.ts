/**
 * Full Stack Developer — achievement card.
 *
 * Controls one spotlight/milestone card and its detail modal.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder` (the first three by order form the spotlight row).
 */

import { Sparkles } from "lucide-react";

import project3 from "@/assets/project-3.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "full-stack-developer",
  title: "Full Stack Developer",
  date: "2026",
  badgeColor: "oklch(0.7 0.2 200)",
  sortOrder: 14,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = Sparkles;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Developed a Codeforces Statistics Dashboard using React.js, Express.js, and interactive data visualizations.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Project", value: "Codeforces Statistics Dashboard" },
  { label: "Year", value: "2026" },
  { label: "Stack", value: "React.js, Express.js" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [
  { type: "image", src: project3, alt: "Full Stack Project" },
];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
