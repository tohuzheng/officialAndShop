<template>
  <div>
     <div class="lun-bo-tu-div">
        <carousel/>
     </div> 
     <el-divider></el-divider>
     <div class="data-body-div">
          <div class="condition-div">
              <h1>{{category}}类详细页</h1>
          </div>
          <div class="data-view-div">
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
          </div>
     </div>
  </div>
</template>

<script>
/**
 点击某个品类后跳转的品类商品详细页
 */
import carousel from '@/components/shop/carousel.vue'
import qs from 'qs'
export default {
    components: {carousel},
    data() {
       return {
         category:'',  // 商品品类
         dialogImageUrl: '', // 文件地址
         dialogVisible: false
       };
    },
    methods: {
        getParam:function(){ // 获取路由参数
          this.category = this.$route.params.type;
        },
        handleRemove(file, fileList) { // 删除文件
          console.log(file.name, fileList);
          let dto = {};
          dto.fileName = file.name;
          dto.list = ["yi","er","san","si","wu"];
          //let param = qs.stringify(dto);
          let param = dto;
          this.axios.post("/api/car/carManage/deleteFile.do",param)
          .then((data) => {
              alert(data.data)
          });
        },
        handlePictureCardPreview(file) { // 查看文件
          console.log("handlePictureCardPreview");
          console.log(file);
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
    },
    created() {
      this.getParam();
    }
};
</script>

<style scoped>
.lun-bo-tu-div{
  width: 750px;
  margin: 10px auto;
}
.data-body-div{
  width: 80%;
  height: 500px;
  margin: 0px auto;
}
</style>