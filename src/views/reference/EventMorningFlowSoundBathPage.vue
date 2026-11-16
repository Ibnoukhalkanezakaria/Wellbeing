<template>
  <main id="main-content">
    <section class="event-single-section">
      <div class="w-layout-blockcontainer container w-container">
        <div class="single-event-wrapper">
          <div class="breadcrumb-block event">
            <RouterLink class="breadcrumb-link event" to="/events"
              >← Back to all events</RouterLink
            >
          </div>
          <div class="single-event-wrap">
            <div class="event-single-left-wrap">
              <div
                class="event-single-tabs w-tabs"
                data-current="Tab 1"
                data-duration-in="300"
                data-duration-out="100"
                data-easing="ease"
              >
                <div class="event-single-tab-menu w-tab-menu">
                  <a
                    aria-selected="true"
                    class="event-tab-image-block w-inline-block w-tab-link w--current"
                    data-w-tab="Tab 1"
                    role="tab"
                    tabindex="0"
                    ><img
                      alt="Event Tab Image"
                      class="event-tab-image"
                      loading="lazy"
                      sizes="(max-width: 767px) 87vw, (max-width: 991px) 667px, 880px"
                      src="/assets/6a9533e76586d8f094fe5dab_event-image-1.avif"
                      srcset="
                        /assets/6a9533e76586d8f094fe5dab_event-image-1-p-500.avif 500w,
                        /assets/6a9533e76586d8f094fe5dab_event-image-1-p-800.avif 800w,
                        /assets/6a9533e76586d8f094fe5dab_event-image-1.avif       912w
                      " /></a
                  ><a
                    aria-selected="false"
                    class="event-tab-image-block w-inline-block w-tab-link"
                    data-w-tab="Tab 2"
                    role="tab"
                    tabindex="0"
                    ><img
                      alt="Event Tab Image"
                      class="event-tab-image"
                      loading="lazy"
                      sizes="(max-width: 767px) 87vw, (max-width: 991px) 667px, 880px"
                      src="/assets/6a9533f3de5c4985501be024_event-image-2.avif"
                      srcset="
                        /assets/6a9533f3de5c4985501be024_event-image-2-p-500.avif 500w,
                        /assets/6a9533f3de5c4985501be024_event-image-2-p-800.avif 800w,
                        /assets/6a9533f3de5c4985501be024_event-image-2.avif       912w
                      " /></a
                  ><a
                    aria-selected="false"
                    class="event-tab-image-block w-inline-block w-tab-link"
                    data-w-tab="Tab 3"
                    role="tab"
                    tabindex="0"
                    ><img
                      alt="Event Tab Image"
                      class="event-tab-image"
                      loading="lazy"
                      sizes="(max-width: 767px) 87vw, (max-width: 991px) 667px, 880px"
                      src="/assets/6a9533f84d68089243652bad_event-image-3.avif"
                      srcset="
                        /assets/6a9533f84d68089243652bad_event-image-3-p-500.avif 500w,
                        /assets/6a9533f84d68089243652bad_event-image-3-p-800.avif 800w,
                        /assets/6a9533f84d68089243652bad_event-image-3.avif       912w
                      " /></a
                  ><a
                    aria-selected="false"
                    class="event-tab-image-block w-inline-block w-tab-link"
                    data-w-tab="Tab 4"
                    role="tab"
                    tabindex="0"
                    ><img
                      alt="Event Tab Image"
                      class="event-tab-image"
                      loading="lazy"
                      sizes="(max-width: 767px) 87vw, (max-width: 991px) 667px, 880px"
                      src="/assets/6a953435c99a4a52f1b1fc25_event-image-4.avif"
                      srcset="
                        /assets/6a953435c99a4a52f1b1fc25_event-image-4-p-500.avif 500w,
                        /assets/6a953435c99a4a52f1b1fc25_event-image-4-p-800.avif 800w,
                        /assets/6a953435c99a4a52f1b1fc25_event-image-4.avif       912w
                      "
                  /></a>
                </div>
                <div class="event-single-tab-content w-tab-content">
                  <div
                    class="event-tab-pane w-tab-pane w--tab-active"
                    data-w-tab="Tab 1"
                  >
                    <div class="event-single-image-block">
                      <img
                        alt=""
                        class="event-single-image"
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px"
                        src="/assets/6a9533e76586d8f094fe5dab_event-image-1.avif"
                        srcset="
                          /assets/6a9533e76586d8f094fe5dab_event-image-1-p-500.avif 500w,
                          /assets/6a9533e76586d8f094fe5dab_event-image-1-p-800.avif 800w,
                          /assets/6a9533e76586d8f094fe5dab_event-image-1.avif       912w
                        "
                      />
                    </div>
                  </div>
                  <div class="event-tab-pane w-tab-pane" data-w-tab="Tab 2">
                    <div class="event-single-image-block">
                      <img
                        alt="Morning Flow &amp; Sound Bath"
                        class="event-single-image"
                        loading="lazy"
                        sizes="100vw"
                        src="/assets/6a9533f3de5c4985501be024_event-image-2.avif"
                        srcset="
                          /assets/6a9533f3de5c4985501be024_event-image-2-p-500.avif 500w,
                          /assets/6a9533f3de5c4985501be024_event-image-2-p-800.avif 800w,
                          /assets/6a9533f3de5c4985501be024_event-image-2.avif       912w
                        "
                      />
                    </div>
                  </div>
                  <div class="event-tab-pane w-tab-pane" data-w-tab="Tab 3">
                    <div class="event-single-image-block">
                      <img
                        alt="Morning Flow &amp; Sound Bath"
                        class="event-single-image"
                        loading="lazy"
                        sizes="100vw"
                        src="/assets/6a9533f84d68089243652bad_event-image-3.avif"
                        srcset="
                          /assets/6a9533f84d68089243652bad_event-image-3-p-500.avif 500w,
                          /assets/6a9533f84d68089243652bad_event-image-3-p-800.avif 800w,
                          /assets/6a9533f84d68089243652bad_event-image-3.avif       912w
                        "
                      />
                    </div>
                  </div>
                  <div class="event-tab-pane w-tab-pane" data-w-tab="Tab 4">
                    <div class="event-single-image-block">
                      <img
                        alt="Morning Flow &amp; Sound Bath"
                        class="event-single-image"
                        loading="lazy"
                        sizes="100vw"
                        src="/assets/6a953435c99a4a52f1b1fc25_event-image-4.avif"
                        srcset="
                          /assets/6a953435c99a4a52f1b1fc25_event-image-4-p-500.avif 500w,
                          /assets/6a953435c99a4a52f1b1fc25_event-image-4-p-800.avif 800w,
                          /assets/6a953435c99a4a52f1b1fc25_event-image-4.avif       912w
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="event-single-right-wrap">
              <div class="event-section-title-wrap">
                <div class="event-subtitle-block">
                  <div class="subtitle-text">WORKSHOP</div>
                </div>
                <div class="event-single-title-block">
                  <h1 class="event-single-title">
                    Morning Flow &amp; Sound Bath
                  </h1>
                </div>
                <div class="event-section-details-block">
                  <p class="event-section-details">
                    Learn powerful, science-backed pranayama techniques designed
                    to release chronic tension, calm mental chatter, and restore
                    inner equilibrium during demanding workweeks.
                  </p>
                </div>
              </div>
              <div class="event-border-line"></div>
              <div class="event-item-list-wrap">
                <div class="event-list-item">
                  <div class="event-list-item-title">Date:</div>
                  <div class="event-list-text">May 15, 2026</div>
                </div>
                <div class="event-list-item">
                  <div class="event-list-item-title">Time:</div>
                  <div class="event-list-text">17:20</div>
                </div>
                <div class="event-list-item">
                  <div class="event-list-item-title">Duration</div>
                  <div class="event-list-text">120 min</div>
                </div>
                <div class="event-list-item">
                  <div class="event-list-item-title">Language:</div>
                  <div class="event-list-text">English</div>
                </div>
              </div>
              <div class="event-border-line"></div>
            </div>
          </div>
          <div class="single-event-bottom">
            <div class="single-event-details-wrap">
              <div class="single-event-guide">About the guide</div>
              <p class="single-event-details">
                Elena Vance is a lead mindfulness facilitator and somatic
                movement guide whose practice explores the intersection of
                conscious breathing, physical mobility, and nervous system
                regulation. Her sessions focus on creating a deeply supportive,
                distraction-free environment that helps participants transition
                from burnout to lasting calm.
              </p>
            </div>
            <div class="single-event-social">
              <div class="event-share-wrap">
                <div class="event-share-title">Share this event:</div>
                <div class="event-social-wrap">
                  <a
                    class="event-social-link w-inline-block"
                    href="https://www.instagram.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><img
                      alt="Event Social Icon"
                      class="event-social-icon one"
                      loading="lazy"
                      src="/assets/6a951c6906f573e20c2e5fa3_social-icon-w2.svg" /><img
                      alt="Event Social Icon"
                      class="event-social-icon two"
                      loading="lazy"
                      src="/assets/6a951c69d9580ac13610575b_social-icon-b2.svg" /></a
                  ><a
                    class="event-social-link w-inline-block"
                    href="https://www.facebook.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><img
                      alt="Event Social Icon"
                      class="event-social-icon one"
                      loading="lazy"
                      src="/assets/6a951c6906dd7d4ff4f0c99e_social-icon-w3.svg" /><img
                      alt="Event Social Icon"
                      class="event-social-icon two"
                      loading="lazy"
                      src="/assets/6a951c697e99d02e2e1f7665_social-icon-b3.svg" /></a
                  ><a
                    class="event-social-link w-inline-block"
                    href="https://www.linkedin.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><img
                      alt="Event Social Icon"
                      class="event-social-icon one"
                      loading="lazy"
                      src="/assets/6a951c69e755613abc1bf9e6_social-icon-w4.svg" /><img
                      alt="Event Social Icon"
                      class="event-social-icon two"
                      loading="lazy"
                      src="/assets/6a951c69b16f0874179cde1b_social-icon-b4.svg" /></a
                  ><a
                    class="event-social-link w-inline-block"
                    href="https://x.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><img
                      alt="Event Social Icon"
                      class="event-social-icon one"
                      loading="lazy"
                      src="/assets/6a951c6952eeb727f68c0111_social-icon-w5.svg" /><img
                      alt="Event Social Icon"
                      class="event-social-icon two"
                      loading="lazy"
                      src="/assets/6a951c69afd05bc461a579bd_social-icon-b5.svg"
                  /></a>
                </div>
              </div>
              <div class="event-button">
                <RouterLink
                  class="primary-button event w-inline-block"
                  to="/contact"
                  ><div class="button-text-block">
                    <div class="button-text">Get tickets</div>
                    <div class="button-text event-4 is-absolute">
                      Get tickets
                    </div>
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
                      src="/assets/6a87db626e1d53a3f5a1158d_button-arrow-black.svg"
                    />
                  </div>
                  <div class="primary-button-bg"></div
                ></RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-form-section event">
      <div class="w-layout-blockcontainer container w-container">
        <div class="contact-v1-wrapper">
          <div class="contact-v1-right-wrap">
            <div
              class="section-title-wrap w-variant-907a55a4-75f7-aaa3-4796-37f20063c42b"
            >
              <div class="subtitle-block">
                <div class="subtitle-text">GET IN TOUCH</div>
              </div>
              <div
                class="section-title-block w-variant-907a55a4-75f7-aaa3-4796-37f20063c42b"
              >
                <h2 class="section-title">
                  Let's start your journey to mindful living.
                </h2>
              </div>
              <div
                class="section-details-block w-variant-907a55a4-75f7-aaa3-4796-37f20063c42b"
              >
                <p class="section-details">
                  Reach out to us for workshop schedules, private session
                  bookings, or any questions about our studio.
                </p>
              </div>
              <div
                class="section-button-block w-variant-907a55a4-75f7-aaa3-4796-37f20063c42b"
              >
                <RouterLink class="primary-button w-inline-block" to="/contact"
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
            </div>
            <div class="contact-grid-wrap">
              <div animation="scroll-three" class="contact-item-wrap">
                <div class="contact-info-title">Studio Location</div>
                <a class="contact-info-link" href="#"
                  >Austin, TX / Online Worldwide</a
                >
              </div>
              <div animation="scroll-three" class="contact-item-wrap">
                <div class="contact-info-title">Direct Email</div>
                <a
                  class="contact-info-link"
                  href="mailto:hello@wellbeing.studio"
                  >hello@wellbeing.studio</a
                >
              </div>
            </div>
            <div animation="scroll-three" class="contact-form-wrap w-form">
              <form
                class="contact-form event"
                data-name="Contact V3 Form"
                id="wf-form-Contact-V3-Form"
                method="post"
                name="wf-form-Contact-V3-Form"
              >
                <div class="contact-filed-wrapper">
                  <div class="contact-field-wrap">
                    <div class="contact-field-item">
                      <label
                        class="contact-label-field event"
                        for="Contact-Name"
                        >YOUR NAME</label
                      ><input
                        aria-label="e.g., Liam Henderson"
                        class="contact-input-field event w-input"
                        data-name="Contact Name"
                        id="Contact-Name"
                        maxlength="256"
                        name="Contact-Name"
                        placeholder="Your Name"
                        required=""
                        type="text"
                      />
                    </div>
                    <div class="contact-field-item">
                      <label
                        class="contact-label-field event"
                        for="Contact-Email"
                        >EMAIL ADDRESS</label
                      ><input
                        aria-lable="Enter your email"
                        class="contact-input-field event w-input"
                        data-name="Contact Email"
                        id="Contact-Email"
                        maxlength="256"
                        name="Contact-Email"
                        placeholder="EMAIL ADDRESS"
                        required=""
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="contact-field-item">
                    <label
                      class="contact-label-field event"
                      for="Contact-V1-textara"
                      >YOUR MESSAGE</label
                    ><textarea
                      aria-label="Share what you hope to experience — daily studio flows, breathwork circles, or personalized guidance."
                      class="contact-textarea-field event w-input"
                      data-name="Contact V1 textara"
                      id="Contact-V1-textara"
                      maxlength="5000"
                      name="Contact-V1-textara"
                      placeholder="Write your inquiry or workshop details here..."
                    ></textarea>
                  </div>
                </div>
                <div class="contact-button-wrap">
                  <input
                    class="contact-form-submit event w-button"
                    data-wait="Please wait..."
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </form>
              <div class="success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div animation="scroll-three" class="contact-v1-left-wrap">
            <img
              alt="Contact Image"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              src="/assets/6a910a27457b77efee30bb4a_contact-v2-image.avif"
              srcset="
                /assets/6a910a27457b77efee30bb4a_contact-v2-image-p-500.avif   500w,
                /assets/6a910a27457b77efee30bb4a_contact-v2-image-p-800.avif   800w,
                /assets/6a910a27457b77efee30bb4a_contact-v2-image-p-1080.avif 1080w,
                /assets/6a910a27457b77efee30bb4a_contact-v2-image.avif        1128w
              "
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
