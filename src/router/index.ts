
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/console',
    name: 'Console',
    component: () => import('../layout/index.vue'),
  },
  {
    path: '/components',
    name: 'Component',
    component: () => import('../views/demo/index.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
