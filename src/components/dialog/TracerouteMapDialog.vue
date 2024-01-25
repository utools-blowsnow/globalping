<script>
import {defineComponent} from 'vue'
import TracerouteMap from "@/components/TracerouteMap.vue";
import AmapTracerouteMap from "@/components/AmapTracerouteMap.vue";

export default defineComponent({
  name: "TracerouteMapDialog",
  components: {AmapTracerouteMap, TracerouteMap},
  data() {
    return {
      dialogVisible: false,
      ips: []
    }
  },
  methods: {
    open(item) {
      this.dialogVisible = true;

      setTimeout(() => {
        this.ips = item.result.hops.map(item => {
          return item.resolvedAddress;
        }).filter(item => item !== null);
        this.$nextTick(async () => {
          this.$refs.tracerouteMap.init(this.ips);
        })
      }, 10);
    },
    onClose() {
      this.ips = [];
      this.dialogVisible = false;
      this.$refs.tracerouteMap.close();
    }
  }
})
</script>

<template>
  <div>
    <el-dialog
        title="路由地图"
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="onClose">
      <amap-traceroute-map ref="tracerouteMap" :ips="ips">
      </amap-traceroute-map>
    </el-dialog>
  </div>
</template>

<style scoped>

</style>
