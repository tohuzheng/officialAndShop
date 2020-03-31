<template>
  <div>
      <div class="title"> 
        <h1>{{onlyCode}}查询结果</h1>
      </div>
      <div style="text-align:center;padding-bottom:50px;" v-if="result">
        <el-card class="box-card card-div-style" >
           <div style="padding:8px 0px;">产品名称：{{result.name}}</div>
           <div style="padding:8px 0px;">产品品类：{{result.productClassName}}</div>
           <div style="padding:8px 0px;">产品重量：{{result.weight}}</div>
           <div style="padding:8px 0px;">产品规格：{{result.productSize}}</div>
           <div><img :src="result.imgUrl" width="200px" height="200px" /></div>
           <div style="padding:8px 0px;">产地：{{result.originPlace}}</div>
           <div style="padding:8px 0px;">防伪编码：{{result.uuid}}</div>
           <div style="padding:8px 0px;">生产日期：{{result.manufactureDate}}</div>
        </el-card>
      </div>
      <div style="text-align:center;padding:10px 0px 50px 0px;" v-if="!result">
        <img src="../../assets/blank.jpg"/>
      </div>
  </div>
</template>

<script>
import { searchOnlyCodeApi } from '@/server/shop.js'
export default {
    
    data() {
       return {
           onlyCode:"",
           result:""
       };
    },
    methods: {
      queryCode(){
        searchOnlyCodeApi({uuid:this.onlyCode}).then((res)=>{
          console.log(res)
            this.result = res.data;
        });
      }
    },
    created() {
       this.onlyCode = this.$route.query.onlyCode;
       this.queryCode();
    }
};
</script>

<style scoped>
.title{
  text-align: center;
}
.card-div-style{
   width:450px;
   margin:0px auto;
   text-align:left;
   padding-left: 20px;
}
</style>