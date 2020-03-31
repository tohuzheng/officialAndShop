import NewsIndex from '@/pages/news/News.vue'
import Dynamics from '@/components/news/IndustryDynamics.vue'
import HotTopics from '@/components/news/HotTopics.vue'
import HotMessage from '@/components/news/HotMessage.vue'
import NewsSearch from '@/components/news/SearchResult.vue'
import DynamicsDetial from '@/components/news/DynamicsDetial.vue'

export default [
    {
        path:"/news",
        name:"news",
        component:NewsIndex,
        redirect: '/dynamics',//利用重定向配置默认路由
        children:[
            {
                name:"dynamics",
                path:"/dynamics",
                component:Dynamics,
                meta:{noNeedLogin:true}
            },
            {
                name:"topics",
                path:"/topics",
                component:HotTopics,
                meta:{noNeedLogin:true}
            },
            {
                path:"/message",
                component:HotMessage,
                meta:{noNeedLogin:true}
            },
            {
                path:"/newsSearch",
                component:NewsSearch,
                name:"NewsSearch",
                meta:{noNeedLogin:true}
            },
            {
                path:"/newsDetial",
                component:DynamicsDetial,
                name:"NewsDetial",
                meta:{noNeedLogin:true}
            }
        ]
    },
]