/**
 * JEE Advanced — qualification card.
 *
 * Controls one card in the Qualifications bento grid and its detail modal.
 * Consumed by the auto-discovered barrel in `../index.ts`.
 *
 * To edit: change the values below.
 * To remove: delete this folder.
 * To add: copy this folder, give it a new `metadata.id`, and set a unique
 * `metadata.sortOrder`.
 */

import { BadgeCheck } from "lucide-react";

import resumePdf from "@/components/portfolio/curr.pdf";

// ================= METADATA ===============

// `sortOrder` controls grid position (lower = earlier). `id` must be unique
// across all folders.
export const metadata = {
  id: "jee-advanced",
  title: "JEE Advanced",
  year: "2024",
  place: "CRL:21052",
  stat: { label: "CRL", value: "21052" },
  type: "cert" as const,
  sortOrder: 3,
};

// ================= ICON ===============

// Icon shown in the card header and the detail modal.
export const Icon = BadgeCheck;

// ================= ABOUT ===============

// Modal description; also previewed on the card.
export const about = `Qualified JEE Advanced with CRL 21052, one of the toughest engineering entrance exams in India.`;

// ================= LINKS ===============

// Bundled PDF used by both the download and preview buttons.
export const links = {
  certificate: resumePdf,
};
