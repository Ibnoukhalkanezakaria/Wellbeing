<template>
  <div class="page-wrapper" @click="handleClick" @keydown="handleKey" @submit.prevent="handleSubmit">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>

<script>
import { startSmoothScroll, stopSmoothScroll } from './smoothScroll';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
import { initializePage, handleClick, handleKey, handleSubmit, closeMenus } from './siteInteractions';
export default {
  components: { SiteHeader, SiteFooter },
  mounted() { startSmoothScroll(); initializePage(); },
  beforeUnmount() { stopSmoothScroll(); },
  watch: {
    '$route.path'() {
      closeMenus();
      this.$nextTick(initializePage);
    },
  },
  methods: { handleClick, handleKey, handleSubmit },
};
</script>
