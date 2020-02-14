<template> 
    <div>
      <el-row>
        <el-col :span="4">
            <leftNavi></leftNavi>
        </el-col>

        <el-col :span="16"><carousel></carousel></el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <newShop></newShop>
      <recommend></recommend>
    </div>
</template>

<script>
//商城首页中间内容核心组件
import carousel from '@/components/shop/carousel'
import leftNavi from '@/components/shop/leftNavi'
import recommend from '@/components/shop/recommend'
import newShop from '@/components/shop/newShop'

export default {
    name:"storeIndex",
    data(){
       return {

       } 
    },
    components:{carousel,leftNavi,newShop,recommend}
    
}
</script>

<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

 


</style>