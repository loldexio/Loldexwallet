import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import headerComponent from "../components/dashboard/layout/header";
import contentComponent from "../components/dashboard/layout/content";
import footerComponent from "../components/dashboard/layout/footer";
import testComponent from "../components/dashboard/layout/test";

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: contentComponent,
        header: headerComponent,
        footer: footerComponent
      },
      children: [
        {
          path: '/test',
          component: testComponent
        }
      ]
    }
  ]
})
