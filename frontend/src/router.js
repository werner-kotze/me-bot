import Vue from 'vue'
import VueRouter from 'vue-router'

import dashboard from '@/layouts/dashboard.vue'
import landing from '@/layouts/landing.vue'
import register from '@/layouts/register.vue'

const routes = [
  { path: '*', component: landing },
  { path: '/dashboard', component: dashboard },
  { path: '/register', component: register }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
  mode: 'history',
  routes
})

export default router
