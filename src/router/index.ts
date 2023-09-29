import RoutinesView from "../views/RoutinesView.vue";
import {createRouter, createWebHistory} from "vue-router";

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
