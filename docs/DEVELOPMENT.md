# Development, deployment, and validation

## Requirements and installation

Install Node.js **24.x**, npm, and Git. The Node major is pinned in both `package.json` (`engines.node`) and `.nvmrc` so local verification and Vercel builds use the same supported runtime. With nvm, run `nvm install` and `nvm use` in the project directory.

```sh
git clone git@github.com:Ibnoukhalkanezakaria/Wellbeing.git
cd Wellbeing
npm ci
npm run serve
```

No environment variables, API keys, credentials, or backend services are required for the current frontend. Google Fonts requests and outbound email/social links still require the relevant external services to be reachable.

`package-lock.json` is committed. Use `npm ci` for a reproducible installation; use `npm install` when intentionally changing dependencies, and commit both package files together.

## Development server

```sh
npm run serve -- --host 0.0.0.0 --port 8080
```

Open `http://localhost:8080` on the development computer, or the Network URL printed by Vue CLI on a reachable device. The development server supports hot reload and route fallback. Port 8080 is a development convention, not a separate backend service.

Changes to `vue.config.js`, especially PWA icon settings, may require restarting the development server. Avoid committing local server logs, `node_modules/`, or `dist/`.

## Customization

| Change | Files to edit |
| --- | --- |
| Page content | Matching template in `src/views/reference/` |
| Main navigation or mobile menu | `src/components/SiteHeader.vue` |
| Footer links, copyright, or newsletter wording | `src/components/SiteFooter.vue` |
| Page paths, redirects, and browser titles | `src/router/index.js`; keep `src/router/pages.json` aligned |
| Browser metadata or Google Fonts | `public/index.html` |
| Application name, PWA colors, icon paths | `vue.config.js` |
| Bloomwell wordmarks | `public/assets/bloomwell-logo.svg`, `bloomwell-logo-large.svg` |
| Browser icon | `public/bloomwell-icon.svg`; also update ICO/PNG and pinned-tab assets as needed |
| Brand palette | `src/scss/main/_palette.scss`; see [design system](DESIGN_SYSTEM.md) |
| Layout tokens or typography | `src/scss/site.css` |
| Responsive/interaction overrides | `src/scss/main/main.scss` |
| Scroll speed and anchor offset | `src/smoothScroll.js` |
| Menu, FAQ, tab, video, or carousel logic | `src/siteInteractions.js` |
| Contact email destination | `handleSubmit()` in `src/siteInteractions.js`, plus links in page templates |
| Newsletter persistence | `src/store/index.js` and submit handling |

The current brand is Bloomwell. `Wellbeing` remains the GitHub repository/directory name and part of source-reference metadata, asset filenames, contact data, and the existing localStorage key. These are separate from the displayed brand.

To add a page, create a Vue single-file component, add a lazy route and title, update the page inventory, and add navigation links where appropriate. Use `RouterLink` for local routes and ensure the new page follows the shared interaction class conventions.

To implement actual booking, email delivery, or newsletter subscriptions, introduce an appropriate backend or service integration and replace the current browser-local feedback. The present form handlers are not backend endpoints.

## Production deployment

Build the static output:

```sh
npm ci
npm run build
```

Deploy the contents of `dist/` to a static host. Do not deploy source files or `node_modules/` as the public website. The connected Vercel Git integration builds deployments when changes are pushed to the linked production branch. A Git push only deploys automatically when that integration is enabled for the relevant project.

The host must:

- Serve real assets directly, including SVG, AVIF, MP4, WebM, CSS, and JavaScript.
- Rewrite valid application paths to `index.html` for Vue Router history navigation.
- Serve over HTTPS for production service-worker support.

For an Nginx server whose document root contains `dist/` contents, the route fallback typically has this shape:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

For a static host that supports a `_redirects` file, an equivalent SPA fallback is typically:

```text
/* /index.html 200
```

Those Nginx and `_redirects` snippets are hosting examples; neither is installed in this repository. Vercel uses the committed configuration below. Match them to the selected host and ensure missing assets are not silently treated as application pages.

The present implementation assumes hosting at the domain root. Although the router uses `process.env.BASE_URL`, media paths such as `/assets/...` and PWA icon paths are root-relative. A deployment under a repository subdirectory requires coordinated asset/base-path changes. Do not assume it will work unchanged on a GitHub Pages project path.

## Vercel deployment

The committed `vercel.json` uses Vercel's static/Other framework setting (`framework: null`) with explicit `npm ci` installation, the existing Vue CLI `npm run build`, and the `dist` output directory. Disabling the automatic Vue preset prevents its blanket SPA fallback from turning missing asset requests into successful HTML responses. The Vue application and build tools are unchanged. The Node major is pinned to `24.x` by `package.json` and `.nvmrc`.

The SPA rewrite serves `index.html` for application paths, including nested class/blog/event/instructor routes. It excludes the `/assets`, `/img`, `/js`, and `/css` directories and file paths with extensions so missing assets remain 404s. The existing service worker is served with `Cache-Control: public, max-age=0, must-revalidate` to support updates.

For an existing Vercel project, connect this GitHub repository, set the Root Directory to the repository root, and use `main` as the production branch. The committed build/output/framework settings are intended to override corresponding project defaults. A separately configured Root Directory still needs to be correct in Vercel.

The repository currently has multiple Vercel projects posting GitHub checks. A failed check on a duplicate project does not prove that the successful production project is broken. Inspect each project's build logs before changing or removing project integrations. This change does not delete or disconnect any Vercel projects.

When Vercel account access is available, the deployment IDs shown in GitHub check details can be inspected using the Vercel dashboard or `vercel inspect <deployment-id> --logs`. Private logs and project settings require an authenticated Vercel connection. Do not place access tokens in this repository.

Useful references: [Vercel project configuration](https://vercel.com/docs/project-configuration/vercel-json), [Node version selection](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

## Service worker and caching

PWA support is generated by the existing Vue CLI plugin and registered only in production. `vue.config.js` sets the Bloomwell name, theme colors, favicon, and exclusions for `.map`, `.mp4`, and `.webm` files. Videos are deliberately not precached.

After an update, the existing registration code logs that new content is available; it does not force an automatic reload. Refresh the page to use the new version. When investigating stale branding or styles, use browser developer tools to inspect or unregister the service worker and clear site storage in the test browser. Clearing site storage also removes browser-local newsletter interest.

The SVG favicon has a brand-specific filename to avoid reusing the original cached Vue icon. PNG, ICO, Apple touch, maskable, and pinned-tab assets are also included.

## Validation

The following checks were performed during the implementation and rebrand:

| Check | Result / scope |
| --- | --- |
| `npm run build` | Passed for the Bloomwell application source, including a fresh npm install/build under Node 24.15.0 for Vercel configuration verification. |
| `git diff --check` | Used to check whitespace errors before publication. |
| Desktop route loading | All 37 canonical page routes loaded during the replacement work. |
| Mobile layout | Representative home, about, classes, contact, events, blogs, instructors, schedule, and class-detail views checked for horizontal page overflow. |
| Navigation | Desktop dropdown, Escape handling, mobile menu, and mobile page navigation checked. |
| FAQ and schedule | Answer toggling and schedule tab switching checked. |
| Class carousel | Arrow scrolling checked after correcting the visible mask width. |
| Contact form | Input validation and generated email handoff checked; actual email delivery is not implemented. |
| Newsletter | Browser-local feedback and storage flow checked; external delivery is not implemented. |
| Smooth wheel scrolling | Progression checked on home, about, classes, blogs, and schedule. |
| Router scrolling | Return to top on navigation checked. |
| Reduced motion | Lenis disabled when the media preference changed. |
| Branding | Bloomwell header/footer SVGs, browser title, favicon URL, and mobile layout checked. |
| Color system | All 37 routes checked for the exact four shared palette values; style-guide swatches, representative desktop/mobile sections, and navigation checked with no runtime errors observed. |
| JavaScript errors | No runtime errors observed in the final scrolling and representative production-interaction checks. |
| Local assets | Referenced local asset paths checked for missing files. |

Browser checks used temporary Playwright scripts and Google Chrome outside the repository. They are not committed as a test suite, and this project has no automated coverage percentage or `npm test` command. Future changes should rerun the relevant checks rather than treating these results as a permanent guarantee.

The production build reports asset/entrypoint size warnings, primarily from reference videos and the retained layout stylesheet. Videos are several megabytes each; they are excluded from service-worker precaching. These warnings do not prevent the build from completing.

For code changes, the available commands are:

```sh
npm run lint -- --no-fix
npm run build
```

For layout or interaction changes, preview representative desktop/mobile pages and exercise the affected controls. Verify reduced-motion behavior when changing animations.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Direct links return a server 404 | Configure SPA fallback to `index.html`. |
| Main heading appears too small | Keep Normalize.css before the reference stylesheet in `src/main.js`. |
| Mobile menu opens but remains hidden | Check specificity around the reference `.w-nav-menu` rules and the `.mobile-open` overrides. |
| Class carousel shows one card | Check `.class-v2-mask` maximum width and `.class-v2-slide` widths in the SCSS overrides. |
| Old favicon remains | Confirm `/bloomwell-icon.svg` is served and restart the dev server after PWA config changes; refresh the browser cache. |
| Motion does not animate | Check `prefers-reduced-motion`; disabling smoothing in that mode is intended. |
| Contact form does not send automatically | It prepares an email link; no email backend exists. |
| Newsletter is absent from an email provider | It is only local interest storage, not a real subscription. |
| Background videos do not work offline | Videos are excluded from precaching. |
| Font appearance changes offline | Google Fonts may not be available on a fresh offline visit. |
| Build reports outdated Browserslist data | The lockfile contains existing browser data; update dependencies deliberately and recheck the build if choosing to refresh it. |
| Host serves blank pages under a subpath | Review all base paths and root-relative media URLs. |
