<template>
  <main>
    <n-thing content-indented>
      <template #avatar>
        <n-avatar :size="64" :src="logo" round />
      </template>
      <template #header>
        {{ $route.params.user }}
      </template>
      <template #description> Description </template>
      Money is any item or verifiable record that is generally accepted as payment for goods and
      services and repayment of debts, such as taxes, in a particular country or socio-economic
      context.
      <template #footer>
        <n-button ghost>
          <template #icon>
            <n-icon>
              <LogoGithub></LogoGithub>
            </n-icon>
          </template>
          Github
        </n-button>
      </template>
    </n-thing>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  user: String
}>()

import logo from '../assets/logo.svg?url'
import { LogoGithub } from '@vicons/ionicons5'
</script>
<style scoped>
@media screen and (min-width: 800px) {
  main {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}
main {
  padding: 0.5rem;
  margin: 2rem 0;
}
</style>
