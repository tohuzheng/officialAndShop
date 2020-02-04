import officialWelcome from '@/components/official/Welcome.vue'
import officialIndex from '@/pages/official/Index'

export default [
 
    {
      path: '/officialWelcome',
      name: 'officialWelcome',
      component: officialWelcome
    },{
      path: '/officialIndex',
      name: 'officialIndex',
      component: officialIndex
    }
      
]