<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted } from "vue";
import getRandPublicImgUrl from "./services/ArticApi";

const artic_image_url = ref(null);

onMounted(() => {
  getRandPublicImgUrl().then((x) => (artic_image_url.value = x));
});
</script>

<template>
  <header>
    <img
      v-if="artic_image_url" 
      alt="Artwork by the Art Institute of Chicago"
      class="artwork my-5"
      :src="artic_image_url"
      width="250"
      height="250"
    />
    <div v-else class="spinner-border" role="status"> 
      <span class="sr-only">Loading...</span>
    </div>

    <div class="wrapper">
      <HelloWorld msg="Welcome!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.artwork {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.sr-only {
  display: none;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
