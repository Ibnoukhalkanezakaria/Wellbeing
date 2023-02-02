<template>
  <div class="header">
    <div class="container">
      <nav>
        <div class="logo">
          <router-link to="/"
            ><img src="@/assets/images/logo.svg" alt="logo" aria-label="logo"
          /></router-link>
        </div>
        <div class="nav-links" role="lists">
          <ul>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/boxes">Boxes</router-link>
            <router-link to="/blog">Blog</router-link>
          </ul>
          <div class="cart-icon">
            <ion-icon name="storefront-outline"></ion-icon>
            <span class="quantity">0</span>
          </div>
        </div>
        <div class="primary-btn" data-type="another">
          <button>Get Box</button>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <router-view />
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--primary-color);
  padding-block: 2rem;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links {
  display: flex;
  align-content: center;
  gap: 2.5rem;
  ul a {
    color: var(--color7);
    font-size: 1.2rem;
    font-weight: 500;
    padding-inline: 1.5rem;
    transition: var(--transition);
    &:hover {
      color: var(--color4);
    }
  }
}
.cart-icon {
  position: relative;
  cursor: pointer;
  ion-icon {
    font-size: 1.7rem;
  }
  .quantity {
    position: absolute;
    bottom: -5px;
    right: -10px;
    font-size: 1rem;
    color: var(--color5);
    border-radius: 50%;
    background-color: var(--color3);
    min-width: 18px;
    min-height: 18px;
    display: flex;
    padding: 1px;
    align-content: center;
    justify-content: center;
    transition: var(--transition);
    cursor: pointer;
  }
  &:hover {
    .quantity {
      background-color: var(--color4);
      color: var(--secondary-color);
    }
  }
}
</style>
