<template>
    <el-container>
      <el-header>
        <navigation></navigation>
      </el-header>
      
      <el-main>
        <el-row>
          <el-col :span="4">
              <div>
                <el-link href="https://element.eleme.io" target="_blank">女装</el-link>
                <label>/</label>
                <el-link href="https://element.eleme.io" target="_blank">男装</el-link>
                <label>/</label>
                <el-link href="https://element.eleme.io" target="_blank">内衣</el-link>
              </div>

              <div>
                <el-link href="https://element.eleme.io" target="_blank">手机</el-link>
                <label>/</label>
                <el-link href="https://element.eleme.io" target="_blank">电脑</el-link>
                <label>/</label>
                <el-link href="https://element.eleme.io" target="_blank">数码</el-link>
              </div>

              <div>
                <el-link href="https://element.eleme.io" target="_blank">显示器</el-link>
                <label>/</label>
                <el-link href="https://element.eleme.io" target="_blank">充电宝</el-link>
                <label>/</label>
                <el-link href="https://element.eleme.io" target="_blank">数据线</el-link>
              </div>

              <div>
                <el-link href="https://element.eleme.io" target="_blank">桌子</el-link>
                <label>/</label>
                <el-link href="https://element.eleme.io" target="_blank">板凳</el-link>
              </div>

          </el-col>

          <el-col :span="16"><carousel></carousel></el-col>

          <el-col :span="4">
            
          </el-col>
        </el-row>
          
          <div>
            <br>
            <div>新品推荐</div>
            <br>
            <el-row>
              <el-col :span="4">
                <div class="shop-one">
                  <div>
                    <img src="../../assets/shoe.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>乔丹篮球鞋男鞋耐磨外场2019冬季透气防滑减震高帮战靴学生运动鞋毒液5 白色/黑色 42</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
              </el-col>

              <el-col :span="4">
                <div class="shop-one">
                  <div>
                    <img src="../../assets/shoe.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>乔丹篮球鞋男鞋耐磨外场2019冬季透气防滑减震高帮战靴学生运动鞋毒液5 白色/黑色 42</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
              </el-col>

              <el-col :span="4">
                <div class="shop-one">
                  <div>
                    <img src="../../assets/shoe.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>乔丹篮球鞋男鞋耐磨外场2019冬季透气防滑减震高帮战靴学生运动鞋毒液5 白色/黑色 42</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
              </el-col>

              <el-col :span="4">
                <div class="shop-one">
                  <div>
                    <img src="../../assets/shoe.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>乔丹篮球鞋男鞋耐磨外场2019冬季透气防滑减震高帮战靴学生运动鞋毒液5 白色/黑色 42</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
              </el-col>

              <el-col :span="4">
                <div class="shop-one">
                  <div>
                    <img src="../../assets/shoe.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>乔丹篮球鞋男鞋耐磨外场2019冬季透气防滑减震高帮战靴学生运动鞋毒液5 白色/黑色 42</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
              </el-col>

              <el-col :span="4">
                <div class="shop-one">
                  <div>
                    <img src="../../assets/shoe.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>乔丹篮球鞋男鞋耐磨外场2019冬季透气防滑减震高帮战靴学生运动鞋毒液5 白色/黑色 42</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
              </el-col>

            </el-row>
          </div>
          <div>

            <br>
            <div>猜你喜欢</div>
            <br>

            <div>
              <el-row>
                <el-col :span="4">
                  <div class="shop-one">
                  <div>
                    <img src="../../assets/pack.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>拉菲斯汀包包 女包双肩包2019新款简约时尚书包学生大容量双肩包背包 619521 扶桑红</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
                </el-col>

                <el-col :span="4">
                  <div class="shop-one">
                  <div>
                    <img src="../../assets/pack.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>拉菲斯汀包包 女包双肩包2019新款简约时尚书包学生大容量双肩包背包 619521 扶桑红</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
                </el-col>

                <el-col :span="4">
                  <div class="shop-one">
                  <div>
                    <img src="../../assets/pack.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>拉菲斯汀包包 女包双肩包2019新款简约时尚书包学生大容量双肩包背包 619521 扶桑红</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
                </el-col>

                <el-col :span="4">
                  <div class="shop-one">
                  <div>
                    <img src="../../assets/pack.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>拉菲斯汀包包 女包双肩包2019新款简约时尚书包学生大容量双肩包背包 619521 扶桑红</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
                </el-col>

                <el-col :span="4">
                  <div class="shop-one">
                  <div>
                    <img src="../../assets/pack.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>拉菲斯汀包包 女包双肩包2019新款简约时尚书包学生大容量双肩包背包 619521 扶桑红</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
                </el-col>

                <el-col :span="4">
                  <div class="shop-one">
                  <div>
                    <img src="../../assets/pack.jpg" class="shop-img"/>
                  </div>
                  <div class="shop-world">
                    <label>拉菲斯汀包包 女包双肩包2019新款简约时尚书包学生大容量双肩包背包 619521 扶桑红</label>
                  </div>
                  <div class="shop-price">
                    <label>￥652</label>
                  </div>
                </div>
                </el-col>

              </el-row>
            </div>

          </div>
      </el-main>

      <el-footer style="height: 100%;">
          <tail></tail>
      </el-footer>

    </el-container>
</template>

<script>
//商城首页布局组件
import navigation from '@/components/shop/navigation'
import carousel from '@/components/shop/carousel'
import tail from '@/components/shop/tail'

export default {
    name:"storeIndex",
    data(){
       return {
          msg:"这是一个测试",
          items:["这是测试1","这是测试2","这是测试3","这是测试4","这是测试5"],
          emp:{"name":"huzheng","age":22,"sex":"男"}
       } 
    },
    components:{navigation,carousel,tail}
    
}
</script>

<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
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