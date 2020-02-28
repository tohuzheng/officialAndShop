<template>
    <div class="div-backgroup1"> 
        
        <el-row>
            <el-col :span="12">
                <div class="div-backgroup2">
                    <h1>企业简介</h1>
                    企业产品在线展示与销售系统，本公司自1997年成立，历经23年，每年都是武汉市最佳企业，深受全国人民的喜爱
                </div>    
            </el-col>
            <el-col :span="12">
                <div class="png-div transition-box">
                    <img src='@/assets/xingxiang.png' style="height:280px"/>
                </div>
            </el-col>
        </el-row>
           
    </div>
</template>

<script>

export default {
    data(){
        return{
            flag:true,
        };
    },
    methods:{
        on:function(){
            this.flag = true;
        }
    }
}
</script>

<style>
 .div-backgroup1{
     background-color: #835FA7;
     height: 350px;
     width: 100%;
 }

 .div-backgroup2{
     height: 200px;
     width: 200px;
     margin: 80px auto auto 200px;
 }
 .png-div{
     margin-top: 40px;
     transform: rotate(360deg);
     animation: myfirst 5s;
     
 }
</style>