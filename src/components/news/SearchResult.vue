<template>
  <div class="topics">
      <div style="border-bottom:#999999 dashed 1px;padding:20px 0px;">
        <h1>标题关键字："{{searchKey}}"搜索结果如下</h1>
      </div>

      <div style="margin:10px anto;" v-for="(item,index) in data" :key="index">
        <div class="topics-list">
            <el-row>
                <el-col :span="8">
                    <div>
                        <img :src="item.imgUrl"/>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div>
                        <el-link href="https://element.eleme.io">
                        <h3>湖北省红十字会3名厅级干部被问责 副会长张钦被免</h3>
                        </el-link> 
                        <div>
                            <div align="left">
                                <span class="item-span1">
                                    <label style="font-size:12px">发布时间：2019-12-12 08:00:00</label>
                                </span>
                                <span class="item-span2">
                                    <label style="font-size:12px">阅读量：399</label>
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
      <div style="margin:50px auto;">
          <label>新媒体介绍投资者关系 Investor Relations广告服务诚征英才保护隐私权免责条款意见反馈</label>
      </div>
  </div>
</template>

<script>
export default {
    components: {},
    data() {
       return {
           data:[
               {
                   title:"这是一个新闻标题",
                   imgUrl:require("@/assets/news.jpg"),
                   readNumber:300,
                   date:"2019-12-11 09:00:00",
                   id:12
               }, {
                   title:"这是一个新闻标题",
                   imgUrl:require("@/assets/news.jpg"),
                   readNumber:300,
                   date:"2019-12-11 09:00:00",
                   id:12
               }, {
                   title:"这是一个新闻标题",
                   imgUrl:require("@/assets/news.jpg"),
                   readNumber:300,
                   date:"2019-12-11 09:00:00",
                   id:12
               }, {
                   title:"这是一个新闻标题",
                   imgUrl:require("@/assets/news.jpg"),
                   readNumber:300,
                   date:"2019-12-11 09:00:00",
                   id:12
               }, {
                   title:"这是一个新闻标题",
                   imgUrl:require("@/assets/news.jpg"),
                   readNumber:300,
                   date:"2019-12-11 09:00:00",
                   id:12
               }
           ],
           searchKey:''
       };
    },
    methods: {
        getDate:function(){
            let data=this.$route.query.key;
            this.searchKey=data;
        },
        moreNews:function(){
            alert("更多");
        }
    },
    created() {
        this.getDate();
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