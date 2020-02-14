<template>
  <div class="one-shop-div">
      <el-row>
        <el-col :span="1">
            <div class="one-shop-checkbox">
                <el-checkbox></el-checkbox>
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
</template>

<script>
/**
 * 购物车页面里的一个商品组件
 */
export default {
    components: {},
    data() {
       return {
           fill:"fill",
           url:require("@/assets/phone.jpg"),
           num:1
       };
    },
    methods: {
        handleChange:function(){

        }
    },
    created() {

    }
};
</script>

<style scoped>
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