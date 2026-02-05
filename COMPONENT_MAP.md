# Component Map

| Page | Components |
|---|---|
| `home/` | Navbar8, Header84, Layout520, Layout367, Layout423, Testimonial22, Team5, Cta31, Footer9 |
| `about-us/` | Navbar8, Header64, Layout19, Layout522, Team5, Stats26, Testimonial22, Cta31, Footer9 |
| `locations/` | Navbar8, Header64, Faq4, Cta31, Footer9 |
| `location-(single)/` | Navbar8, Header64, Layout503, Team5, Gallery18, Contact19, Contact6, Footer9 |
| `services/` | Navbar8, Header64, Layout423, Layout525, Testimonial22, Cta31, Footer9 |
| `service-(single)/` | Navbar8, Header64, Layout22, Layout423, Layout356, Testimonial22, Cta31, Faq4, Footer9 |

## Page Classification

| Page | Type | Content Source |
|---|---|---|
| `home` | Static | WP Options / Pages |
| `about-us` | Static | WP Options / Pages |
| `locations` | Plural | WP CPT query (all locations) |
| `location-(single)` | Dynamic | WP CPT single (by slug) |
| `services` | Plural | WP CPT query (all services) |
| `service-(single)` | Dynamic | WP CPT single (by slug) |

## Homepage ACF Audit

Components already reading from `pageData.acf` — fields need to exist on the **Homepage Options Page** in WP. Repeaters marked with ×N = number of items expected.

| Component | Status | ACF fields needed | Notes |
|---|---|---|---|
| **Header84** | ✅ Done | `hero_primary_button_text`, `hero_secondary_button_text` | Body + featured image use WP native fields |
| **Layout520** | ✅ ACF defined — pending import | `features_section_eyebrow/heading/description`, `feature_1/2/3` groups (heading, description, image, icon) | Code reads `[data?.feature_1, …].filter(Boolean)` |
| **Layout367** | ✅ ACF defined — pending import | `process_section_eyebrow/heading/description`, `process_step_1/2/3` groups (heading, description, icon, button_text, eyebrow, image) | Step 3 image is optional |
| **Layout423** | ✅ ACF defined — pending import | `treatments_section_eyebrow/heading/description`, `treatment_1/2/3` groups (eyebrow, heading, description, image, link) | Links should point to service detail pages |
| **Cta31** | ⬜ Needs ACF | `cta_heading`, `cta_description`, `cta_primary_button_text`, `cta_secondary_button_text`, `cta_image` | Single image, no repeater |
| **Testimonial22** | ✅ Done | — | Pulls from `testimonial` CPT (ACF already built Phase 1) |
| **Team5** | ✅ Done | — | Pulls from `team_member` CPT (ACF already built Phase 1) |
| **Navbar8** | ⬜ Code fix | — | Mobile dropdown is Lorem ipsum; mobile CTAs say "Button". No ACF needed. |
| **Footer9** | ⬜ Code fix | — | Fully hardcoded. No data prop. |

**Total: 9 numbered groups + ~15 simple text/image fields** across 4 components. All defined in `acf-import.json` — upload via ACF Tools → Import.

## Known Bugs (fix during content wiring)

| Bug | Where |
|---|---|
| Social icon/label mismatches + conflicting copyright years (2024 vs 2025) | Footer9 — all 6 pages |
| Mobile menu has generic placeholder links ("Link One" etc.) | Navbar8 — all 6 pages |
| RadioGroupItem `value` props not unique (5 of 6 share `"First choice"`) | Contact6 — `location-(single)/` |
| Desktop hover descriptions are Lorem ipsum | Layout423 — `home/`, `services/`, `service-(single)/` |
| All 3 sticky step sections share identical body copy | Layout356 — `service-(single)/` |
| All 3 tab contents are identical placeholder | Layout503 — `location-(single)/` |
