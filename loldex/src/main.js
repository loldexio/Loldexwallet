import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import VueClickaway from "vue-clickaway";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/candlestick';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';

Vue.use(BootstrapVue);

Vue.component('v-chart', ECharts)

Vue.directive('click-away', VueClickaway.directive);

window.vueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');