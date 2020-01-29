<template>
    <el-carousel direction="vertical" :autoplay="false" height="580px">
    <el-carousel-item v-for="item in 3" :key="item">
      <welcome/>
    </el-carousel-item>
    </el-carousel>
</template>

<script>
import welcome from './Welcome.vue'
export default {
    components:{
        welcome
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