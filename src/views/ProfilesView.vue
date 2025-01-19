<template>
  <main>
    <n-list hoverable clickable v-for="people in data.people">
      <RouterLink :to="'profile/' + people.name">
        <n-list-item>
          <template #prefix>
            <n-avatar :size="64" :src="logo" round />
          </template>
          <n-thing :title="people.name" :description="people.description">
            {{ people.job }}
          </n-thing>
          <template #suffix>
            <n-icon size="large">
              <ChevronRight />
            </n-icon>
          </template>
        </n-list-item>
      </RouterLink>
    </n-list>
  </main>
</template>

<script setup lang="ts">
import logo from '../assets/logo.svg?url'
import { ChevronRight } from 'lucide-vue-next'
let data = {
  clubs: [{ name: 'Atom', id: 1 }],
  people: [
    {
      avatar: 'https://',
      name: 'chemio',
      club: [1],
      job: 'Vue',
      description: 'A full-stack developer',
    },
  ],
}
</script>
<style scoped>
@media screen and (min-width: 800px) {
  main {
    padding: 0 6rem;
  }
}
</style>
