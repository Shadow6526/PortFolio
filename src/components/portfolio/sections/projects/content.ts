/**
 * Projects section copy — header, carousel labels, action labels, and platform
 * button names.
 *
 * Consumed by `sections/projects/component.tsx`.
 * Each project's own content lives in its folder's `index.ts`.
 */

/** The shape of the projects section content. */
export type ProjectsContent = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  countLabel: string;
  carouselLabel: string;
  projectLabel: string;
  previousLabel: string;
  nextLabel: string;
  /** Screen-reader prefix for a dot, e.g. "Go to Orbis". */
  goToLabel: string;
  /** Screen-reader word between slide number and total, e.g. "1 of 3". */
  slideOfLabel: string;
  /** Fallback browser-bar text when a project has no valid demo URL. */
  caseStudyLabel: string;
  liveDemoLabel: string;
  downloadAppLabel: string;
  noReleaseLabel: string;
  platforms: {
    linux: string;
    windows: string;
    android: string;
    mac: string;
  };
};

export const PROJECTS_CONTENT = {
  id: "projects",
  eyebrow: "Projects",
  title: "Selected work",
  subtitle: "A few products and experiments I've shipped recently.",
  countLabel: "Projects",
  carouselLabel: "Selected projects",
  projectLabel: "Project",
  previousLabel: "Previous project",
  nextLabel: "Next project",
  goToLabel: "Go to",
  slideOfLabel: "of",
  caseStudyLabel: "case study",
  liveDemoLabel: "Live Demo",
  downloadAppLabel: "Download App",
  noReleaseLabel: "No public release yet",

  platforms: {
    linux: "Linux",
    windows: "Windows",
    android: "Android",
    mac: "macOS",
  },
} as const satisfies ProjectsContent;
