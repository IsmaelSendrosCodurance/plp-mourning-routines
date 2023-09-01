import { createRouter, createWebHistory } from 'vue-router'
import RoutinesView from "@/views/RoutinesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RoutinesView
    }
  ]
})

export default router
