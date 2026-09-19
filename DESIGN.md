# Thainá Pires — Portfolio Design System

Canonical visual reference for the personal portfolio published at **https://thaipires.com/**.
Use this file as the source of truth for any visual change, new section, component, page, UI experiment, or AI-generated output within this project.

> Visual direction: **editorial, warm, and personal**, with a clean, structured technical foundation combined with an expressive layer inspired by a **scrapbook / creative notebook** aesthetic.
>
> The identity comes from the contrast between **organized engineering** and **handmade expression**: grids, strong typography, light surfaces, and consistent hierarchy coexist with paper, tape, doodles, subtle rotations, editorial serif type, and handwriting.

This document is **normative** for established patterns and **descriptive** where the implementation still contains variations or inconsistencies.

### Classification used in this document

| Classification | Meaning |
|---|---|
| **Foundation** | Core identity rule. It should guide new components. |
| **Recurring pattern** | A solution repeated often enough to be reused. |
| **Contextual** | Belongs to a specific section or content type. Do not generalize it. |
| **Exception** | A one-off value or composition. Do not automatically promote it to a global token. |
| **Inactive / legacy** | Exists in code or assets but is not part of the current published experience. |

---

## 1. Color palette

### Foundation colors

| Token | HEX | Role | Classification |
|---|---:|---|---|
| **Background** | `#F8F6F2` | Warm portfolio background | Foundation |
| **Surface** | `#FFFDF9` | Cards, menus, and panels | Foundation |
| **Text primary** | `#151313` | Primary text, headings, and dark CTAs | Foundation |
| **Text secondary** | `#665F5B` | Paragraphs, descriptions, and metadata | Foundation |
| **Border** | `#DDD8CF` | Subtle borders and dividers | Foundation |
| **Primary** | `#8D75DF` | Main identity violet | Foundation |
| **Primary strong** | `#6049BC` | Links, text, and stronger violet accents | Foundation |
| **Primary soft** | `#DDD5FB` | Tags, highlights, and soft violet backgrounds | Foundation |

### Narrative accents

| Token | HEX | Usage |
|---|---:|---|
| **Accent pink** | `#F3AEBE` | Decoration and special elements |
| **Accent pink soft** | `#F8D8DF` | Decorative shapes and backgrounds |
| **Accent yellow** | `#EFC45D` | Terminal, calendar, and graphic details |
| **Accent yellow soft** | `#F8E2A6` | Paper, tape, and warm surfaces |
| **Accent green soft** | `#C6D8C5` | Specific semantic states, such as day off |
| **Accent orange** | `#F9A85D` | GitLab and related statistics |
| **UI line** | `#ECE7DF` | Declared token; currently has limited relevant usage |

### Color hierarchy

1. **Violet is the identity anchor.** It is the first choice for links, active states, annotations, tags, and interface details.
2. **Off-white and warm surfaces are the base.** The portfolio should not drift toward pure white or cool gray as its default.
3. **Pink, yellow, green, and orange are narrative accents.** They do not carry the same weight as violet and should not compete with it as primary colors.
4. **Brand-specific colors may be preserved** for logos, certifications, GitHub/GitLab, and technologies when they improve recognition.
5. **Do not introduce a new global color simply because it appears in an asset or doodle.**

### Contextual colors / exceptions

- Terminal: `#1B191F`, `#211F27`, `#2C2934`.
- Photo frame: `#D8D5CF`.
- Rough Notation: currently uses values close to the main palette, such as `#D5CBFE`, `#8B6FF7`, and `#8B73F6`.
- Project badge SVG: values such as `#A16CE6` and `#8156B7`.
- Certifications and technologies may use their own official brand colors.
- Individual doodles may use additional colors when they are part of the illustration.

> **Rule:** contextual values should not automatically become global tokens. Whenever possible, new elements should prefer the foundation tokens.

---

## 2. Typography

### Families

| Role | Font | Usage | Classification |
|---|---|---|---|
| **Primary sans** | `Instrument Sans` | Structure, headings, navigation, numbers, controls | Foundation |
| **Editorial serif** | `DM Serif Display` | Emotional/editorial emphasis in words or short phrases | Foundation |
| **Handwritten** | `Caveat` | Personal comments, notes, and textual doodles | Foundation |
| **Monospace** | `font-mono` stack | Terminal, specific dates, tooling, and technical language | Contextual |

> **Current state:** `DM Serif Display` and `Caveat` are loaded. `Instrument Sans` is declared as the primary font, but the current implementation may fall back to `ui-sans-serif/system-ui` if the font is not explicitly loaded. Document this divergence; do not silently assume the fallback is the intended official font.

### Visual roles

- **Bold / extrabold sans:** structure and clarity. This is the dominant voice for headings.
- **Italic serif:** editorial contrast. Use it for keywords or short phrases, not for long text blocks.
- **Caveat:** personal and human voice. Use it as annotation, commentary, or detail; never as the primary reading font.
- **Mono:** reinforces technical context. Keep it tied to terminals, code, dates, or tooling.

### Effectively implemented scale

The current UI mainly uses local responsive Tailwind classes. This is the real scale to preserve when creating new elements adjacent to existing ones.

| Element | Approximate scale |
|---|---|
| Main hero title | `48px → 72px → 96px` |
| Handwritten hero title | `36px → 60px → 48px` depending on breakpoint/composition |
| Section heading | `36px → 48px → 60px`, tight line-height |
| Contextual heading | `24px–48px` |
| Intro body | `16px → 18px`, line-height ~`28px` |
| Emphasized body | `18px → 20px`, often line-height ~`32px` |
| Cards / timelines | `14px–16px`, line-height ~`24px` |
| Labels / tags / CTAs | `10px–14px`, bold or extrabold |
| Project number | `48px–72px` |

### Rules

- Headings should use **strong weight and tight line-height**.
- Body text should remain comfortable to read and have lower visual contrast than headings.
- Do not use the serif as a general replacement for the sans.
- Do not use Caveat for text essential to comprehension, navigation, or accessibility.
- Styled phrases must still work if the decorative font is unavailable.
- Avoid uppercase in long text; reserve it for labels, chips, and compact CTAs.

### Declared typography tokens

Tokens such as `--text-display`, `--text-hero-title`, `--text-section-heading`, and `--text-body` exist, but they do not yet fully represent the published implementation.

> **Current rule:** when modifying existing components, respect the scale that is actually in use. If typography is unified in the future, migrate deliberately to tokens; do not treat currently inactive tokens as an automatic source of truth.

---

## 3. Buttons / CTAs

### Primary button

The primary action uses high contrast and a solid appearance.

- Background: `text-primary` / dark.
- Text: white.
- Weight: extrabold.
- Shape: pill (`999px`).
- Minimum height: ~`48px`; larger variants reach ~`56px`.
- Optional icon.
- Shadow: `floating` level.
- Hover: short elevation (`translateY(-2px)`) + subtle shadow reinforcement.
- Short transition, without excessive springiness.

```css
.primary-button {
  min-height: 48px;
  border-radius: 999px;
  font-weight: 800;
  background: var(--text-primary);
  color: #fff;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.primary-button:hover {
  transform: translateY(-2px);
}
```

### Text button

- No heavy background.
- No dominant border.
- Strong text.
- Icon close to the label.
- Hover shifts the color toward violet.
- Used when the action should remain present without competing with the primary CTA.

### Secondary pill action

Recurring pattern used for actions such as GitHub, experience expansion, external links, and disabled states.

- Light / `surface` background.
- Thin neutral border.
- Soft shadow.
- Small text, often uppercase.
- Pill shape.
- Small elevation on hover.
- Hover may combine violet border + `primary-soft`.

> Treat this pattern as a real part of the system even if it has not yet been unified into a single shared component.

### Disabled states

- Preserve the control's geometry and hierarchy.
- Reduce visual emphasis.
- Do not simulate interactivity with a strong hover state.
- When necessary, explain unavailability with a short tooltip such as `Soon`.

### Contact CTA

The final CTA is a **contextual composition**, not a generic button.

It combines:

- a large editorial panel;
- sans headline + italic serif emphasis;
- contextual information;
- dark primary button;
- decorative pink shape;
- doodle / handmade detail.

Reuse its foundations, but do not replicate the entire panel for every call to action.

---

## 4. Shape / elevation

### Border radius

| Token / scale | Value | Usage |
|---|---:|---|
| **soft** | `18px` | Smaller panels, images, and compact cards |
| **card** | `26px` | Projects, calendars, and primary cards |
| **large** | `36px` | Large-scale containers when necessary |
| **panel** | `38px` | Editorial panels / contact CTA |
| **pill** | `999px` | Buttons, tags, badges, and social links |

### Shape rules

- The interface foundation uses generous rounded corners, but not an excessively “bubbly” look.
- Elements that imitate paper or photography may use a smaller radius or a more squared-off appearance.
- Decorative shapes may be asymmetric and organic.
- Do not apply `rounded-full` indiscriminately to cards or containers.
- Pills are reserved for **actions and compact elements**.

### Borders

Visual separation relies more on **thin borders + surface contrast** than on strong shadows.

Primary pattern:

```css
border: 1px solid var(--border);
```

Also valid contextually:

- `white/10` over the dark terminal;
- violet borders on tags / highlight states;
- horizontal dividers between areas;
- vertical lines in timelines.

### Shadows

There are three conceptual levels:

| Level | Usage |
|---|---|
| **card** | Very subtle everyday elevation |
| **soft** | Larger panel or card hover |
| **floating** | CTA, tooltip, or truly emphasized element |

> The portfolio **does not** use a visual language of heavy floating cards. Shadows complement borders and surfaces; they do not replace structure.

### Rotation

Small rotations are part of the expressive layer.

- Use them only on paper elements, polaroids, notes, stickers, or explicitly scrapbook-style cards.
- Rotation should feel controlled, not random.
- Hover may reduce the rotation to create a sense of alignment.
- Do not rotate navigation controls, long-form text, or functional components without a clear visual reason.

---

## 5. Layout & composition

### Main container

`.portfolio-container` is the structural reference.

| Range | Behavior |
|---|---|
| Mobile | `width: calc(100% - 32px)` |
| `sm`+ | `width: calc(100% - 48px)`, `max-width: 1120px` |
| `lg`+ | `width: calc(100% - 56px)`, `max-width: 1376px` |

The increase to `1376px` on large screens is intentional: it allows broader grids and editorial compositions without squeezing projects, skills, and hobbies.

### Breakpoints

Use Tailwind's default breakpoints as reference:

- `sm`: `640px`
- `md`: `768px`
- `lg`: `1024px`
- `xl`: `1280px`

### Responsive philosophy

The layout is **mobile-first**.

- Mobile prioritizes readability and functionality.
- From `sm` / `md`, two-column grids and denser compositions begin to appear.
- `lg` is also an **art-direction breakpoint**: doodles, side notes, and more expressive compositions may appear only from this width upward.
- `xl` supports peripheral elements such as the social sidebar.

> **Principle:** do not compress the desktop version into mobile. Removing secondary decoration is preferable to sacrificing readability.

### Recurring grids

- Hero: `1 → 2` columns at `md`.
- Skills: `2 → 3 → 6` columns.
- Projects: `1 → 2 → 4` columns.
- Hobbies: `1 → 2 → 5` columns.
- Contact: `12`-column grid at `md`.
- Full navigation: `lg+`; below that, use a compact menu.
- Social sidebar: `xl+`.

### Vertical rhythm

Recurring patterns:

- Section padding: `56px`, `64px`, `80px`.
- `.section-y` utility: `56px → 72px → 88px`.
- Section header → content: `32–48px`.
- Grid gaps: `20–32px`.
- Card padding: `16–40px` depending on importance.
- Fixed header: approximately `96px` on mobile and `112px` on desktop.

> Two close vertical-padding scales currently coexist (`80px` and `88px` on desktop). Do not automatically “fix” existing components. For new sections, prefer the choice that is consistent with the neighboring section or the global utility used in that context.

### Section header

This is one of the most important visual patterns in the portfolio.

Recurring structure:

1. Violet eyebrow with `✦`.
2. Extrabold sans headline.
3. A word or phrase in italic serif **or** a handmade annotation.
4. Violet full stop in several sections.
5. Short paragraph in `text-secondary`.
6. Main content after `32–48px`.

Conceptual example:

```text
✦ selected work
Projects worth showing.
Short supporting copy goes here.
```

Not every section must use every treatment, but the hierarchy should remain recognizable.

### Controlled asymmetry

- The base structure should remain aligned to the grid.
- Asymmetry appears in **expressive details**, not in the entire architecture.
- Paper, tape, images, and notes may slightly break out of card boundaries.
- Primary content should never depend on decorative overlap to be understood.

---

## 6. Assets and visual language

### Active identity assets

- Adhesive tape textures.
- Torn paper.
- Paper textures used in skill cards.
- Star, heart, airplane, location, and puzzle doodles.
- Very subtle grid background.
- Rough Notation for circles, highlights, and underlines.
- Personal photo.
- LGBTQIA+ flags used in the current context.
- Hobby images.
- Real project screenshots.

### Paper, tape, and doodles

These elements belong to the identity, but should work as a **second layer**.

Use them when they:

- reinforce a personal or editorial idea;
- help distinguish more human sections;
- create contrast with the technical foundation;
- simulate annotation, memory, process, or physical material.

Avoid them when they:

- compete with essential information;
- appear on every card purely as decoration;
- make a technical component less legible;
- duplicate a metaphor already present in the same composition.

### Rough Notation

May be used to:

- circle a word;
- underline a phrase;
- create a one-off highlight;
- reinforce a short statement.

Do not use it as the default treatment for every headline. A page full of annotations loses the editorial effect.

### Project screenshots

- Prefer real product screenshots.
- Display them inside the technical frame when the composition benefits from browser/app context.
- Keep proportions consistent within the same card family.
- Do not visually redesign the product simply to make it fit the portfolio.

### Icons

Primary libraries:

- `lucide-react`: interface and information icons.
- `react-icons`: brands, technologies, social platforms, and thematic icons.

Recurring scales:

- `14–16px`: actions, metadata, and inline elements.
- `20–24px`: badges and controls.
- `32px+`: highlight icons.

The default color may follow violet; brands may retain their own colors when semantically useful.

### Inactive / legacy assets

Some files exist in the repository but do not represent the current published UI, including certain SVGs, tapes, paper textures, and older variations.

> **Rule:** the mere existence of an asset in the repository does not authorize it as a design standard. Verify that it is active before reusing it.

---

## 7. CSS variables / tokens

### Recommended conceptual block

Exact names should follow the project's real implementation. As a design reference, the foundations are:

```css
:root {
  /* Base */
  --background: #f8f6f2;
  --surface: #fffdf9;
  --text-primary: #151313;
  --text-secondary: #665f5b;
  --border: #ddd8cf;

  /* Brand */
  --primary: #8d75df;
  --primary-strong: #6049bc;
  --primary-soft: #ddd5fb;

  /* Accents */
  --accent-pink: #f3aebe;
  --accent-pink-soft: #f8d8df;
  --accent-yellow: #efc45d;
  --accent-yellow-soft: #f8e2a6;
  --accent-green-soft: #c6d8c5;
  --accent-orange: #f9a85d;
  --ui-line: #ece7df;

  /* Radius */
  --radius-soft: 18px;
  --radius-card: 26px;
  --radius-large: 36px;
  --radius-panel: 38px;
  --radius-pill: 999px;
}
```

### Token policy

1. **An existing active token takes precedence over a new hardcoded value.**
2. Current hardcoded values may remain when they are clearly contextual.
3. Do not create a global token for every isolated color, size, or rotation.
4. Declared but unused tokens should not be treated as standards simply because they exist.
5. When two competing implementations are consolidated in the future, update this document together with the code.

### Known divergences

- `Instrument Sans` is declared but may not actually be loaded.
- Existing typography tokens do not represent the full scale used by the interface.
- `ui-line`, `radius-large`, and some text tokens have little or no active usage.
- Rough Notation and some SVGs use violet values that are close to, but different from, `primary`.

> This document records these divergences; it does not authorize an AI to “fix” them silently during an unrelated task.

---

## 8. Motion / interactions

### General principle

Motion should create a sense of **response, lightness, and personality**, not spectacle.

The typical interaction is short and localized: an element lifts, tilts, draws, or reacts to the pointer without interrupting reading.

### Recurring patterns

| Pattern | Approximate value |
|---|---|
| Vertical hover | `translateY(-2px)` to `-4px` |
| General transitions | `150–300ms` |
| Initial entrance | fade + `translateY(14px)` in ~`700ms` |
| Project tilt | up to ~`6deg`, perspective ~`900px` |
| Hobby image zoom | `scale(1.02)` |
| Rough Notation | ~`800ms` |
| Active navigation / notation | ~`450ms` |
| Hero typing | `60ms` typing / `35ms` deleting / `1600ms` pause |
| Mobile marquee | ~`34s` and `40s`, opposite directions |

### Contextual uses

- Hero: typing and coordinated entrances.
- Projects: 3D tilt and subtle rotation.
- About: light pointer-based parallax.
- Hobbies: rotation reduction / image zoom.
- Doodles: path animation.
- Rough Notation: progressive drawing.

### Rules

- Do not add animation merely because an element supports `motion`.
- Hover feedback should be shorter than entrance animation.
- Do not combine tilt + scale + glow + strong rotation on the same element.
- Motion should not visibly shift the layout.
- Pointer-dependent interactions must remain understandable on touch devices.

### Reduced motion

`prefers-reduced-motion` is a required part of the system.

When enabled:

- remove or minimize animated transforms;
- remove non-essential parallax and tilt;
- reduce entrances to the final state directly;
- avoid continuous marquees or provide a static fallback;
- keep all information accessible without animation.

> New animations should be designed with a reduced-motion fallback from the start, not receive it as a later fix.

---

## 9. Component patterns

### 9.1 Surface card

Used in Projects, Education, Contribution Stats, and calendars.

- `surface` as background.
- `1px` `border`.
- Subtle `shadow-card`.
- `soft` or `card` radius.
- Padding proportional to importance.
- Optional hover with short elevation + `shadow-soft`.

### 9.2 Paper / scrapbook card

Used in Skills, Hobbies, and personal compositions.

- Visible paper or texture.
- Small individual rotation.
- Optional tape, clip, or sticker.
- Elements may slightly overflow the card.
- Hover may partially align the rotation.
- Content must remain legible without decoration.

> Do not turn every card into paper. This family exists to contrast with surface cards.

### 9.3 Technical frame

Used in the terminal and project previews.

- Frame inspired by a desktop/browser window.
- Three indicators at the top when appropriate.
- Monospace in technical areas.
- Screenshot or technical content inside the frame.
- The dark variant is contextual to the terminal; it is not the portfolio's default surface.

### 9.4 Tags / pills

- Pill shape.
- Compact, strong text.
- May use `primary-soft` + violet.
- Neutral or violet borders depending on priority.
- Avoid excessive chips; they should summarize technology, state, or category.

### 9.5 Timeline

Used in Experience and Education.

- Discreet vertical axis.
- Clearly separated period.
- Marker + content.
- Supporting tags in violet.
- Strong hierarchy between role/education and metadata.

This is a reusable contextual pattern for chronological content, not a general layout for any list.

### 9.6 Section header

Treat the set `eyebrow + heading + editorial emphasis + supporting copy` as a recurring system pattern, even if the entire composition is not yet abstracted into a single component.

### 9.7 Data / contribution

Calendars and statistics follow their own visual language:

- small cells with ~`3px` radius;
- detailed tooltip;
- violet scale for intensity;
- semantic colors for vacation/day off/holiday;
- compact, legible statistics.

Do not reuse this semantic palette outside related data visualization.

---

## 10. Context-specific rules

### Hero

The hero is a high-impact composition and a controlled exception.

Characteristics:

- very large name;
- animated handwritten title;
- dark terminal as a professional metaphor;
- torn paper, tape, shapes, and doodles;
- two CTAs;
- full-viewport composition only when enough space is available.

**Do not use the hero as a template for every section.** It concentrates more expressive resources precisely because it is the opening composition.

### About

- Editorial text + portrait collage.
- Image with a pronounced crop / upper arch.
- Overlapping personal badges.
- Personal data in a compact list.
- Pointer parallax only as enhancement.

The content must remain organized even without parallax or decorative overlaps.

### Skills

- Main technologies in paper cards.
- Secondary tools in pills.
- Mobile may use marquees in two directions.
- Desktop prioritizes a static list / grid.
- A decorative handwritten note may appear on larger screens.

### Contribution Activity

- Compact stats + calendar.
- Violet chromatic scale as the primary language.
- Special states use their own semantic colors.
- The current full calendar is hidden below `md`; stat cards remain visible.

> If a mobile calendar version is created, design it deliberately; do not simply compress the desktop grid.

### Experience / Journey

- Vertical timeline.
- Period + marker + content + location.
- Violet tags.
- Initially summarized content, with an expansion action when needed.
- CV download may use a disabled state with tooltip while unavailable.

### Projects

- Grid of up to four cards on desktop.
- Screenshot inside a technical/browser frame.
- Large number + title + description + tags + links.
- 3D tilt is contextual to this section.
- Small rotations may appear on hover.

Do not apply 3D tilt to every card in the portfolio.

### Education

- Two conceptual blocks: education and certifications.
- Education reuses the timeline pattern.
- Certifications may preserve their own brand colors.
- Handwritten taped notes are a desktop enhancement.
- External CTAs are compact and secondary.

### Hobbies

- Cards close to a photo / polaroid treatment.
- `4:3` images.
- Alternating rotations.
- Individual tape and doodles.
- Emoji badges may complement the composition.

This is one of the most personal sections; its visual language should not automatically spill into professional or technical areas.

### Contact

- Large editorial panel.
- Combination of strong sans + italic serif.
- Dark primary CTA.
- Doodle and pink shape may be used as accents.
- On mobile, reorganize vertically instead of preserving complex overlaps.

### Footer

- Simple and contained.
- Personal brand / signature.
- Copyright.
- Social links.
- Rainbow heart as an identity detail.
- On mobile, stack clearly.

### Professional cases

The current published experience **does not include a global section/page called `Cases`** as an established part of the system.

If professional cases are added in the future:

- start from the foundations in this document;
- keep professional content cleaner than Hobbies/About;
- use scrapbook as an accent, not the dominant language;
- preserve real screenshots and evidence;
- create new patterns only after they appear consistently across more than one case.

---

## 11. Inactive components and patterns

There are implementations or variants that are not part of the current published page, including examples such as:

- `ProfessionalHighlights`;
- `WhatIDo`;
- old/alternate `ProjectItem`;
- commented-out `FeaturedProject` variant;
- unmounted `ClickSpark`;
- old or alternate unused assets.

### Rule for AI / maintenance

1. Do not treat inactive components as the primary visual source.
2. Do not reactivate them during unrelated tasks.
3. Do not copy their styles into new elements without comparing them against the active UI.
4. When an inactive component is brought back into use, review whether it still follows this document.

---

## 12. Accessibility and behavior

Even when the visual language is expressive, the portfolio must remain functional before ornamental.

### Minimum rules

- Maintain sufficient contrast for essential text.
- Do not use color alone to communicate state.
- Preserve a visible `focus-visible` state on interactive elements.
- Icons without text need an accessible name when they represent an action.
- Decorative elements should be ignorable by assistive technologies when they carry no meaning.
- Hover must never be the only way to reveal necessary information.
- Motion must respect `prefers-reduced-motion`.
- Primary content must remain accessible when doodles, parallax, marquees, or animations are disabled.

---

## 13. Principles — source of truth for new interfaces

1. **Technical foundation, human expression.** The structure is clean; personality is a layer, not chaos.
2. **Off-white is part of the identity.** Avoid drifting toward generic pure white / cool gray.
3. **Violet is the anchor.** Other colors are narrative or semantic accents.
4. **Strong sans structures; serif comments; Caveat humanizes; mono contextualizes technology.** Each family has a distinct role.
5. **Scrapbook does not mean decorating everything.** Paper, tape, doodles, and rotations should create contrast and narrative.
6. **Controlled asymmetry.** Grid and hierarchy remain solid even when details break alignment.
7. **Borders before heavy shadows.** The interface should remain light and editorial.
8. **Pills are for actions and compact information.** Do not round everything indiscriminately.
9. **Motion is short and intentional.** Lifting, drawing, or reacting to the pointer is preferable to flashy animation without purpose.
10. **Mobile is functional; desktop may be more expressive.** Decoration progresses with available space.
11. **Readability comes before ornamentation.** No visual effect should be necessary to understand the content.
12. **Special compositions remain special.** Terminal, polaroids, calendar, tilt, and collage are not global patterns.
13. **Do not invent a new identity during a local task.** New colors, shadows, fonts, or visual metaphors need a clear reason to exist.
14. **Do not automatically promote exceptions into global tokens.** Repetition and shared function should come before abstraction.
15. **Active code + published experience are the source of truth.** Commented components, old assets, and inactive tokens do not take precedence simply because they exist.

---

## 14. Checklist for AI before changing the UI

Before implementing a visual change, mentally answer:

- Is the component **structural**, **editorial**, **technical**, **personal**, or **decorative**?
- Is there a similar active pattern that can already be reused?
- Does violet remain the primary color, or is there a semantic reason for an exception?
- Does the composition really need paper, tape, a doodle, or rotation?
- Does the effect still work on mobile and with reduced motion?
- Does the change preserve the difference between surface cards and scrapbook cards?
- Am I using an active token or inventing a new value unnecessarily?
- Am I copying a contextual element into a place where it does not belong?
- Does the information remain clear without animation and decoration?
- Does the new solution feel like part of this portfolio, or merely like a generic visual trend?

If the answer requires creating a new visual rule, document the decision before turning it into a recurring pattern.