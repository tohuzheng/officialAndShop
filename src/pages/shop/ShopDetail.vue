<template>
  <div class="max-div">
    <!-- 商品id：{{shopId}} -->
    <div style="height:100px; padding-top:50px;">
      <span class="logo-word">企业产品在线系统欢迎你</span>
    </div>
    <el-divider></el-divider>
    <div>
      <div class="shop-img-div">
        <img src="../../assets/phone.jpg" width="420px" height="420px"/>
      </div>
      <div class="shop-info-div">
          <div class="title-div">
            2020春季新款QUEST 2男鞋运动飞线运动低帮耐磨跑步鞋
          </div>

          <div class="price-div">
            <div>
                <el-tag type="danger" style="margin:5px 10px;font-size:14px;">折后价</el-tag>
                <span style="font-size:24px;">￥</span>
                <span style="font-size:38px;">876</span>
            </div>
            <div style="font-size:16px;color:#666666;padding:10px;">
                <span>原价￥999</span> <span>6.9折</span>
            </div>
          </div>
          
          <div style="margin:10px 0px;">
              <table  width="100%">
                <tr>
                  <td style="font-size:12px;color:#999;">尺码</td>
                  <td align="left">
                    <el-radio-group v-model="chima" size="mini">
                      <el-radio-button label="L"></el-radio-button>
                      <el-radio-button label="XXL"></el-radio-button>
                      <el-radio-button label="XL"></el-radio-button>
                      <el-radio-button label="XXXL"></el-radio-button>
                    </el-radio-group>
                  </td>
                </tr>
                <tr><td colspan="2"><div style="height:20px;"></div></td></tr>
                <tr>
                   <td style="font-size:12px;color:#999;">数量</td>
                   <td align="left">
                      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" size="mini"></el-input-number>
                   </td>
                </tr>
                <tr><td colspan="2"><div style="height:20px;"></div></td></tr>
                <tr>
                  <td><el-button type="primary">加入购物车</el-button></td>
                  <td><el-button type="info">加入对比</el-button></td>
                </tr>
              </table>
          </div>
      </div>
    </div>
    <div class="tail-div">
      <div style="font-size:18px;padding:20px 50px;">
         <span>100% 正品保证 七年保修</span> <span style="margin-left:100px;">天天有优惠</span>
         <span style="margin-left:300px;">客服</span> 
         <span> <el-link target="_blank" @click="toKeFu">在线客服</el-link> </span>
      </div>
    </div>
  </div>
</template>

<script>
/**
  商品详细业，点击某个商品跳转的页面
 */
export default {
    components: {},
    data() {
       return {
         shopId: 0,
         chima: 'L',
         num: 1, //购买商品数量
       };
    },
    methods: {
        getParam:function(){  // 获取参数商品id
            this.shopId = this.$route.params.shopId;
        },
        handleChange:function(value) { // 点击加减号就会触发该函数
          console.log(value);
        },
        toKeFu:function(){  // 跳转页面，打开新窗口

          let routeData = this.$router.resolve({
            path: "/customerService",
            query: { }
          });
          window.open(routeData.href, '_blank');

        }
    },
    created() {
        this.getParam();
    }
};
</script>

<style scoped>
.max-div{
  width:80%;
  margin: 0px auto;
}
.shop-info-div{
 float: right;
 width: 420px;
 height: 420px;
}
.shop-img-div{
  float: left;
}
.title-div{
  font-size: 16px;
  font-weight: 700px;
}
.price-div{
  height: 100px;
  text-align: left;
  background-color: #e7e7e7;
}
.tail-div{
  margin-top:450px;
  border-top: #e7e7e7 2px dashed;
  border-bottom: #e7e7e7 2px dashed;
  margin-bottom: 100px;
}
.logo-word{
  font-size: 36px;
}
</style>