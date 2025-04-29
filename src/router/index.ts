import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestHomeView from '@/views/TestHomeView.vue'
import PlaygroundHomeView from '@/views/PlaygroundHomeView.vue'
import Poster from '@/views/Poster.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test1',
      name: 'test2',
      component: TestHomeView,
    },
    {
      path: '/kitty1',
      name: 'kitty2',
      component: PlaygroundHomeView,
    },
    {
      path: '/post1',
      name: 'post2',
      component: Poster,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
