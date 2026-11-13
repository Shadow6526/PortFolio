# Content Guide

Every visible string, link, image, and label lives in a small typed content file.
Components read from those files, so you should never need to edit JSX to change
copy. In development, saving a content file updates the browser through Vite HMR
without a restart.

## Where to edit

| Section | File | What it controls |
| --- | --- | --- |
| Global identity, navbar, socials, contact details, resume, SEO | `src/content/site.ts` | Name, wordmark, logo, nav links, CTA, social URLs, email, phone, location, resume file, Web3Forms key, page metadata |
| Navbar | `src/content/site.ts` | Brand, links, CTA label, mobile-menu label |
| Hero | `src/content/hero.ts` | Eyebrow, greeting, name, role line, description, CTA labels, coding profiles, portrait alt/stat |
| About | `src/content/about.ts` | Header, story paragraphs, badges, skill groups |
| Qualifications | `src/components/portfolio/sections/qualifications/content.ts` | Header, title cell, card type labels, modal labels |
| Qualification cards | `src/components/portfolio/sections/qualifications/<slug>/index.ts` | One card: metadata, icon, description, certificate |
| Achievements | `src/components/portfolio/sections/achievements/content.ts` | Header, summary labels, spotlight/modal labels |
| Achievement cards | `src/components/portfolio/sections/achievements/<slug>/index.ts` | One achievement: metadata, icon, description, stat rows, media, certificate |
| Projects | `src/components/portfolio/sections/projects/content.ts` | Header, count/carousel labels, action labels, platform names |
| Project slides | `src/components/portfolio/sections/projects/<slug>/index.ts` | One project: metadata, screenshot, description, tech, links |
| Contact | `src/content/contact.ts` | Header, availability, info rail, intent chips, form labels/placeholders, feedback messages, field styling |
| Contact details | `src/content/site.ts` | Email, phone, location, timezone, social URLs |
| Footer | `src/content/footer.ts` | Description, column labels, copyright template |

Shared portfolio chrome lives in:

- `src/components/portfolio/Portfolio.tsx` — page composition only.
- `src/components/portfolio/sections/<section>/component.tsx` — markup/behavior.
- `src/components/portfolio/brand-icons.tsx` — Codeforces/LeetCode/CodeChef/AtCoder and platform SVGs.

## Common tasks

### Add a qualification card

1. Copy an existing folder under `src/components/portfolio/sections/qualifications/`.
2. Rename the folder and change `metadata.id` to a new unique slug.
3. Set `metadata.sortOrder`; lower numbers appear earlier.
4. Edit `title`, `year`, `place`, `stat`, `type` (`edu` or `cert`), and `about`.
5. Keep `links.certificate: resumePdf` or import another PDF.
6. No barrel edit is needed.

### Add an achievement

1. Copy an existing folder under `src/components/portfolio/sections/achievements/`.
2. Rename the folder and set a unique `metadata.id`.
3. Set `metadata.date`, `metadata.badgeColor`, and `metadata.sortOrder`.
4. The first three achievements by `sortOrder` form the spotlight row; the rest
   are grouped by `metadata.date`.
5. Edit `info` rows, `media` (import images from `@/assets/...`), and `about`.
6. No barrel edit is needed.

### Add a project

1. Copy an existing folder under `src/components/portfolio/sections/projects/`.
2. Rename the folder and set a unique `metadata.id` and `metadata.sortOrder`.
3. Import a screenshot from `@/assets/...` and assign it to `Icon`.
4. Set `flg` to `1` for a downloadable app or `0` for a live demo.
5. Edit `name`, `about`, `tech`, and `links`. Use `""` for missing platform
   links; they are hidden automatically.
6. No barrel edit is needed.

### Change contact details

Edit `SITE.contact` in `src/content/site.ts`. The hero, contact rail, footer,
mail link, phone link, and copy button all read the same values.

### Change hero text

Edit `src/content/hero.ts`. The portrait image and its alt text are also there.

### Remove a card or project

Delete its folder. The section barrel auto-discovers folders, so the card
disappears without any other edits.

## Notes

- Item order is always `metadata.sortOrder` ascending.
- `metadata.id` must be unique; it is also the React key.
- Images and PDFs are imported (not string paths) so Vite fingerprints them and
  they cannot 404.
- The contact form posts to Web3Forms using `SITE.web3forms`; keep the access key
  there rather than in the component.
