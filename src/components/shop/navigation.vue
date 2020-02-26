<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="toIndex">首页</el-menu-item>
      <el-menu-item index="3" @click="officialIdex">了解企业</el-menu-item>
      <el-menu-item index="6" @click="toBuyCar">我的购物车</el-menu-item>
      <el-menu-item index="8" @click="toOrder">我的订单</el-menu-item>
      <el-menu-item index="9" @click="toCompare">参数对比</el-menu-item>
      <el-menu-item index="10"><div style="width:550px;"></div></el-menu-item>
      <el-menu-item index="4" @click="toRegister" v-show="true">注册</el-menu-item>
      <el-submenu index="2">
        <template slot="title">请登录</template>
        <el-menu-item index="2-1" @click="toPerson">个人信息</el-menu-item>
        <el-menu-item index="2-2" @click="updatePassword">修改密码</el-menu-item>
        <el-menu-item index="2-3" @click="toMessige">
          <el-badge is-dot class="item" :hidden="true">
            我的消息
          </el-badge>
        </el-menu-item>
        <el-menu-item index="2-4" @click="toMyFootprint">我的足迹</el-menu-item>
        <el-menu-item index="2-5">注销</el-menu-item>
      </el-submenu>
    </el-menu>

    <!--修改密码，对话框-->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible"  width="30%">
      <table>
         <tr>
           <td width="60px">旧密码</td>
           <td>
             <el-input v-model="oldPassword" placeholder="请输入旧密码"></el-input>
           </td>
         </tr>
         <tr>
           <td width="60px">新密码</td>
           <td>
             <el-input v-model="newPassword" placeholder="请输入新密码"></el-input>
           </td>
         </tr>
         <tr>
           <td width="60px">确认密码</td>
           <td>
             <el-input v-model="newPassword2" placeholder="确认新密码" @blur="checkPasswordEquals"></el-input>
           </td>
         </tr>
      </table>
      <div :class="chechPasswordFlag ==true? 'tihis-td-right' : 'tishi-td-error'">
          {{chechPasswordWord}}
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//首页导航栏组件
export default {
    name:"nave",
    data(){
        return{
            dialogFormVisible: false,
            oldPassword:'',
            newPassword:'',
            newPassword2:'',
            chechPasswordWord:'',
            chechPasswordFlag: true
        };
    },
    methods:{
      toIndex:function(){
        this.$router.push("/shop");
      },
      toRegister:function(){
        this.$router.push("/register");
      },
      officialIdex:function(){
        this.$router.push("/official");
      },
      toBuyCar:function(){
        this.$router.push("/buycar");
      },
      toOrder:function(){
        this.$router.push("/order");
      },
      toCompare:function(){
        this.$router.push("/compare");
      },
      toPerson:function(){
        this.$router.push("/person");
      },
      toMessige:function(){
        this.$router.push("/messige");
      },
      toMyFootprint:function(){
        this.$router.push("/myfootprint");
      },
      updatePassword:function(){
        this.dialogFormVisible = true;
      },
      checkPasswordEquals:function(){
        let pass1 = this.newPassword;
        let pass2 = this.newPassword2;
        if(pass1 == '' || pass1 == null){
          this.chechPassword = '';
        }else{
            if(pass1 === pass2){
                this.chechPasswordWord = '两次密码一致';
                this.chechPasswordFlag = true;
            }else{
                this.chechPasswordWord = '两次密码不一致，请检查';
                this.chechPasswordFlag = false;
            }
        }
        
      }
    }
};
</script>
  
<style scope>
  .el-header {
        padding : 0px;
  }
  .tishi-td-error{
    height: 40px;
    padding-top:10px;
    color: red;
  }
  .tihis-td-right{
    height: 40px;
    padding-top:10px;
    color: rgb(42, 238, 101);
  }
</style>