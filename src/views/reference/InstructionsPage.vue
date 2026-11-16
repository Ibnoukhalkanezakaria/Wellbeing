<template>
  <main id="main-content">
    <section class="utility-section">
      <div class="container">
        <div class="utility-title-block is-instruction">
          <div class="text-dark"><h1>Instructions</h1></div>
          <div>
            A concise guide to help you understand, configure, and use the
            product smoothly.
          </div>
        </div>
        <div class="utility-content-block">
          <div class="utility-content-wrap">
            <div class="utility-text-wrap">
              <div class="text-dark"><h2 class="heading-7">1. Webflow</h2></div>
              <div>
                If you're new to Webflow, take a look at this
                <a
                  class="terms-link"
                  href="https://university.webflow.com/courses/webflow-101"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Webflow 101 Crash Course</a
                >
                to understand the basics and essentials.
              </div>
            </div>
            <div class="utility-text-wrap">
              <div class="text-dark">
                <h2 class="heading-7">2. Customization</h2>
              </div>
              <div>
                To make color, fonts and style modifications easier and quicker,
                this Template utilizes
                <a
                  class="terms-link"
                  href="https://university.webflow.com/lesson/variables?topics=layout-design"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Webflow variables feature.</a
                >
              </div>
            </div>
            <div class="utility-text-wrap">
              <div class="text-dark">
                <h2 class="heading-7">3. Style Guide</h2>
              </div>
              <div>
                This template utilizes components<strong> </strong>and
                variables<strong> </strong>feature in Webflow - this means the
                style and feel of this template can be changed easily, with just
                a few clicks.
              </div>
            </div>
            <div class="utility-text-wrap">
              <div class="text-dark"><h2 class="heading-7">4. SVG</h2></div>
              <div>
                Icons in this template are custom made, SVG code embedded
                elements. If you want to change their size, select one of them
                and simply change the Height Width Icons in this template are
                custom made, SVG code embedded elements.
              </div>
            </div>
            <div class="utility-text-wrap">
              <div class="text-dark">
                <h2 class="heading-7">
                  5. How to Adjust the Counter in Your Webflow Template
                </h2>
              </div>
              <div class="utility-list-block">
                <div class="text-dark">
                  <p class="text-lg-2">A. Where to Find It</p>
                </div>
                <ul class="instruction-list" role="list">
                  <li>
                    This counter script runs on any element with a data-count
                    attribute.
                  </li>
                  <li>
                    You’ll usually see this attribute in the Webflow Designer on
                    the counter elements (like “Projects Completed” or “Happy
                    Clients”).
                  </li>
                </ul>
              </div>
              <div class="utility-list-block">
                <div class="text-dark">
                  <p class="text-large-2">B. How to Change the Numbers</p>
                </div>
                <ul class="instruction-list" role="list">
                  <li>
                    Simply change the number in the data-count attribute in
                    Webflow Designer.
                  </li>
                  <li>
                    The animation will automatically update to count up to the
                    new number.You don’t need to edit the code.
                  </li>
                </ul>
              </div>
              <div class="utility-list-block">
                <div class="text-dark">
                  <p class="text-large-2">
                    C. How to Change the Animation Speed
                  </p>
                </div>
                <ul class="instruction-list" role="list">
                  <li>
                    In the script, look for: const duration = 3000; // in ms
                  </li>
                  <li>
                    This means the animation takes 3000ms (3 seconds) to
                    complete.
                  </li>
                  <li>
                    Change 3000 to another value (like 5000 for 5 seconds).
                  </li>
                </ul>
              </div>
              <div class="utility-list-block">
                <div class="text-dark">
                  <p class="text-large-2">
                    D. How to Change When It Starts Animating
                  </p>
                </div>
                <ul class="instruction-list" role="list">
                  <li>
                    The animation starts when 60% of the counter is visible on
                    screen because of: { threshold: 0.6 }
                  </li>
                  <li>
                    Change 0.6 to 0.3 (30%) to make it start earlier or 0.8
                    (80%) to make it start later.
                  </li>
                </ul>
              </div>
              <div class="utility-list-block">
                <div class="text-dark">
                  <p class="text-large-2">E. Thousand Separator Formatting</p>
                </div>
                <ul class="instruction-list" role="list">
                  <li>
                    The code currently uses id-ID locale: el.innerText =
                    current.toLocaleString("id-ID");
                  </li>
                  <li>To use commas, replace "id-ID" with "en-US".</li>
                </ul>
              </div>
              <div class="utility-list-block">
                <div class="text-dark">
                  <p class="text-large-2">F. How to Add a New Counter</p>
                </div>
                <ul class="instruction-list" role="list">
                  <li>Add a Text Block in Webflow.</li>
                  <li>
                    Set the Custom Attribute: Name: data-count, Value: Number
                    you want (e.g., 7500)
                  </li>
                  <li>The animation will work automatically.</li>
                </ul>
              </div>
              <div class="utility-list-block">
                <div class="text-dark">
                  <p class="text-large-2">G. Where to Put the Script</p>
                </div>
                <ul class="instruction-list" role="list">
                  <li>
                    Place this &lt;script&gt; in Page Settings &gt; Before
                    &lt;/body&gt; tag or in your Project Settings &gt; Custom
                    Code &gt; Footer.
                  </li>
                  <li>
                    It runs globally, so all counters with data-count will work.
                  </li>
                </ul>
              </div>
              <div class="utility-list-block" style="">
                <div class="text-dark">
                  <p class="text-large-2">
                    H. Javascript for Counter animation.
                  </p>
                </div>
                <pre
                  class="w-code-block"
                  contenteditable="false"
                  style="
                    display: block;
                    overflow-x: auto;
                    background: #2b2b2b;
                    color: #f8f8f2;
                    padding: 0.5em;
                  "
                ><code class="language-javascript" style="white-space:pre-wrap"><span><span>&lt;script src=</span><span style="color:#abe338">"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"</span><span> defer&gt;&lt;/script&gt;
</span></span><span><span></span><span class="xml" style="color:#ffa07a">&lt;</span><span class="xml" style="color:#ffa07a">script</span><span class="xml" style="color:#ffa07a"> </span><span class="xml hljs-attr" style="color:#ffa07a">src</span><span class="xml" style="color:#ffa07a">=</span><span class="xml" style="color:#abe338">"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"</span><span class="xml" style="color:#ffa07a"> </span><span class="xml hljs-attr" style="color:#ffa07a">defer</span><span class="xml" style="color:#ffa07a">&gt;</span><span class="xml" style="color:#ffa07a">&lt;/</span><span class="xml" style="color:#ffa07a">script</span><span class="xml" style="color:#ffa07a">&gt;</span><span>
</span></span><span>
</span><span><span></span><span class="xml" style="color:#ffa07a">&lt;</span><span class="xml" style="color:#ffa07a">script</span><span class="xml" style="color:#ffa07a">&gt;</span><span class="xml javascript">
</span></span><span><span class="xml javascript"></span><span class="xml javascript" style="color:#f5ab35">document</span><span class="xml javascript">.addEventListener(</span><span class="xml javascript" style="color:#abe338">"DOMContentLoaded"</span><span class="xml javascript">, </span><span class="xml javascript hljs-function">() =&gt;</span><span class="xml javascript"> {
</span></span><span><span class="xml javascript">  </span><span class="xml javascript" style="color:#dcc6e0">if</span><span class="xml javascript"> (</span><span class="xml javascript" style="color:#dcc6e0">typeof</span><span class="xml javascript"> gsap === </span><span class="xml javascript" style="color:#abe338">"undefined"</span><span class="xml javascript">) </span><span class="xml javascript" style="color:#dcc6e0">return</span><span class="xml javascript">;
</span></span><span>
</span><span>  gsap.registerPlugin(ScrollTrigger);
</span><span>
</span><span><span class="xml javascript">  </span><span class="xml javascript" style="color:#dcc6e0">const</span><span class="xml javascript"> counters = </span><span class="xml javascript" style="color:#f5ab35">document</span><span class="xml javascript">.querySelectorAll(</span><span class="xml javascript" style="color:#abe338">"[data-count]"</span><span class="xml javascript">);
</span></span><span>
</span><span><span class="xml javascript">  counters.forEach(</span><span class="xml javascript hljs-function">(</span><span class="xml javascript hljs-function" style="color:#f5ab35">el</span><span class="xml javascript hljs-function">) =&gt;</span><span class="xml javascript"> {
</span></span><span><span class="xml javascript">    </span><span class="xml javascript" style="color:#dcc6e0">const</span><span class="xml javascript"> rawValue = el.getAttribute(</span><span class="xml javascript" style="color:#abe338">"data-count"</span><span class="xml javascript">);
</span></span><span><span class="xml javascript">    </span><span class="xml javascript" style="color:#dcc6e0">if</span><span class="xml javascript"> (!rawValue) </span><span class="xml javascript" style="color:#dcc6e0">return</span><span class="xml javascript">;
</span></span><span>
</span><span><span class="xml javascript">    </span><span class="xml javascript" style="color:#dcc6e0">const</span><span class="xml javascript"> target = </span><span class="xml javascript" style="color:#f5ab35">parseInt</span><span class="xml javascript">(rawValue.replace(</span><span class="xml javascript" style="color:#ffa07a">/\./g</span><span class="xml javascript">, </span><span class="xml javascript" style="color:#abe338">""</span><span class="xml javascript">), </span><span class="xml javascript" style="color:#f5ab35">10</span><span class="xml javascript">);
</span></span><span><span class="xml javascript">    </span><span class="xml javascript" style="color:#dcc6e0">if</span><span class="xml javascript"> (</span><span class="xml javascript" style="color:#f5ab35">isNaN</span><span class="xml javascript">(target)) </span><span class="xml javascript" style="color:#dcc6e0">return</span><span class="xml javascript">;
</span></span><span>
</span><span><span class="xml javascript">    </span><span class="xml javascript" style="color:#dcc6e0">let</span><span class="xml javascript"> obj = { </span><span class="xml javascript hljs-attr">value</span><span class="xml javascript">: </span><span class="xml javascript" style="color:#f5ab35">0</span><span class="xml javascript"> };
</span></span><span>
</span><span>    gsap.to(obj, {
</span><span><span class="xml javascript">      </span><span class="xml javascript hljs-attr">value</span><span class="xml javascript">: target,
</span></span><span><span class="xml javascript">      </span><span class="xml javascript hljs-attr">duration</span><span class="xml javascript">: </span><span class="xml javascript" style="color:#f5ab35">2.5</span><span class="xml javascript">,
</span></span><span><span class="xml javascript">      </span><span class="xml javascript hljs-attr">ease</span><span class="xml javascript">: </span><span class="xml javascript" style="color:#abe338">"power2.out"</span><span class="xml javascript">,
</span></span><span><span class="xml javascript">      </span><span class="xml javascript hljs-attr">onUpdate</span><span class="xml javascript">: </span><span class="xml javascript hljs-function">() =&gt;</span><span class="xml javascript"> {
</span></span><span><span class="xml javascript">        el.textContent = </span><span class="xml javascript" style="color:#f5ab35">Math</span><span class="xml javascript">.round(obj.value).toLocaleString(</span><span class="xml javascript" style="color:#abe338">"id-ID"</span><span class="xml javascript">);
</span></span><span>      },
</span><span><span class="xml javascript">      </span><span class="xml javascript hljs-attr">scrollTrigger</span><span class="xml javascript">: {
</span></span><span><span class="xml javascript">        </span><span class="xml javascript hljs-attr">trigger</span><span class="xml javascript">: el,
</span></span><span><span class="xml javascript">        </span><span class="xml javascript hljs-attr">start</span><span class="xml javascript">: </span><span class="xml javascript" style="color:#abe338">"top 85%"</span><span class="xml javascript">,
</span></span><span><span class="xml javascript">        </span><span class="xml javascript hljs-attr">toggleActions</span><span class="xml javascript">: </span><span class="xml javascript" style="color:#abe338">"play none none none"</span><span class="xml javascript">
</span></span><span>      }
</span><span>    });
</span><span>  });
</span><span>});
</span><span><span class="xml javascript"></span><span class="xml" style="color:#ffa07a">&lt;/</span><span class="xml" style="color:#ffa07a">script</span><span class="xml" style="color:#ffa07a">&gt;</span></span></code></pre>
              </div>
            </div>
            <div class="utility-text-wrap">
              <div class="text-dark">
                <h2 class="heading-7">6. Still Confused?</h2>
              </div>
              <div>
                If you still have any confusion or need clarification on
                anything, feel free to reach out to us directly. You can contact
                us via email at
                <a class="terms-link" href="mailto:support@flownix.co"
                  >support@flownix.co</a
                >.We’re happy to help!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
