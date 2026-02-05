# Gameplan — Sexy, Conversion-Focused, SEO-Ready Landing Page

## Phase 1 — WordPress Content Architecture

Define everything that needs to be editable. This is the data model.

- ~~CPTs: `service`, `location`, `testimonial`, `team_member`~~
- ~~ACF field groups per CPT (text, images, repeaters for FAQ items / treatment steps / gallery)~~
- ~~Static page content via ACF Options Pages — homepage hero copy, about story, stats numbers, CTA text. Everything with words.~~
- ~~SEO fields on every CPT + every page: meta title, meta description, og image — all editable in WP dashboard~~

## Phase 2 — Next.js + Data Layer

- ~~Confirm/set up Next.js App Router project structure~~
- ~~WP REST API integration with typed fetch helpers~~
- ~~ISR strategy: static pages revalidate on a timer, dynamic/plural pages revalidate on demand~~
- ~~`.env` for WP endpoint so it's environment-aware~~

## Phase 3 — Content Wiring + Bug Fixes

~~The biggest phase. Every hardcoded string becomes a prop fed from WP. Go page by page, component by component. All known bugs get fixed in this same pass — no Lorem ipsum, no broken nav links, no duplicate RadioGroup values, no mismatched icons. Images route through WP Media Library.~~

~~See `COMPONENT_MAP.md` for the full bug list and component-per-page breakdown.~~

- ~~ACF-based structured content wiring (headings, descriptions, buttons, images)~~
- ~~Wire native post body + featured image — homepage fully done. `content.rendered` renders via `.wp-content` class, featured image pulls from `_embedded` via `getFeaturedImageUrl`.~~
- **⬜ Featured image on service/location detail pages** — props are wired end-to-end (`getFeaturedImageUrl` → page → index → Header64) but image not rendering. Needs investigation next session.
- **⬜ Layout520 feature card images (homepage)** — 3 cards use dead Relume placeholder URLs. Need ACF repeater field `features` with an image per item, then wire `data.features` array through to the component (already checks for it on line 36).

## Phase 4 — SEO Layer

- ~~Next.js `Metadata` API: dynamic title / description / og per page, all sourced from WP~~
- ~~JSON-LD structured data: `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`~~
- ~~Audit heading hierarchy — one H1 per page, logical H2/H3 nesting (some components currently stack H2s)~~
- ~~XML sitemap generation~~
- ~~Canonical URLs on every page~~

## Phase 5 — Conversion Polish

- Audit CTA placement on every page — Book / Call needs to be reachable without scrolling on mobile
- Homepage hero: tighten the value prop, make the primary CTA impossible to miss
- Position testimonials and stats close to CTAs (trust signal → action)
- Contact form: fix the RadioGroup, tighten the flow, make sure submit feels good
- Mobile walkthrough — verify every conversion path works on touch

## Phase 6 — Performance + Launch Prep

- Core Web Vitals audit (LCP, CLS, INP)
- Image optimization: WebP, proper sizing, lazy load below the fold
- Verify Framer Motion animations aren't tanking paint performance
- Cross-browser smoke test

---

## Notes

- **Phases 1–3 are sequential and dependent.** Data model has to exist before Next.js can fetch it, and fetching has to work before wiring makes sense.
- **Phase 4 and 5 can overlap.** SEO and conversion work don't block each other.
- **"Sexy" in this context** = no placeholder anything visible to users, intentional copy, consistent visual rhythm, animations that feel purposeful. The Relume components are a solid base — it's mostly about making sure nothing looks unfinished.

---

## Progress Log

### Phase 1 — ✅ Complete
WordPress CPTs, ACF field groups, SEO fields, Options Pages all in place.

### Phase 2 — ✅ Complete
App Router project structure confirmed. `lib/wp.ts` fetch helpers with ISR (60s revalidation). `.env` for WP endpoint.

### Phase 3 — 🔶 Partially Complete
- ~~All hardcoded strings converted to props sourced from WP. Every page component accepts and drills data. Known bugs fixed (nav links, RadioGroup duplicates, icon mismatches).~~
- ~~Homepage native body + featured image — fully wired and working. `.wp-content` styles centralized in `globals.css` with fluid `clamp()` heading sizes. Fixed `source_url` bug in `getFeaturedImageUrl`.~~
- ~~Navbar8 consolidated into shared `components/Navbar8.jsx`.~~
- ⬜ **Featured image on service/location detail pages** — wiring is in place but image not rendering. Debug next session.
- ⬜ **Layout520 feature card images** — dead placeholder URLs. Need ACF repeater + wiring.
- ⬜ **ISR revalidate set to 5s for dev** — bump back to 60 (or higher) before deploy. `lib/wp.ts:39`.

### Phase 4 — ✅ Complete
- `generateMetadata` on all 6 page routes (title, description, OG, Twitter, canonical)
- `generateStaticParams` on dynamic routes (`services/[slug]`, `locations/[slug]`)
- JSON-LD: `LocalBusiness` (home + location pages), `Service` (service detail), `FAQPage` (service detail), `BreadcrumbList` (all pages) — helpers in `lib/json-ld.ts`
- `app/sitemap.ts` — dynamic, pulls services + locations from WP
- `app/robots.ts` — allows `/`, disallows `/api/` and `/admin/`
- Heading audit: fixed 2 rogue H1s (Layout503.jsx → H2, Layout356.jsx → H3). One H1 per page confirmed.
- **⬜ Deferred — JSON-LD schema wiring to ACF:** `LocalBusiness` (homepage), `Service` (provider name), and some `LocalBusiness` fallbacks in `lib/json-ld.ts` are still hardcoded. These need to be wired to the corresponding ACF fields. Not a priority — revisit after Phase 5 + 6.

### Phase 5 — 🔶 In Progress
Audit complete. 8 files, 10 changes pending:
- `home/components/Navbar8.jsx` — mobile CTA buttons still say "Button" (should be Call / Book)
- 5× `Header64.jsx` (about-us, services, service-single, locations, location-single) — missing above-fold CTAs, need Book + Call buttons added
- `services/components/Cta31.jsx` — fallback defaults "Evaluate" / "Insurance" → "Book an Evaluation" / "Call Now"
- `location-(single)/components/Contact6.jsx` — 3 fixes: RadioGroup IDs have broken `#` prefix, Select has placeholder options, email/phone not clickable links

### Phase 6 — ⬜ Not Started
Core Web Vitals, image optimization, animation perf check, cross-browser smoke test.
