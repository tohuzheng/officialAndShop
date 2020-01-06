<template>
      <div class="tile-div">
        <el-row>
            <el-col :span="6">
                <div class="items-div">
                    <div class="title-div">购买指南</div>
                    <div class="item-div">在线客服</div>
                    <div class="item-div">购买帮助</div>
                    <div class="item-div">服务保障</div>
                </div>
            </el-col>

            <el-col :span="6">
                <div class="items-div">
                    <div class="title-div">售后服务</div>
                    <div class="item-div">关于退货</div>
                    <div class="item-div">售后政策</div>
                    <div class="item-div">取消订单</div>
                    <div class="item-div">防伪查询</div>
                </div>
            </el-col>

            <el-col :span="6">              
                <div class="items-div">
                    <div class="title-div">意见反馈</div>
                    <div class="item-div">投诉建议</div>
                    <div class="item-div">意见留言</div>
                </div>
            </el-col>

            <el-col :span="6">
                <div class="items-div">
                    <div class="title-div">配送方式</div>
                    <div class="item-div">配送范围与运费</div>
                    <div class="item-div">验货与签收</div>
                </div>
            </el-col>
        </el-row> 
      </div>
</template>


<style>
.tile-div{
    margin: 5px 0px 0px 0px;
}

.title-div{
    font-size: 14px;
    font-weight: 900;
    margin-bottom: 20px;
}
.item-div{
    margin: 5px 0px 0px 0px;
    font-size: 12px;
}

.items-div{
    margin: 10px 0px 30px 0px;
}
</style>