<script>
import {defineComponent} from 'vue'
import {useConfigStore} from "@/stores/config";
import mapvgl from 'mapvgl';

export default defineComponent({
  name: "AmapTracerouteMap",
  data() {
    return {
      map: null,
      configStore: useConfigStore(),
    }
  },
  props: {
    ips: {
      type: Array,
      default: () => {
        return [
          // "140.91.212.31",
          // "43.241.189.30",
          // "43.241.189.29",
          // "114.31.199.41",
          // "4.16.45.169",
          // "4.15.125.54",
          // "202.97.27.241",
          // "113.108.81.189"
        ]
      }
    }
  },
  methods: {
    async init(ips) {
      let loader = this.$loading({
        lock: true,
        text: '正在加载路由地图',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 2099,
      })

      this.ips = ips;
      let points = [];
      let res;
      try {
        res = await this.batchGetIpInfo(this.ips);
      }catch (e){
        this.$message.error('获取IP路由位置信息失败');
        return;
      } finally{
        loader.close();
      }
      console.log(res);
      for (const re of res) {
        if (!re.latitude || !re.longitude) continue;
        // 检查是否和上一个一致
        if (points.length > 0) {
          let last = points[points.length - 1];
          if (last.latitude === re.latitude && last.longitude === re.longitude) continue;
        }
        points.push({
          ip: re.ip,
          latitude: re.latitude,
          longitude: re.longitude,
        })
      }
      console.log('points', points);
      try {
        await this.initMap(points);
      } catch (e) {
        console.error(e);
        this.$message.error('地图加载失败');
      }
    },
    async initMap(points) {
      // https://lbs.amap.com/api/javascript-api/reference/overlay#labelMarker
      console.log('initMap', points);
      let map = new AMap.Map('tracerouteMapContainer2', {
        resizeEnable: true,
        center: [points[0].longitude, points[0].latitude],
        zoom: 2
      });

      this.map = map;

      var layer = new AMap.LabelsLayer({
        zooms: [3, 20],
        zIndex: 1000,
        // 开启标注避让，默认为开启，v1.4.15 新增属性
        collision: true,
        // 开启标注淡入动画，默认为开启，v1.4.15 新增属性
        animation: true,
      });

      map.add(layer);


      let icon = AMap.Icon({
        size: new AMap.Size(60, 60),    // 图标尺寸
        image: './amp/poi-marker-default.png',  // Icon的图像
        imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(60, 60)   // 根据所设置的大小拉伸或压缩图片
      });

      // 创建呼吸点
      let i = 1;
      for (let point of points) {
        let circleMarker = new AMap.Marker({
          position: [point.longitude, point.latitude],
          icon: icon,
          offset: new AMap.Pixel(0, 5),
          anchor: 'bottom-center',
          label: {
            content: point.ip,
            offset: new AMap.Pixel(0, -10),  //设置文本标注偏移量
            direction: 'top' //设置文本标注方位
          },
        });
        circleMarker.setMap(map)
        // 设置点标记的动画效果，此处为弹跳效果
        // circleMarker.setAnimation('AMAP_ANIMATION_BOUNCE');
      }
      // 创建连接线
      // 绘制轨迹
      let polyline = new AMap.Polyline({
        map: map,
        path: points.map(item => {
          return [item.longitude, item.latitude]
        }),
        showDir: true,
        strokeColor: "#28F",  //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 10,      //线宽
        // strokeStyle: "solid"  //线样式
        // 折线拐点的绘制样式，默认值为'miter'尖角，其他可选值：'round'圆角、'bevel'斜角
        lineJoin: 'round',
      });
      console.log('build map success', map);

    },
    getIpInfo(ip) {
      // https://api.ip.sb/geoip/185.222.222.222
      // https://api.ip2location.io/?ip=
      return fetch(`https://api.ip2location.io/?ip=${ip}`).then(res => res.json());
    },
    batchGetIpInfo(ips) {
      return fetch(`http://ip-api.com/batch`, {
        method: 'POST',
        body: JSON.stringify(ips)
      }).then(res => res.json()).then(res => {
        return res.map(item => {
          return {
            ip: item.query,
            latitude: item.lat,
            longitude: item.lon
          }
        })
      })
    },
    close() {
      console.log('close map');
      this.map.clearMap()
      this.map.destroy()
      this.map = null;
    }
  }
})
</script>

<template>
  <div>
    <div id="tracerouteMapContainer2"></div>
  </div>
</template>

<style scoped>
#tracerouteMapContainer2 {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 600px;
}
</style>
