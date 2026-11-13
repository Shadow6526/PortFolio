/**
 * Home route — renders the single-page portfolio composition.
 *
 * All page content lives in `src/content/` and
 * `src/components/portfolio/sections/`; this route is only the mount point.
 */

import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  component: Portfolio,
});
