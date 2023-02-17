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
    class="artwork"
    :src="artic_image_url"
    width="250"
    height="250"
  />
  <div v-else class="loading-skeleton placeholder rounded-3"></div>
</template>

<style scoped>
.artwork {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
@keyframes loading-skeleton {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 0.3;
  }
}
.loading-skeleton {
  pointer-events: none;
  animation: loading-skeleton 1s infinite alternate;
  width: 250px;
  height: 250px;
}
</style>
