import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import  axios from 'axios'

Vue.config.productionTip = false

window.axios = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
})
if (localStorage.getItem('access_token')) {
  window.axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('access_token')}`;
}

Vue.prototype.$url = 'http://localhost:8000'



new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
