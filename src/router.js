import Vue from 'vue'
import Router from 'vue-router'
import ReportForm from './views/ReportForm.vue'
import ReportList from './views/ReportList.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/reports/new',
      name: 'new-report',
      component: ReportForm
    },
    {
      path: '/reports',
      name: 'list-reports',
      component: ReportList
    }


  ]
})
