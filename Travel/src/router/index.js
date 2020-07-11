import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import about from '@/components/about.vue'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }]

// routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: home
//   },
//   {
//     path: '/',
//     name: 'About',
//     component: about
//   }
// ]
export default new Router({
  routes,
  mode: 'history',
    
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})
