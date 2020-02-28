<template>
  <div>
      <div class="customer-service-background">
          <div style="font-size:36px;padding:10px 50px;">
              客服中心 <span style="font-size:22px;padding-left:100px;">企业产品在线展示平台</span>
          </div>
          <el-divider></el-divider>
          <div class="chuang-kou-div">
              <div class="dui-hua" id="myby">
                    <ul class="infinite-list" v-infinite-scroll="load">
                        <li v-for="(item, index) in chatData" class="infinite-list-item" :key="index">
                            <div v-if="item.speackName ==='店小二'" class="employee-div">
                                {{ item.speackName }}: {{ item.content }}
                            </div>
                            <div v-else-if="item.speackName ==='close'" style="color:red;">
                                  关闭成功！欢迎您的咨询！
                            </div>
                            <div v-else class="customer-div">
                                {{ item.content }}: {{ item.speackName }}
                            </div>
                        </li>
                    </ul>
              </div>
              <div class="send-message">
                  <div style="margin:5px;">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 3, maxRows: 3}"
                            placeholder="发送消息输入区"
                            v-model="sendData">
                        </el-input>
                  </div>
                  <div style="margin:5px;text-align:right;">
                      <span style="padding:2px 5px;">
                          <el-button type="info" @click="close">结束对话</el-button>
                      </span>
                      <span style="margin-right:10px;">
                          <el-button type="primary" @click="send">发送</el-button>
                      </span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
/**
 * 在线客服页
 */
export default {
    components: {},
    data() {
       return {
           closeFlag:false,
           sendData:'待发送的消息',
           chatData:[
               {
                  speackName:"店小二",
                  content:"你好！欢迎您光临小店，请问您有什么需要呢？"
               },
               {
                  speackName:"我",
                  content:"你好！我想知道你们都有什么快递" 
               }
           ]
       };
    },
    methods: {
        load:function (){
            if( this.count>100){
                return;
            }
            this.count += 2
        },
        send:function (){
            let data = {
                speackName:"我",
                content:"" 
            }
            data.content = this.sendData;
            this.chatData.push(data);
            this.sendData = '';
            console.log("发送后台："+this.sendData);
            this.scrollBottom(); //使滚动条到最下方
        },
        close:function(){
            let data = {
                speackName:"close",
                content:"" 
            }
            this.chatData.push(data);
            this.scrollBottom();
            console.log("发送后台："+this.sendData);
        },
        scrollBottom:function(){
             this.$nextTick(function() {
             let div = document.getElementById('myby');
             div.scrollTop = div.scrollHeight;
             })
        }
    },
    created() {

    }
};
</script>

<style scoped>
.customer-service-background{
    background: url("../../assets/kefu-back.jpg");
    height: 575px;
}
.chuang-kou-div{
    height: 397px;
    width: 820px;
    margin: 0px auto;
}
.dui-hua{
    border-bottom: 1px solid  rgb(248, 231, 242);
    height: 260px;
    width: 810px;
    overflow: auto;
    background-color: aliceblue;
    padding:5px;
}
.send-message{
    background-color: white;
    padding:5px;
}
.infinite-list-item{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
}
.employee-div{
    text-align: left;
    width: 100%;
}
.customer-div{
    text-align: right;
    width: 100%;
    color:black;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 7px;
}
</style>