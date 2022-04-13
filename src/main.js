import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 初始化样式表
import '@/styles/index.scss'

Vue.config.productionTip = false
Vue.use(router)
Vue.$router=router
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
