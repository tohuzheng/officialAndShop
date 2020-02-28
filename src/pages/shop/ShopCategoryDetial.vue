<template>
  <div>
     <div class="lun-bo-tu-div">
        <carousel/>
     </div> 
     <el-divider></el-divider>
     <div class="data-body-div">
          <!--筛选条件，导航栏-->
          <div class="condition-div">
              <el-row>
                <el-col :span="2" style="border-right: 1px solid #dfdfdf;">
                  <div class="navi-item">
                    <el-link>综合</el-link>
                  </div>
                </el-col>
                <el-col :span="2" style="border-right: 1px solid #dfdfdf;">
                  <div class="navi-item">
                    <el-link>销量</el-link>
                  </div>
                </el-col>
                <el-col :span="2" style="border-right: 1px solid #dfdfdf;">
                  <div class="navi-item">
                    <el-link>价格</el-link>
                  </div>
                </el-col>
                <el-col :span="2" style="border-right: 1px solid #dfdfdf;">
                  <div class="navi-item">
                    <el-link>折扣</el-link>
                  </div>
                </el-col>
                <el-col :span="12" style="border-right: 1px solid #dfdfdf;">
                  <div class="navi-item">
                    <el-link>价格区间</el-link>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="navi-item" style="border-right:0px;">
                    <p style="font-size:14px;color:#606266;">共2980件产品</p>
                  </div>
                </el-col>
              </el-row>
          </div>

          <!--商品展示区-->
          <div class="data-view-div">
              <el-row>
                <el-col :span="6" v-for="i in 17" :key="i">
                    <div class="item-shop-div">
                      <div style="width:222px;height:279px;">
                        <img src="../../assets/yifu.jpg"/>
                      </div>
                      <div style="width:222px;">
                        <span style="font-size:16px;color:#F10180;">￥</span><span style="font-size:24px;color:#F10180;padding:5px;">199.00</span>
                        <span style="font-size:15px;color:#999999;padding:5px;">1.7折</span>
                      </div>
                      <div style="width:222px;">
                        <el-link type="info" style="font-size:12px;">森马 | 春季新款通勤风衣中长款撞色字母印花织带拼接宽松外套男士</el-link>
                      </div>
                    </div>
                </el-col>
              </el-row>
          </div>
          <!--商品展示结束-->
     </div>
     <div style="text-align:center;margin-bottom:50px;">
       <el-link>>>>加载更多</el-link>
     </div>
     <!--回到最顶部-->
     <el-backtop></el-backtop>
  </div>
</template>

<script>
/**
 点击某个品类后跳转的品类商品详细页
 */
import carousel from '@/components/shop/carousel.vue'
import {httpPost} from '@/utils/httpUtils.js'
export default {
    components: {carousel},
    data() {
       return {
         category:'',  // 商品品类
         dialogImageUrl: '', // 文件地址
         dialogVisible: false
       };
    },
    methods: {
        getParam:function(){ // 获取路由参数
          this.category = this.$route.params.type;
          console.log("品类："+this.category);
        },
    },
    created() {
      this.getParam();
    }
};
</script>

<style scoped>
.lun-bo-tu-div{
  width: 750px;
  margin: 10px auto;
}
.data-body-div{
  width: 80%;
  margin: 0px auto;
 
}
.condition-div{
  width: 100%;
  height: 46px;
  background-color: #F5F5F5;
  border: 1px solid #dfdfdf;
}
.data-view-div{
  width: 100%;
  margin: 50px 10px 10px 10px;
}
.navi-item{
  
  height: 45px;
  text-align: center;
  padding: 0px 0px 0px 0px;
}
.el-link{
  padding:13px;
}
img{  
    width: auto;  
    height: auto;  
    max-width: 220px;  
    max-height: 296px;     
} 
.item-shop-div{
    margin-right:12px;
    padding:5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}
</style>