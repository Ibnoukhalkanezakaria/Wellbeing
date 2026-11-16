# Bloomwell color system

The site uses the four colors supplied in the palette reference. The shared values are defined in `src/scss/main/_palette.scss`, imported by `main.scss`, and used through the existing semantic tokens in `src/scss/site.css`.

| Color | Hex | Token | Usage |
| --- | --- | --- | --- |
| Brown | `#443627` | `--palette-brown` | Main text, hero/dark sections, video overlays, and browser/PWA theme. |
| Orange | `#D98324` | `--palette-orange` | Primary actions, selected tabs, flower marks, decorative icons, and accents. |
| Sand | `#EFDCAB` | `--palette-sand` | Secondary sections, footer, badges, borders, and supporting surfaces. |
| Cream | `#F2F6D0` | `--palette-cream` | Page/card backgrounds and text on dark surfaces. |

Brown-derived ink (`#33281D`), muted text (`#6B523B`), lines (`#A99572`), and transparent variants support the four brand colors. Error feedback retains its semantic red color.

## Semantic aliases

`--color--text-primary`, `--color--black`, and other dark-neutral roles resolve to brown. The existing `--color--white` role resolves to cream, while `--color--background-secondary` and `--color--lite-bg` resolve to sand. `--color--brand-color` resolves to orange. These legacy token names preserve the reference layout without requiring changes to every template.

Primary controls and selected tabs use dark ink on orange; hover states use cream on brown. Small text links use brown instead of orange on pale backgrounds. The cream/brown text pair has approximately 10.47:1 contrast, and sand/brown approximately 8.60:1. Orange/cream is approximately 2.61:1, so that pair is not used for small button labels.

The four exact swatches are visible at `/style-guide#colors`. Header/footer SVGs, browser/app icons, hero curves, and background-video gradients are coordinated with this palette. Photographs and video footage keep their original colors.

## Updating the palette

1. Change the four shared values and supporting shades in `_palette.scss`.
2. Keep semantic aliases in `site.css` synchronized with their intended role.
3. Update the displayed style-guide hex labels when changing a brand color.
4. Update vector icon/wordmark colors and render the browser/app bitmap icons from the favicon SVG.
5. Update `themeColor` and `msTileColor` in `vue.config.js` and the theme metadata in `public/index.html`.
6. Preview light/dark sections, buttons and hover states, form fields, selected tabs, hero curves, and the style guide at desktop/mobile sizes.

Static SVG colors and browser theme metadata do not inherit CSS variables from the document and therefore require their own coordinated update. The curved bitmap hero shapes are reused as CSS alpha masks so their displayed color follows the brown token directly.
