/**
 * BackgroundBlobs — four fixed, slowly drifting color fields behind the page.
 *
 * Purely decorative (`aria-hidden`). Animation classes and keyframes live in
 * `src/styles.css` (`animate-blob-1/2/3`).
 */
export default function BackgroundBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      aria-hidden
    >
      {/* Deep Indigo blob — top left */}
      <div
        className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] rounded-full blur-[120px] animate-blob-1"
        style={{
          background: "oklch(0.65 0.25 280 / 0.35)",
          animationDelay: "0s",
        }}
      />
      {/* Frost Cyan blob — top right */}
      <div
        className="absolute top-[5%] right-[-15%] w-[700px] h-[700px] rounded-full blur-[140px] animate-blob-2"
        style={{
          background: "oklch(0.85 0.18 160 / 0.3)",
          animationDelay: "-8s",
        }}
      />
      {/* Violet blob — bottom left */}
      <div
        className="absolute bottom-[-15%] left-[5%] w-[650px] h-[650px] rounded-full blur-[130px] animate-blob-3"
        style={{
          background: "oklch(0.7 0.2 200 / 0.3)",
          animationDelay: "-4s",
        }}
      />
      {/* Warm accent blob — center right */}
      <div
        className="absolute top-[45%] right-[25%] w-[450px] h-[450px] rounded-full blur-[100px] animate-blob-1"
        style={{
          background: "oklch(0.75 0.18 60 / 0.25)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
