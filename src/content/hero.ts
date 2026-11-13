/**
 * Hero section content — eyebrow, name, role line, bio, CTA labels, coding
 * profiles, and the floating portrait stat.
 *
 * Consumed by `sections/hero/component.tsx`.
 * Edit this file to change the hero copy without touching JSX.
 */

import type { ComponentType, SVGProps } from "react";

import profileImg from "@/assets/profile.jpg";
import {
  AtCoderIcon,
  CodeChefIcon,
  CodeforcesIcon,
  LeetCodeIcon,
} from "@/components/portfolio/brand-icons";
import { SITE } from "@/content/site";

// ================= TYPES ===============

/** One row in the "Coding Profiles" hover dropdown. */
export type CodingProfile = {
  name: string;
  url: string;
  rating: string;
  color: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/** The shape of the hero content object. */
export type HeroContent = {
  id: string;
  eyebrow: string;
  greeting: string;
  name: string;
  roles: string;
  description: string;
  actions: {
    viewResume: string;
    downloadResume: string;
    viewWork: string;
  };
  codingProfilesLabel: string;
  codingProfiles: readonly CodingProfile[];
  /** Hero icon order; socials not listed here follow at the end. */
  socialOrder: readonly string[];
  profile: {
    image: string;
    alt: string;
    stat: {
      value: string;
      label: string;
    };
  };
};

// ================= CONTENT ===============

export const HERO = {
  id: "home",
  eyebrow: "From Algorithms to Applications",
  greeting: "Hi, I'm",
  name: SITE.name,
  roles: "Competitive Programmer, Linux Guy & Full Stack Developer",
  description:
    "From algorithms to applications, I enjoy building software that is fast, reliable, and intuitive. As a Computer Science student at Indian Institute of Information Technology Surat, I specialize in Competitive Programming, Flutter, React, Node.js, and Firebase while constantly exploring better ways to solve real-world problems.",

  actions: {
    viewResume: "View Resume",
    downloadResume: "Download Resume",
    viewWork: "View Work",
  },

  codingProfilesLabel: "Coding Profiles",

  // The hero has always shown GitHub first; Contact and Footer use the shared
  // order in `SITE.socials`.
  socialOrder: ["GitHub", "LinkedIn", "Instagram"],

  codingProfiles: [
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Shadow6526",
      rating: "Specialist · 1502",
      color: "oklch(0.65 0.25 25)",
      Icon: CodeforcesIcon,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/maitreya_c/",
      rating: "Knight · 1878",
      color: "oklch(0.75 0.18 60)",
      Icon: LeetCodeIcon,
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/maitreya_c",
      rating: "3★ · 1722",
      color: "oklch(0.7 0.15 40)",
      Icon: CodeChefIcon,
    },
    {
      name: "AtCoder",
      url: "https://atcoder.jp/users/maitreya_c",
      rating: "Rated",
      color: "oklch(0.7 0.2 200)",
      Icon: AtCoderIcon,
    },
  ],

  profile: {
    image: profileImg,

    alt: "Maitreya Chauhan portrait",
    stat: {
      value: "20 Years",
      label: "Scanning the Web",
    },
  },
} as const satisfies HeroContent;
