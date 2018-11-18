import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import DashboardComponent from "@/components/dashboard/Dashboard";

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/dashboard"
    }, {
      path: '/dashboard',
      component: DashboardComponent
    }
  ]
})
