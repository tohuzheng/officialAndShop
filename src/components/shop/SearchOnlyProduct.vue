<template>
  <div>
      <div class="tishi">
          查询你的产品是否是我司正规产品
      </div>

      <div class="search">
           <el-input v-model="productID" placeholder="请输入产品编码" style="width:500px;"></el-input>
           <el-button type="primary" round @click="query">查询</el-button>
      </div>
  </div>
</template>

<script>
export default {
    
    data() {
       return {
            productID:""
       };
    },
    methods: {
        query:function(){
            let productId=this.productID;
            this.$router.push({path:'/searchOnlyCodeResult',query:{onlyCode:productId}});
        },
    }
};
</script>

<style scoped>
.search{
    margin: 50px auto;
    text-align: center;
}

.tishi{
    margin: 100px auto;
    font-size: 42px;
    font-weight: 200;
    text-align: center;
}
</style>