<template>
    <div class="div-backgroup5 honor-banner">
        <div align='center'>
            <br><br><br><br>
            <span id='span1'>企业荣誉</span>
            <div style="margin-top:30px">
                <span>
                    连续7年是武汉市，纳税最多的人。多商户B2B2C平台以商家入驻模式为主，商家拥有独立管理中心，自行管理店铺内容及商品信息，对销售的商品进行上下架；买家通过平               
                    台注册，即可进行商品购买，便捷购物，在会员中心查询订单，管理自己的信息，并时刻关注自己的购买动态。
                </span>
            </div>
        </div>
        <div class="honor-div1">

        </div>
        <div class="honor-div2">
            <el-row>
                <el-col :span="6">
                    <div class="honor-div-item-size">
                        <div>年度消费电子领先品牌十强</div>
                        <div class="honor-img-mg">
                            <img src='@/assets/honor-item1.jpg' class="honor-img-size"/>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="honor-div-item-size">
                        <div> 2019年电子信息行业十大公益项目—京东方“照亮成长路”公益项目</div>
                        <div class="honor-img-mg">
                             <img src='@/assets/honor-item2.jpg' class="honor-img-size"/>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="honor-div-item-size">
                        <div> 2019重承诺守信用放心品牌</div>
                        <div class="honor-img-mg">
                             <img src='@/assets/honor-item3.gif' class="honor-img-size"/>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="honor-div-item-size">
                       <div> 2019中国上市公司品牌价值榜 海外榜 五十强</div>
                       <div class="honor-img-mg">
                            <img src='@/assets/honor-item4.jpg' class="honor-img-size"/>
                       </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
 .div-backgroup5{
     background-color:#1E1E1E;
     height: 650px;
     width: 100%;
     color:white;
 }
.honor-banner{
    background-color: black;
    background-size: 100% 100%;
    height: 1030px;
    width: 100%; 
}
.honor-div2{
    background-color: #1E1E1E;
    margin: 0px 0px 500px 0px;
    height: 480px;
}
.honor-div1{
    background-image: url('../../assets/timg3.png');
    height: 230px;
    width: 600px;
    margin: 100px 0px 0px 360px;
    
}
#span1{
    font-size: 40px;
}
.honor-div-item-size{
    height: 280px;
    width: 220px;
    margin: 50px;
}
.honor-img-size{
    width: 200px;
    height: 270px;
}
.honor-img-mg{
    margin-top: 50px;
}
</style>