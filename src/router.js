import Vue from 'vue'
import Router from 'vue-router'

import PreCheck from '../src/views/pre-check.vue'

import Home from '../src/views/home.vue'
import HomeIndex from '../src/components/home/index.vue'
import HomeInfo from '../src/components/home/info.vue'
import HomeVideos from '../src/components/home/videos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: PreCheck
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: HomeIndex
        },
        {
          path: 'info',
          component: HomeInfo
        },
        {
          path: 'videos',
          component: HomeVideos
        }
      ]
    }
  ]
})
