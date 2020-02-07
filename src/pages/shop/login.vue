<template>
    <div class="login-div">
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
                <el-button type="primary" @click='submitLogin'>提交</el-button>
                <el-button @click="resete">重置</el-button>
            </el-form-item>
            </div>

        </el-form>
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
.login-div{
    width: 500px;
    height: 350px;
    margin: 10% auto auto 30%;
    

}
.from-item-div{
    text-align: left;
}
</style>