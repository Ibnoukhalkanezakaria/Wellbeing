<template>
  <div class="boxes">
    <HeaderView style="background-color: var(--color5)" />
    <BoxesCnp />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/common/HeaderView.vue";
import BoxesCnp from "@/components/Boxes/BoxesCnp.vue";
import FooterView from "@/components/common/FooterCnp.vue";
export default {
  name: "BoxesView",
  components: {
    HeaderView,
    BoxesCnp,
    FooterView,
  },
};
</script>
