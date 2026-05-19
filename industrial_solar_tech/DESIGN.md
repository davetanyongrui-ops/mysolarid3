---
name: Industrial Solar Tech
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3d4a3d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6d7b6c'
  outline-variant: '#bccbb9'
  surface-tint: '#006e2f'
  primary: '#006e2f'
  on-primary: '#ffffff'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#4ae176'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#5e5e60'
  on-tertiary: '#ffffff'
  tertiary-container: '#acabae'
  on-tertiary-container: '#3f4042'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#e3e2e4'
  tertiary-fixed-dim: '#c7c6c8'
  on-tertiary-fixed: '#1b1c1e'
  on-tertiary-fixed-variant: '#464749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Metropolis
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Metropolis
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Metropolis
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Metropolis
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Metropolis
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Metropolis
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered to bridge the gap between high-end architectural aesthetics and heavy-duty industrial reliability. It targets a dual audience: the luxury homeowner seeking an elegant energy solution and the industrial facility manager demanding technical precision and ROI. 

The visual style is **Industrial Minimalism**. It leverages the precision of modern engineering—clean lines, structured grids, and a monochromatic foundation—interrupted by a high-visibility "Sustainable Green" that signals technological vitality. The emotional response is one of "Engineered Trust": the interface should feel as stable and high-performance as the solar hardware it represents. Generous white space is used not just for aesthetics, but to provide clarity and cognitive ease when navigating complex energy data.

## Colors

The palette is rooted in industrial materials and environmental stewardship. 

- **Primary (Sustainable Green):** Used exclusively for high-priority actions, success states, and solar energy indicators. It is the "spark" within the system.
- **Secondary (Slate Gray):** Represents the technical componentry—anodized aluminum and silicon. Used for secondary buttons and structural text.
- **Tertiary (Charcoal):** The foundation for deep contrast, used for primary headings and navigation backgrounds to evoke a sense of permanence.
- **Neutral:** A range of grays derived from Slate to handle borders, secondary labels, and disabled states without introducing warmth that would break the "industrial" feel.
- **Backgrounds:** Pure white (#FFFFFF) for the primary canvas, with extremely subtle off-white (#FAFBFF) used for section nesting to maintain a sterile, high-end laboratory feel.

## Typography

The typography strategy employs two distinct sans-serifs to balance technical precision with modern readability. 

**Metropolis** is used for headlines and labels. Its geometric construction mirrors architectural blueprints, providing a structured, "built" feel. It is set with tight letter-spacing in display sizes to create a high-impact, editorial look.

**DM Sans** is used for all body and long-form text. Its low-contrast and neutral terminals provide exceptional legibility for technical specifications and residential contract details.

Hierarchy is strictly enforced: large-scale display type for value propositions, and small, uppercase labels for technical metadata.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to ensure content remains centered and prestigious, while transitioning to a fluid model for mobile devices.

- **Desktop:** A 12-column grid with a max-width of 1440px. 24px gutters ensure breathing room between technical data points.
- **Tablet:** 8-column grid with 32px side margins.
- **Mobile:** 4-column fluid grid with 20px side margins.

Vertical rhythm is governed by a strict 8px base unit. Section spacing is intentionally generous (120px+) to allow the 8k architectural photography to serve as a primary design element, preventing the UI from feeling cluttered or "cheap."

## Elevation & Depth

This design system avoids heavy shadows to maintain its modern industrial aesthetic. Depth is communicated through:

1.  **Low-Contrast Outlines:** Containers use 1px solid borders in a light Slate Gray (#E2E8F0) rather than shadows.
2.  **Tonal layering:** Interactive surfaces use subtle value shifts. For example, a card might sit on a #FAFBFF background with a pure #FFFFFF fill.
3.  **Industrial Glow:** Primary interactive elements (like active solar nodes) may use a subtle, highly diffused "Sustainable Green" glow (15% opacity, 20px blur) to simulate the illumination of LED hardware indicators.
4.  **Hardware Insets:** Form inputs use a subtle internal 1px border to feel "etched" into the interface, mimicking control panels.

## Shapes

To maintain an "Industrial-Tech" feel, the system uses **Soft** (Level 1) roundedness. 

- **Standard Elements (Buttons, Inputs):** 4px (0.25rem) radius. This provides just enough softness to feel modern while retaining the precision of a machined edge.
- **Containers & Cards:** 8px (0.5rem) radius for larger architectural blocks.
- **Data Visualizations:** 0px (Sharp) for bar charts and line graphs to emphasize accuracy and technical rigor.

Circular shapes are reserved exclusively for status indicators (e.g., system online/offline) and user avatars.

## Components

### Buttons
Primary CTAs are solid "Sustainable Green" with white text, utilizing 0.25rem corners. Secondary buttons use a Slate Gray ghost-style (transparent fill, 1px border) to maintain a hierarchy of importance.

### Cards
Cards are defined by white backgrounds, 1px light-gray borders, and no shadows. They should lead with high-resolution architectural imagery. Content within cards follows a strict vertical alignment.

### Inputs & Forms
Input fields use a 1px border (#CBD5E1) that darkens to Slate Gray on hover and Sustainable Green on focus. Labels are always positioned above the field in "label-md" (uppercase) typography for a technical, form-based feel.

### Progress & Status Indicators
Custom "Energy Meters" use segmented bars rather than smooth gradients, mimicking hardware battery indicators. The primary green color is used to show health, while charcoal is used for empty states.

### Imagery Treatment
All architectural photography must be 8k photorealistic. Use a subtle 5% Slate Gray overlay on background images to ensure white text remains legible while maintaining a cool, industrial temperature across all visuals.