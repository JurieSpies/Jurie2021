---
name: Jurie Spies CV
description: Dark, single-accent online CV with a user-tunable neon accent and glow interactions.
colors:
  primary: "#03FDA7"
  white: "#FFFFFF"
  black: "#000000"
  grey: "#808080"
  disabled: "#D3D3D3"
  dark: "#1A1A1A"
  header: "#393B3C"
  card: "#27262F"
  page: "#17161D"
  editor: "#1E1E1E"
typography:
  heading:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "52px"
    fontWeight: 700
    lineHeight: 1.2
  heading-mobile:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
  subheading:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "JetBrains Mono, Fira Code, Cascadia Code, Consolas, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "3px"
  md: "4px"
  lg: "8px"
  card: "10px"
  pill: "20px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.black}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.black}"
  button-invert:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-invert-hover:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
  card-experience:
    backgroundColor: "{colors.card}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "20px 20px 20px 30px"
  nav-tab:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
  nav-tab-hover:
    textColor: "{colors.primary}"
---

# Design System: Jurie Spies CV

## Overview

**Creative North Star: "The Neon Terminal"**

The site reads as a dark workspace lit by one electric accent. The page sits on near-black (`#17161D`) and every piece of interactive emphasis, from underlines to button fills to card borders, is drawn in a single accent color. The accent defaults to mint (`#03FDA7`) and can be changed by the visitor through the theme picker, so the accent is a variable, never a hard-coded value.

Density is low. Sections are separated by generous vertical space, headings are large and bold, and body copy is small and quiet. The personality comes from the accent and from the CV's code-editor modal, which borrows a monospace IDE look for the resume itself.

Interaction is expressive, presentation is restrained. Hover states scale, glow, and shift color; at rest, surfaces stay flat.

**Key Characteristics:**
- One accent, changeable at runtime, used for all emphasis.
- Dark-only surfaces; no light theme exists.
- Flat at rest; accent glow and scale on interaction.
- Bold system sans for headings; monospace reserved for the code-CV modal.

## Colors

A near-black palette with white and grey text and a single user-tunable accent.

### Primary
- **Electric Mint** (#03FDA7): The accent. Used for button fills, the invert-button border and text, underlines on the active nav tab, card borders, the color-picker icon, and glow shadows. Exposed as the CSS variable `--color-primary`; the visitor can override it and the reset returns to this value.

### Secondary
- **Card Slate** (#27262F): Experience and content card backgrounds.
- **Header Graphite** (#393B3C): Header and separator surfaces.

### Tertiary
- **Editor Charcoal** (#1E1E1E): Background of the code-CV modal only.

### Neutral
- **Page Night** (#17161D): Global page background (`body`, `#root`).
- **Ink Black** (#1A1A1A): Text on accent-filled buttons and the reset control.
- **Pure Black** (#000000): Text on accent-filled buttons.
- **Signal White** (#FFFFFF): Primary text.
- **Quiet Grey** (#808080): Subheadings and labels.
- **Pale Grey** (#D3D3D3): Disabled state.

### Named Rules
**The One Voice Rule.** The accent is the only saturated color. Its rarity is the point; do not introduce a second accent.

**The Variable Accent Rule.** Never hard-code the accent. Reference `var(--color-primary)` so the visitor's theme choice propagates.

## Typography

**Display Font:** Segoe UI (with Tahoma, Geneva, Verdana, sans-serif)
**Body Font:** Segoe UI (with Tahoma, Geneva, Verdana, sans-serif)
**Label/Mono Font:** JetBrains Mono (with Fira Code, Cascadia Code, Consolas, monospace), used only inside the code-CV modal

**Character:** A plain system sans carries the whole site. Hierarchy comes from size and weight, not from a display face.

### Hierarchy
- **Display** (700, 52px desktop / 32px mobile, line-height 1.2): Name and section titles; the largest text on the page.
- **Statistic** (700, 42px desktop / 32px mobile): Count-up numbers on the home page.
- **Subheading** (700, 18px desktop / 16px mobile, grey): Labels above values, e.g. "Experience", "Nationality".
- **Body** (400, 15px, line-height 1.5; 14px on mobile): Descriptions and card content.
- **Code** (400, 0.82rem, monospace): Code-CV modal only.

### Named Rules
**The Monospace Containment Rule.** Monospace appears only inside the code-CV modal. Do not use it for page headings or body copy.

## Layout

The page is a horizontal flex shell: a fixed-position color picker at bottom-left, a header with tabs on desktop, and a page container below. Desktop (`min-width: 768px`) shows the header tabs; mobile (`max-width: 768px`) swaps them for a burger menu that slides in from the right at 70dvw.

Content sections stack their cards in a row on desktop (`flex-direction: row`, `space-around`) and in a column on mobile. Card margins are 20px. Section top margins are 35px to 60px on desktop, reduced to 0 to 20px on mobile.

The layout is fluid, not grid-based. Exact spacing values are observed, not tokenized.

## Elevation & Depth

Surfaces are flat at rest. Depth is conveyed by the 1px accent border on cards and by tonal contrast between the page (`#17161D`) and cards (`#27262F`). Shadows appear only in response to interaction, as accent-colored glow.

### Shadow Vocabulary
- **Accent glow (hover)** (`box-shadow: 1px 0px 10px 2px var(--color-primary)`): Button hover.
- **Accent glow (strong)** (`box-shadow: 0 5px 15px var(--color-primary)`): Accent highlights on hover.
- **Modal lift** (`box-shadow: 0 18px 70px rgba(0,0,0,0.55)`): Code-CV modal only.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to hover or focus.

## Shapes

Rounded but not soft. Buttons are full pills (20px radius). Cards and logo chips use 10px. Small controls (reset button, color swatch) use 4px. The circular progress and avatar use 50%. Borders are 1px in the accent color on cards and logo chips.

## Components

### Buttons
- **Shape:** Pill (`border-radius: 20px`), padding `10px 20px`, width `max-content`.
- **Primary:** Accent fill (`var(--color-primary)`) with black text. Glow-on-hover.
- **Hover / Focus:** Accent glow `1px 0px 10px 2px` with `transition: all 0.5s ease-in-out`.
- **Invert:** Transparent fill, 1px accent border, accent text. On hover the text turns white and the glow appears.

### Nav Tabs
- **Style:** Underlined with a 2px accent underline on the active item; 20px horizontal margin.
- **Hover:** Text turns accent, scale to 1.2 over 0.3s.
- **Mobile:** Replaced by the burger menu (full-height panel, backdrop `rgba(0,0,0,0.4)`).

### Cards / Containers
- **Corner Style:** 10px radius.
- **Background:** Card Slate (`#27262F`).
- **Shadow Strategy:** None at rest; see Elevation.
- **Border:** 1px solid accent.
- **Internal Padding:** `20px`, with `30px` on the left for experience cards.

### Company Logos
- **Style:** 140×29px, `object-fit: contain`, white background, 1px accent border, 10px radius, 5px padding.

### Progress Meter
- **Style:** Dark track (`#555`), 25px radius, green gradient fill (`rgb(43,194,83)` to `rgb(84,240,84)`) with a diagonal stripe overlay.

### Theme Picker
- **Style:** Fixed bottom-left on desktop; hidden on mobile. An accent-colored palette icon opens a native color input. A Reset button appears when the color differs from the default.

## Do's and Don'ts

### Do:
- **Do** reference `var(--color-primary)` for every accent use.
- **Do** keep the page background at `#17161D` and cards at `#27262F`.
- **Do** use the pill (20px) radius for buttons and 10px for cards.
- **Do** keep hover effects to accent glow, scale, or color shift.
- **Do** keep headings in the system sans at 700 weight.

### Don't:
- **Don't** introduce a second saturated accent.
- **Don't** use monospace outside the code-CV modal.
- **Don't** add drop shadows to cards at rest.
- **Don't** hard-code the mint hex in components; use the variable.
- **Don't** add light-theme surfaces; the system is dark-only.
- **Don't** treat one-off decorative gradients (for example in the skill icon or chat components) as system tokens.
