/**
 * Class 10th Boards — qualification card.
 *
 * Controls one card in the Qualifications bento grid and its detail modal.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder`.
 */

import { GraduationCap } from "lucide-react";

import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls grid position (lower = earlier). `id` must be unique
// across all folders.
export const metadata = {
  id: "class-10th-boards",
  title: "Class 10th Boards",
  year: "2022",
  place: "Percentage: 77%",
  stat: { label: "Board Score", value: "77%" },
  type: "edu" as const,
  sortOrder: 4,
};

// ================= ICON ===============

// Icon shown in the card header and the detail modal.
export const Icon = GraduationCap;

// ================= ABOUT ===============

// Modal description; also previewed on the card.
export const about = `Completed Class 10th with 77% percentage, laying the foundation for competitive programming journey.`;

// ================= LINKS ===============

// Bundled PDF used by both the download and preview buttons.
export const links = {
  certificate: resumePdf,
};
