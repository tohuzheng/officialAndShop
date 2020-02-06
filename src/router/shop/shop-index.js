
import login from '@/pages/shop/login'
import Index from '@/pages/shop/index'
import shopClass from '@/pages/shop/shopClass'
import onlyProduct from '@/pages/shop/OnlyProduct.vue'
import SearchOnlyCode from '@/components/shop/SearchOnlyProduct.vue'
import SearchOnlyCodeResult from '@/components/shop/SearchOnlyProductResult.vue'
import Register from '@/pages/shop/Register.vue'

export default [
 
      {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/',
        name: 'index',
        component: Index
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