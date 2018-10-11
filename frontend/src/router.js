import Vue from 'vue'
import VueRouter from 'vue-router'

import dashboard from '@/components/dashboard.vue'
import landing from '@/components/landing.vue'
import apiexample from '@/components/api-example.vue'
import signup from '@/components/signup.vue'

const routes = [
  { path: '*', component: landing },
  { path: '/api-example', component: apiexample },
  { path: '/signup', component: signup },
  { path: '/dashboard', component: dashboard }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
  mode: 'history',
  routes
})

export default router
