<template>
   <div>
       <div class="home-banner">
           <el-container>
            <el-header>
                <!--官网首页导航栏-->
                <el-row>
                    <el-col :span="8">
                        <div class="title-mg">
                            <label class="lable-color">企业产品在线展示销售平台</label>
                        </div>
                    </el-col>
                    
                    <el-col :span="16">
                        <el-menu mode="horizontal" class="nvai-text">
                            <el-menu-item index="1">处理中心</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">我的工作台</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="3">
                                消息中心
                            </el-menu-item>
                            <el-menu-item index="4">
                                <a href="https://www.ele.me" target="_blank">订单管理</a>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                    
                </el-row>
            </el-header>
            <el-main>
                <!--官网欢迎页面-->
                <div>
                    <div class="main-div1">
                        <p>
                            欢迎光临企业产品在线销售展示平台，买好产品就来这里
                            企业发展，产品查看，行业动态应有尽有
                            只要你需要，我们竭诚为您服务
                        </p>
                    </div>

                    <div>

                    </div>

                    <div class="main-div3">
                        <p>© 1997-2020 企业产品在线 </p>
                    </div>
                </div>
                <!--企业简介-->
                <div class="jieshao-banner">
                    <p>这个是下一页</p>
                </div>
                <!--企业文化-->
                <!--企业荣誉-->
                
            </el-main>
          </el-container>

          
       </div>
   </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
 .home-banner{
    background: url('../../assets/home-banner.jpg');
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
     
 }
.lable-color{
    color:white;
    font-size: 28px;
}

.title-mg{
    margin: 30px auto auto 79px;
}

.nvai-text{
    opacity: 0.5;
}

.main-div1{
    margin: 160px 200px auto 300px;
    color:white;
    width: 700px;
}

.main-div3{
    margin: 370px 450px 0px 0px;
    color:white;
}

 .jieshao-banner{
     background: url('../../assets/about.jpg');
     height: 300px;
     width: 1920px;
 }
</style>