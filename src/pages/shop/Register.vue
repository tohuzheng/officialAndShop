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
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="1px" class="demo-ruleForm">
                      <div class="input-item">
                        <el-form-item prop="username">
                          <el-input v-model="ruleForm.username" 
                          placeholder="请输入登录用户名"
                          prefix-icon="el-icon-s-custom" 
                          clearable></el-input>
                        </el-form-item>  
                      </div>

                      <div class="input-item">
                        <el-form-item prop="password">
                          <el-input placeholder="请输入登录密码" 
                          v-model="ruleForm.password" 
                          show-password
                          prefix-icon="el-icon-lock" 
                          clearable></el-input>
                        </el-form-item>
                      </div>

                      <div class="input-item">
                        <el-form-item prop="password2">
                          <el-input placeholder="确认密码" 
                          v-model="ruleForm.password2" 
                          show-password
                          prefix-icon="el-icon-lock" 
                          clearable></el-input>
                        </el-form-item>
                      </div>

                      <div class="input-item">
                        <el-form-item prop="email">
                          <el-input v-model="ruleForm.email" 
                          placeholder="请输入邮箱" 
                          prefix-icon="el-icon-message"
                          clearable></el-input>
                        </el-form-item>
                      </div>

                      <div class="input-item">
                        <el-form-item prop="authCode">
                          <el-input v-model="ruleForm.authCode" 
                          placeholder="输入验证码" 
                          prefix-icon="el-icon-chat-dot-square"
                          style="width:145px"
                          clearable></el-input>
                          <el-button type="info" @click="getAuthCode" style="width:149px;" :disabled="btuFlag">{{authButtonMsg}}</el-button>
                        </el-form-item>
                      </div>

                      <div class="input-item">
                        <el-button type="primary" style="width:300px;" @click="submitForm('ruleForm')">注册</el-button>
                      </div>
                    </el-form>
                  </div>
              </el-card>
          </div>
      </div>

  </div>
</template>

<script>
import jsencryp from '@/lib/js/jsencrypt.js'   //导入RSA加密解密文件
import { registerCustomer, getPublicKey } from '@/server/shop.js'

export default {
    components: {},
    data() {
       var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
       };

       return {
           ruleForm:{
              username: "",
              password: "",
              password2: "",
              authCode: "",
              email: "",
              publicKey: '',
              keyNo: ''
           },
           authButtonMsg: "获取验证码",
           btuFlag: false,
           rules: { // 表单验证规则
              username: [
                { required: true, message: '请输入登录用户名', trigger: 'blur' },
                { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入登录密码', trigger: 'blur' },
                { min: 6, max: 25, message: '长度在 6 到 25 个字符', trigger: 'blur' }
              ],
              password2: [
                { validator: validatePass2, trigger: 'blur' }
              ],
              authCode: [
                 { required: true, message: '请输入验证码', trigger: 'blur' },
              ],
              email: [
                 { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                 { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
              ]
           }
       };
    },
    methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let dto = this.ruleForm;
              dto.password=this.encryptFun(this.ruleForm.password, this.ruleForm.publicKey);
              dto.password2 = "";
              registerCustomer(dto).then((response)=>{
                  this.$router.push('/login');
              }).catch((error)=>{
                  this.$message.error("注册失败，系统异常");
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
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
        },
        encryptFun:function(val,publicKey){
            //RSA加密
            let encrypt = new JSEncrypt();  //创建工具对象
            encrypt.setPublicKey(publicKey); //设置公钥
            let encryptPwd = encrypt.encryptLong(val); //进行加密
            return encryptPwd;
        },
        // 提交注册
        registerSubmit:function(){
            let dto={}
            
        }
    },
    created() {
       getPublicKey().then((response) => {
          this.ruleForm.publicKey = response.data.publicKey;
          this.ruleForm.keyNo = response.data.keyNo;
       });
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