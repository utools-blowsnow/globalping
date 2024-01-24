<script>
import {defineComponent} from 'vue'
import {useConfigStore} from "@/stores/config";

export default defineComponent({
  name: "TracerouteMap",
  data() {
    return {
      map: null,
      configStore: useConfigStore()
    }
  },
  props: {
    ips: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    async init(ips) {
      this.ips = ips;
      let points = [];
      let res = await this.batchGetIpInfo(this.ips);
      console.log(res);
      for (const re of res) {
        if (!re.latitude || !re.longitude) continue;
        // 检查是否和上一个一致
        if (points.length > 0) {
          let last = points[points.length - 1];
          if (last.lat === re.latitude && last.lng === re.longitude) continue;
        }
        points.push({
          lat: re.latitude,
          lng: re.longitude,
        })
      }
      console.log('points', points);
      try {
        await this.initAMap(points);
      } catch (e) {
        console.error(e);
        this.$message.error('地图加载失败');
      }
    },
    async initAMap(points) {
      let map = new AMap.Map("tracerouteMapContainer", {
        zoom: 2,
        showIndoorMap: false, //关闭室内地图
        //   viewMode: "3D",
        pitch: 48,
        center: [points[0].lng, points[0].lat],
      });
      console.log(map, map.Wh);
      this.map = map;
      // 创建loca
      let loca = new Loca.Container({
        map: map,
      });

      let scatterSource = new Loca.GeoJSONSource({
        data: {
          type: "FeatureCollection",
          features: points.map((item) => {
            return {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [item.lng, item.lat],
              },
            };
          }),
        },
      });

      // 创建呼吸点
      let scatter = new Loca.ScatterLayer({
        zooms: [2, 20],
        zIndex: 10,
        visible: true,
        opacity: 1,
      });
      // scatter.setStyle({});
      console.log(scatterSource);
      scatter.setSource(scatterSource);
      scatter.setStyle({
        unit: "px",
        borderWidth: 0,
        size: (_, feature) => {
          return [60, 60];
        },
        texture:
            "https://a.amap.com/Loca/static/loca-v2/demos/images/breath_yellow.png",
        duration: 2000,
        animate: true,
      });
      loca.add(scatter);

      let lines = [];
      for (let i = 0; i < points.length; i++) {
        if (i + 1 >= points.length) break;
        lines.push([
          [points[i].lng, points[i].lat],
          [points[i + 1].lng, points[i + 1].lat],
        ]);
      }
      let linkSource = new Loca.GeoJSONSource({
        data: {
          type: "FeatureCollection",
          features: lines.map((item) => {
            return {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: item,
              },
            };
          }),
        },
      });
      console.log(
          lines.map((item) => {
            return {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: item,
              },
            };
          })
      );
      let linkLayer = new Loca.PulseLineLayer({
        loca: loca,
        zooms: [2, 20],
        zIndex: 10,
        visible: true,
        opacity: 1,
        depth: true,
      });

      linkLayer.setSource(linkSource);
      linkLayer.setStyle({
        //     altitude: 0,
        lineWidth: (_, feature) => 3,
        interval: 0.25,
        duration: 5000,
        lineColors: function (index, feat) {
          return ["rgb(255,228,105)", "rgb(255,164,105)", "rgba(1, 34, 249,1)"];
        },
        maxHeightScale: 0.3, // 弧顶位置比例
        headColor: "rgba(255, 255, 0, 1)",
        trailColor: "rgba(255, 255,0,0)",
      });
      loca.animate.start();

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
            latitude: item.lat,
            longitude: item.lon
          }
        })
      })
    },
    close() {
      this.map.destroy()
      this.map = null;
    }
    // async batchGetIpInfo(ips) {
    //   let promise = [];
    //   for (const ip of ips) {
    //     promise.push(this.getIpInfo(ip));
    //   }
    //   return await Promise.all(promise);
    // }
  }
})
</script>

<template>
  <div>
<!--    高德地图KEY：-->
<!--    <el-input v-model="configStore.mapKey" show-password size="mini" style="width: 200px;"-->
<!--              @change="initAmpLoader"></el-input>-->
    <div id="tracerouteMapContainer"></div>
  </div>
</template>

<style scoped>
#tracerouteMapContainer {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 600px;
}
</style>
