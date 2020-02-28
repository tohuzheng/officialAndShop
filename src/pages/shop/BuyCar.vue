<template>
  <div>
    
      <div class="buycar-logo-div">
          <img src="@/assets/buycar.png" width="281" height="65"/>
      </div>
      <el-divider></el-divider>
      <div class="buy-car-opreation-div">
          <el-row>
            <el-col :span="4">
                <div><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox></div>
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
      <div>
           <el-checkbox-group v-model="checkedIds" @change="handleCheckedChange">
               <div v-for="(item,index) in shopData" :key="index" class="one-shop-div">
                   <el-row>
                        <el-col :span="1">
                            <div class="item-checkbox">
                                <el-checkbox :label="item.id">{{""}}</el-checkbox>
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="item-image">
                                <img
                                style="width: 100px; height: 100px"
                                :src="item.imgUrl"/>
                            </div>   
                        </el-col>

                        <el-col :span="4">
                            <div class="item-title">
                                <el-link>{{item.title}}</el-link>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="item-size">
                                {{item.size}}
                            </div>
                        </el-col>
                        
                        <el-col :span="3">
                            <div class="item-price">
                                ￥{{formatFloat(item.price)}}
                            </div>
                        </el-col>

                        <el-col :span="4">
                            <div class="item-number">
                                <el-input-number size="small" v-model="item.number" :min="1" :max="10" label="产品数量"></el-input-number>
                            </div>
                        </el-col>

                        <el-col :span="3">
                            <div class="item-sum-money">
                                <label>￥{{formatFloat(item.sumMoney)}}</label>
                            </div>
                        </el-col>

                        <el-col :span="2">
                            <div class="del-shop">
                                <el-link type="info">删除</el-link>
                            </div>
                        </el-col>
                    </el-row>
               </div>   
           </el-checkbox-group>
      </div>
      <!--单个商品显示框结束-->

      <div style="height:50px;"></div>

      <!--结算栏-->
      <div class="buy-car-tail-div">
        <div>
            <el-row>
                <el-col :span="2">
                    <div style="margin:5px 0px;padding:5px">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
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
                        <el-button type="primary" @click="payMoney">结算</el-button>
                    </div>
                </el-col>
            </el-row>  
        </div>
      </div>
      <div style="height:50px;"></div>
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
           shopData: [
               {
                   id: 1,
                   imgUrl: require("@/assets/phone.jpg"),
                   title: "安踏男针织外套2020春季新款官网旗舰宽松休闲运动卫衣连帽外套男",
                   size: "黑色：XXL",
                   price: 198.00,
                   number: 1,
                   sumMoney: 198.00
               },
               {
                   id: 2,
                   imgUrl: require("@/assets/phone.jpg"),
                   title: "安踏男针织外套2020春季新款官网旗舰宽松休闲运动卫衣连帽外套男",
                   size: "黑色：XXL",
                   price: 198.00,
                   number: 1,
                   sumMoney: 198.00
               },
               {
                   id: 3,
                   imgUrl: require("@/assets/phone.jpg"),
                   title: "安踏男针织外套2020春季新款官网旗舰宽松休闲运动卫衣连帽外套男",
                   size: "黑色：XXL",
                   price: 198.00,
                   number: 1,
                   sumMoney: 198.00
               },
               {
                   id: 4,
                   imgUrl: require("@/assets/phone.jpg"),
                   title: "安踏男针织外套2020春季新款官网旗舰宽松休闲运动卫衣连帽外套男",
                   size: "黑色：XXL",
                   price: 198.00,
                   number: 1,
                   sumMoney: 198.00
               },
               {
                   id: 5,
                   imgUrl: require("@/assets/phone.jpg"),
                   title: "安踏男针织外套2020春季新款官网旗舰宽松休闲运动卫衣连帽外套男",
                   size: "黑色：XXL",
                   price: 198.00,
                   number: 1,
                   sumMoney: 198.00
               },
               {
                   id: 6,
                   imgUrl: require("@/assets/phone.jpg"),
                   title: "安踏男针织外套2020春季新款官网旗舰宽松休闲运动卫衣连帽外套男",
                   size: "黑色：XXL",
                   price: 198.01,
                   number: 1,
                   sumMoney: 198.00
               },
               {
                   id: 7,
                   imgUrl: require("@/assets/phone.jpg"),
                   title: "安踏男针织外套2020春季新款官网旗舰宽松休闲运动卫衣连帽外套男",
                   size: "黑色：XXL",
                   price: 198.00,
                   number: 1,
                   sumMoney: 198.00
               }
           ], 
           checkAll: false,
           checkedIds: [],
           isIndeterminate: false
       };
    },
    methods: {
      payMoney:function(){
          console.log(this.checkedIds)
      },
      handleCheckAllChange:function(value){ //是否点击全选
          let data=[1,2,3,4,5,6,7];
          this.checkedIds = value ? data:[];
          this.isIndeterminate = false;
      },
      handleCheckedChange:function(val){ //检查每一次单个选择是否最后全部都勾选了
          if(val.length == this.shopData.length){
              this.checkAll = true;
              this.isIndeterminate = false;  
          }else if(val.length == 0){
              this.isIndeterminate = false;
              this.checkAll = false;
          }else{
              this.isIndeterminate = true;
              this.checkAll = false;
          }
      },
      formatFloat:function(val){ //格式化显示小数
        function isInteger(obj) { //判断是否是整数
            return obj%1 === 0
        }

        if(isInteger(3)){ //是整数则末尾加.00
            return val+".00";
        }else{
            return val;
        }
      }
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
  padding-top: 20px; 
 
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
    .item-checkbox{
        padding: 10px;
        
    }
    .item-image{
         margin-top: 10px;
        
    }
    .item-title{
         overflow:hidden; /* 溢出隐藏 */
         font-size: 12px;
        color: #3c3c3c;
        padding: 20px 0px;
    }
    .item-price{
        margin-top: 20px;
        font-size: 12px;
        font-weight: 700;
        padding: 0px 10px;
    }
    .item-size{
        margin-top: 20px;
        padding: 0px 20px;
        font-size: 12px;
        font-weight: 500;
        color: #9c9c9c; 
        overflow:hidden; /* 溢出隐藏 */
    }
    .item-number{
        margin-top: 20px;
        
    }
    .item-sum-money{
        margin-top: 20px;
        font-size: 12px;
        font-weight: 700;
        color: #FF4400;
        padding: 0px 10px;
    }
    .del-shop{
        margin: 20px 0px;
    }
</style>