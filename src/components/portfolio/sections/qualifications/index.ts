/**
 * Qualifications barrel — auto-discovers every card folder.
 *
 * Each `./<slug>/index.ts` must export:
 * - `metadata` (id, title, year, place, stat, type, sortOrder)
 * - `Icon` (a lucide/React icon component)
 * - `about` (string)
 * - `links.certificate` (bundled PDF URL)
 *
 * Adding a folder is enough; this file never needs editing.
 */

import type { ComponentType, SVGProps } from "react";

/** One qualification card and its detail-modal content. */
export type QualificationItem = {
  metadata: {
    /** Unique slug; also used as the React key. */
    id: string;
    title: string;
    year: string;
    /** Short location/score line shown under the modal title. */
    place: string;
    stat: {
      label: string;
      value: string;
    };
    /** `edu` shows the graduation styling, `cert` the certification styling. */
    type: "edu" | "cert";
    /** Lower numbers appear first in the bento grid. */
    sortOrder: number;
  };
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  about: string;
  links: {
    certificate: string;
  };
};

const modules = import.meta.glob("./*/index.ts", { eager: true });

const rawModules = Object.values(modules) as Array<QualificationItem>;

/** All qualification cards, ordered by `metadata.sortOrder`. */
export const QUALIFICATIONS = rawModules.sort(
  (a: QualificationItem, b: QualificationItem) =>
    a.metadata.sortOrder - b.metadata.sortOrder,
);
