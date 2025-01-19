import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      // https://router.vuejs.org/guide/essentials/nested-routes.html#Omitting-parent-components-
      path: '/profile',
      children: [
        {
          path: '',
          name: 'profile',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ProfilesView.vue'),
        },
        {
          path: ':user',
          name: 'profile-user',
          component: () => import('@/views/UserProfileView.vue'),
          props: true,
        },
      ],
    },
  ],
})

export default router
