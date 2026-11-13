/**
 * Mentored 300+ Students — achievement card.
 *
 * Controls one spotlight/milestone card and its detail modal.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder` (the first three by order form the spotlight row).
 */

import { BadgeCheck } from "lucide-react";

import project6 from "@/assets/project-6.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls the card position (lower = earlier); the first three
// achievements become the spotlight row. `id` must be unique.
export const metadata = {
  id: "mentored-300-plus",
  title: "Mentored 300+ Students",
  date: "2025",
  badgeColor: "oklch(0.65 0.25 280)",
  sortOrder: 17,
};

// ================= ICON ===============

// Icon shown on the card and in the detail modal.
export const Icon = BadgeCheck;

// ================= ABOUT ===============

// Short description shown on the card and in the modal.
export const about = `Conducted workshops on Competitive Programming fundamentals and Git/GitHub, mentoring over 300 students.`;

// ================= DETAIL ROWS ===============

// Rows shown in the modal. The first row is the headline stat.
export const info = [
  { label: "Students", value: "300+" },
  { label: "Topics", value: "CP, Git/GitHub" },
  { label: "Year", value: "2025" },
  { label: "Type", value: "Workshops" },
];

// ================= MEDIA ===============

// The first entry is used as the modal preview. Images are imported above so
// Vite fingerprints them and the URL never 404s.
export const media = [
  { type: "image", src: project6, alt: "Mentoring Workshop" },
];

// ================= LINKS ===============

// Bundled PDF used by the modal download button.
export const links = {
  certificate: resumePdf,
};
