<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(urlAddress,index) in imgUrl" :key="index">
      <img :src="urlAddress"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
//轮播图组件
export default {
    name:"Carousel",
    data(){
        return{
            imgUrl:[
                require("@/assets/logo.png"),
                require("@/assets/timg.jpg"),
                require("@/assets/timg2.jpg"),
                require("@/assets/timg3.jpg")
            ]
        };
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>