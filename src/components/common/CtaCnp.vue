<template>
  <div class="cta">
    <div class="container">
      <div class="d-flex">
        <div class="one">
          <h2>Subscribe and get 10% OFF</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed purus
            quam tellus eros, nunc tellus turpis.
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
        <div class="one" style="z-index: 2">
          <img src="@/assets/images/image-1-newsletter.webp" alt="" />
        </div>
        <img class="webp" src="@/assets/images/image-1-hero.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtaView",
};
</script>

<style lang="scss" scoped>
.cta {
  background-color: var(--color4);
  position: relative;
  .d-flex {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 2rem;
    .webp {
      position: absolute;
      bottom: 0;
      right: 15%;
      z-index: 1;
      width: 520px;
    }
    .one {
      h2 {
        color: var(--secondary-color);
        font-size: var(--fs-2);
      }
      p {
        margin-block: 1rem 2.5rem;
        color: var(--color7);
        line-height: 1.5rem;
        max-width: 500px;
        font-size: 1.1rem;
      }
      form {
        display: flex;
        justify-content: space-between;
        background-color: var(--color5);
        border-radius: 50px;
        padding: 0.5rem;
        max-width: 500px;
        input[type="email"] {
          padding: 1rem;
          border-radius: 50px;
        }
        input[type="submit"] {
          padding: 1rem 1.5rem;
          border-radius: 50px;
          background-color: var(--secondary-color);
          color: var(--color5);
          cursor: pointer;
          font-weight: 600;
          transition: var(--transition);
          &:hover {
            background-color: var(--color4);
            color: var(--secondary-color);
          }
        }
      }
    }
  }
}
</style>
