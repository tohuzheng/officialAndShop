<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="3" @click="officialIdex">了解企业</el-menu-item>
      <el-menu-item index="5">我的收藏</el-menu-item>
      <el-menu-item index="6" @click="toBuyCar">我的购物车</el-menu-item>
      <el-menu-item index="8">我的订单</el-menu-item>
      <el-menu-item index="9">参数对比</el-menu-item>
      <el-menu-item index="10"><div style="width:450px;"></div></el-menu-item>
      <el-menu-item index="4" @click="toRegister">注册</el-menu-item>
      <el-submenu index="2">
        <template slot="title">请登录</template>
        <el-menu-item index="2-1">个人信息</el-menu-item>
        <el-menu-item index="2-2">修改密码</el-menu-item>
        <el-menu-item index="2-3">我的消息</el-menu-item>
        <el-menu-item index="2-4">我的足迹</el-menu-item>
        <el-menu-item index="2-5">注销</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
//首页导航栏组件
export default {
    name:"nave",
    data(){
        return{
           
        };
    },
    methods:{
      toRegister:function(){
        this.$router.push("/register");
      },
      officialIdex:function(){
        this.$router.push("/official");
      },
      toBuyCar:function(){
        this.$router.push("/buycar");
      }
    }
};
</script>
  
<style scope>
  .el-header {
        padding : 0px;
  }
</style>