import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

window.posApp = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<app/>'
})
