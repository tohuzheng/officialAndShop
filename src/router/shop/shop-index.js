
import login from '@/pages/shop/login'
import Index from '@/components/shop/index'
import shopClass from '@/pages/shop/shopClass'

export default [
 
      {
        path: '/login',
        name: 'login',
        component: login
      },{
        path: '/',
        name: 'index',
        component: Index
      },{
        path: '/shopClass',
        name: 'shopClass',
        component: shopClass
      }
        
]