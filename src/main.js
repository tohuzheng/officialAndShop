// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//全局组件注册，入口文件
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

/*
*axios拦截器
*/
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log("请求拦截器");
  console.log(config);
  console.log("请求拦截器");
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log("响应拦截器");
  console.log(response)
  console.log("响应拦截器");
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

