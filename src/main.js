// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/common.css'
/**
 * axios
 */
import axios from 'axios'
import VueAxios from 'vue-axios'

/**
 * element-ui
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAxios, axios)
/**
 * 定义全局变量
 */
Vue.prototype.$axios = axios// 公共样式
Vue.prototype.HOST = process.env.API_HOST
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
