<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazload from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import './assets/css/reset.css'



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueLazload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
>>>>>>> init
