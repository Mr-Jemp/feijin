import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home/home.vue"
import Record from "../components/record/record.vue"
import Mentoring from "../components/mentoring/mentoring.vue"
import Personal from "../components/personal/personal.vue"

import Login from "../components/catalog/login.vue"
import Cover from "../components/catalog/cover.vue"
import Collect from "../components/catalog/collect.vue"
import Details from "../components/catalog/details.vue"
import Discuss from "../components/catalog/discuss.vue"
import Video from "../components/catalog/video.vue"
import Suggest from "../components/catalog/suggest.vue"


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
    {
      path: "/cover",
      component: Cover
    },
    {
      path: "/collect",
      component: Collect
    },
    {
      path: "/details",
      component: Details
    },
    {
      path: "/discuss",
      component: Discuss
    },
    {
      path: "/video",
      component: Video
    },
    {
      path: "/suggest",
      component: Suggest
    },
  ]
})
