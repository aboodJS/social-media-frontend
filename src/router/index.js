import Feed from '@/pages/Feed.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{path: '/', name: "main page", component: Home}, {path: "/feed", name: 'feed', component: Feed}],
})

export default router
