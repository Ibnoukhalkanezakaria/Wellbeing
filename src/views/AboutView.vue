<template>
  <div class="home">
    <HeaderView />
    <AboutCnp />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/common/HeaderView.vue";
import AboutCnp from "@/components/About/AboutCnp.vue";
import FooterView from "@/components/common/FooterCnp.vue";
export default {
  name: "HomeView",
  components: {
    HeaderView,
    AboutCnp,
    FooterView,
  },
};
</script>
