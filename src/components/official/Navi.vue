<template>
    <div>
        <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item index="1" @click="toOfficial">企业产品在线展示销售平台</el-menu-item>
            <el-submenu index="4">
                <template slot="title">企业发展</template>
                <el-menu-item index="4-1" @click="showIntroductionDetails">企业简介</el-menu-item>
                <el-menu-item index="4-2" @click="showCultureDetails">企业文化</el-menu-item>
                <el-menu-item index="4-3" @click="showHonorDetails">企业荣誉</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" @click='toShop'>企业产品</el-menu-item>
            <el-menu-item index="6" @click='toNews'>资讯中心</el-menu-item>
            
            <el-menu-item index="5" @click="toOnlyProduct">防伪查询</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      toShop:function(){
          this.$router.push('/shop')
      },
      toOfficial:function(){
          this.$router.push('/official')
      },
      toNews:function(){
          this.$router.push('/news');
      },
      toOnlyProduct:function(){
          this.$router.push('/onlyProduct');
      },
      showIntroductionDetails:function(){
            var el=document.getElementsByClassName("div-backgroup1")[0];
            console.log(el.offsetTop);
            this.$nextTick(function () {
                window.scrollTo({"behavior":"smooth","top":el.offsetTop});
            })
      },
      showCultureDetails:function(){
            var el=document.getElementsByClassName("div-backgroup3")[0];
            console.log(el.offsetTop);
            this.$nextTick(function () {
                window.scrollTo({"behavior":"smooth","top":el.offsetTop});
            })
      },
      showHonorDetails:function(){
            var el=document.getElementsByClassName("honor-banner")[0];
            console.log(el.offsetTop);
            this.$nextTick(function () {
                window.scrollTo({"behavior":"smooth","top":el.offsetTop});
            })
      }
    }
}
</script>

<style>

</style>