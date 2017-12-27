import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home/home.vue"
import Record from "../components/record/record.vue"
import Mentoring from "../components/mentoring/mentoring.vue"
import Personal from "../components/personal/personal.vue"

import Login from "../components/catalog/login.vue"


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/record',
      component: Record
    },
    {
      path: '/mentoring',
      component: Mentoring
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: "/login",
      component: Login
    },
  ]
})
