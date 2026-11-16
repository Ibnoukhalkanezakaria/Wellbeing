<template>
  <main id="main-content">
    <section class="event-hero-section">
      <div
        class="event-hero-video w-background-video w-background-video-atom"
        data-autoplay="true"
        data-loop="true"
        data-poster-url="/assets/6a7b30c3740227f730cad1ec-6a983133df6d69d9864d600d_Event-Video_poster.0000000.jpg"
        data-video-urls="/assets/6a7b30c3740227f730cad1ec-6a983133df6d69d9864d600d_Event-Video_webm.webm"
      >
        <video
          autoplay=""
          data-object-fit="cover"
          id="35b410cc-d1cd-b57c-611e-5e785ef9786b-video"
          loop=""
          muted=""
          playsinline=""
          style="
            background-image: url(&quot;/assets/6a7b30c3740227f730cad1ec-6a983133df6d69d9864d600d_Event-Video_poster.0000000.jpg&quot;);
          "
        >
          <source
            src="/assets/6a7b30c3740227f730cad1ec-6a983133df6d69d9864d600d_Event-Video_mp4.mp4"
          />
          <source
            src="/assets/6a7b30c3740227f730cad1ec-6a983133df6d69d9864d600d_Event-Video_webm.webm"
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
            src="/assets/6a7b30c3740227f730cad1ec-6a983133df6d69d9864d600d_Event-Video_poster.0000000.jpg"
        /></noscript>
        <div aria-live="polite">
          <button
            aria-controls="35b410cc-d1cd-b57c-611e-5e785ef9786b-video"
            class="w-backgroundvideo-backgroundvideoplaypausebutton video-control-wrap w-background-video--control"
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
        <div class="w-layout-blockcontainer container w-container">
          <div class="event-hero-wrapoer">
            <div class="event-hero-wrap">
              <div class="subtitle-block">
                <div class="subtitle-text">All Events</div>
              </div>
              <div class="section-top-title-block event">
                <h1 class="section-top-title event">
                  Upcoming wellness events and mindful workshops
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-video-overlay"></div>
      </div>
    </section>
    <section class="event-section">
      <div class="w-layout-blockcontainer container w-container">
        <div class="event-wrapper">
          <div class="event-wrap">
            <div class="event-left-wrap">
              <div class="section-title-wrap event">
                <div class="subtitle-block">
                  <div class="subtitle-text">CERTIFIED GUIDE</div>
                </div>
                <div class="section-title-block">
                  <h2 class="section-title">
                    Transformative Yoga Retreats &amp; Workshops
                  </h2>
                </div>
                <div class="section-details-block">
                  <p class="section-details">
                    Explore our carefully curated schedule of masterclasses,
                    outdoor retreats, and sound healing sessions designed to
                    deepen your practice and restore your energy.
                  </p>
                </div>
                <div class="section-button-block">
                  <RouterLink
                    class="primary-button w-variant-890b0aad-5e49-28bf-ff92-a65c91bdac40 w-inline-block"
                    to="/contact"
                    ><div class="button-text-block">
                      <div class="button-text">Book a Session</div>
                      <div class="button-text is-absolute">Book a Session</div>
                    </div>
                    <div
                      class="button-icon-block w-variant-890b0aad-5e49-28bf-ff92-a65c91bdac40"
                    >
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
                    <div
                      class="primary-button-bg w-variant-890b0aad-5e49-28bf-ff92-a65c91bdac40"
                    ></div
                  ></RouterLink>
                </div>
              </div>
            </div>
            <div class="event-right-wrap">
              <div class="event-cl-list-wrap w-dyn-list">
                <div class="event-cl-list w-dyn-items" role="list">
                  <div class="event-cl-item w-dyn-item" role="listitem">
                    <div animation="scroll-two" class="event-card">
                      <RouterLink

                        class="event-image-block w-inline-block"
                        to="/event/morning-flow-sound-bath"
                        ><img
                          alt="Morning Flow &amp; Sound Bath"
                          class="event-image"
                          loading="lazy"
                          src="/assets/6a972aa77be026f38dd32d40_event-image-1.avif" />
                        <div class="event-image-overlay"></div
                      ></RouterLink>
                      <div class="event-content-wrap">
                        <div class="event-top-block">
                          <div class="event-top-ctg-wrap">
                            <div class="evaten-ctg-item">
                              <div>Sound Healing</div>
                            </div>
                            <div class="evaten-ctg-item">
                              <div>San Francisco Studio</div>
                            </div>
                          </div>
                        </div>
                        <div class="event-bottom-block">
                          <RouterLink

                            class="event-item-title"
                            to="/event/morning-flow-sound-bath"
                            >Morning Flow &amp; Sound Bath</RouterLink
                          >
                          <p class="event-short-details">
                            An energizing morning sequence followed by deep
                            sonic healing waves.
                          </p>
                          <RouterLink

                            class="event-link"
                            to="/event/morning-flow-sound-bath"
                            >See Details</RouterLink
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="event-cl-item w-dyn-item" role="listitem">
                    <div animation="scroll-two" class="event-card">
                      <RouterLink

                        class="event-image-block w-inline-block"
                        to="/event/weekend-mindful-reset-in-nature"
                        ><img
                          alt="Weekend Mindful Reset in Nature"
                          class="event-image"
                          loading="lazy"
                          src="/assets/6a972abce54bcda5a26175b8_event-image-2.avif" />
                        <div class="event-image-overlay"></div
                      ></RouterLink>
                      <div class="event-content-wrap">
                        <div class="event-top-block">
                          <div class="event-top-ctg-wrap">
                            <div class="evaten-ctg-item">
                              <div>Nature Retreat</div>
                            </div>
                            <div class="evaten-ctg-item">
                              <div>San Francisco Studio</div>
                            </div>
                          </div>
                        </div>
                        <div class="event-bottom-block">
                          <RouterLink

                            class="event-item-title"
                            to="/event/weekend-mindful-reset-in-nature"
                            >Weekend Mindful Reset in Nature</RouterLink
                          >
                          <p class="event-short-details">
                            Unplug and realign your energy with a multi-day
                            restorative outdoor getaway.
                          </p>
                          <RouterLink

                            class="event-link"
                            to="/event/weekend-mindful-reset-in-nature"
                            >See Details</RouterLink
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="event-cl-item w-dyn-item" role="listitem">
                    <div animation="scroll-two" class="event-card">
                      <RouterLink

                        class="event-image-block w-inline-block"
                        to="/event/advanced-core-strength-mobility"
                        ><img
                          alt="Advanced Core Strength &amp; Mobility"
                          class="event-image"
                          loading="lazy"
                          src="/assets/6a972ac9e3515f5caf5f4d90_event-image-3.avif" />
                        <div class="event-image-overlay"></div
                      ></RouterLink>
                      <div class="event-content-wrap">
                        <div class="event-top-block">
                          <div class="event-top-ctg-wrap">
                            <div class="evaten-ctg-item">
                              <div>Physical Movement</div>
                            </div>
                            <div class="evaten-ctg-item">
                              <div>San Francisco Studio</div>
                            </div>
                          </div>
                        </div>
                        <div class="event-bottom-block">
                          <RouterLink

                            class="event-item-title"
                            to="/event/advanced-core-strength-mobility"
                            >Advanced Core Strength &amp; Mobility</RouterLink
                          >
                          <p class="event-short-details">
                            Deepen your physical practice with focused control
                            and functional movement.
                          </p>
                          <RouterLink

                            class="event-link"
                            to="/event/advanced-core-strength-mobility"
                            >See Details</RouterLink
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="event-cl-item w-dyn-item" role="listitem">
                    <div animation="scroll-two" class="event-card">
                      <RouterLink

                        class="event-image-block w-inline-block"
                        to="/event/evening-candlelight-meditation-circle"
                        ><img
                          alt="Evening Candlelight Meditation Circle"
                          class="event-image"
                          loading="lazy"
                          src="/assets/6a972add2b127cab30cc6008_event-image-4.avif" />
                        <div class="event-image-overlay"></div
                      ></RouterLink>
                      <div class="event-content-wrap">
                        <div class="event-top-block">
                          <div class="event-top-ctg-wrap">
                            <div class="evaten-ctg-item">
                              <div>Meditation</div>
                            </div>
                            <div class="evaten-ctg-item">
                              <div>San Francisco Studio</div>
                            </div>
                          </div>
                        </div>
                        <div class="event-bottom-block">
                          <RouterLink

                            class="event-item-title"
                            to="/event/evening-candlelight-meditation-circle"
                            >Evening Candlelight Meditation Circle</RouterLink
                          >
                          <p class="event-short-details">
                            Wind down your day with guided breathwork and
                            peaceful reflection.
                          </p>
                          <RouterLink

                            class="event-link"
                            to="/event/evening-candlelight-meditation-circle"
                            >See Details</RouterLink
                          >
                        </div>
                      </div>
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
