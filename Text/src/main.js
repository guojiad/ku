import Vue from 'vue'
import App from './App.vue'


// 导入Element
// 按需引入
import "element-ui/lib/theme-chalk/index.css"
import "./ElementUI.js"

// 导路由 配置路由
import Router from "vue-Router"
import RouterConfig from "./router.config.js"

Vue.use(Router)
const router = new Router(RouterConfig)

// 1.导入axios模块
import axios from "axios"
// 2.配置发送请求
// axios.interceptors.request.use()---发送请求
axios.interceptors.request.use(function(config){
  return config
},function(error){
  return Promise.reject(error)
})
// 3.配置请求返回的信息
// axios.interceptors.response.use()--配置请求回来的信息
axios.interceptors.response.use(function(response){
  return response
},function(error){
  return Promise.reject(error)
})
// 4.将axios挂载到Vue实例上(因为没有vue.use()这个方法，一般都是挂载到原型上)
Vue.prototype.$http = axios
// 说明：后期使用时就尅直接使用$http代替axios


new Vue({
  el: '#app',
  router,//挂载
  render: h => h(App)
})
