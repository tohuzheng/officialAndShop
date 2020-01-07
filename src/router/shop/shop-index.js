
import login from '@/pages/shop/login'
import Index from '@/components/shop/index'

export default [
 
      {
        path: '/login',
        name: 'login',
        component: login
      },{
        path: '/',
        name: 'index',
        component: Index
      }
    
]