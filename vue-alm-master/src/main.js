// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import axios from './axios-auth'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(Vuex)
Vue.prototype.axios = axios


new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>',
})
