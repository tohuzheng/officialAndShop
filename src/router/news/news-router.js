import NewsIndex from '@/pages/news/News.vue'
import Dynamics from '@/components/news/IndustryDynamics.vue'
import HotTopics from '@/components/news/HotTopics.vue'
import HotMessage from '@/components/news/HotMessage.vue'
import NewsSearch from '@/components/news/SearchResult.vue'

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
                component:Dynamics
            },
            {
                name:"topics",
                path:"/topics",
                component:HotTopics
            },
            {
                path:"/message",
                component:HotMessage
            },
            {
                path:"/newsSearch",
                component:NewsSearch
            }
        ]
    },
]