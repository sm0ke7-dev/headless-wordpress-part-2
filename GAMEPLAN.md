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
- **✅ Featured image on service/location detail pages** — code path confirmed correct (`getFeaturedImageUrl` → page → index → Header64). Posts simply don't have featured images set in WP yet. Content task: assign images in WP admin per service/location post. No code changes needed.
- **⬜ Layout520/367/423 card images (homepage)** — ACF group fields defined in `acf-import.json` (pending import). Once imported + populated in WP, placeholder fallbacks will be replaced by real images.

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
- ~~**Featured image on service/location detail pages** — code path confirmed correct. Posts simply don't have featured images set in WP yet. Content task: assign images in WP admin. No code changes needed.~~ — DONE
- ⬜ **Layout520/367/423 group fields** — `acf-import.json` ready to upload. Import → populate in WP → test.
- ⬜ **ISR revalidate set to 5s for dev** — bump back to 60 (or higher) before deploy. `lib/wp.ts:39`.
- ~~Testimonial22 section headings — wired from `data?.testimonials_section_heading` / `_subheading` — DONE~~
- ~~Team5 section headings + "Join us" block — wired from `data?.team_section_*` / `team_join_*` — DONE~~
- ~~**Layout520 "Learn more" buttons** — added `link` sub-fields to feature_1/2/3 in `acf-import.json`, wired buttons in `Layout520.jsx`. Same pattern as service cards.~~ — DONE
- ~~**Footer9 all links** — consolidated into shared `components/Footer9.jsx` and wired to ACF Options Page (`site-settings`). All 6 pages now fetch global settings and pass to footer. See `acf-import-global-settings.json` for field structure.~~ — DONE
- ~~**Full button wiring sweep** — all remaining unwired buttons across service-single and location-single pages are now linked via ACF URL fields. Two patterns applied consistently: `asChild` + child `<a>` for buttons without `iconRight`; wrapper `<a>` for `iconRight` buttons. Files touched: `service-(single)/Cta31`, `Layout22`, `Layout356`, `Faq4`; `location-(single)/Layout503` (header + per-tab). `create-wp-posts.js` updated with `cta_primary_button_url` / `cta_secondary_button_url` for all service + location posts.~~ — DONE

### Phase 4 — ✅ Complete
- `generateMetadata` on all 6 page routes (title, description, OG, Twitter, canonical)
- `generateStaticParams` on dynamic routes (`services/[slug]`, `locations/[slug]`)
- JSON-LD: `LocalBusiness` (home + location pages), `Service` (service detail), `FAQPage` (service detail), `BreadcrumbList` (all pages) — helpers in `lib/json-ld.ts`
- `app/sitemap.ts` — dynamic, pulls services + locations from WP
- `app/robots.ts` — allows `/`, disallows `/api/` and `/admin/`
- Heading audit: fixed 2 rogue H1s (Layout503.jsx → H2, Layout356.jsx → H3). One H1 per page confirmed.
- **⬜ Deferred — JSON-LD schema wiring to ACF:** `LocalBusiness` (homepage), `Service` (provider name), and some `LocalBusiness` fallbacks in `lib/json-ld.ts` are still hardcoded. These need to be wired to the corresponding ACF fields. Not a priority — revisit after Phase 5 + 6.

### Phase 5 — ✅ Complete
- `home/components/Navbar8.jsx` — mobile CTA buttons "Button" → "Call" / "Book" — DONE
- 5× `Header64.jsx` (about-us, services, service-single, locations, location-single) — Book + Call buttons added — DONE
- `services/components/Cta31.jsx` — fallback defaults → "Book an Evaluation" / "Call Now" — DONE
- `location-(single)/components/Contact6.jsx` — RadioGroup IDs fixed, Select options replaced, email/phone wired as mailto/tel links — DONE
- **Brand color palette** — Deep teal (#0B4A4A) applied to conversion-focused sections. `tailwind.config.ts` updated with brand tokens. Teal backgrounds added to: Navbar8, Layout520 (features), all Cta31 components (home, services, about-us, locations), and Team5 sections (home, about-us). Creates visual rhythm with alternating white/teal sections. — DONE

### Phase 6 — ⬜ Not Started
Core Web Vitals, image optimization, animation perf check, cross-browser smoke test.
