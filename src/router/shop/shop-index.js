
import login from '@/pages/shop/login'
import shopClass from '@/pages/shop/shopClass'
import onlyProduct from '@/pages/shop/OnlyProduct.vue'
import SearchOnlyCode from '@/components/shop/SearchOnlyProduct.vue'
import SearchOnlyCodeResult from '@/components/shop/SearchOnlyProductResult.vue'
import Register from '@/pages/shop/Register.vue'
import shop from '@/pages/shop/Shop.vue'
import Index from '@/pages/shop/index.vue'
import buycar from '@/pages/shop/BuyCar.vue'
import order from '@/pages/shop/Order.vue'
import compareProduct from '@/pages/shop/CompareProduct.vue'
import person from '@/pages/shop/PersonData.vue'
import messige from '@/pages/shop/Messige.vue'
import myFootprint from '@/pages/shop/MyFootprint.vue'
import shopDetail from '@/pages/shop/ShopDetail.vue'
import customerService from '@/pages/shop/CustomerService.vue'
import shopCategoryDetial from '@/pages/shop/ShopCategoryDetial.vue'

export default [
 
      {
        path: '/login',  //商城登录路由
        name: 'login',
        component: login,
        meta:{noNeedLogin:true}
      },
      {
        path: '/shop',  //商城内路由
        name: 'shop',
        component: shop,
        redirect: '/index',
        children: [
          {
            path: '/index',
            component: Index
          },
          {
            path: '/buycar',
            component: buycar
          },
          {
            path: '/order',
            component: order
          },
          {
            path: '/compare',
            component: compareProduct
          },
          {
            path: '/person',
            component: person
          },
          {
            path: '/messige',
            component: messige
          },
          {
            path: '/myfootprint',
            component: myFootprint
          },
          {
            path: '/detail/:shopId',  // 单个商品详细页
            component: shopDetail
          },
          {
            path: '/shopCategory/:type',  // 某个品类的详情
            component: shopCategoryDetial
          }
        ]
      },
      {
        path: '/shopClass',
        name: 'shopClass',
        component: shopClass
      },
      {
        name: 'onlyProduct',  //查询防伪码路由
        path: '/onlyProduct',
        component:onlyProduct,
        redirect: '/searchOnlyCode',
        children:[
          {
            path: '/searchOnlyCode',
            component:SearchOnlyCode
          },
          {
            path: '/searchOnlyCodeResult',
            component:SearchOnlyCodeResult
          }
        ]
      },
      {
        path: '/register',   //客户注册页路由
        component:Register
      },
      {
        path: '/customerService',  // 客服中心
        component: customerService,
        name: 'customerService'
      }
        
]