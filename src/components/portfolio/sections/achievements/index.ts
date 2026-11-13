/**
 * Achievements barrel — auto-discovers every achievement folder.
 *
 * Each `./<slug>/index.ts` must export:
 * - `metadata` (id, title, date, badgeColor, sortOrder)
 * - `Icon` (a lucide/React icon component)
 * - `about` (string)
 * - `info` (label/value rows for the modal)
 * - `media` (image/video entries; images are imported in the item folder)
 * - `links.certificate` (bundled PDF URL)
 *
 * Adding a folder is enough; this file never needs editing.
 */

import type { ComponentType, SVGProps } from "react";

/** One achievement card, its stats, and its modal media. */
export type AchievementItem = {
  metadata: {
    /** Unique slug; also used as the React key. */
    id: string;
    title: string;
    /** Year label used for grouping and the journey range. */
    date: string;
    /** Accent color used by the card icon and badge. */
    badgeColor: string;
    /** Lower numbers appear first; the first three become the spotlight row. */
    sortOrder: number;
  };
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  about: string;
  info: Array<{ label: string; value: string }>;
  media: Array<{
    type: "image" | "video";
    /** Bundled asset URL for images, or a YouTube id for videos. */
    src: string;
    alt: string;
    isYouTube?: boolean;
  }>;
  links: {
    certificate: string;
  };
};

const modules = import.meta.glob("./*/index.ts", { eager: true });

const rawModules = Object.values(modules) as Array<AchievementItem>;

/** All achievements, ordered by `metadata.sortOrder`. */
export const ACHIEVEMENTS = rawModules.sort(
  (a: AchievementItem, b: AchievementItem) =>
    a.metadata.sortOrder - b.metadata.sortOrder,
);
