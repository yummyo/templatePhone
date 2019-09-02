import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from '../store/index'

// 路由懒加载  但是测试环境还是用正常加载  懒加载会导致webpack热更新比较慢
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)
const routerList = {
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: _import('home'),
      meta: {
        title: '私信'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
}
const router = new Router(routerList)
router.beforeEach((to, form, next) => {
  if (Object.keys(store.getters.pageData).length) {
    next()
  } else {
    axios.get('/static/config.json').then(res => {
      store.commit('setPageData', res.data)
      next()
    })
  }
})
export default router
