<template>
  <div>
      <div>
          <span class="title-span1">企业产品在线销售平台</span>
          <span class="title-span2">欢迎注册</span>
          <span class="title-span3">已有账号？</span>
          <span class="title-span4" @click="toLogin">登录></span>
      </div>
      <el-divider></el-divider>
      <div class="body-input">
          <div class="input-item">
            <el-input v-model="username" placeholder="请输入登录用户名"></el-input>
          </div>

          <div class="input-item">
            <el-input placeholder="请输入登录密码" v-model="password" show-password></el-input>
          </div>

          <div class="input-item">
            <el-input v-model="email" placeholder="请输入邮箱"></el-input>
          </div>

          <div class="input-item">
            <el-input v-model="name" placeholder="请输入真实姓名"></el-input>
          </div>

          <div class="input-item">
            <el-input v-model="sex" placeholder="请输入性别"></el-input>
          </div>

          <div class="input-item">
             <el-button type="primary" style="margin-left:50px;">注册</el-button>
             <el-button type="primary" style="margin-left:70px;">重置</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    components: {},
    data() {
       return {
           username:"",
           password:"",
           sex:"",
           name:"",
           email:""
       };
    },
    methods: {
        register:function(){
            let dto={};
        },
        toLogin:function(){
           this.$router.push('/login');
        }
    },
    created() {

    }
};
</script>

<style scoped>
.body-input{
  width: 510px;
  margin: 0px auto;
}
.input-item{
  width: 300px;
  margin: 20px auto;
}
.title-span1{
  font-size: 40px;
  margin-top: 505px;
}
.title-span2{
  
}
.title-span3{
  margin-left: 40%;
}
.title-span4{
  color: red;
}
</style>