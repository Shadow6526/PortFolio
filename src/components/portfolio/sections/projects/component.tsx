/**
 * Projects — a horizontal, snap-scrolling carousel with dots, a progress rail,
 * a counter, arrow buttons, and keyboard navigation.
 *
 * Content:
 * - Section copy comes from `./content.ts`.
 * - Each project's data comes from its own folder (`./<slug>/index.ts`) and is
 *   auto-discovered by `./index.ts`.
 *
 * To add a project, add a folder with an `index.ts`; no edits here.
 */

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Download, ExternalLink } from "lucide-react";

import {
  AndroidIcon,
  AppleIcon,
  LinuxIcon,
  WindowsIcon,
} from "@/components/portfolio/brand-icons";
import { PROJECTS, type ProjectItem } from "./index";
import { PROJECTS_CONTENT } from "./content";

// ================= PLATFORM OPTIONS ===============

// Every platform link is optional; only the ones with a real URL render.
const PLATFORMS = [
  {
    key: "linux",
    label: PROJECTS_CONTENT.platforms.linux,
    Icon: LinuxIcon,
  },
  {
    key: "windows",
    label: PROJECTS_CONTENT.platforms.windows,
    Icon: WindowsIcon,
  },
  {
    key: "android",
    label: PROJECTS_CONTENT.platforms.android,
    Icon: AndroidIcon,
  },
  {
    key: "mac",
    label: PROJECTS_CONTENT.platforms.mac,
    Icon: AppleIcon,
  },
] as const;

// ================= HELPERS ===============

// Placeholder hrefs ("#", "") must never render as buttons
function isRealLink(url: string) {
  return Boolean(url) && url !== "#";
}

// Pretty hostname for the browser bar, with a safe fallback
function getHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return PROJECTS_CONTENT.caseStudyLabel;
  }
}

// ================= SECTION ===============

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  // Guard the derived index when there are no projects or items were removed
  // while the section was mounted.
  const lastIndex = Math.max(PROJECTS.length - 1, 0);
  const safeActive = Math.min(active, lastIndex);

  // ================= CAROUSEL CONTROLS ===============

  // Keep a ref in sync so listeners always read the latest slide
  const setActiveSlide = (index: number) => {
    activeRef.current = index;
    setActive(index);
  };

  const goTo = (index: number) => {
    const track = trackRef.current;

    // A zero-length list would make the modulo below produce NaN.
    if (!track || PROJECTS.length === 0) return;

    // Wrap around at both ends
    const next = (index + PROJECTS.length) % PROJECTS.length;

    setActiveSlide(next);
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;

    // clientWidth is 0 while the section is hidden or unmounted.
    if (!track || !track.clientWidth || PROJECTS.length === 0) return;

    const index = Math.round(track.scrollLeft / track.clientWidth);

    setActiveSlide(Math.min(Math.max(index, 0), PROJECTS.length - 1));
  };

  // Left/right arrows work whenever focus is anywhere inside the carousel
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeRef.current - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeRef.current + 1);
    }
  };

  // Keep the current slide aligned when the viewport changes width
  useEffect(() => {
    const onResize = () => {
      const track = trackRef.current;
      if (!track) return;

      track.scrollTo({
        left: activeRef.current * track.clientWidth,
        behavior: "instant",
      });
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id={PROJECTS_CONTENT.id}
      className="relative overflow-hidden py-10 sm:py-14"
    >
      {/* ================= STAGE GLOW =============== */}

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.25_280_/_0.12),transparent_65%)] blur-2xl" />

        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_85_/_0.08),transparent_70%)] blur-2xl" />

        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(oklch(1_0_0_/_0.35)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />
      </div>

      {/* ================= CONTENT =============== */}

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow-pill mb-4 inline-flex rounded-full px-3 py-1">
              {PROJECTS_CONTENT.eyebrow}
            </div>

            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              <span className="gradient-text animate-text-shine">
                {PROJECTS_CONTENT.title}
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-muted-foreground">
              {PROJECTS_CONTENT.subtitle}
            </p>
          </div>

          <div className="glass w-fit rounded-2xl px-5 py-3">
            <div className="font-display text-2xl font-black leading-none text-gold">
              {String(PROJECTS.length).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {PROJECTS_CONTENT.countLabel}
            </div>
          </div>
        </div>

        {/* ================= HORIZONTAL RAIL =============== */}

        {PROJECTS.length > 0 && (
          <div
            className="mt-12"
            role="region"
            aria-roledescription="carousel"
            aria-label={PROJECTS_CONTENT.carouselLabel}
            onKeyDown={handleKeyDown}
          >
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth py-3"
            >
              {PROJECTS.map((item, index) => (
                <div
                  key={item.metadata.id}
                  role="group"
                  className="w-full shrink-0 snap-center"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} ${PROJECTS_CONTENT.slideOfLabel} ${
                    PROJECTS.length
                  }`}
                >
                  <ProjectSlide item={item} index={index} />
                </div>
              ))}
            </div>

            {/* ================= CONTROLS =============== */}

            <div className="mt-8 flex items-center gap-4 sm:gap-6">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {PROJECTS.map((item, index) => (
                  <button
                    key={item.metadata.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`${PROJECTS_CONTENT.goToLabel} ${item.metadata.name}`}
                    aria-current={index === safeActive ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === safeActive
                        ? "w-8 bg-gold"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Progress rail (hidden on small screens) */}
              <div className="relative hidden h-px flex-1 bg-white/10 sm:block">
                <span
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold to-[oklch(0.93_0.13_92)] transition-all duration-500"
                  style={{
                    width: `${((safeActive + 1) / PROJECTS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Counter */}
              <span className="ml-auto font-display text-xs font-bold tracking-[0.2em] text-muted-foreground sm:ml-0">
                {String(safeActive + 1).padStart(2, "0")} /{" "}
                {String(PROJECTS.length).padStart(2, "0")}
              </span>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(safeActive - 1)}
                  aria-label={PROJECTS_CONTENT.previousLabel}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => goTo(safeActive + 1)}
                  aria-label={PROJECTS_CONTENT.nextLabel}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ================= PROJECT SLIDE ===============

function ProjectSlide({ item, index }: { item: ProjectItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const hasDemo = isRealLink(item.links.demo);

  // `links` always has every platform key; filter to the ones with real URLs.
  const platforms = PLATFORMS.filter((platform) =>
    isRealLink(item.links[platform.key]),
  );

  // ================= HOVER VIDEO ===============

  // Hovering anywhere on the card starts the optional preview. `preload="none"`
  // keeps the video off the network until the user actually shows interest.
  const playVideo = () => {
    setIsHovering(true);

    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay policies can reject; the screenshot/poster stays visible.
    });
  };

  // Returning to the image should also rewind the preview.
  const resetVideo = () => {
    setIsHovering(false);

    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <article
      className="group grid h-full items-center gap-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm sm:p-8 lg:grid-cols-12 lg:gap-12"
      onMouseEnter={playVideo}
      onMouseLeave={resetVideo}
    >
      {/* ================= MEDIA =============== */}

      <div className="lg:col-span-6">
        <div className="relative">
          {/* Accent glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle,oklch(0.65_0.25_280_/_0.18),transparent_70%)] opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
          />

          {/* Browser frame */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-[0_30px_80px_-40px_oklch(0_0_0_/_0.9)] transition-all duration-500 group-hover:border-gold/25">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />

              <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[10px] tracking-wide text-white/40">
                {getHost(item.links.demo)}
              </span>
            </div>

            {/* Screenshot → hover video */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={item.Icon}
                alt={item.metadata.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {item.video && (
                <video
                  ref={videoRef}
                  src={item.video}
                  poster={item.Icon}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  tabIndex={-1}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 motion-reduce:hidden ${
                    isHovering ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Index tag */}
          <span className="absolute -left-3 -top-3 grid h-10 w-10 place-items-center rounded-xl border border-gold/30 bg-black font-display text-xs font-black text-gold shadow-[0_0_25px_-8px_oklch(0.82_0.14_85_/_0.8)]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ================= CONTENT =============== */}

      <div className="lg:col-span-6">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
            {PROJECTS_CONTENT.projectLabel} {String(index + 1).padStart(2, "0")}
          </span>

          <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-gold sm:text-3xl">
          {item.metadata.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.about}
        </p>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {hasDemo && (
            <a
              href={item.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-[oklch(0.93_0.13_92)] px-4 py-2.5 text-xs font-bold text-black transition-opacity hover:opacity-90"
            >
              {item.metadata.flg === 1 ? (
                <Download className="h-3.5 w-3.5" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" />
              )}
              {item.metadata.flg === 1
                ? PROJECTS_CONTENT.downloadAppLabel
                : PROJECTS_CONTENT.liveDemoLabel}
            </a>
          )}

          {platforms.map((platform) => (
            <a
              key={platform.key}
              href={item.links[platform.key]}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-gold/30 hover:bg-white/10 hover:text-foreground"
            >
              <platform.Icon className="h-3.5 w-3.5" />
              {platform.label}
            </a>
          ))}

          {!hasDemo && platforms.length === 0 && (
            <span className="text-xs text-muted-foreground">
              {PROJECTS_CONTENT.noReleaseLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
