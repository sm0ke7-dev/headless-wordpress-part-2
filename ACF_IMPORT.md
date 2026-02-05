# ACF Fields — Import JSON

**Delete this file after importing into WordPress.**

---

## Before you import

The location rule uses a placeholder: `HOME_PAGE_ID`.

1. Open WP Admin → Pages → edit your Home page.
2. The post ID is in the URL bar: `...wp-admin/post.php?post=**XX**&action=edit`
3. Replace `HOME_PAGE_ID` in the JSON below with that number.
4. Copy the JSON block into **ACF → Tools → Import**, upload, done.

> Some of these text fields (testimonials heading/subheading, team section fields) may already exist on your Home page from an earlier ACF group. If ACF warns about a duplicate `name`, skip those fields — they're already there.

> **All field types here are ACF Free.** The original draft used `repeater` fields (Pro-only). Those have been replaced with numbered `group` fields — three per section, one per card/step. Each group contains the same sub-fields the repeaters had. The corresponding component array construction has already been updated.

---

## What's in here

| Field name | Type | Used by |
|---|---|---|
| `features_section_eyebrow` | text | Layout520 — section label |
| `features_section_heading` | text | Layout520 — section heading |
| `features_section_description` | textarea | Layout520 — section description |
| `feature_1` | group | Layout520 — Feature card 1 |
| `feature_2` | group | Layout520 — Feature card 2 |
| `feature_3` | group | Layout520 — Feature card 3 |
| `process_section_eyebrow` | text | Layout367 — section label |
| `process_section_heading` | text | Layout367 — section heading |
| `process_section_description` | textarea | Layout367 — section description |
| `process_step_1` | group | Layout367 — Step 1 |
| `process_step_2` | group | Layout367 — Step 2 |
| `process_step_3` | group | Layout367 — Step 3 |
| `treatments_section_eyebrow` | text | Layout423 — section label |
| `treatments_section_heading` | text | Layout423 — section heading |
| `treatments_section_description` | textarea | Layout423 — section description |
| `treatment_1` | group | Layout423 — Treatment card 1 |
| `treatment_2` | group | Layout423 — Treatment card 2 |
| `treatment_3` | group | Layout423 — Treatment card 3 |
| `testimonials_section_heading` | text | Testimonial22 |
| `testimonials_section_subheading` | text | Testimonial22 |
| `team_section_eyebrow` | text | Team5 |
| `team_section_heading` | text | Team5 |
| `team_section_description` | textarea | Team5 |
| `team_join_heading` | text | Team5 |
| `team_join_description` | textarea | Team5 |
| `team_join_button` | text | Team5 |

### Group sub-fields

**`feature_1` / `feature_2` / `feature_3`** — `heading`, `description`, `image`, `icon`
(Note: the component's default data includes a `link` property but it is never used in JSX — omitted.)

**`process_step_1` / `process_step_2` / `process_step_3`** — `eyebrow`, `heading`, `description`, `icon`, `button_text`, `image`
(Only step 3 uses `eyebrow` and `image` in the layout, but all three groups expose the same sub-fields.)

**`treatment_1` / `treatment_2` / `treatment_3`** — `eyebrow`, `heading`, `description`, `image`, `link`
(`link` is used as the card's `<a href>` — this is the one section where it matters.)

---

## JSON

```json
[
  {
    "key": "group_homepage_content",
    "title": "Homepage Content",
    "fields": [
      {
        "key": "field_features_section_eyebrow",
        "label": "Features Section Eyebrow",
        "name": "features_section_eyebrow",
        "type": "text",
        "instructions": "Small label above the features heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Why we work",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_features_section_heading",
        "label": "Features Section Heading",
        "name": "features_section_heading",
        "type": "text",
        "instructions": "Main heading above the three feature cards.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Three things that matter",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_features_section_description",
        "label": "Features Section Description",
        "name": "features_section_description",
        "type": "textarea",
        "instructions": "Short description below the features heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Built on evidence. Delivered with clarity.",
        "rows": 3
      },
      {
        "key": "field_feature_1",
        "label": "Feature 1",
        "name": "feature_1",
        "type": "group",
        "instructions": "First feature card on the homepage.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_feature_1_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_feature_1_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_feature_1_image",
            "label": "Card Image",
            "name": "image",
            "type": "image",
            "instructions": "Main card image. Returned as object with url + alt via REST API.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_feature_1_icon",
            "label": "Icon",
            "name": "icon",
            "type": "image",
            "instructions": "Small icon displayed on the card. Upload as SVG or PNG with transparency.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "thumbnail",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          }
        ]
      },
      {
        "key": "field_feature_2",
        "label": "Feature 2",
        "name": "feature_2",
        "type": "group",
        "instructions": "Second feature card on the homepage.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_feature_2_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_feature_2_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_feature_2_image",
            "label": "Card Image",
            "name": "image",
            "type": "image",
            "instructions": "Main card image. Returned as object with url + alt via REST API.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_feature_2_icon",
            "label": "Icon",
            "name": "icon",
            "type": "image",
            "instructions": "Small icon displayed on the card. Upload as SVG or PNG with transparency.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "thumbnail",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          }
        ]
      },
      {
        "key": "field_feature_3",
        "label": "Feature 3",
        "name": "feature_3",
        "type": "group",
        "instructions": "Third feature card on the homepage.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_feature_3_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_feature_3_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_feature_3_image",
            "label": "Card Image",
            "name": "image",
            "type": "image",
            "instructions": "Main card image. Returned as object with url + alt via REST API.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_feature_3_icon",
            "label": "Icon",
            "name": "icon",
            "type": "image",
            "instructions": "Small icon displayed on the card. Upload as SVG or PNG with transparency.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "thumbnail",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          }
        ]
      },
      {
        "key": "field_process_section_eyebrow",
        "label": "Process Section Eyebrow",
        "name": "process_section_eyebrow",
        "type": "text",
        "instructions": "Small label above the process heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Process",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_process_section_heading",
        "label": "Process Section Heading",
        "name": "process_section_heading",
        "type": "text",
        "instructions": "Main heading above the three process steps.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "What to expect",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_process_section_description",
        "label": "Process Section Description",
        "name": "process_section_description",
        "type": "textarea",
        "instructions": "Short description below the process heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "We start with facts, not assumptions about your pain.",
        "rows": 3
      },
      {
        "key": "field_process_step_1",
        "label": "Process Step 1",
        "name": "process_step_1",
        "type": "group",
        "instructions": "First step in the 'how it works' section. Renders as a small card — eyebrow and image fields are not used for this step.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_process_step_1_eyebrow",
            "label": "Eyebrow",
            "name": "eyebrow",
            "type": "text",
            "instructions": "Only rendered on Step 3 (the wide card). Leave blank here.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_1_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_1_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_process_step_1_icon",
            "label": "Icon",
            "name": "icon",
            "type": "image",
            "instructions": "Step icon.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "thumbnail",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_process_step_1_button_text",
            "label": "Button Text",
            "name": "button_text",
            "type": "text",
            "instructions": "Label on the step's action button.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_1_image",
            "label": "Image",
            "name": "image",
            "type": "image",
            "instructions": "Only rendered on Step 3 (the wide card). Leave blank here.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          }
        ]
      },
      {
        "key": "field_process_step_2",
        "label": "Process Step 2",
        "name": "process_step_2",
        "type": "group",
        "instructions": "Second step in the 'how it works' section. Renders as a small card — eyebrow and image fields are not used for this step.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_process_step_2_eyebrow",
            "label": "Eyebrow",
            "name": "eyebrow",
            "type": "text",
            "instructions": "Only rendered on Step 3 (the wide card). Leave blank here.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_2_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_2_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_process_step_2_icon",
            "label": "Icon",
            "name": "icon",
            "type": "image",
            "instructions": "Step icon.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "thumbnail",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_process_step_2_button_text",
            "label": "Button Text",
            "name": "button_text",
            "type": "text",
            "instructions": "Label on the step's action button.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_2_image",
            "label": "Image",
            "name": "image",
            "type": "image",
            "instructions": "Only rendered on Step 3 (the wide card). Leave blank here.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          }
        ]
      },
      {
        "key": "field_process_step_3",
        "label": "Process Step 3",
        "name": "process_step_3",
        "type": "group",
        "instructions": "Third step — renders as the wide card. This is the only step where eyebrow and image are displayed.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_process_step_3_eyebrow",
            "label": "Eyebrow",
            "name": "eyebrow",
            "type": "text",
            "instructions": "Small label shown on the wide card layout.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_3_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_3_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_process_step_3_icon",
            "label": "Icon",
            "name": "icon",
            "type": "image",
            "instructions": "Step icon.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "thumbnail",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_process_step_3_button_text",
            "label": "Button Text",
            "name": "button_text",
            "type": "text",
            "instructions": "Label on the step's action button.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_process_step_3_image",
            "label": "Image",
            "name": "image",
            "type": "image",
            "instructions": "Full image displayed on the wide card layout.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          }
        ]
      },
      {
        "key": "field_treatments_section_eyebrow",
        "label": "Treatments Section Eyebrow",
        "name": "treatments_section_eyebrow",
        "type": "text",
        "instructions": "Small label above the treatments heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Care",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_treatments_section_heading",
        "label": "Treatments Section Heading",
        "name": "treatments_section_heading",
        "type": "text",
        "instructions": "Main heading above the treatment cards.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "What we treat",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_treatments_section_description",
        "label": "Treatments Section Description",
        "name": "treatments_section_description",
        "type": "textarea",
        "instructions": "Short description below the treatments heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Precision care for the pain that slows you down.",
        "rows": 3
      },
      {
        "key": "field_treatment_1",
        "label": "Treatment 1",
        "name": "treatment_1",
        "type": "group",
        "instructions": "First treatment card. The link field is required — it's the card's click destination.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_treatment_1_eyebrow",
            "label": "Eyebrow",
            "name": "eyebrow",
            "type": "text",
            "instructions": "Small label above the card heading.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_treatment_1_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_treatment_1_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_treatment_1_image",
            "label": "Card Image",
            "name": "image",
            "type": "image",
            "instructions": "Image on the treatment card.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_treatment_1_link",
            "label": "Card Link",
            "name": "link",
            "type": "url",
            "instructions": "Where the card links to when clicked. Confirm the slug in WP first.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "https://",
            "prepend": "",
            "append": ""
          }
        ]
      },
      {
        "key": "field_treatment_2",
        "label": "Treatment 2",
        "name": "treatment_2",
        "type": "group",
        "instructions": "Second treatment card. The link field is required — it's the card's click destination.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_treatment_2_eyebrow",
            "label": "Eyebrow",
            "name": "eyebrow",
            "type": "text",
            "instructions": "Small label above the card heading.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_treatment_2_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_treatment_2_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_treatment_2_image",
            "label": "Card Image",
            "name": "image",
            "type": "image",
            "instructions": "Image on the treatment card.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_treatment_2_link",
            "label": "Card Link",
            "name": "link",
            "type": "url",
            "instructions": "Where the card links to when clicked. Confirm the slug in WP first.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "https://",
            "prepend": "",
            "append": ""
          }
        ]
      },
      {
        "key": "field_treatment_3",
        "label": "Treatment 3",
        "name": "treatment_3",
        "type": "group",
        "instructions": "Third treatment card. The link field is required — it's the card's click destination.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "layout": "block",
        "sub_fields": [
          {
            "key": "field_treatment_3_eyebrow",
            "label": "Eyebrow",
            "name": "eyebrow",
            "type": "text",
            "instructions": "Small label above the card heading.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_treatment_3_heading",
            "label": "Heading",
            "name": "heading",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "character_limit": ""
          },
          {
            "key": "field_treatment_3_description",
            "label": "Description",
            "name": "description",
            "type": "textarea",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "",
            "rows": 3
          },
          {
            "key": "field_treatment_3_image",
            "label": "Card Image",
            "name": "image",
            "type": "image",
            "instructions": "Image on the treatment card.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "return_format": "array",
            "preview_size": "medium",
            "library": "all",
            "min_width": "",
            "min_height": "",
            "min_size": "",
            "max_width": "",
            "max_height": "",
            "max_size": "",
            "mime_types": ""
          },
          {
            "key": "field_treatment_3_link",
            "label": "Card Link",
            "name": "link",
            "type": "url",
            "instructions": "Where the card links to when clicked. Confirm the slug in WP first.",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": { "width": "", "class": "", "id": "" },
            "default_value": "",
            "placeholder": "https://",
            "prepend": "",
            "append": ""
          }
        ]
      },
      {
        "key": "field_testimonials_section_heading",
        "label": "Testimonials Section Heading",
        "name": "testimonials_section_heading",
        "type": "text",
        "instructions": "Rendered as the large heading above the testimonial cards.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Real results",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_testimonials_section_subheading",
        "label": "Testimonials Section Subheading",
        "name": "testimonials_section_subheading",
        "type": "text",
        "instructions": "One-line description below the heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "What our patients say",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_team_section_eyebrow",
        "label": "Team Section Eyebrow",
        "name": "team_section_eyebrow",
        "type": "text",
        "instructions": "Small label above the team heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Expertise",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_team_section_heading",
        "label": "Team Section Heading",
        "name": "team_section_heading",
        "type": "text",
        "instructions": "Main heading for the team grid.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Our clinicians",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_team_section_description",
        "label": "Team Section Description",
        "name": "team_section_description",
        "type": "textarea",
        "instructions": "Short description below the team heading.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Licensed specialists trained in evidence-based rehabilitation.",
        "rows": 3
      },
      {
        "key": "field_team_join_heading",
        "label": "Team Join Heading",
        "name": "team_join_heading",
        "type": "text",
        "instructions": "Heading for the 'Join us' block below the team grid.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Join us",
        "prepend": "",
        "append": "",
        "character_limit": ""
      },
      {
        "key": "field_team_join_description",
        "label": "Team Join Description",
        "name": "team_join_description",
        "type": "textarea",
        "instructions": "Body copy in the 'Join us' block.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "We're building a team that values clarity and results.",
        "rows": 3
      },
      {
        "key": "field_team_join_button",
        "label": "Team Join Button Label",
        "name": "team_join_button",
        "type": "text",
        "instructions": "Label on the button in the 'Join us' block.",
        "required": 0,
        "conditional_logic": 0,
        "wrapper": { "width": "", "class": "", "id": "" },
        "default_value": "",
        "placeholder": "Open positions",
        "prepend": "",
        "append": "",
        "character_limit": ""
      }
    ],
    "location": [
      [
        {
          "param": "post",
          "operator": "==",
          "value": "6"
        }
      ]
    ],
    "menu_order": 0,
    "position": "normal",
    "style": "default",
    "label_placement": "top",
    "instruction_placement": "label",
    "hide_on_screen": "",
    "active": 1
  }
]
```

