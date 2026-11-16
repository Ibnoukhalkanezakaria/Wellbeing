# Assets and attribution

## Reference

The supplied visual reference is [Wellbeing Home V2](https://welbeing.webflow.io/home-v2). Its page layouts and media informed the recreated Vue pages. The supplied local video was used as a visual reference during implementation and is not bundled with the website.

Only one version of each page family is rendered. The imported layout stylesheet retains some historical reference class names and unused selectors; that does not mean alternate page versions are available.

Reference pages were inspected and their relevant static content and assets were adapted into local Vue templates. Remote Webflow JavaScript, embedded review scripts, and tracking/runtime scripts were not incorporated into the application. The implementation does not depend on a Webflow CMS connection.

## Bloomwell branding

| Asset | Purpose |
| --- | --- |
| `public/assets/bloomwell-logo.svg` | Header and small footer wordmark. |
| `public/assets/bloomwell-logo-large.svg` | Large footer wordmark. |
| `public/bloomwell-icon.svg` | Browser-tab flower mark. |
| `public/favicon.ico` | ICO fallback. |
| `public/img/icons/*.png` | Favicon, Apple touch, Android/maskable, and Windows tile sizes. |
| `public/img/icons/safari-pinned-tab.svg` | Pinned-tab flower mark. |

The current brand colors are brown `#443627`, orange `#D98324`, sand `#EFDCAB`, and cream `#F2F6D0`. The flower mark uses orange and the wordmark uses brown. Browser/app PNGs are rendered from the updated SVG flower on cream; the ICO fallback is encoded from the rendered icon. See [the design system](DESIGN_SYSTEM.md).

The Bloomwell wordmarks are vector assets with the flower motif and serif text. Their text uses a Georgia/Times New Roman/serif system-font stack. The browser icon keeps the flower symbol without a wordmark.

The footer credits website customization and development to **ibnoukhalkane**. Renaming the site does not rename the upstream GitHub repository or establish ownership of a new email domain.

## Local media

Reference imagery, icons, and videos are stored in `public/assets/`. File names retain source identifiers to preserve predictable references and distinguish responsive variants. Formats include:

- AVIF and WebP for photographic imagery.
- PNG for shapes, posters, and bitmap icons.
- SVG for illustrations, controls, decorative marks, and wordmarks.
- MP4 and WebM for background videos.

Many images use `srcset` variants. Do not remove a resized file without updating all corresponding `srcset` references. Inline video poster URLs and CSS background URLs are also local.

The asset directory is approximately 59 MB in the current checkout, mainly due to the paired video formats. The largest individual media files remain well below GitHub's individual-file limit. `dist/` and `node_modules/` are ignored; local source media is tracked so the site can be built after a clone.

## Fonts

`public/index.html` loads IBM Plex Mono, Instrument Sans, and Inter from Google Fonts. The CSS typography variables select the relevant families. These font requests remain external; the project does not vendor Google Fonts files.

The retained reference stylesheet also embeds a small icon font as a data URL. Some controls, such as the dropdown arrow, use local CSS overrides instead.

## Rights and licenses

The reference design, stock photography, video footage, icon assets, and fonts remain subject to their original owners' terms. This repository does not grant new rights to third-party material. The visible `licenses` page reproduces reference template content and is not a complete legal inventory of every asset or npm package.

Dependencies have their own licenses, available in their installed package metadata and license files. No root software license was present or added as part of the redesign/documentation work. Add an appropriate project license separately if the owner decides to publish the source under explicit terms.
