<template> 
    <div style="margin-bottom:50px;">
      <div style="height:50px;"></div>
      <el-row>
        <el-col :span="4">
            <leftNavi></leftNavi>
        </el-col>
        <el-col :span="16"><carousel></carousel></el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <div style="height:50px;"></div>
      <newShop></newShop>
      <recommend></recommend>
    </div>
</template>

<script>
//商城首页中间内容核心组件
import carousel from '@/components/shop/carousel'  //轮播图
import leftNavi from '@/components/shop/leftNavi'   //左边导航
import recommend from '@/components/shop/recommend'  //推荐商品
import newShop from '@/components/shop/newShop'   //新品上新

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