import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/components/Dashboard.vue'
import Landing from '@/components/Landing.vue'
import Register from '@/components/Register.vue'

const routes = [
  { path: '*', component: Landing },
  { path: '/dashboard', component: Dashboard },
  { path: '/register', component: Register }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
  mode: 'history',
  routes
})

export default router
