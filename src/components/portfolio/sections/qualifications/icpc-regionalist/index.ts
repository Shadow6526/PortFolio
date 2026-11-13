/**
 * ICPC Regionalist — qualification card.
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
  id: "icpc-regionalist",
  title: "ICPC Regionalist",
  year: "2026",
  place: "2nd year",
  stat: { label: "ICPC Rank", value: "195" },
  type: "edu" as const,
  sortOrder: 2,
};

// ================= ICON ===============

// Icon shown in the card header and the detail modal.
export const Icon = GraduationCap;

// ================= ABOUT ===============

// Modal description; also previewed on the card.
export const about = `Secured Rank 195 in the ICPC Asia Mysuru Onsite Regional Contest, competing against top competitive programming teams from across Asia.`;

// ================= LINKS ===============

// Bundled PDF used by both the download and preview buttons.
export const links = {
  certificate: resumePdf,
};
