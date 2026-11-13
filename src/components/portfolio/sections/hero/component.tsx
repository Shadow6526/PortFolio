/**
 * Hero — the landing section with the headline, resume actions, coding-profile
 * dropdown, social links, and the tilting portrait card.
 *
 * Content comes from `src/content/hero.ts` and `src/content/site.ts`.
 */

import type { MouseEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  Eye,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HERO } from "@/content/hero";
import { SITE } from "@/content/site";

// ================= TILT HELPERS ===============

// Mouse-follow 3D tilt for the portrait card. Kept as plain DOM style writes so
// it does not trigger a React render on every pointer move.
const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const width = rect.width;
  const height = rect.height;

  const percentX = x / width - 0.5;
  const percentY = y / height - 0.5;

  const rotateY = percentX * 22;
  const rotateX = -percentY * 22;

  element.style.transition = "none";
  element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.025)`;

  const shine = element.querySelector(".shine-overlay") as HTMLDivElement;
  if (shine) {
    shine.style.transition = "none";
    shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`;
    shine.style.opacity = "1";
  }
};

const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
  const element = event.currentTarget;
  element.style.transition =
    "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease";
  element.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";

  const shine = element.querySelector(".shine-overlay") as HTMLDivElement;
  if (shine) {
    shine.style.transition = "opacity 0.5s ease-out";
    shine.style.opacity = "0";
  }
};

// ================= SOCIAL ORDER ===============

// Hero has always shown GitHub first; Contact and Footer use the canonical
// `SITE.socials` order. Unknown socials keep their relative order at the end.
const HERO_SOCIALS = [...SITE.socials].sort((a, b) => {
  const order: readonly string[] = HERO.socialOrder;
  const rank = (label: string) => {
    const index = order.indexOf(label);
    return index === -1 ? order.length : index;
  };

  return rank(a.label) - rank(b.label);
});

// ================= SECTION ===============

export default function Hero() {
  return (
    <section id={HERO.id} className="relative pb-10 pt-32 sm:pb-14 sm:pt-40">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 px-6 sm:px-12 md:grid-cols-[1.1fr_1fr]">
        {/* ================= COPY =============== */}

        <div className="animate-fade-in">
          <div className="eyebrow-pill mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold tracking-widest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>

            {HERO.eyebrow}
          </div>

          <h1 className="font-display text-6xl font-bold leading-[1] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            {HERO.greeting} <span className="hero-name">{HERO.name}</span>
          </h1>

          <p className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            <span className="text-accent-subtitle">{HERO.roles}</span>
          </p>

          <p className="mt-8 max-w-[650px] text-lg leading-relaxed text-muted-foreground">
            {HERO.description}
          </p>

          {/* ================= ACTIONS =============== */}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              asChild
              className="gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <a
                href={SITE.resume.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="mr-2 h-4 w-4" />
                {HERO.actions.viewResume}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="glass border-white/10 hover:bg-white/10"
            >
              <a href={SITE.resume.file} download={SITE.resume.downloadName}>
                <Download className="mr-2 h-4 w-4" />
                {HERO.actions.downloadResume}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass border-white/10 hover:bg-white/10"
            >
              {HERO.actions.viewWork}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            {/* ================= CODING PROFILES =============== */}

            <div className="group relative">
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/10 transition-all duration-300 hover:border-primary/40 hover:bg-white/10"
              >
                <Code2 className="mr-2 h-4 w-4" />
                {HERO.codingProfilesLabel}
                <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </Button>

              <div className="pointer-events-none absolute left-0 top-full z-50 mt-2 min-w-[220px] translate-y-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="glass rounded-2xl border border-white/10 p-2 shadow-[0_20px_60px_-10px_oklch(0_0_0_/_0.6),0_0_30px_oklch(0.65_0.25_280_/_0.15)]">
                  {HERO.codingProfiles.map((profile) => {
                    const ProfileIcon = profile.Icon;

                    return (
                      <a
                        key={profile.name}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-white/5"
                      >
                        <span
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-glow"
                          style={{
                            background: `${profile.color}22`,
                            color: profile.color,
                            border: `1px solid ${profile.color}44`,
                            boxShadow: `0 0 0 0 ${profile.color}`,
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.boxShadow = `0 0 12px ${profile.color}66`;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.boxShadow = `0 0 0 0 ${profile.color}`;
                          }}
                        >
                          <ProfileIcon className="h-4 w-4" />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover/item:text-primary">
                            {profile.name}
                          </div>

                          <div className="text-xs text-muted-foreground">
                            {profile.rating}
                          </div>
                        </div>

                        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ================= SOCIALS =============== */}

          <div className="mt-10 flex items-center gap-6">
            {HERO_SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-block text-muted-foreground transition hover:scale-110 hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* ================= PORTRAIT =============== */}

        <div className="relative mx-auto w-full max-w-[560px] animate-scale-in md:ml-auto md:mr-0">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-full opacity-60 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div
            className="glass-card-3d relative cursor-pointer rounded-[2.5rem] p-3 shadow-glow"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="shine-overlay pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300" />

            <div className="relative overflow-hidden rounded-[2rem] [transform-style:preserve-3d]">
              <img
                src={HERO.profile.image}
                alt={HERO.profile.alt}
                width={1024}
                height={1024}
                className="h-auto w-full rounded-[1.75rem] object-cover [transform:translateZ(20px)]"
              />
            </div>

            <div className="glass absolute -bottom-6 -left-6 flex animate-fade-in items-center gap-4 rounded-[1.5rem] px-5 py-4 shadow-glow [transform:translateZ(45px)] [transform-style:preserve-3d]">
              <span className="grid h-12 w-12 place-items-center rounded-[1rem] gradient-primary text-primary-foreground">
                <Sparkles className="h-6 w-6" />
              </span>

              <div>
                <div className="text-base font-semibold">
                  {HERO.profile.stat.value}
                </div>

                <div className="text-sm text-muted-foreground">
                  {HERO.profile.stat.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
