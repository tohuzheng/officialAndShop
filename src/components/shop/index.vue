<template>
    <el-container>
      <el-header>
        <navigation></navigation>
      </el-header>
      
      <el-main>
        <el-row>
          <el-col :span="4">
              <leftNavi></leftNavi>
          </el-col>

          <el-col :span="16"><carousel></carousel></el-col>
          <el-col :span="4"></el-col>
        </el-row>

        <newShop></newShop>
        <recommend></recommend>

      </el-main>

      <el-footer style="height: 100%;">
          <tail></tail>
      </el-footer>

    </el-container>
</template>

<script>
//商城首页布局组件
import navigation from '@/components/shop/navigation'
import carousel from '@/components/shop/carousel'
import tail from '@/components/shop/tail'
import leftNavi from '@/components/shop/leftNavi'
import recommend from '@/components/shop/recommend'
import newShop from '@/components/shop/newShop'

export default {
    name:"storeIndex",
    data(){
       return {
          msg:"这是一个测试",
          items:["这是测试1","这是测试2","这是测试3","这是测试4","这是测试5"],
          emp:{"name":"huzheng","age":22,"sex":"男"}
       } 
    },
    components:{navigation,carousel,tail,leftNavi,newShop,recommend}
    
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