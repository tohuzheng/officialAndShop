<template>
  <div>
    
      <div class="buycar-logo-div">
          <img src="@/assets/buycar.png" width="281" height="65"/>
      </div>
      <el-divider></el-divider>
      <div class="buy-car-opreation-div">
          <el-row>
            <el-col :span="4">
                <div><el-checkbox>全选</el-checkbox></div>
            </el-col>
            <el-col :span="8">
                <div>商品信息</div>
            </el-col>
            <el-col :span="3">
                <div style="padding-left:20px;">单价</div>
            </el-col>
            <el-col :span="4">
                <div style="padding-left:40px;">数量</div>
            </el-col>
            <el-col :span="3">
                <div style="padding-left:20px;">金额</div>
            </el-col>
            <el-col :span="2">
                <div>操作</div>
            </el-col>
          </el-row>
      </div>

      <oneShop v-for="i in 5" :key="i"/>
      
      <div class="buy-car-tail-div">
        <div>
            <el-row>
                <el-col :span="2">
                    <div style="margin:5px 0px;padding:5px">
                        <el-checkbox>全选</el-checkbox>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div style="margin:5px 0px;padding:5px">
                        <el-link>删除</el-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div style="margin:5px 0px;padding:5px">
                        <el-link>移入收藏夹</el-link>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div style="padding:5px">
                        <span class="selected-span1">已选商品</span>
                        <span class="selected-span2">6</span>
                        <span class="selected-span1">件</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div style="margin:5px 0px;">
                        <span class="heji-span">合计（不含运费）：</span><span class="sum-money">￥1892.00</span>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div style="padding:5px">
                        <el-button type="primary">结算</el-button>
                    </div>
                </el-col>
            </el-row>
             
        </div>
      </div>
  </div>
</template>

<script>
/**
 * 购物车页面级组件
 */
import oneShop from '@/components/shop/OneBuyCarShop.vue'
export default {
    components: {oneShop},
    data() {
       return {
           
       };
    },
    methods: {

    },
    created() {

    }
};
</script>

<style scoped>
.buycar-logo-div{
  text-align: left;
  width: 80%;
  margin: 0px auto;
  padding-bottom: 10px;
 
}
.buy-car-opreation-div{
  width: 80%;
  margin: 0px auto;
  height: 40px;
 
}
.buy-car-tail-div{
  width: 81%;
  margin: 0px auto;
  background-color: #e5e5e5;
  height: 50px;
}
.tail-select-shop{
    padding: 0px 20px;
    margin: 10px 0px;
}

.heji-span{
    font-size: 12px;
}
.sum-money{
    color: #FF4400;
    font-size: 22px;
    font-weight: 700;
    padding: 3px;
}
.selected-span1{
    font-size: 12px;
}
.selected-span2{
    font-size: 22px;
    font-weight: 700;
    color: #FF4400;
}
.el-button--primary {
    color: #FFF;
    background-color: #FF4400;
    border-color: #FF4400;
}
</style>