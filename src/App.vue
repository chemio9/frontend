<template>
  <n-config-provider :theme :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <nav>
      <n-flex justify="center">
        <n-menu style="width: auto;" mode="horizontal" responsive :options="menuOptions" />
      </n-flex>
    </nav>
  </n-config-provider>
  <div class="view">
    <RouterView />
  </div>
  <Footer></Footer>
</template>
<script setup lang="ts">
// TODO: use auto-import, this is annoying

import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import { NConfigProvider, NGlobalStyle, GlobalThemeOverrides, darkTheme, useOsTheme, zhCN, dateZhCN } from 'naive-ui'
import type { Component } from 'vue'
import { h, computed } from 'vue'
import { NMenu, NFlex } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

let osThemeRef = useOsTheme()
let theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#61A2CCFF",
    primaryColorHover: "#99DDE8FF",
    primaryColorPressed: "#3F5D7AFF",
    primaryColorSuppl: "#6D83AEFF"
  }
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
          }
        },
        { default: () => 'Home' }
      ),
    key: 'go-back-home',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'about',
          }
        },
        { default: () => 'About' }
      ),
    key: 'go-about',
  }
]
</script>

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
