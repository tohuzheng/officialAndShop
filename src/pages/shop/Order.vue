<template>
  <div class="tabs-div">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="所有订单" name="first">
            <orderList status = '1'/>
        </el-tab-pane> 

        <el-tab-pane label="待发货" name="second">
            <orderList  status = '2'/>
        </el-tab-pane>

        <el-tab-pane label="待收货" name="third">
            <orderList  status = '3'/>
        </el-tab-pane>

        <el-tab-pane label="待付款" name="fourth">
            <orderList  status = '4'/>
        </el-tab-pane>

        <el-tab-pane label="已完成" name="fiveth">
            <orderList  status = '5'/>
        </el-tab-pane>
    </el-tabs>
    
  </div>
</template>

<script>
/**
 * 订单页面级组件
 */
import orderList from '@/components/shop/OrderList.vue'
export default {
    components: {orderList},
    data() {
       return {
           activeName: 'first',
       };
    },
    methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      }
    },
    created() {

    }
};
</script>

<style scoped>
.tabs-div{
    width: 80%;
    margin: 0px auto;
}
#tab-first{
    color: #FF4400;
    font-size: 13px;
    font-weight: 600;
}
</style>