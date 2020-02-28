<template>
      <div class="tile-div">
        <el-row>

            <el-col :span="6" v-for="(val,key,index) in data" :key="index">
                <div class="items-div">
                    <div class="title-div">{{key}}</div>
                    <div  v-for="(val,index) in val" :key="index">
                        <el-link class="item-div" @click="toHere(val.url)">
                           <span style="color:black;">{{val.title}}</span>
                        </el-link>
                    </div>
                </div>
            </el-col>

        </el-row> 
      </div>
</template>

<script>
/**
 * 商城底部导航栏
 */
export default {
    data(){
        return {
            data:{
                "购买指南": [
                    {"title":"在线客服","url":"/customerService"}, 
                    {"title":"购买帮助","url":""}, 
                    {"title":"服务保障","url":""}
                ], 
	            "售后服务": [
                    {"title":"关于退货","url":"/customerService"}, 
                    {"title":"售后政策","url":""}, 
                    {"title":"取消订单","url":""},
                    {"title":"防伪查询","url":"/onlyProduct"}
                ],
	            "意见反馈": [
                    {"title":"投诉建议","url":"/customerService"}, 
                    {"title":"意见留言","url":""}
                ],
	            "配送方式": [
                    {"title":"配送范围与运费","url":"/customerService"}, 
                    {"title":"验货与签收","url":""}
                ]
            }

        };
    },
    methods:{
        toHere:function(url){
            if(url === "/customerService"){
                let routeData = this.$router.resolve({
                    path: "/customerService",
                    query: { }
                });
                window.open(routeData.href, '_blank');
            }else{
                this.$router.push(url);
            }  
        }
    }
}
</script>

<style scope>
.tile-div{
    background-color: #B3C0D1;
    text-align: center;
}
.el-footer {
    padding: 0px 0px;
}
.title-div{
    font-size: 14px;
    font-weight: 900;
    margin-bottom: 20px;
}
.item-div{
    margin: 5px 0px 0px 0px;
    font-size: 12px;
    color: black;
}

.items-div{
    margin: 10px 0px 30px 0px;
}
</style>