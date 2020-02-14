
import login from '@/pages/shop/login'
import shopClass from '@/pages/shop/shopClass'
import onlyProduct from '@/pages/shop/OnlyProduct.vue'
import SearchOnlyCode from '@/components/shop/SearchOnlyProduct.vue'
import SearchOnlyCodeResult from '@/components/shop/SearchOnlyProductResult.vue'
import Register from '@/pages/shop/Register.vue'
import shop from '@/pages/shop/Shop.vue'
import Index from '@/pages/shop/index.vue'
import buycar from '@/pages/shop/BuyCar.vue'

export default [
 
      {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/shop',
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
          }
        ]
      },
      {
        path: '/shopClass',
        name: 'shopClass',
        component: shopClass
      },
      {
        name:'onlyProduct',
        path:'/onlyProduct',
        component:onlyProduct,
        redirect:'/searchOnlyCode',
        children:[
          {
            path:'/searchOnlyCode',
            component:SearchOnlyCode
          },
          {
            path:'/searchOnlyCodeResult',
            component:SearchOnlyCodeResult
          }
        ]
      },
      {
        path:'/register',
        component:Register
      }
        
]