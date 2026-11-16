<template>
  <main id="main-content">
    <section class="contact-v1-section">
      <div class="w-layout-blockcontainer container w-container">
        <div class="contact-v1-wrapper">
          <div class="contact-v1-left-wrap">
            <div class="contact-v1-video-wrap">
              <div
                class="contact-v1-video w-background-video w-background-video-atom"
                data-autoplay="true"
                data-loop="true"
                data-poster-url="/assets/6a7b30c3740227f730cad1ec-6a8220a68867286a53af3388_contact-v1-video_poster.0000000.jpg"
                data-video-urls="/assets/6a7b30c3740227f730cad1ec-6a8220a68867286a53af3388_contact-v1-video_webm.webm"
              >
                <video
                  autoplay=""
                  data-object-fit="cover"
                  id="359ede87-f649-5340-4fbc-b50e7596d585-video"
                  loop=""
                  muted=""
                  playsinline=""
                  style="
                    background-image: url(&quot;/assets/6a7b30c3740227f730cad1ec-6a8220a68867286a53af3388_contact-v1-video_poster.0000000.jpg&quot;);
                  "
                >
                  <source
                    src="/assets/6a7b30c3740227f730cad1ec-6a8220a68867286a53af3388_contact-v1-video_mp4.mp4"
                  />
                  <source
                    src="/assets/6a7b30c3740227f730cad1ec-6a8220a68867286a53af3388_contact-v1-video_webm.webm"
                  /></video
                ><noscript
                  ><style>
                    [data-wf-bgvideo-fallback-img] {
                      display: none;
                    }
                    @media (prefers-reduced-motion: reduce) {
                      [data-wf-bgvideo-fallback-img] {
                        position: absolute;
                        z-index: -100;
                        display: inline-block;
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                      }
                    }</style
                  ><img
                    alt=""
                    src="/assets/6a7b30c3740227f730cad1ec-6a8220a68867286a53af3388_contact-v1-video_poster.0000000.jpg"
                /></noscript>
                <div aria-live="polite">
                  <button
                    aria-controls="359ede87-f649-5340-4fbc-b50e7596d585-video"
                    class="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control"
                    data-w-bg-video-control="true"
                    type="button"
                  >
                    <span
                      ><img
                        alt="Pause video"
                        loading="lazy"
                        src="/assets/628299f8aa233b83918e24fd_Pause.svg" /></span
                    ><span hidden=""
                      ><img
                        alt="Play video"
                        loading="lazy"
                        src="/assets/628298b20ae0236682d4b87f_Play-24.svg"
                    /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-v1-right-wrap">
            <div class="section-title-wrap contact-v1">
              <div class="subtitle-block">
                <div class="subtitle-text">CONTACT US</div>
              </div>
              <div class="section-title-block">
                <h1 class="contact-form-title">
                  Let's start a conversation with us
                </h1>
              </div>
            </div>
            <div class="contact-form-wrap w-form">
              <form
                class="contact-form"
                data-name="Contact V1 Form"
                id="wf-form-Contact-V1-Form"
                method="post"
                name="wf-form-Contact-V1-Form"
              >
                <div class="contact-filed-wrapper">
                  <div class="contact-field-item">
                    <label class="contact-label-field" for="Contact-Name"
                      >Full name</label
                    ><input
                      aria-label="Enter your name"
                      class="contact-input-field w-input"
                      data-name="Contact Name"
                      id="Contact-Name"
                      maxlength="256"
                      name="Contact-Name"
                      placeholder="Enter your name"
                      required=""
                      type="text"
                    />
                  </div>
                  <div class="contact-field-item">
                    <label class="contact-label-field" for="Contact-Email"
                      >Direct email</label
                    ><input
                      aria-lable="Enter your email"
                      class="contact-input-field w-input"
                      data-name="Contact Email"
                      id="Contact-Email"
                      maxlength="256"
                      name="Contact-Email"
                      placeholder="Enter your email"
                      required=""
                      type="email"
                    />
                  </div>
                  <div class="contact-field-wrap">
                    <div class="contact-field-item">
                      <label class="contact-label-field" for="Contact-City"
                        >City / Area</label
                      ><input
                        aria-label="Enter your address "
                        class="contact-input-field w-input"
                        data-name="Contact City"
                        id="Contact-City"
                        maxlength="256"
                        name="Contact-City"
                        placeholder="Enter your address "
                        required=""
                        type="text"
                      />
                    </div>
                    <div class="contact-field-item">
                      <label class="contact-label-field" for="Contact-Number"
                        >Contact number</label
                      ><input
                        aria-label="Enter your phone number"
                        class="contact-input-field w-input"
                        data-name="Contact Number"
                        id="Contact-Number"
                        maxlength="256"
                        name="Contact-Number"
                        placeholder="Enter your phone number"
                        required=""
                        type="tel"
                      />
                    </div>
                  </div>
                  <div class="contact-field-item">
                    <label class="contact-label-field" for="Contact-V1-textara"
                      >Your note</label
                    ><textarea
                      aria-label="Enter your message "
                      class="contact-textarea-field w-input"
                      data-name="Contact V1 textara"
                      id="Contact-V1-textara"
                      maxlength="5000"
                      name="Contact-V1-textara"
                      placeholder="Enter your message "
                    ></textarea>
                  </div>
                  <label class="w-checkbox contact-checkbox-wrap"
                    ><div
                      class="w-checkbox-input w-checkbox-input--inputType-custom contact-checkbox"
                    ></div>
                    <input
                      data-name="Checkbox"
                      id="checkbox"
                      name="checkbox"
                      style="position: absolute; z-index: -1"
                      type="checkbox"
                    /><span
                      class="contact-checkbox-text w-form-label"
                      for="checkbox"
                      >Prefer a quick phone call instead of a message
                      reply?</span
                    ></label
                  >
                </div>
                <div class="contact-button-wrap">
                  <input
                    class="contact-form-submit w-button"
                    data-wait="Please wait..."
                    type="submit"
                    value="Send inquiry"
                  />
                  <div class="contact-form-note">
                    Responses within 24 hours. No marketing emails, guaranteed.
                  </div>
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
        </div>
      </div>
    </section>
    <section class="contacts-section">
      <div class="w-layout-blockcontainer container w-container">
        <div class="contacts-wrapper">
          <div class="contacts-top-wrap">
            <div animation="scroll-two" class="contact-single-item">
              <div class="contact-icon-block">
                <img
                  alt="Contact Icon"
                  class="contact-icon"
                  loading="lazy"
                  src="/assets/6a8223056ef4bed671a2a2cf_contact-icon-1.svg"
                />
              </div>
              <div class="contact-content-block">
                <div class="contact-item-title">Direct Line</div>
                <a class="contact-item-link" href="tel:+1(555)492-8104"
                  >+1 (555) 492-8104</a
                >
              </div>
            </div>
            <div
              animation="scroll-two"
              class="contact-single-item w-variant-56383ca1-315d-c328-889c-1895ce3b0e6f"
            >
              <div class="contact-icon-block">
                <img
                  alt="Contact Icon"
                  class="contact-icon"
                  loading="lazy"
                  src="/assets/6a8223058867286a53afa213_contact-icon-2.svg"
                />
              </div>
              <div class="contact-content-block">
                <div class="contact-item-title">Studio Inbox</div>
                <a
                  class="contact-item-link w-variant-56383ca1-315d-c328-889c-1895ce3b0e6f"
                  href="mailto:hello@mindfulsanctuary.com?subject=contact%20with%20me"
                  >hello@mindfulsanctuary.com</a
                >
              </div>
            </div>
          </div>
          <div class="contacts-wrap">
            <div animation="scroll-two" class="contact-single-item">
              <div class="contact-icon-block">
                <img
                  alt="Contact Icon"
                  class="contact-icon"
                  loading="lazy"
                  src="/assets/6a822305b13e7b4116322321_contact-icon-3.svg"
                />
              </div>
              <div class="contact-content-block">
                <div class="contact-item-title">Opening Hours</div>
                <div class="contact-item-link">Monday – Friday: 7am – 9pm</div>
                <div class="contact-item-link">
                  Saturday – Sunday: 8am – 6pm
                </div>
              </div>
            </div>
            <div animation="scroll-two" class="contact-single-item">
              <div class="contact-icon-block">
                <img
                  alt="Contact Icon"
                  class="contact-icon"
                  loading="lazy"
                  src="/assets/6a8223057cc178f8e0566e34_contact-icon-4.svg"
                />
              </div>
              <div class="contact-content-block">
                <div class="contact-item-title">Studio Address</div>
                <a
                  class="contact-item-link"
                  href="https://www.google.com/maps/search/420+Serenity+Way,+Austin,+TX/@30.2960036,-97.8542389,12z/data=!3m1!4b1?entry=ttu&amp;g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D"
                  rel="noopener noreferrer"
                  target="_blank"
                  >420 Serenity Way, Austin, TX</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
