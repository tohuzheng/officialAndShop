<template>
    <div>
        <!--文件上传-->
        <el-upload
        action="/api/car/carManage/upfile.do"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <!--文件上传-->
    </div>
</template>

<script>
/**
    原品类详细页（仅参考，无实际使用）已废弃
    现在用于测试组件
 */
export default {
    data(){
        return{
            dialogImageUrl: '', // 文件地址
            dialogVisible: false
        };
    },
    methods:{
        handleRemove(file, fileList) { // 删除文件
          console.log(file.name, fileList);
          let dto = {};
          dto.fileName = file.name;
          dto.list = ["yi","er","san","si","wu"];
          httpPost("/api/car/carManage/deleteFile.do",dto);
        },
        handlePictureCardPreview(file) { // 查看文件
          console.log("handlePictureCardPreview");
          console.log(file);
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
    }
}
</script>

<style>
.left-div{
    width: 50px;
    background-color: aqua;
}

 .shop-one{
   width: 190px;
   height: 266px;
   background-color: aliceblue;
 }

.shop-img{
  width: 120px;
  height: 120px;
  margin-top: 20px;
}
.shop-world{
  font-size: 12px;
  margin: 25px 10px 5px 10px;
  text-align: left;
  overflow: hidden;/* 溢出部分隐藏 */
  text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
  display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-line-clamp: 2; /* 文本需要显示多少行 */
}
.shop-price{
  color:red;
  text-align: left;
  margin: 20px auto 0px 10px;
  font-weight: 600;
}
</style>