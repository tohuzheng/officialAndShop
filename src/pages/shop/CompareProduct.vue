<template>
  <div>
      <div class="top-div">
          <el-page-header @back="goBack" content="参数对比">
          </el-page-header>
      </div>
      <div style="text-align:left;padding-top:20px;">
          <span class="el-icon-warning"></span> 
          <span>更多详细信息可联系页面底部在线客户咨询</span>
      </div>
      <hr/>
      <!--对比内容开始，表头部分-->
      <div class="test-div">
          <el-row>
            <el-col :span="4">
                <div class="col-item-div">
                    
                    <div style="width:80%;padding:0px 10px;text-align:center;">
                        <h3>对比产品</h3>
                    </div>
                    <div class="word-label">
                        细节对比
                    </div>
                    <div class="word-label">
                       价格对比
                    </div>
                    <div class="word-label">
                        图片对比
                    </div>
                </div>
            </el-col>

            <el-col :span="4" v-for="(item,index) in shopData" :key="index">
                <div class="shop-col-div">
                    <div>
                        <img :src="item.imgUrl" />
                    </div>
                    <div style="padding-left:20px;">
                        <el-link>{{item.name}}</el-link>
                    </div>
                    <div style="padding-left:20px;margin-top:5px;">
                        <el-link>{{item.type}}</el-link>
                    </div>
                </div>
            </el-col>
         
        </el-row>
      </div>
      
      <!--详细数据部分-->
      <div style="margin-bottom:60px;">
        <el-row>
            <el-col :span="4" class="shop-col-div">
                <div v-for="(val,index) in shopParam" :key="index" class="table-tr-div" style="padding:0px 50px;">
                    {{val}}
                </div>
            </el-col>

            <el-col :span="4" v-for="(item,index) in shopData" :key="index" class="shop-col-div">
                <div class="table-tr-div">
                    {{item.name}}
                </div>
                <div class="table-tr-div">
                    {{item.name}}
                </div>
                <div class="table-tr-div">
                    {{item.name}}
                </div>
                <div class="table-tr-div">
                    {{item.name}}
                </div>
                <div class="table-tr-div">
                    {{item.name}}
                </div>
                <div class="table-tr-div">
                    {{item.name}}
                </div>
            </el-col>
           
        </el-row>
      </div>
  </div>
</template>

<script>
/**
 * 产品参数比较页面
 */
 
export default {
    components: {},
    data() {
       return {
            compareHeadFlag:true,
            url:require("@/assets/phone.jpg"),
            shopData: [
                {
                    name: "产品1",
                    className: "生活类",
                    price: 198.00,
                    weight: 18,
                    size: "200x300x200",
                    sellDate: "2020-02-19",
                    imgUrl: require("@/assets/phone.jpg"),
                    title: "宝马汽车",
                    type: "2019款 40 TFSI 豪华致雅版"
                },
                {
                    name: "产品2",
                    className: "生活类2",
                    price: 198.00,
                    weight: 18,
                    size: "200x300x200",
                    sellDate: "2020-02-19",
                    imgUrl: require("@/assets/phone.jpg"),
                    title: "宝马汽车",
                    type: "2019款 40 TFSI 豪华致雅版"
                },
                {
                    name: "产品3",
                    className: "生活类3",
                    price: 198.00,
                    weight: 18,
                    size: "200x300x200",
                    sellDate: "2020-02-19",
                    imgUrl: require("@/assets/phone.jpg"),
                    title: "宝马汽车",
                    type: "2019款 40 TFSI 豪华致雅版"
                },
                {
                    name: "产品4",
                    className: "生活类4",
                    price: 198.00,
                    weight: 18,
                    size: "200x300x200",
                    sellDate: "2020-02-19",
                    imgUrl: require("@/assets/phone.jpg"),
                    title: "宝马汽车",
                    type: "2019款 40 TFSI 豪华致雅版"
                }
            ],
            shopParam:["产品价格","售后政策","产品重量(kg)","产品尺寸(mm)","标准电压","最大公率"]
       };
    },
    methods: {
      goBack:function() {
        this.$router.go(-1);
      }
    },
    created() {
        
    },
    mounted() {
       
    }
};
</script>

<style scoped>
.top-search-input{
    width: 500px;
    float: left;
}
.top-search-button{
    float: left;
}
.top-div{
    background-color: #B3C0D1;
    padding: 10px;
    margin-top: 50px;
}
.test-div{
    background-color: white;
}
.test-div2{
    background-color: white;
    width: 100%;
    position: fixed;
    top: 0px;
}
.col-item-div{
    text-align: center;
    border: #e1e1e1 1px solid;
    height: 180px;
}
.word-label{
    width:80%;
    padding:0px 10px;
    text-align:center;
    font-size: 14px;
    margin: 5px 0px;
}
.shop-col-div{
    border-right: #e1e1e1 1px solid;
    border-top: #e1e1e1 1px solid;
    border-bottom: #e1e1e1 1px solid;
    height:180px;
}
.table-tr-div{
    border-bottom: #e1e1e1 1px solid;
    height: 29px;
}

img{  
    width: auto;  
    height: auto;  
    max-width: 150px;  
    max-height: 100px;     
} 
</style>