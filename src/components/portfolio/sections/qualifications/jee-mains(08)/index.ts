/**
 * JEE Mains — qualification card.
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
  id: "jee-mains",
  title: "JEE Mains",
  year: "2024",
  place: "CRL:36722",
  stat: { label: "CRL", value: "36722" },
  type: "edu" as const,
  sortOrder: 1,
};

// ================= ICON ===============

// Icon shown in the card header and the detail modal.
export const Icon = GraduationCap;

// ================= ABOUT ===============

// Modal description; also previewed on the card.
export const about = `Qualified JEE Mains with CRL 36722, securing eligibility for JEE Advanced and NIT admissions.`;

// ================= LINKS ===============

// Bundled PDF used by both the download and preview buttons.
export const links = {
  certificate: resumePdf,
};
