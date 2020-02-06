<template>
  <div class="topics">
      <div style="border-bottom:#999999 dashed 1px;padding:20px 0px;">
        <el-link type="info" style="font-size:22px;color:#222;">{{notImgNews[0].title}}</el-link>
        <div v-for="(item,index) in notImgNews" :key="index" style="margin:5px auto;">
            <el-link type="info" v-if="index!=0" style="color:#222;font-size:16px;">{{item.title}}</el-link>
        </div>
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
/**
 * 行业动态页面组件
 */
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
           notImgNews:[
               {
                   title:"我们向光前行-行业动态",
                   id:2
               },{
                   title:"正是共担风雨时",
                   id:3
               },{
                   title:"打响疫情防控的人民战争",
                   id:5
               }
           ]
       };
    },
    methods: {
        getDate:function(){
            let data=this.$route.query.id;
            console.log("data:"+data);
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