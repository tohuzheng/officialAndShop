<template>
  <div>
    <div class="head-title">
        <div class="head-title-word">我在商城走过的路~</div>
    </div>
    <div class="view-body">
      <el-row :gutter="10">
          <el-col :span="4" v-for="(val,index) in 10" :key="index">
            <div class="view-item">
              <div>
                  <img src="../../assets/phone.jpg"/>
              </div>
              <div class="view-item-price">
                ￥78
              </div>
              <div class="view-item-title-link">
                <el-link href="https://element.eleme.io" target="_blank">
                森马 | 长袖衬衫男2019春季新款棉麻休闲时尚青年衬衣长袖衬衫男12345632543456436
                </el-link>
              </div>
            </div>
          </el-col>
      </el-row>
    </div>
    <div class="view-tail-div">
        没有更多了
    </div>
    <!--回到最顶部-->
    <el-backtop></el-backtop>
  </div>
</template>

<script>
/**
 * 我的足迹页
 */
export default {
    components: {},
    data() {
       return {};
    },
    methods: {

    },
    created() {

    }
};
</script>

<style scoped>
.head-title{
  background: url("../../assets/bg-fav-banner.png");
  height: 163px;
}
.head-title-word{
  font-size: 40px;
  padding-top: 50px;
  text-align: left;
  padding-left: 100px;
}
.view-body{
  width: 90%;
  margin: 0px auto;
  padding-top: 50px;
}
.view-item{
  background-color: white;
  margin-bottom: 12px;
  border: 1px solid #e7e7e7;
}
.view-item-price{
  font-size: 24px;
  font-weight: 700;
}
.view-item-title-link{
    text-overflow: ellipsis;
    text-align: left;
    min-height: 35px;
    max-height: 35px;
    overflow: hidden;
    font-size: 12px;
    margin: 5px 5px 30px 5px;
    display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
    -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
    -webkit-line-clamp: 2; /* 文本需要显示多少行 */
}
.view-tail-div{
    font-size:14px;
    color:#666;
    padding: 5px;
    margin-bottom: 100px;
    text-align: center;
}
img{  
    width: auto;  
    height: auto;  
    max-width: 150px;  
    max-height: 150px;     
} 
</style>