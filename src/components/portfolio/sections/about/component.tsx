/**
 * About — the "Who I Am" story card and the technical-skills card.
 *
 * Content comes from `src/content/about.ts`. Add a badge or skill by editing
 * the arrays in that file; no JSX changes are needed.
 */

import { Badge } from "@/components/ui/badge";
import { ABOUT } from "@/content/about";

// ================= SECTION HEADER ===============

// Small local header used only by About. Other sections have custom headers.
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <div className="eyebrow-pill mb-4 inline-flex rounded-full px-3 py-1">
        {eyebrow}
      </div>

      <h2 className="font-display text-4xl font-bold sm:text-5xl">
        <span className="gradient-text animate-text-shine">{title}</span>
      </h2>

      {subtitle && <p className="mt-3">{subtitle}</p>}
    </div>
  );
}

// ================= SECTION ===============

export default function About() {
  return (
    <section id={ABOUT.id} className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-12">
        <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.title} />

        <div className="grid gap-8 md:grid-cols-2">
          {/* ================= STORY CARD =============== */}

          <div className="contact-glass-card rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold">
              {ABOUT.cardTitle}
            </h3>

            {ABOUT.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="mt-4 leading-relaxed text-muted-foreground"
              >
                {paragraph.map((segment, segmentIndex) =>
                  segment.emphasis ? (
                    <span
                      key={segmentIndex}
                      className="font-semibold text-foreground"
                    >
                      {segment.text}
                    </span>
                  ) : (
                    <span key={segmentIndex}>{segment.text}</span>
                  ),
                )}
              </p>
            ))}

            <div className="mt-6 flex flex-wrap gap-2">
              {ABOUT.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="glass border-white/10 text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/10"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* ================= SKILLS CARD =============== */}

          <div className="contact-glass-card rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold">
              {ABOUT.skillsTitle}
            </h3>

            <div className="mt-6 space-y-6">
              {ABOUT.skills.map((category) => (
                <div key={category.title}>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    {category.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="glass border-white/10 px-3 py-1 text-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
