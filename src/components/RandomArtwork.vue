<script setup>
import { ref, onMounted } from "vue";
import getRandPublicImgUrl from "../services/ArticApi";

const artic_image_url = ref(null);

onMounted(() => {
  getRandPublicImgUrl().then((x) => (artic_image_url.value = x));
});
</script>

<template>
  <img
    v-if="artic_image_url"
    alt="Artwork by the Art Institute of Chicago"
    class="artwork my-5"
    :src="artic_image_url"
    width="250"
    height="250"
  />
</template>

<style scoped>
.artwork {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.sr-only {
  display: none;
}
</style>
