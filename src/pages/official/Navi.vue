<template>
    <div>
        <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item index="1">企业产品在线展示销售平台</el-menu-item>
            <el-submenu index="4">
                <template slot="title">企业发展</template>
                <el-menu-item index="4-1">企业简介</el-menu-item>
                <el-menu-item index="4-2">企业文化</el-menu-item>
                <el-menu-item index="4-3">企业荣誉</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">企业产品</el-menu-item>
            <el-submenu index="2">
                <template slot="title">新闻中心</template>
                <el-menu-item index="2-1">行业动态</el-menu-item>
                <el-menu-item index="2-2">热点资讯</el-menu-item>
                <el-menu-item index="2-3">热点话题</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">防伪查询</el-menu-item>
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
     
    }
}
</script>

<style>

</style>