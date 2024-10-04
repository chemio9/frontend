<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <div class="view">
    <RouterView />
  </div>
  <Footer></Footer>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.view {
  padding: 2rem;
}
nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  padding: 2rem 2rem 0 2rem;
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
</style>
