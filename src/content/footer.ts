/**
 * Footer content — description, column labels, and the copyright template.
 *
 * Consumed by `sections/footer/component.tsx`.
 * Navigation, socials, and contact details come from `content/site.ts`.
 */

/** The shape of the footer content object. */
export type FooterContent = {
  description: string;
  quickLinksLabel: string;
  contactLabel: string;
  copyrightTemplate: string;
};

export const FOOTER = {
  description:
    "ICPC Asia Regionalist, Competitive Programmer & Full Stack Developer passionate about building high-performance software and solving real-world problems.",
  quickLinksLabel: "Quick Links",
  contactLabel: "Contact",
  copyrightTemplate:
    "© {year} Maitreya Chauhan. All rights reserved. Crafted with care.",
} as const satisfies FooterContent;
