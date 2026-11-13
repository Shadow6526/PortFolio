/**
 * Achievements section copy — header, summary chips, spotlight/milestone
 * labels, and detail-modal labels.
 *
 * Consumed by `sections/achievements/component.tsx`.
 * Each achievement's own content lives in its folder's `index.ts`.
 */

/** The shape of the achievements section content. */
export type AchievementsContent = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: {
    countLabel: string;
    rangeLabel: string;
    /** Shown in the journey card when there are no dates to summarise. */
    emptyRange: string;
  };
  spotlightLabel: string;
  viewDetailsLabel: string;
  viewLabel: string;
  mediaLabel: string;
  milestoneSingular: string;
  milestonePlural: string;
  fallbackStatLabel: string;
  fallbackStatValue: string;
  participantsSuffix: string;
  modal: {
    aboutLabel: string;
    downloadLabel: string;
    previewLabel: string;
    closeLabel: string;
    noMediaLabel: string;
  };
};

export const ACHIEVEMENTS_CONTENT = {
  id: "achievements",
  eyebrow: "Achievements",
  title: "Milestones I'm proud of",
  subtitle: "Recognition and moments that pushed me forward.",

  summary: {
    countLabel: "Milestones",
    rangeLabel: "Journey",
    emptyRange: "—",
  },

  spotlightLabel: "Spotlight",
  viewDetailsLabel: "View details",
  viewLabel: "View",
  mediaLabel: "media",
  milestoneSingular: "milestone",
  milestonePlural: "milestones",

  fallbackStatLabel: "Highlight",
  fallbackStatValue: "—",
  participantsSuffix: "participants",

  modal: {
    aboutLabel: "About",
    downloadLabel: "Download Certificate",
    previewLabel: "Preview Media",
    closeLabel: "Close",
    noMediaLabel: "No media available",
  },
} as const satisfies AchievementsContent;
