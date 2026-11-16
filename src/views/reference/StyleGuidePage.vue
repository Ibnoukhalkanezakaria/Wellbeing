<template>
  <main id="main-content">
    <section class="style-guide-section">
      <div class="w-layout-blockcontainer container w-container">
        <div class="utility-wrapper">
          <div class="section-top-wrap">
            <div class="subtitle-center-wrap">
              <div class="subtitle-block">
                <div class="subtitle-text">Style</div>
              </div>
            </div>
            <div class="section-top-title-block">
              <h1 class="section-top-title">Style guide</h1>
            </div>
            <div class="section-top-details-block">
              <p class="section-top-details">
                We don’t just reply to emails, we start conversations that shape
                ideas.
              </p>
            </div>
          </div>
          <div class="utility-wrap">
            <div class="utility-left-wrap">
              <div class="utility-sidebar-wrap">
                <a
                  class="utility-sidebar-link w-inline-block"
                  href="#typography"
                  ><div class="utility-sidebar-text">01</div>
                  <div class="utility-sidebar-text">Typography</div></a
                ><a class="utility-sidebar-link w-inline-block" href="#colors"
                  ><div class="utility-sidebar-text">02</div>
                  <div class="utility-sidebar-text">Colors</div></a
                ><a class="utility-sidebar-link w-inline-block" href="#buttons"
                  ><div class="utility-sidebar-text">03</div>
                  <div class="utility-sidebar-text">Buttons</div></a
                ><a class="utility-sidebar-link w-inline-block" href="#input"
                  ><div class="utility-sidebar-text">04</div>
                  <div class="utility-sidebar-text">Inputs</div></a
                >
              </div>
            </div>
            <div class="utility-right-wrap">
              <div class="utility-heading-wrap">
                <p class="utility-top-details">
                  Design decisions don'ton't exist in isolation. Every choice —
                  from a spacing value to a type weight — connects back to a
                  shared set of principles that make the system feel cohesive,
                  not assembled. That consistency is what lets the design scale
                  without losing its character.
                </p>
                <p class="utility-top-details">
                  The real power of a design system isn'tsn't in any single
                  component — it's in how everything works together. When
                  structure is thoughtful and tokens are meaningful, building
                  new pages feels like composing rather than constructing. You
                  spend less time fixing and more time creating.
                </p>
              </div>
              <div class="utility-single-wrap" id="typography">
                <div class="style-title-wrap top">
                  <div class="style-item-title">Typography</div>
                  <p class="style-item-details">
                    Type carries meaning before a word is read. The styles here
                    are built to do real work: establishing hierarchy, directing
                    attention, and making dense content feel light. Every scale
                    step, weight, and line height has been calibrated to work
                    together, so the system feels effortless in use.
                  </p>
                </div>
                <div animation="scroll-two" class="typography-wrap">
                  <div class="typography-left-block">
                    <h1>Heading h1</h1>
                    <h2>Heading h2</h2>
                    <h3>Heading h3</h3>
                    <h4>Heading h4</h4>
                    <h5>Heading h5</h5>
                    <h6>Heading h6</h6>
                  </div>
                  <div class="typography-right-block">
                    <div class="text-large">Text large</div>
                    <div class="text-large-strong">Text large (strong)</div>
                    <div class="text-medium">Text medium (strong)</div>
                    <div>Text small</div>
                    <div class="tag-text">Label</div>
                    <div class="tag-bold">Label</div>
                  </div>
                </div>
              </div>
              <div
                animation="scroll-two"
                class="utility-single-wrap"
                id="colors"
              >
                <div class="style-title-wrap">
                  <div class="style-item-title">Colors</div>
                  <p class="style-item-details">
                    The color system is built to be practical, not decorative.
                    It’s based on a small set of neutrals for structure and a
                    few accents to bring focus where it matters. Contrast and
                    usability always come first. You’ll find colors for base
                    surfaces, text, borders, and highlights. They are designed
                    to work together out of the box, but you can easily adjust
                    them to match your brand.
                  </p>
                </div>
                <div class="color-wrap">
                  <div class="color-single-block">
                    <div class="color-item-box"></div>
                    <div class="color-details-block">
                      <div class="color-name">Brand color</div>
                      <div class="color-code">#edd7472</div>
                    </div>
                  </div>
                  <div class="color-single-block">
                    <div class="color-item-box two"></div>
                    <div class="color-details-block">
                      <div class="color-name">Black</div>
                      <div class="color-code">#0E0E0E</div>
                    </div>
                  </div>
                  <div class="color-single-block">
                    <div class="color-item-box three"></div>
                    <div class="color-details-block">
                      <div class="color-name">Body text</div>
                      <div class="color-code">#231f23</div>
                    </div>
                  </div>
                  <div class="color-single-block">
                    <div class="color-item-box four"></div>
                    <div class="color-details-block">
                      <div class="color-name">Main BG</div>
                      <div class="color-code">#FFFFFF</div>
                    </div>
                  </div>
                  <div class="color-single-block">
                    <div class="color-item-box five"></div>
                    <div class="color-details-block">
                      <div class="color-name">2nd BG</div>
                      <div class="color-code">#F3F1EF</div>
                    </div>
                  </div>
                  <div class="color-single-block">
                    <div class="color-item-box six"></div>
                    <div class="color-details-block">
                      <div class="color-name">Mute</div>
                      <div class="color-code">#858483</div>
                    </div>
                  </div>
                  <div class="color-single-block">
                    <div class="color-item-box seven"></div>
                    <div class="color-details-block">
                      <div class="color-name">Divider Dark BG</div>
                      <div class="color-code">#CFCFCF</div>
                    </div>
                  </div>
                  <div class="color-single-block">
                    <div class="color-item-box eight"></div>
                    <div class="color-details-block">
                      <div class="color-name">Divider Light BG</div>
                      <div class="color-code">#6B6C6E</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                animation="scroll-two"
                class="utility-single-wrap"
                id="buttons"
              >
                <div class="style-title-wrap">
                  <div class="style-item-title">Buttons</div>
                  <p class="style-item-details">
                    Buttons are designed to be clear and predictable. Primary
                    actions stand out and guide the user forward. Secondary and
                    tertiary buttons support without competing for attention.
                    The goal is simple: users should always know what to do next
                    without thinking.
                  </p>
                </div>
                <div class="style-button-wrap">
                  <div class="style-button-block">
                    <div class="style-button-text">Primary</div>
                    <RouterLink
                      class="primary-button w-inline-block"
                      to="/contact"
                      ><div class="button-text-block">
                        <div class="button-text">Contact</div>
                        <div class="button-text is-absolute">Contact</div>
                      </div>
                      <div class="button-icon-block">
                        <img
                          alt="Button Icon"
                          class="button-icon"
                          loading="lazy"
                          src="/assets/6a7c7ff1d11a0b07a722954d_button-arrow-icon.svg"
                        /><img
                          alt="Button Icon"
                          class="button-icon"
                          loading="lazy"
                          src="/assets/6a7c7ff1d11a0b07a722954d_button-arrow-icon.svg"
                        />
                      </div>
                      <div class="primary-button-bg"></div
                    ></RouterLink>
                  </div>
                  <div class="style-button-block">
                    <div class="style-button-text">Secondary</div>
                    <RouterLink
                      class="secondary-button w-inline-block"
                      to="/contact"
                      ><div class="button-text-block">
                        <div class="button-text">Contact</div>
                        <div class="button-text is-absolute">Contact</div>
                      </div>
                      <div class="secondary-button-bg"></div
                    ></RouterLink>
                  </div>
                </div>
              </div>
              <div
                animation="scroll-two"
                class="utility-single-wrap"
                id="input"
              >
                <div class="style-title-wrap">
                  <div class="style-item-title">Inputs</div>
                  <p class="style-item-details">
                    Inputs are built to feel calm and easy to use. Different
                    states like default, active, and filled help users
                    understand where they are and what’s happening. Everything
                    is kept minimal so forms don’t feel heavy or distracting.
                    Use them as a base and adapt if your project needs something
                    more custom.
                  </p>
                </div>
                <div class="style-form-wrap w-form">
                  <form
                    class="style-form"
                    data-name="Email Form 2"
                    id="email-form-2"
                    method="post"
                    name="email-form-2"
                  >
                    <div>
                      <label class="contact-label-field" for="name"
                        >Text field</label
                      ><input
                        class="contact-input-field style w-input"
                        data-name="Name"
                        id="name"
                        maxlength="256"
                        name="name"
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                    <div>
                      <label class="contact-label-field" for="name"
                        >Text area</label
                      ><textarea
                        class="contact-textarea-field style w-input"
                        data-name="Field"
                        id="field"
                        maxlength="5000"
                        name="field"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <input
                      class="all-device-none w-button"
                      data-wait="Please wait..."
                      type="submit"
                      value="Submit"
                    />
                  </form>
                  <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div class="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
