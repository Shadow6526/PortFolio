/**
 * Qualifications section copy — the editorial title cell and the labels used
 * by qualification cards and the detail modal.
 *
 * Consumed by `sections/qualifications/component.tsx`.
 * Each card's own content lives in its folder's `index.ts`.
 */

/** The shape of the qualifications section content. */
export type QualificationsContent = {
  id: string;
  eyebrow: string;
  title: string;
  range: string;
  subtitle: string;
  card: {
    educationLabel: string;
    certificationLabel: string;
  };
  modal: {
    aboutLabel: string;
    downloadLabel: string;
    previewLabel: string;
    closeLabel: string;
  };
};

export const QUALIFICATIONS_CONTENT = {
  id: "qualifications",
  eyebrow: "Qualifications",
  title: "& Certifications",
  range: "2022 — 2026",
  subtitle: "A timeline of the milestones that shaped my craft.",

  card: {
    educationLabel: "Education",
    certificationLabel: "Certification",
  },

  modal: {
    aboutLabel: "About",
    downloadLabel: "Download Certificate",
    previewLabel: "Preview",
    closeLabel: "Close",
  },
} as const satisfies QualificationsContent;
