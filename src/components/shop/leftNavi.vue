<template>
    <div>
        <div style="padding:10px; 0px;">产品分类</div>
        <div class="type-body-div">
            <el-row>
                <el-col :span="8" v-for="(val, index) in typeList" :key="index">
                    <div style="text-align:left;padding:0px 5px;width:150px;">
                        <el-link @click="toCategory(val)">
                            {{val}}<span style="margin-left:5px;">/</span>
                        </el-link>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
/**
 * 商城首页左侧导航
 */
import { getProductClass } from '@/server/shop.js'
export default {
    data(){
        return{
            typeList:[]
        };
    },
    methods:{
        getDataInit:function(){
            let productClass=[];
            getProductClass().then((response)=>{
                let className = response.data.data;
                for(let i=0;i<className.length;i++){
                    productClass.push(className[i]);
                } 
            });
            return productClass || ["男装","女装","内衣","配饰","手机","电脑","电视","冰箱","桌子","板凳"];
        },
        toCategory:function(data){
            this.$router.push("/shopCategory/"+data);
        } 
    },
    created(){
        this.typeList = this.getDataInit();
    }
}
</script>

<style scope>
.item-type-span{
    padding:3px 10px;
    font-size: 14px;
}
.type-body-div{
    width: 80%;
    padding-left: 10%;
    text-align: left;
}
</style>