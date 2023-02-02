<template>
  <div class="home">
    <HeaderView />
    <HomeCnp />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/common/HeaderView.vue";
import HomeCnp from "@/components/Home/HomeCnp.vue";
import FooterView from "@/components/common/FooterCnp.vue";
export default {
  name: "HomeView",
  components: {
    HeaderView,
    HomeCnp,
    FooterView,
  },
};
</script>
