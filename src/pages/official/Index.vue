<template>
    <div>
        <navi/>
        <welcome/>
        <introduction/>
        <culture/>
        <honor/>
        <div align='center' style="margin-top:15px">
            Copyright©2018企业产品科技集团股份有限公司<br>
            版权所有京ICP证140608号.京ICP备12041691号-2.京公网安备11010502026582<br>
            互联网药品信息服务资格证书 （京）-非经营性-2017-0039<br>
        </div>
        <el-backtop></el-backtop>
    </div>
</template>

<script>
import welcome from './Welcome.vue'
import navi from './Navi.vue'
import introduction from './Introduction'
import culture from './Culture'
import honor from './Honor'

export default {
    components:{
        welcome,navi,introduction,culture,honor
    },
    methods : {
       
    },
    data(){
        return{
           
        };
    },
    mounted :function(){
        
    }

}
</script>

<style>
 
</style>