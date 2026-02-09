---
skill_name: acf-wire-page
description: Wire a landing page to WordPress ACF fields - creates JSON field group and updates components
parameters:
  - name: page_name
    description: The page directory name (e.g., "locations", "services", "about-us")
    required: true
  - name: post_id
    description: The WordPress post ID for this page
    required: true
---

# ACF Page Wiring Skill

You are wiring a Relume UI landing page to WordPress via ACF Free plugin. Follow this workflow precisely:

**Context:** This skill handles page-specific ACF fields. For global/shared content (footer, navbar settings), use ACF Options Pages instead. See `ACF_WIRING_LEARNINGS.md` → "ACF Options Pages" section for that pattern.

## Step 1: Discovery Phase

Read and analyze:
1. Read `{page_name}/index.jsx` to identify all components
2. Read each component file to understand:
   - Data props structure
   - Default/fallback values
   - Whether it expects simple fields or arrays
   - If native WP fields would be more appropriate
   - **CRITICAL:** Look for `<Button>` components - EVERY button needs text + url fields (never skip this!)

## Step 2: Field Strategy Decision

**Use Native WP Fields for:**
- Primary section images (hero backgrounds) → featured image via `getFeaturedImageUrl()`
- Rich text content (headings, paragraphs, lists) → post body via `data?.content?.rendered`

**Use ACF Fields for:**
- Metadata (eyebrows, labels, button text)
- Structured data (stats, testimonials, FAQs, team members)
- Multiple images in one section
- Content that doesn't fit standard WP post model

## Step 3: Create ACF JSON

Create `acf-import-{page_name}.json` with:

**Field Naming Convention:**
- Prefix with section context: `{section}_{field_name}`
- Examples: `hero_heading`, `features_eyebrow`, `testimonials_heading`
- For numbered groups: `item_1`, `item_2`, `feature_1`, `feature_2`, etc.

**Key Rules:**
- Use `"type": "group"` for complex objects
- Use numbered groups (not repeaters) due to ACF Free limitations
- Always set `"return_format": "array"` for image fields
- Set location rule `"value"` to the provided `{post_id}`

**Provide Reasonable Quantities:**
- FAQs: 6 slots
- Features: 3-4 slots
- Testimonials: 3 slots
- Services: 4 slots
- Team members: 6 slots

**JSON Structure Template:**
```json
{
  "key": "group_{page_name}_page",
  "title": "{Page Name} Page Fields",
  "fields": [
    {
      "key": "field_{unique_id}",
      "label": "Human Label",
      "name": "field_name",
      "type": "text|textarea|image|group",
      "instructions": "Help text",
      "required": 0,
      "default_value": "",
      "placeholder": ""
    }
  ],
  "location": [
    [
      {
        "param": "post",
        "operator": "==",
        "value": "{post_id}"
      }
    ]
  ],
  "menu_order": 0,
  "position": "normal",
  "style": "default",
  "label_placement": "top",
  "instruction_placement": "label",
  "hide_on_screen": "",
  "active": true,
  "description": ""
}
```

## Step 4: Update Components

For each component that needs data wiring:

**Simple Fields Pattern:**
```jsx
export function Component({ data }) {
  const heading = data?.field_name || "Default Value";

  return <h2>{heading}</h2>;
}
```

**Array Assembly Pattern:**
```jsx
export function Component({ data }) {
  const defaultItems = [/* existing defaults */];

  const acfItems = [
    data?.item_1,
    data?.item_2,
    data?.item_3,
  ].filter(Boolean);

  const items = acfItems.length > 0 ? acfItems : defaultItems;

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
}
```

**Image Field Pattern:**
```jsx
const image = data?.image_field || {
  url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  alt: "Placeholder"
};

<img src={image.url} alt={image.alt || "Default alt"} />
```

**Button/CTA Pattern (CRITICAL - NEVER SKIP):**

There are TWO patterns depending on whether the button has `iconRight`:

**Pattern A: Buttons WITHOUT iconRight (use asChild):**
```jsx
// Extract text and URL from ACF
const primaryButtonText = data?.section_primary_button_text || "Default";
const primaryButtonUrl = data?.section_primary_button_url || "#";

// Use asChild to make Button render as a functional link
<Button asChild title={primaryButtonText} variant="secondary">
  <a href={primaryButtonUrl}>{primaryButtonText}</a>
</Button>
```

**Pattern B: Buttons WITH iconRight (use wrapper `<a>`):**
```jsx
// iconRight buttons break with asChild - wrap the Button instead
const buttonText = data?.section_button_text || "Learn More";
const buttonUrl = data?.section_button_url || "#";

<a href={buttonUrl}>
  <Button
    variant="link"
    size="link"
    iconRight={<RxChevronRight />}
  >
    {buttonText}
  </Button>
</a>
```

**Per-Item URLs in Arrays (tabs, steps, cards):**
```jsx
// For buttons inside .map() - URLs come from the item itself
{items.map((item, index) => (
  <div key={index}>
    <Button asChild title={item.title}>
      <a href={item.button_url || "#"}>{item.button_text || "Learn More"}</a>
    </Button>
  </div>
))}
```

**ACF Fields Needed for Buttons:**
```json
{
  "key": "field_section_primary_button_text",
  "name": "section_primary_button_text",
  "type": "text",
  "default_value": "Book Appointment"
},
{
  "key": "field_section_primary_button_url",
  "name": "section_primary_button_url",
  "type": "url",
  "instructions": "Can be regular URL (https://...) or tel: link (tel:+1234567890)",
  "placeholder": "https://example.com or tel:+1234567890"
}
```

**For Per-Item URLs (inside group fields):**
```json
{
  "key": "field_tab_1",
  "name": "tab_1",
  "type": "group",
  "sub_fields": [
    {
      "key": "field_tab_1_title",
      "name": "title",
      "type": "text"
    },
    {
      "key": "field_tab_1_button_url",
      "name": "button_url",
      "type": "url",
      "instructions": "Link for this tab's button"
    }
  ]
}
```

## Step 5: Wire SEO Fields in page.tsx

Every page needs SEO metadata wired in `app/{page}/page.tsx` → `generateMetadata()`:

**TypeScript Issue:**
- `WpAcf` is typed as `{ [key: string]: unknown }`
- Accessing `pageData?.acf?.seo_title` returns `unknown`
- Next.js Metadata expects `string | TemplateString`
- The `|| "fallback"` pattern does NOT narrow `unknown` to `string`

**Fix: Cast with `as string`**
```typescript
export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPage("page-slug");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    title: (pageData?.acf?.seo_title as string) || "Default Title",
    description: (pageData?.acf?.seo_description as string) || "Default description",
    alternates: {
      canonical: `${baseUrl}/page-slug`,
    },
    openGraph: {
      title: (pageData?.acf?.seo_title as string) || "Default Title",
      description: (pageData?.acf?.seo_description as string) || "Default description",
      images: (pageData?.acf?.seo_image as { url: string })?.url
        ? [{ url: (pageData.acf.seo_image as { url: string }).url }]
        : [],
      type: "website",
      url: `${baseUrl}/page-slug`,
    },
    twitter: {
      card: "summary_large_image",
      title: (pageData?.acf?.seo_title as string) || "Default Title",
      description: (pageData?.acf?.seo_description as string) || "Default description",
      images: (pageData?.acf?.seo_image as { url: string })?.url
        ? [(pageData.acf.seo_image as { url: string }).url]
        : [],
    },
  };
}
```

**SEO Fields Needed in ACF JSON:**
```json
{
  "key": "field_seo_title",
  "name": "seo_title",
  "type": "text",
  "instructions": "Page title for SEO (appears in Google search results)",
  "maxlength": 60
},
{
  "key": "field_seo_description",
  "name": "seo_description",
  "type": "textarea",
  "instructions": "Meta description for SEO (appears in Google search results)",
  "maxlength": 160
},
{
  "key": "field_seo_image",
  "name": "seo_image",
  "type": "image",
  "instructions": "Social sharing image (1200x630px recommended)",
  "return_format": "array"
}
```

## Step 6: Data Flow Pattern

**Full data flow from WordPress to component:**

1. **`app/{page}/page.tsx`** - Server component fetches data:
```typescript
export default async function Page() {
  const [pageData, globalSettings] = await Promise.all([
    getPage("page-slug"),
    getGlobalSettings(),
  ]);

  return <PageIndex pageData={pageData?.acf} globalSettings={globalSettings} />
}
```

2. **`{page}/index.jsx`** - Drills props to components:
```jsx
export default function PageIndex({ pageData, globalSettings }) {
  return (
    <div>
      <Header64 data={pageData} />
      <Layout423 data={pageData} />
      <Footer9 data={globalSettings} />
    </div>
  );
}
```

3. **`{page}/components/Header64.jsx`** - Consumes data:
```jsx
export function Header64({ data }) {
  const heading = data?.hero_heading || "Default Heading";
  return <h1>{heading}</h1>;
}
```

## Critical Rules

### Button/CTA Wiring (NEVER SKIP)
- 🚨 **EVERY `<Button>` component must have:**
  - Text field (`{section}_button_text`)
  - URL field (`{section}_button_url` - type: "url")
  - Functional link using `asChild` pattern: `<Button asChild><a href={url}>{text}</a></Button>`
- Hero/Header sections almost always have CTA buttons - check thoroughly
- SEO team needs to control all button text and destinations

### Relume Template Preservation
- ✅ Replace hardcoded strings with `data?.field || "fallback"`
- ✅ Wire `<img src>` to ACF/WP image fields
- ✅ Fix bugs, add data fetching/prop drilling
- ❌ DO NOT add new JSX elements or layout blocks
- ❌ DO NOT change Tailwind classes or layout structure
- ❌ DO NOT reorder or remove components
- ❌ DO NOT add UI elements the template doesn't have

### No Assumptions on URLs, Slugs, and Routes
Never guess or infer slugs, hrefs, route paths, or link targets. This includes service slugs, location slugs, social media URLs, legal page URLs, or any other link destination.

- **First, check the codebase:** If the data is available (e.g. WP REST API responses, existing fetch helpers, page.tsx files that already fetch and expose slugs), look it up before writing the link.
- **If unavailable, ask the user:** If it requires information we don't have (e.g. social media handles, real slugs from WP, legal page URLs), ask the user before writing the code.
- **Never use placeholders:** Do not use placeholder values like `#` or made-up slugs like `/service/example` - these create broken links that harm UX and SEO.

## Step 5: Output Summary

After completing the wiring, provide:
1. Confirmation of `acf-import-{page_name}.json` creation
2. List of components updated and what changed
3. Field count and structure summary
4. Any questions or clarifications needed

## Reference Documents

Before starting, read:
- `ACF_WIRING_LEARNINGS.md` - patterns and conventions
- `GAMEPLAN.md` - project status and scope
- `COMPONENT_MAP.md` - component inventory

Update `GAMEPLAN.md` when task is complete.
