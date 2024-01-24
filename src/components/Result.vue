<script>
import {defineComponent} from 'vue'
import TracerouteMapDialog from "@/components/dialog/TracerouteMapDialog.vue";

export default defineComponent({
  name: "Result",
  components: {TracerouteMapDialog},
  props: {
    taskDetail: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    calcTtl() {
      return (item) => {
        if (item.result.status === 'finished' && item.result.timings.length > 0) {
          return item.result.timings[0].ttl
        }
        return null;
      }
    }
  },
  methods: {
    sortTtl(a, b) {
      let attl = parseFloat(this.calcTtl(a)) || 0;
      let bttl = parseFloat(this.calcTtl(b))|| 0;
      return attl - bttl
    },
    openTracerouteMapDialog(item) {
      if (item.result.status !== 'finished') {
        this.$message.error('请在任务完成后查看');
        return;
      }
      this.$refs.tracerouteMapDialog.open(item);
    }
  }
})
</script>

<template>
  <div>
    <el-table
        :data="taskDetail.results"
        style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="scope">
        <pre
            style="white-space: break-spaces;margin: 10px 0;word-break: break-all;">{{ scope.row.result.rawOutput }}</pre>
        </template>
      </el-table-column>
      <el-table-column
          prop="probe.network"
          min-width="200px"
          label="监测点">
        <template v-slot="scope">
          <img style="width: 28px;height: 20px;"
               :src="'https://cdn.jsdelivr.net/npm/country-flag-icons@1.5.5/3x2/'+scope.row.probe.country+'.svg'"
               alt="">
          {{ scope.row.probe.city }},{{ scope.row.probe.country }},{{
            scope.row.probe.continent
          }} - {{ scope.row.probe.network }} ( AS{{ scope.row.probe.asn }} )
        </template>
      </el-table-column>
      <el-table-column
          prop="result.status"
          label="状态">
        <template v-slot="scope">
          <el-tag
              v-if="scope.row.result.status === 'finished'"
              type="success">完成</el-tag>
          <el-tag
              v-else-if="scope.row.result.status === 'failed'"
              type="danger" v-tooltip="scope.row.result.rawOutput">失败</el-tag>
          <el-tag
              v-else-if="scope.row.result.status === 'in-progress'"
              type="primary">查询中</el-tag>
        </template>
      </el-table-column>
      <template v-if="taskDetail.type === 'ping'">
        <el-table-column
            prop="result.resolvedAddress"
            label="响应IP">
        </el-table-column>
        <el-table-column
            prop="result.stats.avg"
            sortable
            label="响应时间(ms)">
        </el-table-column>
        <el-table-column
            prop="result.stats.total"
            sortable
            :sort-method="sortTtl"
            label="TTL">
          <template v-slot="scope">
            {{ calcTtl(scope.row) }}
          </template>
        </el-table-column>
        <el-table-column
            prop="result.stats.loss"
            sortable
            label="丢包率(%)">
        </el-table-column>
      </template>
      <template v-else-if="taskDetail.type === 'traceroute'">
        <el-table-column
            prop="result.resolvedAddress"
            label="响应IP">
        </el-table-column>
        <el-table-column
            sortable
            label="DNS">
          <template v-slot="scope">
            {{ scope.row.probe.resolvers.join(', ') }}
          </template>
        </el-table-column>
        <el-table-column
            label="操作">
          <template v-slot="scope">
            <el-button size="small" type="primary" icon="el-icon-location" @click="openTracerouteMapDialog(scope.row)">地图</el-button>
          </template>
        </el-table-column>
      </template>
      <template v-else-if="taskDetail.type === 'dns'">
        <el-table-column
            prop="result.timings.total"
            label="总耗时">
        </el-table-column>
        <el-table-column
            prop="result.resolver"
            sortable
            label="DNS">
        </el-table-column>
      </template>
      <template v-else-if="taskDetail.type === 'mtr'">
        <el-table-column
            prop="result.resolvedAddress"
            label="响应IP">
        </el-table-column>
        <el-table-column
            prop="result.resolvedHostname"
            label="响应域名">
        </el-table-column>
        <el-table-column
            sortable
            label="DNS">
          <template v-slot="scope">
            {{ scope.row.probe.resolvers.join(', ') }}
          </template>
        </el-table-column>
      </template>
      <template v-else-if="taskDetail.type === 'http'">
        <el-table-column
            prop="result.timings.total"
            label="总耗时(ms)">
        </el-table-column>
        <el-table-column
            prop="result.timings.dns"
            label="DNS耗时(ms)">
        </el-table-column>
        <el-table-column
            prop="result.timings.tcp"
            label="TCP耗时(ms)">
        </el-table-column>
        <el-table-column
            prop="result.timings.tls"
            label="TLS耗时(ms)">
        </el-table-column>
        <el-table-column
            prop="result.timings.firstByte"
            label="TTFB耗时(ms)">
        </el-table-column>
        <el-table-column
            prop="result.timings.download"
            label="下载耗时(ms)">
        </el-table-column>
      </template>

    </el-table>

    <traceroute-map-dialog ref="tracerouteMapDialog"></traceroute-map-dialog>
  </div>
</template>

<style scoped>

</style>
