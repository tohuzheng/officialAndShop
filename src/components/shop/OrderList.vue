<template>
<div>
  <div>
      <div class="search-div">
        <el-input
            placeholder="请输入订单号"
            prefix-icon="el-icon-search"
            v-model="orderId">
        </el-input>
      </div>
      <div class="search-button">
          <el-button type="primary">查询</el-button>
      </div>
      <div class="more-search-condition">
           <el-button type="text" style="color:black;">
               更多筛选条件
               <span class="el-icon-arrow-down"></span>
            </el-button>
      </div>
  </div>
  <div style="height:100px;"></div> <!--占空地方-->
  <div>
    <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
    </div>
  </div>
</div>
</template>

<script>
/**
 * 订单页的列表组件
 */
export default {
    components: {},
    data() {
       return {
            orderId: '',
             
       };
    },
    methods: {
       
    },
    created() {

    }
};
</script>

<style scoped>
.search-div{
    width: 300px;
    margin: 10px 0px;
    float: left;
}
.search-button{
    float: left;
    margin: 10px 0px 0px 10px;
}
.search-collapse{
    width: 300px;
    float: left;
}
.more-search-condition{
    margin: 10px 0px 0px 20px;
    float: left;
}
</style>