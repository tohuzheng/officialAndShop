<template>
    <div>
        <navi/>
        <welcome/>
        <introduction/>
        <culture/>
        <honor/>
        <mapView/>
        <div class="tail-div-size">
            <div class="honor-index-div1">
                <div class="left-tail-top-div">
                    <div style="margin-bottom : 30px;">Get in touch</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div>
                    <div class="left-tail-div-size">
                        <div style="margin-bottom:30px;">
                            <div>Resources</div>
                        </div>
                        <div>
                            Tour<br>
                            Customers<br>
                            Pricing and Plans<br>
                            New Features<br>
                            Education
                        </div>
                    </div>
                    <div class="left-tail-div-size">
                        <div style="margin-bottom : 30px;">Features</div>
                        <div>
                            Tour<br>
                            Customers<br>
                            Pricing and Plans<br>
                            New Features<br>
                            Education
                        </div>
                    </div>
                    <div class="left-tail-div-size">
                        <div style="margin-bottom : 30px;">How To's</div>
                        <div>
                            Tour<br>
                            Customers<br>
                            Pricing and Plans<br>
                            New Features<br>
                            Education
                        </div>
                    </div>
                </div>
            </div>
            <div class="honor-index-div2">
                <div>
                    <div style="margin:40px 40px;">Stay in touch</div>
                </div>
                <div style="margin:20px 40px;">
                    <el-input
                    placeholder="请输入内容"
                    v-model="input"
                    clearable
                    class="honor-serche-input">
                    </el-input>
                    <el-button type="primary" @click="saveSuggest">提交建议</el-button>
                </div>
                <div style="margin:10px 40px;">
                    We don't send spam. Actually, wha are we kiding, we'll spamthe shit out of you'r inbox
                </div>
            </div>
        </div>
        <div align='center' style="margin-top:15px;padding-bottom:20px;">
            Copyright©2020企业产品在线展示科技集团股份有限公司<br>
            版权所有京ICP证14684568号.京ICP备120498651号-2.京公网安备11088802026582<br>
            互联网科技信息服务资格证书 （京）-非经营性-2017-0039<br>
        </div>
        <el-backtop></el-backtop>
    </div>
</template>

<script>
import welcome from '@/components/official/Welcome.vue'
import navi from '@/components/official/Navi.vue'
import introduction from '@/components/official/Introduction'
import culture from '@/components/official/Culture'
import honor from '@/components/official/Honor'
import mapView from '@/components/official/MapView.vue'
import { submitSuggestApi } from '@/server/shop.js'

export default {
    components:{
        welcome,navi,introduction,culture,honor,mapView
    },
    data(){
        return {
            input:''
        };
    },
    methods:{
        saveSuggest:function(){
            submitSuggestApi({suggestContent:this.input}).then((res)=>{
                this.$message.success("建议提交成功");
            });
        }
    }

}
</script>

<style>
 .tail-div-size{
     width: 100%;
     height: 400px;
     background-color: 	#FAFAD2;
     
 }
 .honor-index-div1{
     float: left;
     width: 50%;
 }
.honor-index-div2{
     float: right;
     width: 50%;
 }
 .left-tail-div-size{
     float: left;
     width: 150px;
     padding-left:40px;
 }
 .left-tail-top-div{
     text-align: left;
     margin: 40px 40px;
     
 }
 .honor-serche-input{
     width: 350px;
 }
</style>