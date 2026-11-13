/**
 * Projects barrel — auto-discovers every project folder.
 *
 * Each `./<slug>/index.ts` must export:
 * - `metadata` (id, name, flg, sortOrder)
 * - `Icon` (an imported screenshot URL)
 * - `about` (string)
 * - `tech` (array of technology labels)
 * - `links` (demo + optional per-platform download URLs)
 *
 * Adding a folder is enough; this file never needs editing.
 */

/** One project slide and its download/demo links. */
export type ProjectItem = {
  metadata: {
    /** Unique slug; also used as the React key. */
    id: string;
    name: string;
    /** `1` renders a "Download App" action, `0` renders "Live Demo". */
    flg: number;
    /** Lower numbers appear first in the carousel. */
    sortOrder: number;
  };
  /** Imported screenshot URL shown inside the browser frame. */
  Icon: string;
  /**
   * Optional hover video, auto-matched from `src/assets/projects/<id>.mp4`
   * (or `.webm`). The screenshot stays visible until the card is hovered.
   */
  video?: string;
  about: string;
  tech: string[];
  links: {
    demo: string;
    linux: string;
    windows: string;
    android: string;
    mac: string;
  };
};

const modules = import.meta.glob("./*/index.ts", { eager: true });

// Hover videos are optional and discovered by filename. Drop
// `src/assets/projects/orbis.mp4` (or `.webm`) and it is matched to the
// project whose `metadata.id` is `orbis`; no item file edit is needed.
const projectVideos = import.meta.glob(
  "../../../../assets/projects/*.{mp4,webm}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

/** Finds the optional hover video named after a project id. */
function findProjectVideo(id: string) {
  const match = Object.entries(projectVideos).find(([path]) => {
    const filename = path.split("/").pop() ?? "";
    return filename.replace(/\.(mp4|webm)$/i, "") === id;
  });

  return match?.[1];
}

const rawModules = Object.values(modules) as Array<ProjectItem>;

/** All projects, ordered by `metadata.sortOrder`. */
export const PROJECTS = rawModules
  .sort(
    (a: ProjectItem, b: ProjectItem) =>
      a.metadata.sortOrder - b.metadata.sortOrder,
  )
  .map((item) => ({
    ...item,
    video: findProjectVideo(item.metadata.id),
  }));
