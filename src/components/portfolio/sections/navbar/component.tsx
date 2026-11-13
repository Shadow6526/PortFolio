/**
 * Navbar — fixed, auto-hiding navigation with desktop links and a mobile menu.
 *
 * Content comes from `src/content/site.ts`; this file only owns behavior and
 * markup. Section targets are the `id` values on each `<section>`.
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  // ================= AUTO-HIDE ===============

  // Hide while scrolling down, reveal as soon as the user scrolls up.
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ================= NAVIGATION ===============

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "py-2" : "py-4"}`}
    >
      <nav
        className={`flex w-full max-w-[1300px] items-center justify-between px-4 transition-all duration-300 sm:px-6 md:grid md:grid-cols-3 ${
          scrolled ? "glass mx-4 rounded-2xl py-2 md:mx-auto" : "mx-auto"
        }`}
      >
        {/* ================= BRAND =============== */}

        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 justify-self-start font-display text-xl font-bold"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 shadow-glow">
            <img
              src={SITE.logo}
              alt={SITE.logoAlt}
              className="h-full w-full object-cover"
            />
          </span>

          <span className="hidden gradient-text sm:inline">
            {SITE.brandName}
          </span>
        </button>

        {/* ================= DESKTOP LINKS =============== */}

        <ul className="hidden items-center gap-1 md:flex md:justify-self-center">
          {SITE.nav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ================= DESKTOP CTA + MOBILE TOGGLE =============== */}

        <div className="flex items-center justify-end justify-self-end">
          <Button
            onClick={() => go("contact")}
            className="hidden h-10 gradient-primary px-5 text-base text-primary-foreground shadow-glow hover:opacity-90 md:inline-flex"
          >
            {SITE.navCta} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <button
            onClick={() => setOpen((value) => !value)}
            className="glass rounded-lg p-2 md:hidden"
            aria-label={SITE.menuLabel}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU =============== */}

      {open && (
        <div className="mx-4 mt-2 md:hidden">
          <div className="glass animate-fade-in rounded-2xl p-4">
            <ul className="flex flex-col gap-1">
              {SITE.nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
