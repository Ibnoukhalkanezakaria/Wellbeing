<template>
  <div class="home-cnp">
    <section class="main">
      <div class="container">
        <div class="even-columns">
          <div class="col">
            <h1>
              The #1 <br />
              personal care monthly box.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit morbi
              integer sagittis aliquam tempor purus bibendum eu ut elementum
              nullam dolerco secter dolor sit amet conseectur.
            </p>
            <div class="row">
              <div class="btn primary-btn">
                <button>Subscribe now</button>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div class="btn secondary-btn">
                <button>Discover what's inside</button>
              </div>
            </div>
          </div>
          <div class="col">
            <img src="@/assets/images/image-2-hero.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="steps">
      <div class="container">
        <div class="flex">
          <div class="row">
            <img src="@/assets/images/icon-1-perks.svg " alt="" />
            <div>
              <span>Free shipping</span>
              <span>Lorem ipsum dolor sit am </span>
            </div>
          </div>
          <div class="row">
            <img src="@/assets/images/icon-2-perks.svg " alt="" />
            <div>
              <span>Convenient subscription </span>
              <span>Lorem ipsum dolor sit am </span>
            </div>
          </div>
          <div class="row">
            <img src="@/assets/images/icon-3-perks.svg " alt="" />
            <div>
              <span>Cancel anytime </span>
              <span>Lorem ipsum dolor sit am </span>
            </div>
          </div>
        </div>
        <hr class="hr" />
      </div>
    </section>
    <section class="self-care">
      <div class="container">
        <div class="even-columns" style="gap: 4rem; align-items: center">
          <div class="grid-columns">
            <div class="img">
              <img src="@/assets/images/img-girl1.webp" alt="" />
            </div>
            <div class="img down">
              <img src="@/assets/images/img-girl2.webp" alt="" />
            </div>
            <div class="img">
              <img src="@/assets/images/img-girl3.webp" alt="" />
            </div>
            <div class="img down">
              <img src="@/assets/images/img-girl4.webp" alt="" />
            </div>
          </div>
          <div class="info">
            <h1>Curated with premium products for self-care</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit morbi
              integer sagittis aliquam tempor purus bibendum eu ut elementum
              nullam dolerco secter dolor sit amet conseectur.
            </p>
            <div class="btn primary-btn">
              <button>Subscribe now</button>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="easy">
      <div class="container">
        <div class="heading">
          <h1>Get your Wellbeing box as easy as 1, 2, 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh magna
            sit diam pharetra.
          </p>
        </div>
        <div class="flex-row">
          <div>
            <img src="@/assets/images/image-1-steps.svg" alt="" />
            <h3>Free shipping</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit
              velit semper aliquam.
            </p>
          </div>
          <div>
            <img src="@/assets/images/image-2-steps.svg" alt="" />
            <h3>We prepare your box</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit
              velit semper aliquam.
            </p>
          </div>
          <div>
            <img src="@/assets/images/image-3-steps.svg" alt="" />
            <h3>Receive it and enjoy it</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit
              velit semper aliquam.
            </p>
          </div>
        </div>
        <div class="btn secondary-btn">
          <button>Discover what's inside</button>
        </div>
      </div>
    </section>
    <section class="follow-us">
      <div class="container">
        <div class="first" style="display: flex">
          <div>
            <h3>Follow us on Instagram</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit nibh magna
              sit diam pharetra dolor sit color amet.
            </p>
          </div>
          <div class="btn secondary-btn">
            <button>Discover what's inside</button>
          </div>
        </div>
        <div class="even-columns">
          <div class="columns">
            <div class="img">
              <img src="@/assets/images/image-1-gallery.webp" alt="" />
            </div>
            <div class="img">
              <img src="@/assets/images/image-2-gallery.webp" alt="" />
            </div>
            <div class="img">
              <img src="@/assets/images/image-3-gallery.webp" alt="" />
            </div>
            <div class="img">
              <img src="@/assets/images/image-4-gallery.webp" alt="" />
            </div>
          </div>
          <div class="column">
            <div><img src="@/assets/images/image-5-gallery.webp" alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <CtaView />
</template>

<script>
import CtaView from "@/components/common/CtaCnp.vue";
export default {
  name: "HomeCnp",
  components: {
    CtaView,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: var(--primary-color);
  padding: var(--section-padding-100);
}
.even-columns {
  gap: 2rem;
}
.col {
  z-index: 3;
  h1 {
    font-size: var(--fs-1);
    color: var(--secondary-color);
  }
  p {
    margin-block: 1rem 2.5rem;
    color: var(--color7);
    line-height: 1.5rem;
    max-width: 500px;
  }
}
.steps {
  background-color: var(--color5);
  width: 100%;
  .flex {
    padding-block: var(--section-padding-100);
  }
}
.row {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  img {
    width: 50px;
  }
  div span:first-child {
    color: var(--secondary-color);
    font-weight: 600;
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
  }
}
.flex {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  div span {
    display: block;
  }
}
.self-care {
  padding-block: var(--section-padding-120);
  .grid-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    .img:not(.down) {
      margin: 0;
    }
    .down {
      margin-top: 4rem;
    }
  }
  .info {
    h1 {
      font-size: var(--fs-2);
      color: var(--secondary-color);
      font-weight: 500;
    }
    p {
      margin-block: 1rem 2.5rem;
      color: var(--color7);
      line-height: 1.5rem;
      max-width: 500px;
    }
  }
}
.easy {
  padding-block: var(--section-padding-120);
  text-align: center;
  .flex-row {
    display: flex;
    gap: 2rem;
    padding-block: var(--section-padding-100);
    div {
      h3 {
        font-size: var(--fs-7);
        color: var(--secondary-color);
        margin-block: 1rem;
      }
      p {
        color: var(--color7);
        line-height: 1.5rem;
        max-width: 500px;
        font-size: 1.1rem;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    margin: auto;
  }
}
.follow-us {
  padding-block: var(--section-padding-100);
}
.columns {
  padding-block: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.column {
  padding-block: 2.5rem;
}
.first {
  justify-content: space-between;
  align-items: center;
  div:first-child {
    flex-basis: 50%;
    h3 {
      color: var(--secondary-color);
      font-size: var(--fs-2);
      font-weight: 500;
    }
    p {
      color: var(--color7);
      line-height: 1.5rem;
      max-width: 500px;
      font-size: 1.1rem;
      margin-top: 1rem;
    }
  }
}
</style>
