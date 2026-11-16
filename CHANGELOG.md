# Change history

## 2026-11-16 — Bloomwell replacement and documentation

### Website

- Replaced the previous Wellbeing screens and old asset set with Vue pages based on the supplied Wellbeing Home V2 reference.
- Kept Home V2 as the single homepage and retained one About and Contact page.
- Added the reference's class, instructor, event, blog, schedule, testimonial, and utility views, including content detail routes.
- Preserved the existing Vue 3, Vue Router, Vuex, Vue CLI, Sass, Bootstrap, Popper, Babel, ESLint, Normalize.css, core-js, and PWA packages.
- Added Lenis 1.3.27 for site-wide smooth scrolling, with route integration, anchor support, and reduced-motion handling.
- Added shared navigation/footer components and native handlers for menus, FAQs, tabs, carousels, background video controls, and forms.
- Replaced the visible brand with Bloomwell, including header/footer wordmarks, browser titles, and PWA metadata.
- Replaced the default Vue browser icon with the flower favicon and updated installed-app icons.
- Set the footer copyright and developer credit to ibnoukhalkane.

### Behavior and verification

- Corrected stylesheet ordering, mobile navigation specificity, and class-carousel mask sizing.
- Validated the 37 canonical routes, representative mobile layouts, core interactions, smooth scrolling, reduced-motion behavior, and rebranded assets.
- Confirmed the production build succeeds; existing media/entrypoint size warnings remain documented.
- Kept contact submission as an email-app handoff and newsletter interest as browser-local storage, with explicit feedback about those limits.

### Documentation

- Expanded the README with setup, commands, structure, capabilities, technology overview, and current scope.
- Added complete direct-dependency and development-tool inventories.
- Added architecture, full route mapping, deployment, customization, PWA, validation, troubleshooting, and asset-attribution documentation.

Earlier history is available in Git; the original repository commits were `Initial commit` and `first`.
