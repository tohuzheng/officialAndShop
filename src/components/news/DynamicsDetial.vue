<template>
  <div align="center">
      <div class="top-title">
          <h1>企业产品在线展示平台-{{type}}正文</h1>
      </div>
      
      <div>
        <div>
          <h1>{{detailData.title}}</h1>
        </div>
       
        <div class="news-context" v-html="detailData.detailHtml">
        </div>
        <!-- <div v-text="detailData.detailMarkdown"></div> -->
        <el-divider></el-divider>
        <div style="margin:30px auto;">
          <label>@Coply 2010-2020 企业产品在线展示销售平台科技有限公司</label>
        </div>
      </div>
  </div>
</template>

<script>
/**
 * 这是新闻详细页组件
 */
import { queryNewsPageByType, readNumberCountApi } from '@/server/shop.js'

export default {
    data(){
      return {
        type:"热点话题",
        detailData:''
      };
    },
    methods:{
      queryDetail(key){
        queryNewsPageByType({id:key}).then((res)=>{
            this.detailData = res.data.records[0];
        });
      },
      addReadNumber(id){
        //统计阅读量
        readNumberCountApi({id:id});
      }
    },
    created(){
        this.queryDetail(this.$route.params.id);
        this.addReadNumber(this.$route.params.id);
    }
    
};
</script>

<style scoped>
  .top-title{
    margin: 30px auto 0px auto;
    border-bottom: 1px solid #ddd;
    
  }
  .news-title{
    border-bottom: 1px solid #ddd;
    width: 640px;
  }
  .news-context{
    width: 640px;
    min-height: 300px;
    text-align: left;
  }
</style>