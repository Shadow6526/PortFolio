/**
 * Brand and platform SVG icons used by the hero coding-profile dropdown and
 * the project platform buttons.
 *
 * These live in one file so the same logo is never copied into two components.
 * Each icon accepts normal SVG props, so callers can set size/class.
 */

import type { SVGProps } from "react";

// ================= TYPES ===============

type BrandIconProps = SVGProps<SVGSVGElement>;

// ================= CODING PROFILES ===============

/** Codeforces logo. */
export function CodeforcesIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
    </svg>
  );
}

/** LeetCode logo. */
export function LeetCodeIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

/** CodeChef logo. */
export function CodeChefIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M11.257.004C5.23.264.171 5.25.008 11.306c-.173 6.341 4.868 11.6 11.15 11.69 6.37.09 11.636-5.047 11.636-11.43C22.794 5.126 17.558-.256 11.257.004zM8.49 15.857c-2.233-.1-3.93-1.986-3.811-4.229.116-2.213 2.03-3.907 4.22-3.798 2.17.108 3.835 1.967 3.748 4.147-.086 2.16-1.944 3.98-4.157 3.88zm6.89.28c-2.233-.1-3.93-1.986-3.811-4.229.116-2.213 2.03-3.907 4.22-3.798 2.17.108 3.835 1.967 3.748 4.147-.086 2.16-1.944 3.98-4.157 3.88z" />
    </svg>
  );
}

/** AtCoder logo. */
export function AtCoderIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5l7.5 13H4.5L12 4.5z" />
    </svg>
  );
}

// ================= PROJECT PLATFORMS ===============

/** Terminal-style Linux mark used on download buttons. */
export function LinuxIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

/** Windows logo. */
export function WindowsIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.101zM11.25 1.899L24 0v11.55H11.25V1.899zM24 12.45V24l-12.75-1.9v-9.65H24z" />
    </svg>
  );
}

/** Apple logo. */
export function AppleIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.58 2.96-1.4z" />
    </svg>
  );
}

/** Android robot mark. */
export function AndroidIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M6 18c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5zm3.5 2.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-9.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v9.5zm5 0c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-9.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v9.5zm5.5-2.25c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5zM12 5C8.69 5 6 7.69 6 11h12c0-3.31-2.69-6-6-6zm3-3c-.28 0-.5.22-.5.5v1.2c-.77-.32-1.61-.5-2.5-.5s-1.73.18-2.5.5V2.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.6C7.26 5.05 6 6.87 6 9h12c0-2.13-1.26-3.95-3-4.9V2.5c0-.28-.22-.5-.5-.5z" />
    </svg>
  );
}
