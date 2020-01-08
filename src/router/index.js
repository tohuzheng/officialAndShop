import Vue from 'vue'
import Router from 'vue-router'
import indexRouters from './shop/shop-index.js'

Vue.use(Router)

let routes = new Set(indexRouters);

export default new Router({
  routes:routes
})
