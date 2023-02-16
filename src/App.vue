<script setup>
import { RouterLink, RouterView } from "vue-router";
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
      <div class="greetings">
        <h1 class="green">Welcome!</h1>
        <h3>
          Please enjoy this wonderful piece of artwork, from the Art Institute
          Chicago.
        </h3>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

header {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.greetings h1,
.greetings h3 {
  text-align: center;
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
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

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
