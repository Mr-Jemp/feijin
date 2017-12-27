// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Nav from './components/public/Nav.vue'

Vue.component("v-nav",Nav);

Vue.config.productionTip = false;

/* eslint-disable no-new */
//实例化我们的vue
new Vue({
  el: '#app',
  router,//此处只能用小写，大写为关键字
  template: "<App />",
  components: {
    App
  }
});
