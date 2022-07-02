import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/country/:id',
      component: () => import('../views/CardProfile.vue'),
      name: 'country',
      params: true
    }
  ]
})

export default router