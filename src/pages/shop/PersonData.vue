<template>
  <div class="back-ground-img">
    <div class="div-max">
        <table align="center">
            <tr>
                <td> 账户：</td> <td><el-input v-model="input" ></el-input></td>
            </tr>
            <tr>
                <td>真实姓名：</td> <td><el-input v-model="input" ></el-input></td>
            </tr>
            <tr>
                <td>生日：</td> <td><el-input v-model="input" ></el-input></td>
            </tr>
            <tr>
                <td>性别：</td> <td><el-input v-model="input" ></el-input></td>
            </tr>
            <tr>
                <td>身份证号：</td> <td><el-input v-model="input" ></el-input></td>
            </tr>
            <tr>
                <td></td> <td></td>
            </tr>
        </table>
        <div style="margin-top:50px;">
            <el-button type="primary" style="width:300px;">修改</el-button>
        </div>
    </div>
  </div>
</template>

<script>
/**
 * 个人信息页
 */
export default {
    components: {},
    data() {
       return {
           input:''
       };
    },
    methods: {

    },
    created() {

    }
};
</script>

<style scoped>
.div-max{
    margin: 0px auto;
    width: 500px;
    height: 400px;
    padding: 50px 0px;
    border: 1px #ececec solid;
    text-align: center;
    background-color: white;
}
.logo-lable{
    font-size: 18px;
    font-weight: 600px;
    margin-left: 100px;
}
.back-ground-img{
    background: url("../../assets/layout-bg.png");
}
</style>