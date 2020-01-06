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
      <el-submenu index="2">
        <template slot="title">登录名</template>
        <el-menu-item index="2-1">个人信息</el-menu-item>
        <el-menu-item index="2-2">修改密码</el-menu-item>
        <el-menu-item index="2-3">我的消息</el-menu-item>
        <el-menu-item index="2-4">注销</el-menu-item>
        <el-submenu index="2-5">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4">注册</el-menu-item>
      <el-menu-item index="3">我的收藏</el-menu-item>
      <el-menu-item index="4">我的购物车</el-menu-item>
      <el-menu-item index="5">我的足迹</el-menu-item>
      <el-menu-item index="6">我的订单</el-menu-item>
      <el-menu-item index="7">参数对比</el-menu-item>
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
    }
};
</script>
  
<style>
  .el-header {
        padding : 0px;
  }
</style>