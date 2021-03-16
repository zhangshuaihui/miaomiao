import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import MineRouter from './mine'
import CinemaRouter from './cinema'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    MineRouter,
    CinemaRouter,
    //重定向路由
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})

export default router
