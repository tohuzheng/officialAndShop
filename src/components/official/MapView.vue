<template>
  <div>
      <el-row>
        <el-col :span="12">
            <div style="height:320px;padding-top:15px;">             
                 <div class="elMap">
                    <el-amap  vid="map"
                            :zoom="zoom"
                            :center="center"
                            :events="events">
                    </el-amap>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <div style="text-align:center;padding:10px 0px;">
                <el-card class="box-card" style="width:90%;">
                    <div style="font-size:32px;padding:15px;">联系我们</div>
                    <div style="font-size:26px;padding:15px;">企业产品在线展示销售平台</div>
                    <div style="font-size:16px;padding:10px 0px;padding-left:110px;">地址：武汉市洪山区关山大道589号武汉华夏理工学院</div>
                    <div style="font-size:16px;padding:10px;padding-right:130px;">电话：15666666666</div>
                    <div style="font-size:16px;padding:10px;padding-right:130px;">微信：12388888888</div>
                    <div style="font-size:16px;padding:10px;padding-right:95px;">邮箱：kefu@official.com</div>
                </el-card>
            </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAMap from 'vue-amap'; // 高德
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '625ce6b4fd3b2292483e2380290a5c50',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
  v: '1.4.4'
});
export default {
    components: {},
    data() {
        return {
            zoom: 16,
            center: [114.412072,30.466706],
            events: {
                click (e) {
                let { lng, lat } = e.lnglat;
                console.info(e.lnglat);
                var geocoder = new AMap.Geocoder({
                    city: '全国'
                });
                geocoder.getAddress(e.lnglat, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                    that.addressDetail = result.regeocode.formattedAddress;
                    }
                });
                }
            }
        };
    },
    methods: {
        findAddress () {
            var map = new AMap.Map('map', {
                zoom: 16,  // 初始地图级别
                showIndoorMap: false  // 关闭室内地图
            });
            this.beForSave();
            var addressPoint = [];
            var geocoder = new AMap.Geocoder({
                city: '全国'
            });
            debugger;
            geocoder.getLocation(this.shop.contactAddr, function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                console.info(result.geocodes[0].location);
                addressPoint = [result.geocodes[0].location.lng,result.geocodes[0].location.lat];
                console.info(addressPoint);
                map.setCenter(addressPoint);
                debugger;
                }
            });
        }
    },
    created() {
        
    }
};
</script>

<style scoped>
  .elMap {
    height:300px;
    width: 518px;
    margin-left: 80px;
  }
</style>