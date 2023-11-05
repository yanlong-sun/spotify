import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/HomePage'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      cmponent: HomePage,
    },
  ],
})
