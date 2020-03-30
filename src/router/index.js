import Vue from 'vue'
import Router from 'vue-router'
import indexRouters from './shop/shop-index.js'
import officialRouter from './official/official-router.js'
import newsRouter from './news/news-router.js'
import { getToken } from '@/utils/localSessionStoreUtils.js'

Vue.use(Router)
let listRouter = [...indexRouters , ...officialRouter,...newsRouter];
let routes = new Set(listRouter);

const router = new Router({
  routes:routes
})

/* 路由拦截器 */
router.beforeEach((to, from, next) => {//to到哪里去，from从哪里来

  if(to.meta.noNeedLogin){
    next();
  }else{
    let token = getToken();
    if(token){
      next()
    }else{
      router.push("/login");
    }
  }

})

export default router;