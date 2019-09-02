// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import lazyLoad from 'vue-lazyload'
// import Vconsole from 'vconsole'
import { Popup, TransferDom, LoadingPlugin } from 'vux'

import { dateFormat, dateFor } from './filter/index'

// if (process.env.MOCK_TOKEN == 'dev_visitor') {
// Vue.prototype.$vConsole = new Vconsole()
// }
if (process.env.MOCK_DATA == 'true') {
  require('./mock/index.js')
}

Vue.component('popup', Popup)

Vue.directive('transfer-dom', TransferDom)
Vue.use(LoadingPlugin)
// //懒加载
Vue.use(lazyLoad, {
  loading: require('../static/img/imgLoading.png')
})

Vue.config.productionTip = false

Vue.filter('dateFormat', dateFormat)
Vue.filter('dateFor', dateFor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
