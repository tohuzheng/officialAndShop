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
                <el-menu-item index="4-1">企业简介</el-menu-item>
                <el-menu-item index="4-2">企业文化</el-menu-item>
                <el-menu-item index="4-3">企业荣誉</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" @click='toShop'>企业产品</el-menu-item>
            <el-menu-item index="6" @click='toNews'>新闻中心</el-menu-item>
            
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
          this.$router.push('/')
      },
      toOfficial:function(){
          this.$router.push('/officialIndex')
      },
      toNews:function(){
          this.$router.push('/news');
      },
      toOnlyProduct:function(){
          this.$router.push('/onlyProduct');
      }
    }
}
</script>

<style>

</style>