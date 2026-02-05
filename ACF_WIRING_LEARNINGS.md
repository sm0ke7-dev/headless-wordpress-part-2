# ACF Wiring Learnings & Patterns

## Overview
Process for wiring Relume UI landing page components to WordPress via ACF Free plugin and REST API.

## Core Workflow

### 1. Discovery Phase
- Read `{page}/index.jsx` to identify all components used on the page
- Read each component file to understand:
  - What data props it expects
  - Default/fallback values
  - Data structure (simple fields vs arrays/groups)
  - Whether native WP fields would be appropriate

### 2. Field Strategy Decision
**Use Native WP Fields when:**
- Content fits the "featured image" paradigm (hero backgrounds, primary section images)
- Content is rich text that belongs in post body (headings, paragraphs, bullet lists)
- Access via `getFeaturedImageUrl()` helper and `data?.content?.rendered`

**Use ACF Fields when:**
- Supplementary metadata (eyebrows, section labels, button text)
- Structured data (stats, team members, testimonials, FAQs)
- Multiple images in a section (not just one featured image)
- Content that doesn't fit standard WP post model

### 3. ACF JSON Creation
**File naming:** `acf-import-{page-name}.json`

**Structure:**
```json
{
  "key": "group_{page_name}_page",
  "title": "{Page Name} Page Fields",
  "fields": [...],
  "location": [
    [
      {
        "param": "post",
        "operator": "==",
        "value": "{post_id}"
      }
    ]
  ]
}
```

**Field naming convention:**
- Prefix with section/component context: `{section}_{field_name}`
- Examples: `hero_heading`, `services_features_eyebrow`, `testimonials_heading`
- For numbered groups: `feature_1`, `feature_2`, `testimonial_1`, etc.

### 4. ACF Free Workarounds

**Problem:** No repeater fields in ACF Free

**Solution:** Numbered group fields
```json
{
  "key": "field_faq_1",
  "name": "faq_1",
  "type": "group",
  "sub_fields": [
    {
      "key": "field_faq_1_question",
      "name": "question",
      "type": "text"
    },
    {
      "key": "field_faq_1_answer",
      "name": "answer",
      "type": "textarea"
    }
  ]
}
```

**Provide reasonable quantity:**
- FAQs: 6 slots
- Features: 3-4 slots
- Testimonials: 3 slots
- Services: 4 slots
- Team members: 6 slots

### 5. Component Updates

**Pattern for simple fields:**
```jsx
export function Component({ data }) {
  const heading = data?.section_heading || "Default Heading";
  const description = data?.section_description || "Default description";

  return (
    <section>
      <h2>{heading}</h2>
      <p>{description}</p>
    </section>
  );
}
```

**Pattern for array assembly from numbered fields:**
```jsx
export function Component({ data }) {
  const defaultItems = [
    { title: "Default 1", description: "..." },
    { title: "Default 2", description: "..." }
  ];

  const acfItems = [
    data?.item_1,
    data?.item_2,
    data?.item_3,
  ].filter(Boolean);

  const items = acfItems.length > 0 ? acfItems : defaultItems;

  return (
    <section>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
```

**Pattern for images:**
```jsx
// ACF image field (return_format: "array")
const image = data?.section_image || {
  url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  alt: "Placeholder"
};

<img
  src={image.url}
  alt={image.alt || "Default alt text"}
/>
```

**Pattern for buttons/CTAs (CRITICAL - never skip):**
```jsx
export function Component({ data }) {
  // ALWAYS wire both text AND url for every button
  const primaryButtonText = data?.section_primary_button_text || "Default Text";
  const primaryButtonUrl = data?.section_primary_button_url || "#";
  const secondaryButtonText = data?.section_secondary_button_text || "Call";
  const secondaryButtonUrl = data?.section_secondary_button_url || "#";

  return (
    <div>
      {/* Use asChild pattern to make Button a functional link */}
      <Button asChild title={primaryButtonText}>
        <a href={primaryButtonUrl}>{primaryButtonText}</a>
      </Button>

      <Button asChild title={secondaryButtonText} variant="secondary">
        <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
      </Button>
    </div>
  );
}
```

**ACF fields needed for buttons:**
```json
{
  "key": "field_section_primary_button_text",
  "name": "section_primary_button_text",
  "type": "text",
  "default_value": "Button text"
},
{
  "key": "field_section_primary_button_url",
  "name": "section_primary_button_url",
  "type": "url",
  "instructions": "Can be regular URL or tel: link for phone numbers",
  "placeholder": "https://example.com or tel:+1234567890"
}
```

## ACF Options Pages (Global/Shared Content)

### When to Use
Site-wide content that appears on multiple pages (footer, navbar settings, social links, etc.). Avoids duplicating fields across every page.

### Implementation Pattern

**1. Create ACF Field Group with Options Page Location Rule:**
```json
{
  "key": "group_global_settings",
  "title": "Global Settings",
  "fields": [...],
  "location": [
    [
      {
        "param": "options_page",
        "operator": "==",
        "value": "site-settings"
      }
    ]
  ]
}
```

**2. Add Fetch Helper (`lib/wp.ts`):**
```typescript
export const getGlobalSettings = async (): Promise<WpAcf> => {
  const res = await fetch(`${WP_URL}/wp-json/acf/v3/options/site-settings`, {
    next: { revalidate: 5 },
  });

  if (!res.ok) {
    console.warn("Global settings fetch failed, using empty object");
    return {};
  }

  return res.json();
};
```
**Note:** Different endpoint from pages (`/acf/v3/options/{page-slug}` vs `/wp/v2/pages`)

**3. Fetch in `page.tsx` and Pass Down:**
```typescript
const [pageData, globalSettings] = await Promise.all([
  getPage("home"),
  getGlobalSettings(),
]);

return <HomePage pageData={pageData} globalSettings={globalSettings} />
```

**4. Create Shared Component:**
```jsx
// components/Footer9.jsx
export function Footer9({ data }) {
  const logo = data?.footer_logo || { url: "fallback.svg", alt: "Logo" };
  // ... use data from Options Page
}
```

**5. All Page index.jsx Files Import and Pass Data:**
```jsx
import { Footer9 } from "../components/Footer9";

export default function Page({ pageData, globalSettings }) {
  return (
    <div>
      {/* page components */}
      <Footer9 data={globalSettings} />
    </div>
  );
}
```

### Completed: Footer9 Consolidation
- **File:** `components/Footer9.jsx` (shared across all 6 pages)
- **ACF Import:** `acf-import-global-settings.json`
- **Fields:** Logo, newsletter text, 5 service links, 5 location links, 5 social URLs, 3 legal links, copyright
- **Pages wired:** home, about-us, services, service-single, locations, location-single
- **WordPress Path:** Options → Site Settings

## Common Field Types

### Text Field
```json
{
  "key": "field_{unique_id}",
  "label": "Human Label",
  "name": "field_name",
  "type": "text",
  "instructions": "Help text for editor",
  "required": 0,
  "default_value": "Default Text",
  "placeholder": "Placeholder text"
}
```

### Textarea Field
```json
{
  "key": "field_{unique_id}",
  "label": "Description",
  "name": "description",
  "type": "textarea",
  "required": 0,
  "default_value": "",
  "placeholder": "Enter description"
}
```

### Image Field
```json
{
  "key": "field_{unique_id}",
  "label": "Image",
  "name": "image",
  "type": "image",
  "required": 0,
  "return_format": "array",
  "preview_size": "medium",
  "library": "all"
}
```

### Group Field (for complex objects)
```json
{
  "key": "field_{unique_id}",
  "label": "Feature 1",
  "name": "feature_1",
  "type": "group",
  "required": 0,
  "sub_fields": [
    {
      "key": "field_{unique_id}_title",
      "label": "Title",
      "name": "title",
      "type": "text"
    },
    {
      "key": "field_{unique_id}_description",
      "label": "Description",
      "name": "description",
      "type": "textarea"
    }
  ]
}
```

## Key Rules

### Relume Template Preservation
- **DO:** Replace hardcoded strings with `data?.field || "fallback"`
- **DO:** Wire existing `<img src>` to ACF/WP image fields
- **DO:** Fix bugs and add data fetching
- **DON'T:** Add new JSX elements, sections, or layout blocks
- **DON'T:** Change Tailwind classes or layout structure
- **DON'T:** Reorder or remove components
- **DON'T:** Add UI elements the template doesn't have

### No Assumptions
- Never guess URLs, slugs, routes, or link targets
- Never use placeholder values like `#` for links
- If data isn't available, ask the user

## Pages Completed

### Home Page
- Components: Layout367, Layout423, Layout520, Team5, Testimonial22
- Pattern: All ACF structured data
- Post ID: (original homepage)

### About-Us Page
- Components: Header64, Layout19, Team5, Testimonial22, Cta31
- Pattern: Mix of ACF and native WP fields
- Post ID: 7
- **Note:** Layout19 should be refactored to use native WP featured image + body content (deferred)

### Services Page
- Components: Header64, Layout423, Layout525, Testimonial22, Cta31
- Pattern: All ACF structured data (no fit for native WP fields)
- Post ID: 8
- Features: 3 numbered groups with eyebrow, headings, descriptions, images, button text
- Services: 4 numbered groups with varying fields (eyebrow, headings, descriptions, images, icons, buttons)
- Testimonials: 3 numbered groups with logo, quote, avatar, name, position, button text

### Locations Page
- Components: Header64, Faq4, Cta31
- Pattern: All ACF structured data
- Post ID: 9
- FAQs: 6 numbered groups with question/answer sub_fields
- CTA: heading, description, buttons, image

## Common Pitfalls

1. **Missing button/CTA fields** - When you see `<Button>` components, ALWAYS wire both text AND url fields. Never leave buttons as non-functional decoration.
2. **Forgetting .filter(Boolean)** when assembling arrays from numbered fields
3. **Not providing enough numbered slots** for content editors
4. **Using ACF when native WP fields would be better** (featured image, post body)
5. **Adding new UI elements** instead of just wiring data
6. **Assuming link destinations** instead of asking or looking them up
7. **Not preserving fallback/default values** from original components
8. **Tailwind v4 silently drops v3 config options** — The Relume preset uses `container: { center: true }` which is v3 syntax. With `@tailwindcss/postcss` v4, this is completely ignored with no warning. Fix: add `@utility container { margin-inline: auto; }` in `globals.css` after the `@config` line. Diagnosis: check generated CSS (`.next/static/**/*.css`) for `.container` — if it lacks `margin-inline: auto`, the centering is broken.
9. **WpAcf typed as `{ [key: string]: unknown }`** — All ACF field accesses return `unknown`. Next.js `Metadata` title/description require `string | TemplateString`. The `|| "fallback"` pattern does NOT narrow `unknown` to `string`. Fix: cast with `as string` e.g. `(pageData?.acf?.seo_title as string) || "Fallback"`. Same for image fields: cast as `{ url: string }` before accessing `.url`.

## Testing Checklist

After creating ACF wiring:
- [ ] Import JSON into WordPress
- [ ] Verify all fields appear in post editor
- [ ] Add sample content to fields
- [ ] Check page renders with ACF data
- [ ] Verify fallbacks work when fields are empty
- [ ] Test image fields return correct URL/alt structure
- [ ] Confirm arrays assemble correctly from numbered fields
