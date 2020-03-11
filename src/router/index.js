import Vue from 'vue'
import Router from 'vue-router'
import indexRouters from './shop/shop-index.js'
import officialRouter from './official/official-router.js'
import newsRouter from './news/news-router.js'

Vue.use(Router)
let listRouter = [...indexRouters , ...officialRouter,...newsRouter];
let routes = new Set(listRouter);

const router = new Router({
  routes:routes
})

/* 路由拦截器 */
router.beforeEach((to, from, next) => {//to到哪里去，from从哪里来
  // console.log("to:=======");
  // console.log(to);
  // console.log(from);
  // console.log("to:=======");
  next();
  // if (to.matched.some(r => r.meta.requireAuth)) {
  //   if (store.state.token) {
  //     next();
  //   }
  //   else {
  //     next({
  //       name: 'login',
  //       param: {redirect: to.fullPath}
  //     })
  //   }
  // }
  // else {
  //   next();
  // }
})

export default router;