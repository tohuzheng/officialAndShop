<template>
  <div>
      <div class="title"> 
        <h1>{{onlyCode}}查询结果</h1>
      </div>
     
  </div>
</template>

<script>
export default {
    
    data() {
       return {
           onlyCode:""
       };
    },
    methods: {

    },
    created() {
       this.onlyCode = this.$route.query.onlyCode;
    }
};
</script>

<style scoped>
.title{
    text-align: center;
}
</style>