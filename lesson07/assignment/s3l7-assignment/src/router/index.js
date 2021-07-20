import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image-page',
    name: 'ImagePg',
    // route level code-splitting
    // this generates a separate chunk (image-page.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "image-page" */ '../views/ImagePg.vue')
  },
  {
    path: '/accordion-page',
    name: 'AccordionPg',
    component: () => import(/* webpackChunkName: "image-page" */ '../views/AccordionPg.vue')
  },
  {
  path: '/grid-page',
  name: 'GridPg',
  component: () => import(/* webpackChunkName: "image-page" */ '../views/GridPg.vue')
},
{
  path: '/accordion-page2',
  name: 'AccordionPgTwo',
  component: () => import(/* webpackChunkName: "image-page" */ '../views/AccordionPgTwo.vue')
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
