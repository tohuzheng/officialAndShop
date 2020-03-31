<template>
  <div class="topics">
      <!--最热的新闻-->
      <div style="border-bottom:#999999 dashed 1px;padding:20px 0px;">
        <div v-for="(item,index) in maxHotThree" :key="index" style="margin:5px auto;">
            <el-link type="info" style="font-size:22px;color:#222;" v-if="index == 0" @click="goDetail(item.id)">{{item.title}}</el-link>
            <el-link type="info" style="color:#222;font-size:16px;" v-else @click="goDetail(item.id)">{{item.title}}</el-link>
        </div>
      </div>
      <!--普通新闻-->
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
 * 行业动态页面组件 
 */
import { queryNewsPageByType, queryMaxHotThreeApi } from '@/server/shop.js'
export default {
    components: {},
    data() {
       return {
           query:{
               size:10,
               current:1,
               newsType:1
           },
           list:[],
           maxHotThree:[],
           
       };
    },
    methods: {
        moreNews:function(){
            this.query.current = this.query.current+1;
            let that = this;
            queryNewsPageByType(this.query).then((res)=>{
                if(res.data.records.length == 0){
                    this.$message.success("到底啦！没有更多啦！");
                }
                res.data.records.forEach((item)=>{
                    that.list.push(item);
                });
            });
        },
        queryNewsPage(){
            queryNewsPageByType(this.query).then((res)=>{
                this.list = res.data.records;
            });
        },
        goDetail(key){
            this.$router.push({name:"NewsDetial",params:{id:key}});
        },
        queryMaxHot(){
            queryMaxHotThreeApi({newsType:1}).then((res)=>{
                this.maxHotThree = res.data;
            });
        }
    },
    created() {
        this.queryMaxHot();
        this.queryNewsPage();
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