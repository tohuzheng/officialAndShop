<template>
    <div class="parent-div">
        <div class="login-div">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>登录</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="toRegister">去注册</el-button>
                </div>
                <!--下面是登录框-->
                <div>
                    <el-form  status-icon  ref="ruleForm" label-width="100px" >
                        <div class="from-item-div">
                            <el-form-item label="账号" prop="username">
                                <el-input type="text" v-model="username"></el-input>
                            </el-form-item>
                        </div>

                        <div class="from-item-div">
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="password"></el-input>
                        </el-form-item>
                        </div>

                        <div class="from-item-div">
                        <el-form-item>
                            <div>
                                <div style="float:left;">
                                    <el-button type="primary" @click='submitLogin'>提交</el-button>
                                </div>
                                <div style="float:left;margin:0px 80px">
                                    <el-button @click="resete">重置</el-button>
                                </div>
                            </div>   
                        </el-form-item>
                        </div>
                    </el-form>
                </div> 
            </el-card>
        </div>
    </div>
</template>

<script>
import jsencryp from '@/lib/js/jsencrypt.js'   //导入RSA加密解密文件

export default {
    name:"login",
    data(){
        return{
            username:'',
            password:'',
            publicKey:''
        }
    },
    methods:{
        submitLogin:function(){
            let dto={};
            dto.username=this.username;
            let pass=this.encryptFun(this.password,publicKey);
            dto.password=pass;
            this.send(name,pass);
        },
        resete:function(){
            this.username='';
            this.password='';
        },
        encryptFun:function(val,publicKey){
            //RSA加密
            let encrypt = new JSEncrypt();  //创建工具对象
            encrypt.setPublicKey(publicKey); //设置公钥
            let encryptPwd = encrypt.encryptLong(val); //进行加密
            console.log(encryptPwd);

            return encryptPwd;
        },
        decryptionFun:function(val,privateKey){
            //RSA解密
            let decryption = new JSEncrypt();  //创建工具对象
            decryption.setPrivateKey(privateKey); // 设置私钥
            const data = decryption.decrypt(val); // 进行解密
            console.log(data);

            return data;
        },
        send:function(name,pass){
            //  let param = new URLSearchParams()
            //  param.append('username',name);
            //  param.append('password',pass);
            //let dto={'username':name,'password':pass,'keys':[1,2,3,4,5,6]};
            this.axios.post('/api/KeBiao/addAccount',dto)
            .then((data) => {
                console.log(data)
                alert(data.data)
            });
        },
        toRegister:function(){
            this.$router.push("/register");
        }
    },
    created(){
        this.axios.get('/api/Security/getPublicKey')
        .then((data) => {
            this.publicKey=data;
        });
    }
}

</script>

<style>
.parent-div{
    background: url("../../assets/login-background.jpg");
    border: 1px white solid;
}
.login-div{
    width: 500px;
    height: 255px;
    margin: 100px 100px 50px 630px;
}
.from-item-div{
    text-align: center;
}
</style>