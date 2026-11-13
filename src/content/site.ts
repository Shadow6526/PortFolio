/**
 * Site-wide content — the single source of truth for identity, navigation,
 * social links, contact details, the resume file, and route metadata.
 *
 * Consumers:
 * - `sections/navbar/component.tsx`
 * - `sections/hero/component.tsx`
 * - `sections/contact/component.tsx`
 * - `sections/footer/component.tsx`
 * - `src/routes/__root.tsx`
 *
 * Edit this file to change a value everywhere it appears.
 */

import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

import brandIcon from "@/assets/icon.jpg";
import resumePdf from "@/components/portfolio/curr.pdf";

// ================= TYPES ===============

/** A link in the desktop/mobile navbar and footer quick links. */
export type NavItem = {
  id: string;
  label: string;
};

/** A social profile shown in the hero, contact rail, and footer. */
export type SocialLink = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

/** The shape of the shared site content object. */
export type SiteContent = {
  name: string;
  brandName: string;
  logo: string;
  logoAlt: string;
  nav: readonly NavItem[];
  navCta: string;
  menuLabel: string;
  resume: {
    file: string;
    downloadName: string;
  };
  socials: readonly SocialLink[];
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    location: string;
    timezone: string;
  };
  web3forms: {
    endpoint: string;
    accessKey: string;
  };
  metadata: {
    title: string;
    description: string;
    author: string;
    ogTitle: string;
    ogDescription: string;
    twitterCard: string;
    twitterSite: string;
  };
};

// ================= CONTENT ===============

export const SITE = {
  name: "Maitreya Chauhan",

  brandName: "Maitreya Chauhan",

  logo: brandIcon,
  logoAlt: "Maitreya Chauhan logo",

  // Contact is intentionally not in the navbar list; the navbar CTA scrolls
  // to it instead.
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "qualifications", label: "Qualifications" },
    { id: "achievements", label: "Achievements" },
    { id: "projects", label: "Projects" },
  ],

  navCta: "Let's Talk",
  menuLabel: "Toggle menu",

  resume: {
    file: resumePdf,
    downloadName: "Maitreya_Chauhan_Resume.pdf",
  },

  socials: [
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maitreya-chauhan/",
    },
    {
      Icon: Github,
      label: "GitHub",
      href: "https://github.com/Shadow6526",
    },
    {
      Icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/maitreya_chauhan/",
    },
  ],

  contact: {
    email: "maitreya.chuahan6526@gmail.com",
    phone: "+917878783669",
    phoneDisplay: "+91 78787 83669",
    location: "India, Gujarat",
    timezone: "IST",
  },

  // Web3Forms powers the contact form. Keep the access key here so the form
  // component never hardcodes credentials.
  web3forms: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "162dfa66-b0f2-409c-be26-8869d6a4f44e",
  },

  metadata: {
    title: "Maitreya Chauhan",
    description:
      "Portfolio of Maitreya Chauhan — ICPC Asia Regionalist, Competitive Programmer, and Full Stack Developer building fast, elegant software with Flutter, React, Node.js & Firebase.",
    author: "Maitreya Chauhan",
    ogTitle: "Maitreya Chauhan — Competitive Programmer & Full Stack Developer",
    ogDescription:
      "Portfolio of Maitreya Chauhan — ICPC Asia Regionalist & Full Stack Developer.",
    twitterCard: "summary_large_image",
    twitterSite: "@Shadow6526",
  },
} as const satisfies SiteContent;
