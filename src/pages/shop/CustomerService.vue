<template>
  <div>
      <div class="customer-service-background">
          <div style="font-size:36px;padding:10px 50px;">
              客服中心 <span style="font-size:22px;padding-left:100px;">企业产品在线展示平台</span>
          </div>
          <el-divider></el-divider>
          <div class="chuang-kou-div">
              <div style="margin-bottom:5px;">
                   <el-button type="info" @click="getCustomerServer">人工客服</el-button>
                   <el-button type="info" @click="help">自助客服</el-button>
              </div>
              <div class="dui-hua" id="myby">
                    <ul class="infinite-list">
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
           sendData:'',
           chatData:[
               {
                  speackName:"店小二",
                  content:"你好！请选择人工客服或者自助客服。"
               }
           ],
           chatDataItem:{ // 单个消息元素
               speackName:"",
               content:""
           },
           path:"ws://localhost:8083/websocket", // socket连接地址
           socket:"", // socket对象
       };
    },
    methods: {
        scrollBottom:function(){
             this.$nextTick(function() {
             let div = document.getElementById('myby');
             div.scrollTop = div.scrollHeight;
             })
        },
        webSocketInit: function () { //请求来连接socket
            if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                // 实例化socket
                this.socket = new WebSocket(this.path) 
                // 监听socket连接
                this.socket.onopen = this.open
                // 监听socket错误信息
                this.socket.onerror = this.error
                // 监听socket消息
                this.socket.onmessage = this.getMessage
            }
        },
        open: function () {
            // socket连接成功的回调函数
            this.socket.send("呼叫人工客服")
            console.log("socket连接成功")
        },
        error: function (msg) {
            // 发生异常的回调方法
            console.log("连接错误", msg)
        },
        getMessage: function (msg) {
            // 获取消息
            let item = {
               speackName:"店小二",
               content:msg.data
            }
            this.chatData.push(item);
        },
        send: function (val) {
            // 发送消息
            this.socket.send(this.sendData)
            let data = {
                speackName: "我",
                content: this.sendData
            }
            this.chatData.push(data);
            this.sendData = '';
            console.log("发送后台："+this.sendData);
            this.scrollBottom(); //使滚动条到最下方
        },
        close: function () {
            // 关闭连接的方法
            this.socket.close();

            let data = {
                speackName:"close",
                content:"" 
            }
            this.chatData.push(data);
            this.scrollBottom();
            console.log("socket已经关闭")
        },
        getCustomerServer() {
            this.webSocketInit();
        },
        help() {
            let data = {
                speackName:"店小二",
                content:"该功能还在开发中喔" 
            }
            this.chatData.push(data);
        }
    },
    created() {
        
    },
    destroyed(){
         // 销毁监听
        this.socket.onclose = this.close
    },
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