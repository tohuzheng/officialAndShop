<template>
 <el-container>
      <el-header>
        <navigation></navigation>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer style="height: 100%;">
          <tail></tail>
      </el-footer>

    </el-container>
</template>

<script>
/**
 * 商城首页框架组件 
 */

import navigation from '@/components/shop/navigation'  //商城顶部导航组件
import tail from '@/components/shop/tail'  //商城底部组件

export default {
    components: {navigation,tail},
    data() {
       return {};
    },
    methods: {

    },
    created() {

    }
};
</script>

<style scoped>
.el-main{
   padding: 0px;
}
</style>