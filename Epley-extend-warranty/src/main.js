// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//mint ui部分
import {InfiniteScroll, DatetimePicker, IndexList, IndexSection, Cell} from 'mint-ui'

Vue.use(InfiniteScroll);
Vue.component("v-picker", DatetimePicker);
Vue.component("mt-cell", Cell);
Vue.component("mt-index-list", IndexList);
Vue.component("mt-index-section", IndexSection);


//配合webpack来转译输出es5的js代码
import "babel-polyfill"


//公用组件部分
import VHeader from "./components/VHeader"
import VFooter from "./components/VFooter"

Vue.component("v-header", VHeader)
Vue.component("v-footer", VFooter)


//阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
