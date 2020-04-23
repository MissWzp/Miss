import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import * as api from './server/api/'
import '@/plugins/vant'
import './config/filter'
import '@/config/rem'
import 'reset-css'
import '@/config/filter'
import i18n from "./i18n/index";
import VueI18n from "vue-i18n";
import './icons' 
import waterfall from 'vue-waterfall2'
import areaList from './config/areaList'
Vue.prototype.$area = areaList


Vue.use(waterfall)
Vue.use(VueI18n, {
  i18n: function(path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) {
      return value
    }
    return ''
  }
})


Vue.config.productionTip = false
Vue.prototype.$http = api

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
