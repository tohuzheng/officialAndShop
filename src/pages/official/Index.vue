<template>
    <div>
        <navi/>
        <welcome/>
        <introduction/>
        <culture/>
        <honor/>
        <div class="set-div-size">
            <div class="honor-index-div1">
                Git in touch
            </div>
            <div class="honor-index-div2">
                Serch in index
            </div>
        </div>
        <div align='center' style="margin-top:15px">
            Copyright©2018企业产品科技集团股份有限公司<br>
            版权所有京ICP证140608号.京ICP备12041691号-2.京公网安备11010502026582<br>
            互联网药品信息服务资格证书 （京）-非经营性-2017-0039<br>
        </div>
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
 .set-div-size{
     width: 100%;
     height: 400px;
 }
 .honor-index-div1{
     float: left;
     width: 50%;
 }
.honor-index-div2{
     float: right;
     width: 50%;
 }
</style>