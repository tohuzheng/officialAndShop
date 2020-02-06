<template>
  <div>
      <div>
          <span>企业产品在线销售平台</span>
          <span>欢迎注册</span>
          <span>已有账号？</span>
          <span>登录></span>
      </div>
      <el-divider></el-divider>
      <div>
          <div>
            <el-input v-model="username" placeholder="请输入登录用户名"></el-input>
          </div>

          <div>
            <el-input placeholder="请输入登录密码" v-model="password" show-password></el-input>
          </div>

          <div>
            <el-input v-model="email" placeholder="请输入邮箱"></el-input>
          </div>

          <div>
            <el-input v-model="name" placeholder="请输入真实姓名"></el-input>
          </div>

          <div>
            <el-input v-model="sex" placeholder="请输入性别"></el-input>
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
        toRegister:function(){
            let dto={};
        }
    },
    created() {

    }
};
</script>

<style scoped>

</style>