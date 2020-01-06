<template>
    <el-container>
      <el-header>
        <navigation></navigation>
      </el-header>
      
      <el-main>
          <carousel></carousel>
          <div>
            <br>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
            <div>这是一个商品</div>
          </div>
      </el-main>

      <el-footer>
          <tail></tail>
      </el-footer>

    </el-container>
</template>

<script>
//商城首页布局组件
import navigation from '@/components/shop/navigation'
import carousel from '@/components/shop/carousel'
import tail from '@/components/shop/tail'

export default {
    name:"storeIndex",
    data(){
       return {
          msg:"这是一个测试",
          items:["这是测试1","这是测试2","这是测试3","这是测试4","这是测试5"],
          emp:{"name":"huzheng","age":22,"sex":"男"}
       } 
    },
    components:{navigation,carousel,tail}
    
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

  element.style {

    height: 100%;
    
  }

</style>