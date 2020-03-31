<template>
  <div class="topics">
      <div style="border-bottom:#999999 dashed 1px;padding:20px 0px;">
        <h1>标题关键字："{{searchKey}}"搜索结果如下</h1>
      </div>

      <div style="margin:10px anto;" v-for="(item,index) in list" :key="index">
        <div class="topics-list">
            <el-row>
                <el-col :span="8">
                    <div>
                        <img :src="item.imgUrl" width="150px" height="100px"/>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div>
                        <div style="text-align:left;">
                            <el-link @click="goDetail(item.id)">
                            <h3>{{item.title}}</h3>
                            </el-link>
                        </div>
                         
                        <div>
                            <div align="left">
                                <span class="item-span1">
                                    <label style="font-size:12px">发布时间：{{item.createDate}}</label>
                                </span>
                                <span class="item-span2">
                                    <label style="font-size:12px">阅读量：{{item.readNumber}}</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
      </div>

      <div style="height:110px">
          <div class="more">
            <el-link type="info" @click="moreNews">>>>查看更多</el-link>
          </div>
      </div>

      <el-divider></el-divider>
      <div style="margin:30px auto;">
          <label>@Coply 2010-2020 企业产品在线展示销售平台科技有限公司</label>
      </div>
  </div>
</template>

<script>
/**
 * 新闻搜索展示组件
 */
import { searchByTitleLikeApi } from '@/server/shop.js'

export default {
    components: {},
    data() {
       return {
           searchKey:'',
           list:[],
           query:{
               size:10,
               current:1,
               title:''
           },
       };
    },
    methods: {
        moreNews:function(){
            this.query.current = this.query.current+1;
            let that = this;
            searchByTitleLikeApi(this.query).then((res)=>{
                if(res.data.records.length == 0){
                    this.$message.success("到底啦！没有更多啦！");
                }
                res.data.records.forEach((item)=>{
                    that.list.push(item);
                });
            });
        },
        searchTilePage(){
            searchByTitleLikeApi({title:this.searchKey}).then((res)=>{
                this.list = res.data.records;
            });
        }
    },
    created() {
        this.searchKey = this.$route.query.key;
        this.query.title = this.searchKey;
        this.searchTilePage();
    }
};
</script>

<style scoped>
    .topics{
        text-align: center;
    }
    .topics-list{
        width: 800px;
        text-align: center;
        margin: 0px auto;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: #e7e7e7 1px solid;
    }
    .item-span{
        margin-left:20px ;
    }
    .item-span2{
        margin-left:230px ;
    }
    .more{
        margin-top:30px;
        color: #999999;
    }
</style>