import officialWelcome from '@/components/official/Welcome.vue'
import officialIndex from '@/pages/official/Index'

export default [
 
    {
      path: '/officialWelcome',
      name: 'officialWelcome',
      component: officialWelcome,
      meta:{noNeedLogin:true}
    },
    {
      path: '/official',
      name: 'official',
      component: officialIndex,
      meta:{noNeedLogin:true}
    },
    { //设置默认页面
      path: '/',
      redirect: '/official'
    }
      
]