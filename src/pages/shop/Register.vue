<template>
  <div>
      <div style="padding-top:20px;">
          <span class="title-span1">企业产品在线销售平台</span>
          <span class="title-span2">欢迎注册</span>
          <span class="title-span3">已有账号？</span>
          <span class="title-span4" @click="toLogin">登录></span>
      </div>
 
      <el-divider></el-divider>

      <div class="body-background-img">
          <div class="body-input">
              <el-card class="box-card">
                  <div>
                      <div class="input-item">
                          <el-input v-model="username" 
                          placeholder="请输入登录用户名"
                          prefix-icon="el-icon-s-custom" 
                          clearable></el-input>
                      </div>

                      <div class="input-item">
                        <el-input placeholder="请输入登录密码" 
                        v-model="password" 
                        show-password
                        prefix-icon="el-icon-lock" 
                        clearable></el-input>
                      </div>
                      <div class="input-item">
                        <el-input placeholder="确认密码" 
                        v-model="password2" 
                        show-password
                        prefix-icon="el-icon-lock" 
                        clearable></el-input>
                      </div>
                      <div class="input-item">
                        <el-input v-model="email" 
                        placeholder="请输入邮箱" 
                        prefix-icon="el-icon-message"
                        clearable></el-input>
                      </div>

                      <div class="input-item">
                        <el-input v-model="authCode" 
                        placeholder="输入验证码" 
                        prefix-icon="el-icon-chat-dot-square"
                        style="width:145px"
                        clearable></el-input>
                        
                        <el-button type="info" @click="getAuthCode" style="width:150px;" :disabled="btuFlag">{{authButtonMsg}}</el-button>
                      </div>

                      <div class="input-item">
                        <el-button type="primary" style="width:300px;">注册</el-button>
                      </div>
                  </div>
              </el-card>
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
           password2:"",
           authCode:"",
           email:"",
           authButtonMsg:"获取验证码",
           btuFlag:false,
       };
    },
    methods: {
        register:function(){
            let dto={};
        },
        toLogin:function(){
           this.$router.push('/login');
        },
        getAuthCode:function(){ //获取验证码函数
            let count = 60;
            this.btuFlag = true;
            const that = this;
            let timer=setInterval(function(){ //获取验证码定时器
                    count--;
                    that.authButtonMsg = `${count}s后获取验证码`;
                    if (count <=0) {
                        clearInterval(timer);
                        that.authButtonMsg = "获取验证码";
                        that.btuFlag = false;
                    }
                },1000);
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
  font-size: 30px;
  padding-top: 30px;
}
.title-span2{
  font-size: 18px;
}
.title-span3{
  margin-left: 40%;
}
.title-span4{
  color: red;
}
.box-card{
   width: 480px;
}  
.body-background-img{
  background: url("../../assets/register.jpg")
}
</style> 