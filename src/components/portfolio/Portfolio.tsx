/**
 * Portfolio page shell.
 *
 * This file intentionally contains no section copy. Each section owns its
 * markup under `sections/`, and every editable string lives in `src/content/`
 * or in a section's per-item folder.
 *
 * Render order is the page order: Navbar → Hero → About → Qualifications →
 * Achievements → Projects → Contact → Footer.
 */

import BackgroundBlobs from "./BackgroundBlobs";
import CanvasParticles from "./CanvasParticles";
import About from "./sections/about/component";
import Achievements from "./sections/achievements/component";
import Contact from "./sections/contact/component";
import Footer from "./sections/footer/component";
import Hero from "./sections/hero/component";
import Navbar from "./sections/navbar/component";
import Projects from "./sections/projects/component";
import Qualifications from "./sections/qualifications/component";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      {/* ================= AMBIENT BACKGROUND =============== */}

      <BackgroundBlobs />
      <CanvasParticles />

      {/* Faint fixed dot matrix over the whole page */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(1 0 0 / 0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ================= PAGE =============== */}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Qualifications />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
