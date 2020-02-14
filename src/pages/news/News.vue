<template>
    <div>
       <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="5" @click="toOfficial"><label class="index">官网首页</label></el-menu-item>
            <el-menu-item index="1" @click="toOne">行业动态</el-menu-item>
            <el-menu-item index="2" @click="toTwo">热点资讯</el-menu-item>
            <el-menu-item index="3" @click="toThree">热点话题</el-menu-item>
            <el-menu-item >
                <div class="navi"> 
                    <el-input v-model="title" placeholder="请输入标题"></el-input>
                    <el-button type="primary" style="height:40px;width:80px" @click="searchNews">搜索</el-button>      
                </div>
            </el-menu-item>
            
            
       </el-menu>
       <div>
           <router-view></router-view>
       </div>
    </div>
</template>

<script>
/**
 * 新闻系统页面
 */
export default {
    name:"news",
    data(){
        return {
           title:"" 
        };
    },
    methods:{
        toOne:function(){
            this.$router.push({name:"dynamics"});
        },
        toTwo:function(){
            this.$router.push("/message");
        },
        toThree:function(){
            this.$router.push({path:"/topics"});
        },
        searchNews:function(){
            let key = this.title;
            let path = this.$route.path;
            if(path === "/newsSearch"){
                alert("正在搜索页面");
            }else{
                this.$router.push({path:"/newsSearch",query:{key:key}});
            }
        },
        toOfficial:function(){
            this.$router.push("/official");
        }
    },
    created:function(){
       
    }
}
</script>

<style scoped>
    .navi{
        width: 300px;
        height: 30px;
        margin: 0px 0px auto 300px;
    }
    .navi-input{
        height: 40px;
    }
    .navi-button{
        height: 40px;
    }
    .index{
        color: #000;
    }
</style>