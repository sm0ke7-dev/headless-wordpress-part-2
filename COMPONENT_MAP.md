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

## Known Bugs (fix during content wiring)

| Bug | Where |
|---|---|
| Social icon/label mismatches + conflicting copyright years (2024 vs 2025) | Footer9 — all 6 pages |
| Mobile menu has generic placeholder links ("Link One" etc.) | Navbar8 — all 6 pages |
| RadioGroupItem `value` props not unique (5 of 6 share `"First choice"`) | Contact6 — `location-(single)/` |
| Desktop hover descriptions are Lorem ipsum | Layout423 — `home/`, `services/`, `service-(single)/` |
| All 3 sticky step sections share identical body copy | Layout356 — `service-(single)/` |
| All 3 tab contents are identical placeholder | Layout503 — `location-(single)/` |
