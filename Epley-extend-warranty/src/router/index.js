import Vue from 'vue'
import Router from 'vue-router'

//首页
import Index from '../components/Index'
//咨询购买
import Consult from '../components/Consult'
//个人中心
import Personal from '../components/Personal'
//车品牌
import CarBrand from '../components/CarBrand'
//登录
import Login from '../components/Login'
//注册
import Register from '../components/Register'
//忘记密码
import ForgetPassword from '../components/ForgetPassword'
//设置
import Setting from '../components/Setting'
//修改密码
import ChangePassword from '../components/ChangePassword'
//支付方式
import Payment from '../components/Payment'
//上传资料
import Upload from '../components/Upload'
//延保服务
import ExtendService from '../components/ExtendService'
//服务详情
import ServiceDetails from '../components/ServiceDetails'
//关于艾普利
import About from '../components/About'
//系统消息
import SystemMsg from '../components/SystemMsg'
//消息详情
import InfoDetail from '../components/InfoDetail'
//banner内链页面
import InsideChain from '../components/InsideChain'




Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/consult',
      name: 'consult',
      component: Consult
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/carBrand',
      name: 'carBrand',
      component: CarBrand
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPassword
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: ChangePassword
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/extendService',
      name: 'extendService',
      component: ExtendService
    },
    {
      path: '/serviceDetails',
      name: 'serviceDetails',
      component: ServiceDetails
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/systemMsg',
      name: 'systemMsg',
      component: SystemMsg
    },
    {
      path: '/infoDetail',
      name: 'infoDetail',
      component: InfoDetail
    },
    {
      path: '/insideChain',
      name: 'insideChain',
      component: InsideChain
    },
  ]
})
