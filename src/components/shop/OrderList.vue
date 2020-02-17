<template>
  <div>

    <div>
      <div class="search-div">
        <el-input placeholder="请输入订单号" prefix-icon="el-icon-search" v-model="orderId"></el-input>
      </div>
      <div class="search-button">
        <el-button type="primary">查询</el-button>
      </div>

      <!-- <div class="more-search-condition">
        <el-button type="text" style="color:black;">
          更多筛选条件
          <span class="el-icon-arrow-down"></span>
        </el-button>
      </div> -->

    </div>

    <div style="height:70px;"></div><!--占空地方-->

    <div class="date-select">
      <div class="block">
        <el-date-picker
          v-model="dateSearch"
          type="datetimerange"
          range-separator="至"
          start-placeholder="下单日期开始日期"
          end-placeholder="下单日期结束日期">
        </el-date-picker>
      </div>
    </div>

    <div style="height:50px;"></div><!--占空地方-->

    <div class="list-head-div">
      <table width="100%">
        <tbody>
          <tr>
            <td class="table-td table-td1">产品</td>
            <td class="table-td">单价</td>
            <td class="table-td">数量</td>
            <td class="table-td">商品操作</td>
            <td class="table-td">实付款</td>
            <td class="table-td">交易状态</td>
            <td class="table-td">操作</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="height:30px;"></div>

    <!--列表数据展示开始-->
    <div style="margin:20px 0px" v-for="(item,index) in orderData" :key="index">
      <div class="list-body-div">
        <table width="100%">
          <tbody>
            <tr>
              <td class="tbody-head-td-date">2020-02-17</td>
              <td class="tbody-head-td-order-id">订单号：20200217104738000</td>
              <td width="50%"></td>
              <td class="tbody-head-td-del">
                <el-button icon="el-icon-delete" style="padding:0px;border:none;"></el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <table width="100%">
          <tbody>
            <tr>
              <td style="width:110px;">
                <el-image style="width: 100px; height: 100px" :src="orderData[0].imgUrl" fit="fill"></el-image>
              </td>
              <td style="width:30%;">
                <div style="font-size:12px; padding:10px;">{{orderData[0].title}}</div>
                <div style="font-size:12px; padding:10px;">{{orderData[0].size}}</div>
              </td>
              <td style="width:10%;text-align:center;">
                <p style="font-size:14px; padding:0px;">￥{{orderData[0].price}}</p>
              </td>
              <td style="width:10%;text-align:center;">
                <p style="font-size:14px; padding:0px;">{{orderData[0].number}}</p>
              </td>
              <td style="width:10%;text-align:center;">
                <p style="font-size:14px; padding:0px;">申请售后</p>
              </td>
              <td style="width:10%;text-align:center;">
                <p style="font-size:14px; padding:0px;">￥{{orderData[0].paymentMoney}}</p>
              </td>
              <td style="width:10%;text-align:center;">
                <p style="font-size:14px; padding:0px;">{{orderData[0].paymentStatus}}</p>
              </td>
              <td style="width:10%;text-align:center;">
                <p style="font-size:14px; padding:0px;">申请开票</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--列表数据展示结束-->
    <div style="padding:5px 30%;">
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
/**
 * 订单页的列表组件
 */
export default {
  components: {},
  data() {
    return {
      orderId: "",
      dateSearch: "",
      orderData: [
        {
          id: 1,
          buyDate: "2020-10-10",
          imgUrl: require("@/assets/phone.jpg"),
          title: "渐变色耐热玻璃杯男女大容量便携水杯随手杯创意茶杯韩国学生杯子",
          size: "颜色分类：硕士杯（蓝色）",
          price: 15.7,
          number: 1,
          paymentMoney: 15.0,
          paymentStatus: "交易成功",
          shopUrl: "www.baidu.com"
        },
        {
          id: 2,
          buyDate: "2020-10-10",
          imgUrl: require("@/assets/phone.jpg"),
          title: "渐变色耐热玻璃杯男女大容量便携水杯随手杯创意茶杯韩国学生杯子",
          size: "颜色分类：硕士杯（蓝色）",
          price: 15.7,
          number: 1,
          paymentMoney: 15.0,
          paymentStatus: "交易成功",
          shopUrl: "www.baidu.com"
        },
        {
          id: 3,
          buyDate: "2020-10-10",
          imgUrl: require("@/assets/phone.jpg"),
          title: "渐变色耐热玻璃杯男女大容量便携水杯随手杯创意茶杯韩国学生杯子",
          size: "颜色分类：硕士杯（蓝色）",
          price: 15.7,
          number: 1,
          paymentMoney: 15.0,
          paymentStatus: "交易成功",
          shopUrl: "www.baidu.com"
        },
        {
          id: 4,
          buyDate: "2020-10-10",
          imgUrl: require("@/assets/phone.jpg"),
          title: "渐变色耐热玻璃杯男女大容量便携水杯随手杯创意茶杯韩国学生杯子",
          size: "颜色分类：硕士杯（蓝色）",
          price: 15.7,
          number: 1,
          paymentMoney: 15.0,
          paymentStatus: "交易成功",
          shopUrl: "www.baidu.com"
        },
        {
          id: 5,
          buyDate: "2020-10-10",
          imgUrl: require("@/assets/phone.jpg"),
          title: "渐变色耐热玻璃杯男女大容量便携水杯随手杯创意茶杯韩国学生杯子",
          size: "颜色分类：硕士杯（蓝色）",
          price: 15.7,
          number: 1,
          paymentMoney: 15.0,
          paymentStatus: "交易成功",
          shopUrl: "www.baidu.com"
        }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>

<style scoped>
.search-div {
  width: 300px;
  margin: 10px 0px;
  float: left;
}
.search-button {
  float: left;
  margin: 10px 0px 0px 10px;
  padding: 0px 22px;
}
.search-collapse {
  width: 300px;
  float: left;
}
.more-search-condition {
  margin: 10px 0px 0px 20px;
  float: left;
}
.list-head-div {
  width: 100%;
  background-color: #f5f5f5;
  height: 40px;
}
.list-body-div {
  width: 100%;
  background-color: #f5f5f5;
}
.table-td {
  color: #3c3c3c;
  font-size: 13px;
  text-align: center;
  padding: 7px 0px;
  width: 10%;
}
.table-td1 {
  width: 40%;
}
.tbody-head-td-date {
  width: 20%;
  font-size: 13px;
  font-weight: 700;
  padding: 7px 30px;
}
.tbody-head-td-order-id {
  width: 20%;
  font-size: 12px;
  font-weight: 500;
}
.tbody-head-td-del {
  width: 8%;
  padding: 5px;
  text-align: center;
}
.date-select{
    margin-top: 10px;
}
</style>