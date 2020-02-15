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
      <!--单个商品显示框开始-->
      <div class="one-shop-div" v-for="i in 5" :key="i">
        <el-row>
            <el-col :span="1">
                <div class="one-shop-checkbox">
                    <el-checkbox :lable=1></el-checkbox>
                </div>
            </el-col>

            <el-col :span="3">
                <div class="shop-image">
                    <el-image
                    style="width: 100px; height: 100px"
                    :src="url"
                    :fit="fill">
                    </el-image>
                </div>   
            </el-col>

            <el-col :span="4">
                <div class="title-link">
                    <el-link>安踏男针织外套2020春季新款官网旗舰宽松休闲运动卫衣连帽外套男</el-link>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="shop-size">
                    颜色分类：黑色 尺码：XXL
                </div>
            </el-col>
            
            <el-col :span="3">
                <div class="shop-one-price">
                    ￥198.00
                </div>
            </el-col>

            <el-col :span="4">
                <div class="shop-number">
                    <el-input-number size="small" v-model="num" :min="1" :max="10" label="产品数量"></el-input-number>
                </div>
            </el-col>

            <el-col :span="3">
                <div class="shop-sum-price">
                    <label>￥198.00</label>
                </div>
            </el-col>

            <el-col :span="2">
                <div class="del-shop">
                    <el-link type="info">删除</el-link>
                </div>
            </el-col>
        </el-row>
      </div>
      <!--单个商品显示框结束-->
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
export default {
    components: {},
    data() {
       return {
           fill:"fill", //列表图片展示属性
           url:require("@/assets/phone.jpg"), //列表图片地址
           num:1, //商品数量  
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
/**下面是单个商品展示框的样式 */
    .one-shop-div{
        margin: 10px auto;
        border: #ccc 1px solid;
        width: 988px;
        height: 130px;
    }

    .one-shop-checkbox{
        padding: 5px 10px;
        margin: 10px 0px;
    }
    .shop-image{
        margin: 10px 0px;
    }
    .title-link{
        padding: 15px 0px;
        margin: auto 0px;
    }
    .shop-size{
       font-size:12px;
       padding: 15px 10px;
       color: #9C9C9C;
    }
    .shop-one-price{
        color: #000;
        font-weight: 600;
        padding: 15px;
    }
    .shop-number{
        margin: 15px 0px;
    }
    .shop-sum-price{
        color: #FF4400;
        margin: 15px 0px;
        font-weight: 600;
    }
    .del-shop{
        margin: 15px 0px;
    }
</style>