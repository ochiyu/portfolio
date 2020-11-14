import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Activity from '../views/Activity.vue'
import Link from '../views/Link.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/Link',
    name: 'Link',
    component: Link
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
