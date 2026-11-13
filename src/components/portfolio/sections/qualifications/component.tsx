/**
 * Qualifications — the bento grid of education/certification cards and the
 * detail modal.
 *
 * Content:
 * - Section copy comes from `./content.ts`.
 * - Each card's data comes from its own folder (`./<slug>/index.ts`) and is
 *   auto-discovered by `./index.ts`.
 *
 * To add a card, add a folder with an `index.ts`; no edits to this file.
 */

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Download,
  ExternalLink,
  GraduationCap,
  X,
} from "lucide-react";

import { QUALIFICATIONS, type QualificationItem } from "./index";
import { QUALIFICATIONS_CONTENT } from "./content";

// Matches the modal fade-out duration in `src/styles.css`.
const CLOSE_ANIMATION_MS = 300;

export default function Qualifications() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // ================= MODAL STATE ===============

  const activeItem =
    QUALIFICATIONS.find((item) => item.metadata.id === activeId) ?? null;

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

  // ================= GRID SLOTS ===============

  // The design keeps the title cell in the middle of the second row. Split the
  // sorted list around that slot so any number of folders (0, 3, 6, …) renders
  // without indexing past the end of the array.
  const leadingCards = QUALIFICATIONS.slice(0, 3);
  const fourthCard = QUALIFICATIONS[3];
  const trailingCards = QUALIFICATIONS.slice(4);

  return (
    <section
      id={QUALIFICATIONS_CONTENT.id}
      className="relative overflow-hidden py-10 sm:py-14"
    >
      {/* ================= STAGE GLOW =============== */}

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Indigo aura behind the grid */}
        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.25_280_/_0.16),transparent_65%)] blur-2xl" />

        {/* Gold aura behind the center card */}
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_85_/_0.12),transparent_70%)] blur-2xl" />

        {/* Faint dot matrix */}
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(oklch(1_0_0_/_0.35)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]" />
      </div>

      {/* ================= GRID =============== */}

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadingCards.map((item) => (
            <QualificationCard
              key={item.metadata.id}
              item={item}
              onOpen={() => openItem(item.metadata.id)}
            />
          ))}

          {fourthCard && (
            <QualificationCard
              item={fourthCard}
              onOpen={() => openItem(fourthCard.metadata.id)}
            />
          )}

          <TitleCell />

          {trailingCards.map((item) => (
            <QualificationCard
              key={item.metadata.id}
              item={item}
              onOpen={() => openItem(item.metadata.id)}
            />
          ))}
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
          {/* Translucent blurred backdrop */}
          <div className="absolute inset-0 bg-background/70 backdrop-blur-2xl" />

          <div
            className={`glass-modal relative z-10 max-h-[92vh] w-full max-w-[780px] overflow-y-auto rounded-[2rem] ${
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

// ================= QUALIFICATION CARD ===============

function QualificationCard({
  item,
  onOpen,
}: {
  item: QualificationItem;
  onOpen: () => void;
}) {
  const Icon = item.Icon;
  const isEducation = item.metadata.type === "edu";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06] hover:shadow-[0_20px_55px_-22px_oklch(0.82_0.14_85_/_0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
    >
      {/* Hover sheen sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />

      {/* Ticket corner ticks */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-white/15 transition-colors duration-300 group-hover:border-gold/70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-white/15 transition-colors duration-300 group-hover:border-gold/70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/15 transition-colors duration-300 group-hover:border-gold/70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/15 transition-colors duration-300 group-hover:border-gold/70"
      />

      {/* Ghost year numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-7 -right-2 select-none font-display text-[7rem] font-black leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-gold/10"
      >
        {item.metadata.year}
      </span>

      {/* Icon + year badge */}
      <div className="relative flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary transition-colors duration-300 group-hover:border-gold/40 group-hover:text-gold">
          <Icon className="h-5 w-5" />
        </span>

        <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
          {item.metadata.year}
        </span>
      </div>

      {/* Type */}
      <div className="relative mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isEducation ? "bg-primary" : "bg-accent"
          }`}
        />
        {isEducation
          ? QUALIFICATIONS_CONTENT.card.educationLabel
          : QUALIFICATIONS_CONTENT.card.certificationLabel}
      </div>

      {/* Title */}
      <h3 className="relative mt-2 font-display text-lg font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-gold">
        {item.metadata.title}
      </h3>

      {/* About — reserved space, fades in on hover */}
      <div className="relative mt-3 h-[54px] overflow-hidden opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
        <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
          {item.about}
        </p>
      </div>

      {/* Stat hero */}
      <div className="relative mt-auto flex items-end justify-between gap-3 pt-6">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {item.metadata.stat.label}
          </div>
          <div className="font-display text-3xl font-black leading-none text-foreground transition-colors duration-300 group-hover:text-gold">
            {item.metadata.stat.value}
          </div>
        </div>

        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:text-gold">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}

// ================= CENTER TITLE CELL ===============

function TitleCell() {
  // The title is stored as "& Certifications" so the ampersand can stay gold
  // while the rest keeps the normal white treatment.
  const [titleLead, ...titleRest] = QUALIFICATIONS_CONTENT.title.split(" ");

  return (
    <div className="order-first flex w-full sm:col-span-2 lg:order-none lg:col-span-1">
      <div className="relative flex min-h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gold/30 bg-black p-8 text-center shadow-[0_0_60px_-15px_oklch(0.82_0.14_85_/_0.45)]">
        {/* Gold aura */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.82_0.14_85_/_0.18),transparent_65%)]"
        />

        {/* Inner hairline + corner ticks */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-2 rounded-xl border border-gold/15"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-5 top-5 h-3 w-3 border-l border-t border-gold/50"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-5 top-5 h-3 w-3 border-r border-t border-gold/50"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-5 left-5 h-3 w-3 border-b border-l border-gold/50"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-5 right-5 h-3 w-3 border-b border-r border-gold/50"
        />

        <GraduationCap className="relative h-9 w-9 text-gold drop-shadow-[0_0_18px_oklch(0.82_0.14_85_/_0.7)]" />

        <span className="relative mt-4 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
          {QUALIFICATIONS_CONTENT.eyebrow}
        </span>

        <h2 className="relative mt-4 font-display text-3xl font-black leading-[1.05] tracking-tight text-white xl:text-4xl">
          <span className="text-gold">{titleLead}</span> {titleRest.join(" ")}
        </h2>

        <div className="relative mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
          <span className="h-px w-6 bg-gold/40" />
          {QUALIFICATIONS_CONTENT.range}
          <span className="h-px w-6 bg-gold/40" />
        </div>

        <p className="relative mt-3 max-w-[230px] text-xs leading-relaxed text-white/50">
          {QUALIFICATIONS_CONTENT.subtitle}
        </p>
      </div>
    </div>
  );
}

// ================= MODAL CONTENT ===============

function ModalContent({
  item,
  onClose,
}: {
  item: QualificationItem;
  onClose: () => void;
}) {
  const Icon = item.Icon;
  const isEducation = item.metadata.type === "edu";

  return (
    <>
      {/* Header: icon left, close right */}
      <div className="flex items-center justify-between p-6">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_25px_-8px_oklch(0.82_0.14_85_/_0.7)]">
          <Icon className="h-5 w-5" />
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label={QUALIFICATIONS_CONTENT.modal.closeLabel}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
            {item.metadata.year}
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {isEducation
              ? QUALIFICATIONS_CONTENT.card.educationLabel
              : QUALIFICATIONS_CONTENT.card.certificationLabel}
          </span>
        </div>

        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground">
          {item.metadata.title}
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          {item.metadata.place}
        </p>
      </div>

      {/* Hero stat */}
      <div className="px-6">
        <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-black/60 p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,oklch(0.82_0.14_85_/_0.16),transparent_60%)]"
          />

          <div className="relative flex items-end justify-between gap-4">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                {item.metadata.stat.label}
              </div>
              <div className="mt-1 font-display text-5xl font-black leading-none text-gold">
                {item.metadata.stat.value}
              </div>
            </div>

            <BadgeCheck className="h-8 w-8 shrink-0 text-gold/60" />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="px-6 pt-6">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {QUALIFICATIONS_CONTENT.modal.aboutLabel}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.about}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row">
        <a
          href={item.links.certificate}
          download
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-[oklch(0.93_0.13_92)] px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          {QUALIFICATIONS_CONTENT.modal.downloadLabel}
        </a>

        <a
          href={item.links.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-white/10"
        >
          <ExternalLink className="h-4 w-4" />
          {QUALIFICATIONS_CONTENT.modal.previewLabel}
        </a>
      </div>
    </>
  );
}
