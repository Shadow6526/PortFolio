/**
 * Footer — brand summary, quick links, contact rows, and copyright.
 *
 * Content comes from `src/content/footer.ts` and `src/content/site.ts`.
 */

import { Mail, MapPin, Phone } from "lucide-react";

import { FOOTER } from "@/content/footer";
import { SITE } from "@/content/site";

export default function Footer() {
  // Shared scroll helper for the quick links.
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const copyright = FOOTER.copyrightTemplate.replace(
    "{year}",
    String(new Date().getFullYear()),
  );

  return (
    <footer className="mt-10 border-t border-white/5 py-12">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-4 sm:grid-cols-3 sm:px-6">
        {/* ================= BRAND =============== */}

        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary text-primary-foreground">
              {SITE.brandName.charAt(0)}
            </span>

            <span className="gradient-text font-display text-lg font-bold">
              {SITE.brandName}
            </span>
          </div>

          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {FOOTER.description}
          </p>

          <div className="mt-4 flex gap-3">
            {SITE.socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid h-9 w-9 place-items-center rounded-lg transition hover:scale-110 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ================= QUICK LINKS =============== */}

        <div>
          <div className="text-sm font-semibold">{FOOTER.quickLinksLabel}</div>

          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {SITE.nav.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className="transition hover:text-foreground"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT =============== */}

        <div>
          <div className="text-sm font-semibold">{FOOTER.contactLabel}</div>

          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> {SITE.contact.email}
            </li>

            <li className="flex items-center gap-2">
              {/* Footer keeps the raw number; the contact rail uses the
                  spaced display format. */}
              <Phone className="h-4 w-4" /> {SITE.contact.phone}
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {SITE.contact.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1300px] border-t border-white/5 px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6">
        {copyright}
      </div>
    </footer>
  );
}
