<template>
  <div>
      <div class="top-div">
          <el-page-header @back="goBack" content="参数对比">
          </el-page-header>
      </div>
      <div style="text-align:left;padding-top:20px;">
          <span class="el-icon-warning"></span> 
          <span>更多详细信息可联系页面底部在线客户咨询</span>
      </div>
      <el-divider></el-divider>
      <!--对比内容开始-->
      <div :class="compareHeadFlag == true? 'test-div':'test-div2'">
          <table width="100%">
              <thead>
                  <tr>
                      <td>产品信息1</td><td>产品信息2</td><td>产品信息2</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>产品信息3</td><td>产品信息4</td><td>产品信息5</td>
                  </tr>
              </tbody>
          </table>
      </div>

      <div style="height:700px; background-color:red;">
            
      </div>
  </div>
</template>

<script>
/**
 * 产品参数比较页面
 */
 
export default {
    components: {},
    data() {
       return {
            compareHeadFlag:true,
            tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }]
       };
    },
    methods: {
      goBack:function() {
        console.log('go back');
      },
      handleScroll:function(){
           var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
           //console.log(scrollTop)
           if(scrollTop > 242){
                this.compareHeadFlag = false;
           }else{
                this.compareHeadFlag = true;
           }
      }
    },
    created() {
        
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
.top-search-input{
    width: 500px;
    float: left;
}
.top-search-button{
    float: left;
}
.top-div{
    background-color: #B3C0D1;
    padding: 10px;
    margin-top: 50px;
}
.test-div{
    background-color: antiquewhite;
}
.test-div2{
    background-color: antiquewhite;
    width: 100%;
    position: fixed;
    top: 0px;
}
</style>