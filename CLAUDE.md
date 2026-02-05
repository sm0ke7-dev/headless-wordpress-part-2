## Reference Docs

Always read `GAMEPLAN.md` and `COMPONENT_MAP.md` at the start of a session to understand where the project is. These are the source of truth for scope and progress.

When a task is completed, update `GAMEPLAN.md` inline — a short note like `— DONE` next to the relevant item. Keep it minimal, just enough so a future session can orient quickly without reading code.

## Relume Template Preservation Rule

The Relume UI components are the design foundation. A designer will restyle them into the final product. Our role is strictly to wire the existing text and image placeholders into headless WordPress via ACF / REST API — not to redesign or restructure the components.

**Do:**
- Replace hardcoded strings with `data?.acf_field_name || "sensible fallback"` pattern
- Wire `<img src>` attributes to ACF image fields or WP featured images (`getFeaturedImageUrl`)
- Fix broken props, IDs, or values (bug fixes)
- Add data fetching and prop drilling (page.tsx → index.jsx → component)

**Do not:**
- Add new JSX elements, sections, or layout blocks that aren't already in the Relume component
- Change or add Tailwind classes / grid / flex layout
- Reorder or remove components from a page
- Add buttons, cards, icons, or other UI that the original Relume template doesn't already have

If a conversion need (e.g. a missing CTA) isn't covered by the existing template, flag it for the designer — don't add it yourself.

## No Assumptions on URLs, Slugs, and Routes

Never guess or infer slugs, hrefs, route paths, or link targets. This includes service slugs, location slugs, social media URLs, legal page URLs, or any other link destination.

- If the data is available in the codebase (e.g. WP REST API responses, existing fetch helpers, page.tsx files that already fetch and expose slugs), look it up before writing the link.
- If it requires information we don't have (e.g. social media handles, real slugs from WP, legal page URLs), ask the user before writing the code — do not use placeholder values like `#` or made-up slugs.

landing page sections*****
### Begin sales components
hero section
features
benefit
cta
### End sales components
### Begin SEO components
blog section=wordpress post body
### End SEO Components
### Begin Final CTA component
cta
### End Final CTA Components

