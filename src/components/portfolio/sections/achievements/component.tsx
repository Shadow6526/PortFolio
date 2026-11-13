/**
 * Achievements — spotlight cards, year-grouped milestones, and the detail
 * modal with stats and media.
 *
 * Content:
 * - Section copy comes from `./content.ts`.
 * - Each achievement's data comes from its own folder (`./<slug>/index.ts`)
 *   and is auto-discovered by `./index.ts`.
 *
 * To add an achievement, add a folder with an `index.ts`; no edits here.
 */

import { useEffect, useState } from "react";
import { ArrowUpRight, Download, ExternalLink, Trophy, X } from "lucide-react";

import { ACHIEVEMENTS, type AchievementItem } from "./index";
import { ACHIEVEMENTS_CONTENT } from "./content";

// Matches the modal fade-out duration in `src/styles.css`.
const CLOSE_ANIMATION_MS = 300;

// ================= HELPERS ===============

// Adds an alpha channel to a badge color like "oklch(0.65 0.25 280)"
function tint(color: string, alpha: number) {
  return color.replace(/\)$/, ` / ${alpha})`);
}

// info[0] is always the headline number; pick the most meaningful context field
const CONTEXT_LABELS = [
  "Contest",
  "Project",
  "Topics",
  "Club",
  "Platforms",
  "Platform",
  "Organizer",
  "Participants",
];

/** Returns the first stat row, or the configured fallback when none exists. */
function getStat(item: AchievementItem) {
  return (
    item.info[0] ?? {
      label: ACHIEVEMENTS_CONTENT.fallbackStatLabel,
      value: ACHIEVEMENTS_CONTENT.fallbackStatValue,
    }
  );
}

/** Returns a short context line from the first matching detail row. */
function getContext(item: AchievementItem) {
  for (const label of CONTEXT_LABELS) {
    const found = item.info.find((entry) => entry.label === label);

    if (!found) continue;

    // Skip values that just repeat the title (e.g. "Spring Fiesta 2025")
    if (item.metadata.title.toLowerCase().includes(found.value.toLowerCase())) {
      continue;
    }

    if (label === "Participants") {
      return `${found.value} ${ACHIEVEMENTS_CONTENT.participantsSuffix}`;
    }

    return found.value;
  }

  return "";
}

// ================= SECTION ===============

export default function Achievements() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // ================= MODAL STATE ===============

  const activeItem =
    ACHIEVEMENTS.find((item) => item.metadata.id === activeId) ?? null;

  const openItem = (id: string) => {
    setIsClosing(false);
    setActiveId(id);
  };

  // Wait for the exit animation before unmounting the dialog.
  const closeItem = () => {
    setIsClosing(true);

    window.setTimeout(() => {
      setActiveId(null);
      setIsClosing(false);
    }, CLOSE_ANIMATION_MS);
  };

  // Lock page scroll + close on Escape while the modal is open
  useEffect(() => {
    if (!activeId) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setIsClosing(true);

      window.setTimeout(() => {
        setActiveId(null);
        setIsClosing(false);
      }, CLOSE_ANIMATION_MS);
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeId]);

  // ================= GROUPING ===============

  // Top 3 by priority become the spotlight row
  const spotlight = ACHIEVEMENTS.slice(0, 3);
  const spotlightIds = new Set(spotlight.map((item) => item.metadata.id));

  // The rest stays grouped by year, newest first
  const milestones = ACHIEVEMENTS.filter(
    (item) => !spotlightIds.has(item.metadata.id),
  );

  const years = Array.from(
    new Set(milestones.map((item) => item.metadata.date)),
  ).sort((a, b) => b.localeCompare(a));

  // Fall back to the spotlight dates so the range never renders as
  // "undefined — undefined" when there are three or fewer achievements.
  const rangeSource = milestones.length > 0 ? milestones : ACHIEVEMENTS;
  const rangeYears = Array.from(
    new Set(rangeSource.map((item) => item.metadata.date)),
  ).sort((a, b) => b.localeCompare(a));

  const yearRange =
    rangeYears.length > 0
      ? `${rangeYears[rangeYears.length - 1]} — ${rangeYears[0]}`
      : ACHIEVEMENTS_CONTENT.summary.emptyRange;

  return (
    <section
      id={ACHIEVEMENTS_CONTENT.id}
      className="relative overflow-hidden py-10 sm:py-14"
    >
      {/* ================= STAGE GLOW =============== */}

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.25_280_/_0.14),transparent_65%)] blur-2xl" />

        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_85_/_0.10),transparent_70%)] blur-2xl" />

        <div className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(oklch(1_0_0_/_0.35)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />
      </div>

      {/* ================= CONTENT =============== */}

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow-pill mb-4 inline-flex rounded-full px-3 py-1">
              {ACHIEVEMENTS_CONTENT.eyebrow}
            </div>

            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              <span className="gradient-text animate-text-shine">
                {ACHIEVEMENTS_CONTENT.title}
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-muted-foreground">
              {ACHIEVEMENTS_CONTENT.subtitle}
            </p>
          </div>

          {/* Summary */}
          <div className="flex gap-3">
            <div className="glass rounded-2xl px-5 py-3">
              <div className="font-display text-2xl font-black leading-none text-gold">
                {ACHIEVEMENTS.length}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {ACHIEVEMENTS_CONTENT.summary.countLabel}
              </div>
            </div>

            <div className="glass rounded-2xl px-5 py-3">
              <div className="whitespace-nowrap font-display text-xl font-black leading-none text-foreground">
                {yearRange}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {ACHIEVEMENTS_CONTENT.summary.rangeLabel}
              </div>
            </div>
          </div>
        </div>

        {/* ================= SPOTLIGHT =============== */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {spotlight.map((item, index) => (
            <SpotlightCard
              key={item.metadata.id}
              item={item}
              featured={index === 0}
              onOpen={() => openItem(item.metadata.id)}
            />
          ))}
        </div>

        {/* ================= YEAR GROUPS =============== */}

        <div className="mt-14 space-y-12">
          {years.map((year) => {
            const group = milestones.filter(
              (item) => item.metadata.date === year,
            );

            return (
              <div key={year}>
                {/* Year marker */}
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-display text-4xl font-black leading-none text-white/15">
                    {year}
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {group.length}{" "}
                    {group.length === 1
                      ? ACHIEVEMENTS_CONTENT.milestoneSingular
                      : ACHIEVEMENTS_CONTENT.milestonePlural}
                  </span>
                </div>

                {/* Milestone cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.map((item) => (
                    <MilestoneCard
                      key={item.metadata.id}
                      item={item}
                      onOpen={() => openItem(item.metadata.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= DETAIL MODAL =============== */}

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.metadata.title}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            isClosing ? "animate-backdrop-fade-out" : "animate-backdrop-fade-in"
          }`}
          onClick={closeItem}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />

          <div
            className={`glass-modal relative z-10 max-h-[92vh] w-full max-w-[860px] overflow-y-auto rounded-[2rem] ${
              isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <ModalContent item={activeItem} onClose={closeItem} />
          </div>
        </div>
      )}
    </section>
  );
}

// ================= SPOTLIGHT CARD ===============

function SpotlightCard({
  item,
  featured,
  onOpen,
}: {
  item: AchievementItem;
  featured: boolean;
  onOpen: () => void;
}) {
  const Icon = item.Icon;
  const stat = getStat(item);
  const context = getContext(item);

  // The flagship honour gets the black + gold treatment
  if (featured) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-black p-6 text-left shadow-[0_0_60px_-20px_oklch(0.82_0.14_85_/_0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 sm:col-span-2"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,oklch(0.82_0.14_85_/_0.18),transparent_60%)]"
        />

        <span
          aria-hidden
          className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-gold/50"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-gold/50"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-gold/50"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-gold/50"
        />

        <div className="relative flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            <Trophy className="h-3 w-3" />
            {ACHIEVEMENTS_CONTENT.spotlightLabel}
          </span>

          <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
            {item.metadata.date}
          </span>
        </div>

        <div className="relative mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="font-display text-6xl font-black leading-none text-gold">
              {stat.value}
            </div>

            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
              {stat.label}
            </div>

            <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-white">
              {item.metadata.title}
            </h3>

            {context && (
              <p className="mt-1 truncate text-xs text-white/50">{context}</p>
            )}
          </div>

          <p className="line-clamp-3 max-w-[420px] text-xs leading-relaxed text-white/55 sm:max-w-[45%]">
            {item.about}
          </p>
        </div>

        <div className="relative mt-6 flex items-center justify-between text-[11px] text-white/40">
          <span>
            {item.media.length} {ACHIEVEMENTS_CONTENT.mediaLabel}
          </span>

          <span className="inline-flex items-center gap-1 font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
            {ACHIEVEMENTS_CONTENT.viewDetailsLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_-24px_oklch(0.82_0.14_85_/_0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
    >
      {/* Accent hairline */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.metadata.badgeColor}, transparent)`,
        }}
      />

      <div className="flex items-center justify-between">
        <span
          className="grid h-10 w-10 place-items-center rounded-xl border"
          style={{
            borderColor: tint(item.metadata.badgeColor, 0.35),
            backgroundColor: tint(item.metadata.badgeColor, 0.12),
            color: item.metadata.badgeColor,
          }}
        >
          <Icon className="h-4 w-4" />
        </span>

        <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
          {item.metadata.date}
        </span>
      </div>

      <div className="mt-6">
        <div className="font-display text-4xl font-black leading-none text-foreground">
          {stat.value}
        </div>
        <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {stat.label}
        </div>
      </div>

      <h3 className="mt-3 font-display text-base font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-gold">
        {item.metadata.title}
      </h3>

      {context && (
        <p className="mt-1 truncate text-xs text-muted-foreground">{context}</p>
      )}

      <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground/80">
        {item.about}
      </p>

      <div className="mt-auto flex items-center justify-between pt-6 text-[11px] text-muted-foreground">
        <span>
          {item.media.length} {ACHIEVEMENTS_CONTENT.mediaLabel}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          {ACHIEVEMENTS_CONTENT.viewLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </button>
  );
}

// ================= MILESTONE CARD ===============

function MilestoneCard({
  item,
  onOpen,
}: {
  item: AchievementItem;
  onOpen: () => void;
}) {
  const Icon = item.Icon;
  const stat = getStat(item);
  const context = getContext(item);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_-22px_oklch(0.82_0.14_85_/_0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border"
          style={{
            borderColor: tint(item.metadata.badgeColor, 0.3),
            backgroundColor: tint(item.metadata.badgeColor, 0.12),
            color: item.metadata.badgeColor,
          }}
        >
          <Icon className="h-4 w-4" />
        </span>

        <ArrowUpRight className="h-4 w-4 -translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-gold group-hover:opacity-100" />
      </div>

      <h3 className="mt-3 font-display text-sm font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-gold">
        {item.metadata.title}
      </h3>

      {context && (
        <p className="mt-1 truncate text-xs text-muted-foreground">{context}</p>
      )}

      <div className="mt-auto flex items-center gap-2 pt-4">
        <span
          className="max-w-full truncate rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
          style={{
            borderColor: tint(item.metadata.badgeColor, 0.3),
            backgroundColor: tint(item.metadata.badgeColor, 0.1),
            color: item.metadata.badgeColor,
          }}
        >
          {stat.label} {stat.value}
        </span>
      </div>
    </button>
  );
}

// ================= MODAL CONTENT ===============

function ModalContent({
  item,
  onClose,
}: {
  item: AchievementItem;
  onClose: () => void;
}) {
  const Icon = item.Icon;
  const media = item.media[0];

  // YouTube entries store only the video id; images store a bundled URL.
  const previewMedia = () => {
    if (!media) return;

    if (media.type === "video" && media.isYouTube) {
      window.open(`https://www.youtube.com/watch?v=${media.src}`, "_blank");
    } else {
      window.open(media.src, "_blank");
    }
  };

  return (
    <>
      {/* Header: badge left, close right */}
      <div className="flex items-center justify-between p-6">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl border"
          style={{
            borderColor: tint(item.metadata.badgeColor, 0.4),
            backgroundColor: tint(item.metadata.badgeColor, 0.12),
            color: item.metadata.badgeColor,
          }}
        >
          <Icon className="h-5 w-5" />
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label={ACHIEVEMENTS_CONTENT.modal.closeLabel}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-6">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          {item.metadata.date}
        </span>

        <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground">
          {item.metadata.title}
        </h2>
      </div>

      {/* Split: stats | media */}
      <div className="px-6 pb-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            {item.info.map((info) => (
              <div
                key={info.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {info.label}
                </div>
                <div className="mt-1 text-base font-semibold text-foreground">
                  {info.value}
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-full min-h-[220px] overflow-hidden rounded-xl border border-white/10 bg-white/5">
            {!media && (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                {ACHIEVEMENTS_CONTENT.modal.noMediaLabel}
              </div>
            )}

            {media && media.type === "video" && media.isYouTube && (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${media.src}?rel=0`}
                title={media.alt}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {media && !(media.type === "video" && media.isYouTube) && (
              <img
                src={media.src}
                alt={media.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="border-t border-white/10 px-6 py-6">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {ACHIEVEMENTS_CONTENT.modal.aboutLabel}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.about}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row">
        <a
          href={item.links.certificate}
          download
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-[oklch(0.93_0.13_92)] px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          {ACHIEVEMENTS_CONTENT.modal.downloadLabel}
        </a>

        <button
          type="button"
          onClick={previewMedia}
          disabled={!media}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-40"
        >
          <ExternalLink className="h-4 w-4" />
          {ACHIEVEMENTS_CONTENT.modal.previewLabel}
        </button>
      </div>
    </>
  );
}
