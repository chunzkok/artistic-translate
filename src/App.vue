<script setup>
import { RouterLink, RouterView } from "vue-router";
import RandomArtwork from "./components/RandomArtwork.vue";
</script>

<template>
  <header>
    <RandomArtwork class="my-5" />
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
