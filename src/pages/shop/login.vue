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
import jsencryp from '../../lib/js/jsencrypt.js'   //导入RSA加密解密文件

export default {
    name:"login",
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        submitLogin:function(){

            let words = "123456";
            let publicKey = `-----BEGIN PUBLIC KEY-----
            MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh5Nk2GLiyQFMIU+h3OEA4UeFb
            u3dCH5sjd/sLTxxvwjXq7JLqJbt2rCIdzpAXOi4jL+FRGQnHaxUlHUBZsojnCcHv
            hrz2knV6rXNogt0emL7f7ZMRo8IsQGV8mlKIC9xLnlOQQdRNUssmrROrCG99wpTR
            RNZjOmLvkcoXdeuaCQIDAQAB
            -----END PUBLIC KEY-----`;
            let privateKey=`-----BEGIN RSA PRIVATE KEY-----
            MIICWwIBAAKBgQCh5Nk2GLiyQFMIU+h3OEA4UeFbu3dCH5sjd/sLTxxvwjXq7JLq
            Jbt2rCIdzpAXOi4jL+FRGQnHaxUlHUBZsojnCcHvhrz2knV6rXNogt0emL7f7ZMR
            o8IsQGV8mlKIC9xLnlOQQdRNUssmrROrCG99wpTRRNZjOmLvkcoXdeuaCQIDAQAB
            AoGAUTcJ1H6QYTOts9bMHsrERLymzir8R9qtLBzrfp/gRxxpigHGLdph8cWmk8dl
            N5HDRXmmkdV6t2S7xdOnzZen31lcWe0bIzg0SrFiUEOtg3Lwxzw2Pz0dKwg4ZUoo
            GKpcIU6kEpbC2UkjBV4+2E6P1DXuhdgTyHoUA3ycxOdjCAUCQQCyjTzGPXFoHq5T
            miJyVd4VXNyCXGU0ZuQayt6nPN8Gd5CcEb2S4kggzPXQcd90FO0kHfZV6+PGTrc2
            ZUuz5uwPAkEA6B3lmEmiZsJS/decLzWR0T1CXaFGwTjBQbHXJ0RziAfkuy+VwSmh
            vrW/ipk5xbREr5rKx3jVI2PzVOvLw7NgZwJAbUsvDFnH9WfyZZJPy5TsID97awCL
            oovozM2phM0p55eAmUfyttp0ND/BqBpMIY49qoH8q5N9FYJRe6Z9tF2B2QJAQBEo
            cw039xcB4zCk2l713YQEEmXWarSomuJkWWFKZiyPlJ8Ava0pCMOPl8jNKmWkY7fc
            6ovOgJMw8aqXtm+HVwJAerJeUEDez2djG5pIF6aCV0bP3fhQUq8OQCgGF5Qzo9Cn
            qvYreGpYKPJGVixAsEPCiLzJRhy1XfFona6VRXIIxw==
            -----END RSA PRIVATE KEY-----`;
            let pass=this.encryptFun(words,publicKey);
            this.decryptionFun(pass,privateKey);
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
        }
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