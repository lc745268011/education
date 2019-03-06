import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve)
    },
    {
      path: '/user/login',
      name: 'login',
      component: resolve => require(['@/pages/user/login'], resolve)
    },
    {
      path: '/user/register',
      name: 'login',
      component: resolve => require(['@/pages/user/register'], resolve)
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['@/pages/user/user'], resolve)
    },
    {
      path: '/order/list',
      name: 'orderList',
      component: resolve => require(['@/pages/order/list'], resolve)
    },
    {
      path: '/order/detail',
      name: 'orderDetail',
      component: resolve => require(['@/pages/order/detail'], resolve)
    },
    {
      path: '/order/shopcart',
      name: 'shopcart',
      component: resolve => require(['@/pages/order/shopcart'], resolve)
    }
  ]
})
