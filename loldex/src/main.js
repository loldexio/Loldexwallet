import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import VueClickaway from "vue-clickaway";
import BootstrapVue from 'bootstrap-vue';
import VueGoogleChart from "vue-google-charts";

Vue.use(BootstrapVue);

Vue.use(VueGoogleChart);

Vue.directive('click-away', VueClickaway.directive);

window.vueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');