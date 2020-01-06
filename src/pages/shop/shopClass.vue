<template>
    <div>
        <el-row>
            <el-col :span="4"><div class="left-div"></div></el-col>

            <el-col :span="4">
                <div class="shop-one">
                    <div>
                        <img src="../../assets/phone.jpg" class="shop-img"/>
                    </div>
                    <div class="shop-world">
                        <label>Apple iPhone 11 (A2223) 128GB 紫色 移动联通电信4G手机 双卡双待</label>
                    </div>
                    <div class="shop-price">
                        <label>￥5999</label>
                    </div>
                </div>
            </el-col>

            <el-col :span="4">
                <div class="shop-one">
                    <div>
                        <img src="../../assets/phone.jpg" class="shop-img"/>
                    </div>
                    <div class="shop-world">
                        <label>Apple iPhone 11 (A2223) 128GB 紫色 移动联通电信4G手机 双卡双待</label>
                    </div>
                    <div class="shop-price">
                        <label>￥5999</label>
                    </div>
                </div>
            </el-col>

            <el-col :span="4">
                <div class="shop-one">
                    <div>
                        <img src="../../assets/phone.jpg" class="shop-img"/>
                    </div>
                    <div class="shop-world">
                        <label>Apple iPhone 11 (A2223) 128GB 紫色 移动联通电信4G手机 双卡双待</label>
                    </div>
                    <div class="shop-price">
                        <label>￥5999</label>
                    </div>
                </div>
            </el-col>
            
            <el-col :span="4">
                <div class="shop-one">
                    <div>
                        <img src="../../assets/phone.jpg" class="shop-img"/>
                    </div>
                    <div class="shop-world">
                        <label>Apple iPhone 11 (A2223) 128GB 紫色 移动联通电信4G手机 双卡双待</label>
                    </div>
                    <div class="shop-price">
                        <label>￥5999</label>
                    </div>
                </div>
            </el-col>

            <el-col :span="4"><div class="left-div"></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.left-div{
    width: 50px;
    background-color: aqua;
}

 .shop-one{
   width: 190px;
   height: 266px;
   background-color: aliceblue;
 }

.shop-img{
  width: 120px;
  height: 120px;
  margin-top: 20px;
}
.shop-world{
  font-size: 12px;
  margin: 25px 10px 5px 10px;
  text-align: left;
  overflow: hidden;/* 溢出部分隐藏 */
  text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
  display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-line-clamp: 2; /* 文本需要显示多少行 */
}
.shop-price{
  color:red;
  text-align: left;
  margin: 20px auto 0px 10px;
  font-weight: 600;
}
</style>