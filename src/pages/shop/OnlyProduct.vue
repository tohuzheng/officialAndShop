<template>
  <div>
      <div class="only-title">
          <div class="title">
            产品防伪查询 
            <span class="official-span">
                <el-link style="font-size: 15px;" @click="toOfficial">官网首页</el-link>
            </span>
          </div> 
      </div>
      <router-view></router-view>
     
  </div>
</template>

<script>
/**
 * 防伪查询组件
 */
export default {

    methods: {
       
        toOfficial:function(){
            this.$router.push('/official');
        }
    }
};
</script>

<style scoped>
.only-title{
    width: 900px;
    height: 45px;
    border-bottom: 1px #D6D6D6 solid;
    margin: 0px auto;
}

.title{
    font-size: 32px;
    font-weight: 200;
    margin: 20px auto;
}

.official-span{
    margin-left: 65%;
}
</style>