# Technologies and tools

## Dependency versions

The tables below document every direct dependency declared in `package.json`. “Declared” is the package range requested by the project; “locked” is the exact resolved version recorded in `package-lock.json` at documentation time. The lockfile is the source of truth for all transitive packages and integrity hashes.

The original technology stack was preserved. Lenis was added for the requested smooth-scrolling behavior. Installed packages are distinguished from packages directly imported by the current application.

## Application dependencies

| Package | Declared | Locked | Role / usage |
| --- | --- | --- | --- |
| `@popperjs/core` | `^2.11.6` | `2.11.6` | Retained Popper 2 package; current menu/tooltip behavior does not instantiate it. |
| `bootstrap` | `^5.2.3` | `5.2.3` | Retained from the original project; the current entry point does not import Bootstrap CSS or JavaScript. |
| `core-js` | `^3.8.3` | `3.27.1` | Retained compatibility/polyfill package in the existing Babel/Vue CLI toolchain. |
| `lenis` | `1.3.27` | `1.3.27` | Active: site-wide smooth wheel scrolling, anchors, and route scroll control; exact version pinned. |
| `normalize.css` | `^8.0.1` | `8.0.1` | Active: imported before the site styles to normalize browser defaults. |
| `popper.js` | `^1.16.1` | `1.16.1` | Retained legacy Popper 1 package; current application code does not import it. |
| `register-service-worker` | `^1.7.2` | `1.7.2` | Active in production: registration and lifecycle callbacks for the generated service worker. |
| `vue` | `^3.2.13` | `3.2.45` | Active: renders the application with Vue 3 single-file components and the Options API. |
| `vue-router` | `^4.0.3` | `4.1.6` | Active: HTML5 history routes, RouterLink, lazy page imports, page titles, and scroll behavior. |
| `vuex` | `^4.0.0` | `4.1.0` | Active: in-memory newsletter email state and the localStorage-writing mutation. |

## Development dependencies

| Package | Declared | Locked | Role / usage |
| --- | --- | --- | --- |
| `@babel/core` | `^7.12.16` | `7.20.12` | Build-time JavaScript transformation engine. |
| `@babel/eslint-parser` | `^7.12.16` | `7.19.1` | Parses application JavaScript for ESLint. |
| `@vue/cli-plugin-babel` | `~5.0.0` | `5.0.8` | Connects Babel and the Vue CLI preset; babel.config.js selects the preset. |
| `@vue/cli-plugin-eslint` | `~5.0.0` | `5.0.8` | Connects ESLint checks to the Vue CLI commands/build. |
| `@vue/cli-plugin-pwa` | `~5.0.0` | `5.0.8` | Generates the web app manifest and Workbox service-worker build. |
| `@vue/cli-plugin-router` | `~5.0.0` | `5.0.8` | Retained Vue CLI router integration package; routes are configured explicitly in src/router/index.js. |
| `@vue/cli-plugin-vuex` | `~5.0.0` | `5.0.8` | Retained Vue CLI store integration package; the store is configured in src/store/index.js. |
| `@vue/cli-service` | `~5.0.0` | `5.0.8` | Runs serve, build, and plugin-provided lint commands; owns Webpack configuration. |
| `eslint` | `^7.32.0` | `7.32.0` | JavaScript static analysis using the repository configuration. |
| `eslint-plugin-vue` | `^8.0.3` | `8.7.1` | Vue single-file component lint rules; vue3-essential is enabled. |
| `sass` | `^1.32.7` | `1.57.1` | Compiles the project SCSS overrides to CSS. |
| `sass-loader` | `^12.0.0` | `12.6.0` | Connects Sass compilation to the Vue CLI/Webpack build. |

## Languages, formats, and styling

| Technology | How the project uses it |
| --- | --- |
| JavaScript | Application setup, routing, Vuex mutations, event delegation, scrolling, and PWA registration. |
| Vue single-file components (`.vue`) | Shared site shell/components and individual page templates. |
| HTML | Document shell, accessible controls, forms, media, and semantic page content. |
| CSS | Reference layout, custom-property design tokens, typography, breakpoints, and interactions. |
| Sass / SCSS | Custom responsive rules, motion, and interactive-state overrides compiled through sass-loader. |
| SVG | Local vector icons, flower favicon, and Bloomwell wordmarks. |
| JSON | npm metadata/lockfile, page inventory, and JavaScript editor settings. |
| Markdown | README, architecture, setup, tool inventory, attribution, and change history. |
| AVIF / WebP / PNG / ICO | Photographic images, responsive variants, shapes, and browser/app icons. |
| MP4 / WebM | Background videos with alternate source formats. |
| CSS scroll snap | Native horizontal carousel positioning. |
| CSS media queries | Responsive layout and reduced-motion behavior. |
| Google Fonts | IBM Plex Mono, Instrument Sans, and Inter, requested by the document shell. |
| System serif fonts | Georgia/Times New Roman/serif text in the Bloomwell SVG wordmarks. |

## Browser APIs

| API / capability | Usage |
| --- | --- |
| History API | Vue Router page navigation without full-document reloads. |
| `IntersectionObserver` | Reveal marked sections when they enter the viewport. |
| `matchMedia` | Enable/disable smooth scrolling when reduced-motion preferences change. |
| `requestAnimationFrame` | Lenis animation loop through its `autoRaf` setting. |
| `ResizeObserver` | Lenis automatic dimension updates. |
| `scrollTo` / `scrollBy` | Native fallback scrolling and carousel navigation. |
| HTML constraint validation | `reportValidity()` checks forms before feedback is generated. |
| `FormData` | Collects contact values for the generated email link. |
| localStorage | Stores newsletter interest on the current device. |
| `HTMLMediaElement` | Plays/pauses background video from the custom controls. |
| Service Worker / Cache Storage | Production PWA behavior generated through Vue CLI and Workbox. |
| ARIA and keyboard events | Roles, selected/expanded state, status feedback, Escape/Enter/Space handling. |
| `mailto:` and `tel:` links | Browser handoff to installed communication applications. |

## Build and repository tools

| Tool | Role |
| --- | --- |
| Node.js | Runs Vue CLI, dependency tooling, and optional development automation. |
| npm | Dependency installation and serve/build/lint scripts. |
| Git | Version history, staged change review, commits, and pushing the source. |
| GitHub | Existing remote repository at `Ibnoukhalkanezakaria/Wellbeing`. |
| Vue CLI / Webpack | Development server, hot reload, code splitting, asset copying, and production bundles. Webpack is provided through Vue CLI rather than declared directly. |
| Babel | JavaScript transformations selected by the Vue CLI Babel preset and browser targets. |
| Workbox | Service-worker generation through the Vue CLI PWA plugin, with video/map precache exclusions. |
| Browserslist | Targets from `.browserslistrc`: `> 1%`, `last 2 versions`, `not dead`, `not ie 11`. |
| ESLint | `eslint:recommended` and `plugin:vue/vue3-essential`, parsed using `@babel/eslint-parser`. |
| jsconfig.json | JavaScript editor configuration, DOM libraries, and the `@/*` → `src/*` alias. |
| .gitignore | Excludes installed packages, production output, local environment files, logs, and editor artifacts. |

The JavaScript compiler options in `jsconfig.json` support editor tooling; browser compilation is controlled by Babel, Vue CLI, and Browserslist. The application is not a TypeScript project.

## Tools used during implementation

These tools helped inspect, recreate, format, or verify the website. They are not application runtime dependencies and are not required for `npm ci` or `npm run serve`.

| Tool | Development use |
| --- | --- |
| Codex-assisted editing | Repository inspection, implementation, documentation, and orchestration of local checks. |
| Local Sites workflow guidance | Used the local-repository development path; no hosted Sites project was created or deployed. |
| Shell / terminal | Ran project commands and inspected build/server logs. |
| ripgrep (`rg`) | Located files, references, classes, and branding strings. |
| curl | Retrieved reference content and checked local HTTP responses. |
| Python | Imported and normalized static content/assets and performed local file checks. |
| Requests | Downloaded reference page content and media during the import. |
| Beautiful Soup | Parsed reference HTML, normalized links, and removed remote runtime scripts before generating Vue templates. |
| Pillow | Resized browser/app bitmap icons during the branding update. |
| Python XML tools | Adapted the flower mark and generated SVG branding assets. |
| Prettier | Formatted the generated Vue templates in a temporary tool installation. |
| Playwright | Drove local browser checks for pages, viewport sizes, interactions, scrolling, and branding. |
| Google Chrome | Rendered the live reference, local website, and supplied reference video during visual QA. |
| Temporary Python HTTP server | Served production output with SPA fallback during production-browser checks. |

Temporary import scripts, browser scripts, and tool installations were kept outside the repository. They do not constitute a committed automated test suite. No generated raster artwork or image-generation service was required; brand wordmarks are SVG assets.

## Configuration inventory

| File | Purpose |
| --- | --- |
| `package.json` | Direct dependencies and npm scripts. |
| `package-lock.json` | Exact dependency graph, resolved versions, and integrity values. |
| `vue.config.js` | Transpilation, literal CSS asset URLs, PWA name/theme/icon, Workbox exclusions. |
| `babel.config.js` | Vue CLI Babel preset. |
| `.browserslistrc` | Target browser selection for the build. |
| `.eslintrc.js` | JavaScript/Vue lint configuration and production console/debugger warnings. |
| `jsconfig.json` | Editor language settings and alias mapping. |
| `.gitignore` | Local/build artifacts excluded from version control. |
| `public/index.html` | Document metadata, title, favicon, and external font stylesheet. |

No credentials or environment variables are required for the current frontend. There is no committed CI/CD workflow or application backend configuration. See [development and deployment](DEVELOPMENT.md) for serving requirements and current integration limits.
