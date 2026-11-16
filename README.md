<p align="center">
  <img src="public/assets/bloomwell-logo.svg" alt="Bloomwell" width="280" />
</p>

# Bloomwell

A responsive wellness studio website built with **Vue 3**, **Vue Router**, **Vuex**, **Sass**, and **Vue CLI**, with **Lenis** for smooth scrolling. Designed and developed by **ibnoukhalkane**.

Bloomwell replaces the previous Wellbeing implementation with a recreation of the supplied [Wellbeing Home V2 reference](https://welbeing.webflow.io/home-v2). Home V2 is the only homepage, and About and Contact each have one canonical version. The application runs locally as a Vue single-page application; it does not require Webflow hosting or its JavaScript runtime.

## Features

- 37 page routes: home, about, classes, instructors, events, contact, blogs, schedule, testimonials, utility pages, and individual content pages.
- Bloomwell wordmarks, a flower favicon, branded PWA metadata, and an ibnoukhalkane footer credit.
- Responsive navigation, a page directory, mobile menu, and keyboard support.
- Smooth wheel scrolling, anchor navigation, route scroll restoration, and reduced-motion support.
- Scroll reveals, a moving image hero, class carousels, FAQ accordions, schedule tabs, and background video controls.
- Local reference imagery, SVG icons, video files, and responsive image variants.
- Contact input validation with an email-app handoff, and browser-local newsletter interest storage.
- Production service worker support through the existing Vue CLI PWA tooling.

## Run locally

```sh
git clone git@github.com:Ibnoukhalkanezakaria/Wellbeing.git
cd Wellbeing
npm ci
npm run serve
```

Open the Local URL printed by Vue CLI, normally **http://localhost:8080**. The GitHub repository and checkout directory retain the name `Wellbeing`; the website brand is **Bloomwell**.

To expose the development server to devices on the same network:

```sh
npm run serve -- --host 0.0.0.0 --port 8080
```

Node.js and npm are required. The repository does not currently pin a Node version with `engines` or a version-manager file. Use a maintained Node.js release compatible with the existing toolchain and verify installation and builds. The development environment used for the recorded application build had Node.js 12.22.9 and npm 8.5.1; this records that environment rather than recommending that older Node release for a new setup.

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the versions recorded in `package-lock.json`. |
| `npm run serve` | Start the development server with hot reload. |
| `npm run build` | Build the production website into `dist/`. |
| `npm run lint` | Run the Vue CLI ESLint command; it may fix files. |
| `npm run lint -- --no-fix` | Check lint results without automatic fixes. |

There is no committed automated test runner or `npm test` script. Browser checks performed during implementation are described in [development and validation](docs/DEVELOPMENT.md#validation).

## Technology overview

| Area | Technologies |
| --- | --- |
| Application | Vue 3 single-file components, JavaScript, HTML, SVG |
| Navigation | Vue Router 4, HTML5 history, lazy-loaded views |
| State | Vuex 4, browser localStorage |
| Styling | CSS, Sass/SCSS, CSS custom properties, Normalize.css |
| Scrolling | Lenis 1.3.27, native browser scrolling and CSS scroll snap |
| Existing retained dependencies | Bootstrap 5, Popper 2, legacy Popper 1, core-js |
| Build and checks | Vue CLI 5, Webpack through Vue CLI, Babel, ESLint, eslint-plugin-vue, sass-loader |
| PWA | Vue CLI PWA plugin, Workbox through the plugin, register-service-worker |
| Media and type | AVIF, WebP, PNG, SVG, ICO, MP4, WebM; Google Fonts |
| Development workflow | Node.js, npm, Git, GitHub; browser QA with Playwright and Google Chrome |

Bootstrap and both Popper packages are retained from the original project. They are **not imported by the current application entry point**; the present layout and interactions use custom styles, Vue, and browser APIs. See [the complete dependency and tools inventory](docs/TECHNOLOGIES.md) for package versions and how each tool is used.

## Project structure

```text
Bloomwell (repository: Wellbeing/)
├── public/
│   ├── assets/                 # Local images, icons, videos, and Bloomwell wordmarks
│   ├── img/icons/              # Browser and installed-app icon sizes
│   ├── bloomwell-icon.svg     # Flower favicon
│   ├── favicon.ico
│   ├── index.html             # HTML shell, metadata, Google Fonts
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── SiteHeader.vue     # Shared desktop/mobile navigation
│   │   └── SiteFooter.vue     # Shared newsletter, links, branding, and credit
│   ├── router/
│   │   ├── index.js           # Route definitions and scroll integration
│   │   └── pages.json         # Page inventory and titles
│   ├── scss/
│   │   ├── site.css           # Local reference layout, typography, and tokens
│   │   └── main/main.scss     # Interaction and responsive overrides
│   ├── store/index.js         # Vuex newsletter state
│   ├── views/reference/       # 37 individual Vue page templates
│   ├── App.vue                # Shared application shell and event handlers
│   ├── main.js                # App creation and stylesheet order
│   ├── siteInteractions.js    # Menus, tabs, FAQ, carousel, video, and forms
│   ├── smoothScroll.js        # Lenis lifecycle and route scrolling
│   └── registerServiceWorker.js
├── docs/                      # Detailed project documentation
├── vue.config.js              # Build, CSS asset URLs, PWA, and Workbox settings
├── babel.config.js
├── jsconfig.json
├── .browserslistrc
├── .eslintrc.js
├── package.json
└── package-lock.json
```

## Documentation

- [Technologies and tools](docs/TECHNOLOGIES.md): all direct packages, resolved versions, browser APIs, asset tools, and QA tools.
- [Architecture and routes](docs/ARCHITECTURE.md): application lifecycle, page inventory, styling, interactions, and data flow.
- [Development, deployment, and validation](docs/DEVELOPMENT.md): commands, customization, production hosting, PWA behavior, troubleshooting, and checks.
- [Assets and attribution](docs/ASSETS.md): reference origin, branding, local media, fonts, and third-party materials.
- [Change history](CHANGELOG.md): the replacement, rebranding, scrolling, and documentation work.

## Current scope

This is a frontend website. It has no application server, database, account system, payment flow, or booking backend.

Contact forms prepare a `mailto:` link after validation; the visitor must open their email app and send the message. Newsletter interest is saved only on the current device and is not sent to a mailing list. Existing studio addresses, email destinations, telephone numbers, schedules, and content come from the reference and need business-specific configuration before real use.

Production hosting must serve `index.html` for valid application routes because the router uses HTML5 history. See [deployment instructions](docs/DEVELOPMENT.md#production-deployment).

## Credits

**Website customization and development:** ibnoukhalkane.

**Design reference:** [Wellbeing Home V2](https://welbeing.webflow.io/home-v2). Reference design, stock imagery, media, and fonts remain subject to their original rights and licenses; see [assets and attribution](docs/ASSETS.md). No project-wide software license has been added to this repository.
