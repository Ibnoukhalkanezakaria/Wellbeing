# Architecture and routes

## Application lifecycle

`public/index.html` provides the document language, viewport, description, author metadata, Bloomwell favicon, and Google Fonts. Vue CLI injects the application bundles into that shell.

`src/main.js` creates the Vue application, registers Vue Router and Vuex, and mounts `App.vue` into `#app`. It also imports production service-worker registration and the stylesheets in this order:

1. `normalize.css`: browser normalization.
2. `src/scss/site.css`: reference layout, responsive tokens, and typography.
3. `src/scss/main/main.scss`: site-specific interaction and layout overrides.

The order matters: loading normalization after the layout can override heading sizes.

`App.vue` renders the shared `SiteHeader`, current `RouterView`, and `SiteFooter`. It starts smooth scrolling on mount and destroys it on unmount. Route changes close menus and initialize the incoming page after Vue updates the DOM.

## Component responsibilities

| File | Responsibility |
| --- | --- |
| `src/App.vue` | Shared shell; delegated click, key, and submit events; route-change initialization. |
| `src/components/SiteHeader.vue` | Logo, main links, page directory, contact/class calls to action, mobile navigation. |
| `src/components/SiteFooter.vue` | Newsletter form, canonical page links, social links, two wordmarks, author credit. |
| `src/views/reference/*.vue` | Individual page sections and content; no remotely loaded HTML or Webflow scripts. |
| `src/router/index.js` | Lazy-loaded route components, redirects, titles, and scroll behavior. |
| `src/router/pages.json` | Companion page inventory; keep it synchronized with route definitions. The router does not generate routes from this file at runtime. |
| `src/siteInteractions.js` | Page initialization and native DOM interaction handlers. |
| `src/smoothScroll.js` | One Lenis instance shared by all pages, plus reduced-motion handling. |
| `src/store/index.js` | Newsletter interest mutation and in-memory email state. |
| `src/registerServiceWorker.js` | Production-only service-worker registration and lifecycle logging. |

## Navigation and routes

The application uses `createWebHistory(process.env.BASE_URL)`. Internal page links use `RouterLink`; external websites, telephone links, and email links remain normal anchors. Page components are loaded through dynamic imports, so the initial application bundle does not contain every view.

There are 37 page routes: 15 main/utility pages and 22 content detail pages. The table below lists the canonical paths and their templates.

| Route | Vue template |
| --- | --- |
| `/` | [HomeV2Page.vue](../src/views/reference/HomeV2Page.vue) |
| `/about` | [AboutV1Page.vue](../src/views/reference/AboutV1Page.vue) |
| `/classes` | [ClassesPage.vue](../src/views/reference/ClassesPage.vue) |
| `/instructors` | [InstructorsPage.vue](../src/views/reference/InstructorsPage.vue) |
| `/events` | [EventsPage.vue](../src/views/reference/EventsPage.vue) |
| `/contact` | [ContactV1Page.vue](../src/views/reference/ContactV1Page.vue) |
| `/blogs` | [BlogsPage.vue](../src/views/reference/BlogsPage.vue) |
| `/schedule` | [SchedulePage.vue](../src/views/reference/SchedulePage.vue) |
| `/testimonials` | [TestimonialsPage.vue](../src/views/reference/TestimonialsPage.vue) |
| `/privacy-policy` | [PrivacyPolicyPage.vue](../src/views/reference/PrivacyPolicyPage.vue) |
| `/licenses` | [LicensesPage.vue](../src/views/reference/LicensesPage.vue) |
| `/changelog` | [ChangelogPage.vue](../src/views/reference/ChangelogPage.vue) |
| `/instructions` | [InstructionsPage.vue](../src/views/reference/InstructionsPage.vue) |
| `/style-guide` | [StyleGuidePage.vue](../src/views/reference/StyleGuidePage.vue) |
| `/404` | [404Page.vue](../src/views/reference/404Page.vue) |
| `/blog/creating-a-sacred-evening-routine-for-deep-restful-sleep` | [BlogCreatingASacredEveningRoutineForDeepRestfulSleepPage.vue](../src/views/reference/BlogCreatingASacredEveningRoutineForDeepRestfulSleepPage.vue) |
| `/blog/the-science-of-conscious-breathing-how-to-calm-your-nervous-system` | [BlogTheScienceOfConsciousBreathingHowToCalmYourNervousSystemPage.vue](../src/views/reference/BlogTheScienceOfConsciousBreathingHowToCalmYourNervousSystemPage.vue) |
| `/event/weekend-mindful-reset-in-nature` | [EventWeekendMindfulResetInNaturePage.vue](../src/views/reference/EventWeekendMindfulResetInNaturePage.vue) |
| `/event/morning-flow-sound-bath` | [EventMorningFlowSoundBathPage.vue](../src/views/reference/EventMorningFlowSoundBathPage.vue) |
| `/instructor/clara-holloway` | [InstructorClaraHollowayPage.vue](../src/views/reference/InstructorClaraHollowayPage.vue) |
| `/instructor/sophie-laurent` | [InstructorSophieLaurentPage.vue](../src/views/reference/InstructorSophieLaurentPage.vue) |
| `/blog/finding-stillness-in-the-middle-of-a-busy-workday` | [BlogFindingStillnessInTheMiddleOfABusyWorkdayPage.vue](../src/views/reference/BlogFindingStillnessInTheMiddleOfABusyWorkdayPage.vue) |
| `/instructor/nina-brooks` | [InstructorNinaBrooksPage.vue](../src/views/reference/InstructorNinaBrooksPage.vue) |
| `/blog/the-art-of-unplugging-a-guide-to-digital-detox-weekends` | [BlogTheArtOfUnpluggingAGuideToDigitalDetoxWeekendsPage.vue](../src/views/reference/BlogTheArtOfUnpluggingAGuideToDigitalDetoxWeekendsPage.vue) |
| `/blog/why-gentle-morning-flows-trump-intense-workout-routines` | [BlogWhyGentleMorningFlowsTrumpIntenseWorkoutRoutinesPage.vue](../src/views/reference/BlogWhyGentleMorningFlowsTrumpIntenseWorkoutRoutinesPage.vue) |
| `/blog/reflections-from-our-recent-autumn-silent-meditation-retreat` | [BlogReflectionsFromOurRecentAutumnSilentMeditationRetreatPage.vue](../src/views/reference/BlogReflectionsFromOurRecentAutumnSilentMeditationRetreatPage.vue) |
| `/instructor/elena-vance` | [InstructorElenaVancePage.vue](../src/views/reference/InstructorElenaVancePage.vue) |
| `/event/advanced-core-strength-mobility` | [EventAdvancedCoreStrengthMobilityPage.vue](../src/views/reference/EventAdvancedCoreStrengthMobilityPage.vue) |
| `/instructor/marcus-sterling` | [InstructorMarcusSterlingPage.vue](../src/views/reference/InstructorMarcusSterlingPage.vue) |
| `/class/morning-vinyasa-flow-breath-alignment` | [ClassMorningVinyasaFlowBreathAlignmentPage.vue](../src/views/reference/ClassMorningVinyasaFlowBreathAlignmentPage.vue) |
| `/event/evening-candlelight-meditation-circle` | [EventEveningCandlelightMeditationCirclePage.vue](../src/views/reference/EventEveningCandlelightMeditationCirclePage.vue) |
| `/class/acoustic-healing-deep-relaxation` | [ClassAcousticHealingDeepRelaxationPage.vue](../src/views/reference/ClassAcousticHealingDeepRelaxationPage.vue) |
| `/instructor/julian-hayes` | [InstructorJulianHayesPage.vue](../src/views/reference/InstructorJulianHayesPage.vue) |
| `/class/core-alignment-posture-correction` | [ClassCoreAlignmentPostureCorrectionPage.vue](../src/views/reference/ClassCoreAlignmentPostureCorrectionPage.vue) |
| `/class/nervous-system-reset-deep-breathing` | [ClassNervousSystemResetDeepBreathingPage.vue](../src/views/reference/ClassNervousSystemResetDeepBreathingPage.vue) |
| `/class/evening-wind-down-spine-mobility` | [ClassEveningWindDownSpineMobilityPage.vue](../src/views/reference/ClassEveningWindDownSpineMobilityPage.vue) |
| `/class/guided-meditation-silence-circle` | [ClassGuidedMeditationSilenceCirclePage.vue](../src/views/reference/ClassGuidedMeditationSilenceCirclePage.vue) |

| Legacy or unmatched path | Destination |
| --- | --- |
| `/home-v2` | `/` |
| `/about-v1` | `/about` |
| `/contact-v1` | `/contact` |
| `/boxes` | `/classes` |
| Any unmatched path | `/404` |

Alternative Home V1/V3, About V2/V3, and Contact V2/V3 pages are not included. Redirects do not create duplicate page implementations. The `/404` screen is a client-side page; the HTTP status for unknown URLs depends on the hosting server's fallback configuration.

## Interaction flow

Shared event delegation in `App.vue` keeps behavior consistent across static page templates:

- `initializePage()` sets control roles, keyboard focusability, video labels, slide visibility, and form labels. An `IntersectionObserver` reveals elements marked with the `animation` attribute.
- `handleClick()` opens and closes navigation, toggles one FAQ answer at a time, changes tab panes, scrolls carousel masks, and toggles associated background videos.
- `handleKey()` handles Escape, Enter, and Space for custom controls.
- `closeMenus()` resets mobile and dropdown state when pages change.
- `handleSubmit()` runs HTML constraint validation, then updates the form feedback region with the action actually available.

These functions use DOM selectors and class names present in the Vue templates. Renaming classes such as `.faq-tab-link`, `.w-tab-pane`, `.w-slider-mask`, or `.menu-button` also requires updating the handlers and CSS.

Carousels use native horizontal scrolling and CSS scroll snap. Their arrows scroll the mask and wrap to the opposite end. Schedule controls switch `.w--current`, `aria-selected`, and the matching `.w--tab-active` pane. FAQ controls update `aria-expanded` and the visible answer.

## Smooth scrolling and motion

`src/smoothScroll.js` owns a single Lenis instance with `autoRaf`, `smoothWheel`, `lerp: 0.1`, a 96px anchor offset, and nested-scroll support. The instance is created once at application mount and destroyed at unmount.

The router calls `scrollPage()` to return to the top, navigate to a fragment, or restore a saved history position. That function returns `false` to prevent Vue Router from starting a competing native scroll operation. Lenis resizes before route scrolling so it uses the incoming page's dimensions.

Changes to `prefers-reduced-motion` destroy or recreate Lenis. Reduced-motion mode uses immediate route scrolling and disables CSS animations and transitions. Touch input keeps its native scrolling behavior; wheel smoothing applies through Lenis. CSS also provides the moving hero strip, hover treatments, and scroll reveals.

## Forms and state

### Contact

1. HTML input constraints are checked with `reportValidity()`.
2. Values are read with `FormData`.
3. The handler builds a `mailto:` link with an encoded subject and message body.
4. A status region offers that link to open the visitor's email application.

The browser does not call an email API or send a message itself. The handler's destination is `hello@wellbeing.studio`; some contact information in individual templates uses other reference addresses. These destinations intentionally remain reference contact data rather than an invented Bloomwell mailbox.

### Newsletter

The form commits `saveNewsletterInterest` to Vuex. The mutation updates `state.newsletterEmail` and attempts to write the email under `wellbeing-newsletter-interest` in localStorage. The legacy key is retained so the brand rename does not introduce a different storage location.

No subscription request leaves the browser. The Vuex state starts empty on a fresh load; the current implementation writes localStorage but does not hydrate state from it. The feedback states that newsletter delivery is not connected. Storage may be disabled by browser policy; the mutation catches storage errors.

## Styles and media

`src/scss/site.css` retains the supplied reference's custom properties, typography, layout classes, variants, and breakpoints. Some historical reference selectors remain even though only one page variant is rendered. `src/scss/main/_palette.scss` supplies the brown/orange/sand/cream brand values. See [the color system](DESIGN_SYSTEM.md) for semantic aliases and contrast decisions. `main.scss` contains project-specific overrides for navigation, tabs, controls, carousels, accessibility, and motion.

The `css.loaderOptions.css.url: false` setting leaves `/assets/...` URLs unchanged for static serving. Media files live in `public/assets/` and are copied into the production output. AVIF `srcset` variants support responsive images, while MP4/WebM pairs provide background video formats.

## PWA boundaries

The Vue CLI PWA plugin generates the manifest and service-worker output during production builds. Registration only runs when `NODE_ENV` is `production`. Workbox excludes source maps and MP4/WebM files from precaching; offline video playback is not guaranteed. Fonts are loaded from Google Fonts and may require connectivity on a fresh visit.

There is no remote CMS, authentication service, database, or server process behind these pages. Page content is stored in the Vue templates.
