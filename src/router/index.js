import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/firstStep',
    name: 'firstStep',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "firstStep" */ '../views/FirstStepView.vue')
  },
  {
    path: '/secondStep',
    name: 'secondStep',
    component: () => import(/* webpackChunkName: "secondStep" */ '../views/SecondStepView.vue')
  },
  {
    path: '/thirdStep',
    name: 'thirdStep',
    component: () => import(/* webpackChunkName: "thirdStep" */ '../views/ThirdStepView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
