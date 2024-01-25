<script lang="ts">
import VConsole from 'vconsole';
import Vue from 'vue'
import {createMeasurement, checkMeasurement} from './api/globalping.ts'
import Collapse from "@/components/collapse.vue";
import Result from "@/components/Result.vue";
import TracerouteMap from "@/components/TracerouteMap.vue";
import AmapTracerouteMap from "@/components/AmapTracerouteMap.vue";


let vConsole = null;
vConsole = new VConsole();
vConsole.hideSwitch()
// 监听Ctrl + F12 打开调试
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.keyCode === 123) {
    if (vConsole == null){
      vConsole = new VConsole();
      vConsole.hideSwitch()
    }
    vConsole.show()
  }
});

export default {
  name: 'App',
  components: {AmapTracerouteMap, TracerouteMap, Result, Collapse},
  data() {
    return {
      /* 为el-tooltip设置content值 */
      tooltipContent: '',
      /* 为el-tooltip设置placement值 */
      tooltipPlacement: 'bottom',

      form: {
        // ping┃traceroute┃dns┃mtr┃http
        type: 'ping',
        target: '',
        region: '',
        limit: 10,
        measurementOptions: {}
      },
      formTypeOptions: {
        ping: {
          packets: 3,
        },
        traceroute: {
          port: 80,
          protocol: 'ICMP',
        },
        dns: {
          query: {
            type: 'A',
          },
          // ipv4  / hostname
          resolver: "",
          port: 53,
          // TCP┃UDP
          protocol: 'UDP',
          // 切换从根服务器到目标域名的委派路径跟踪。
          trace: false,
        },
        mtr: {
          port: 80,
          protocol: 'ICMP',
          packets: 3,
        },
        http: {
          request: {
            host: "",
            path: "",
            query: "",
            // HEAD┃GET
            method: 'HEAD',
            headers: {},
          },
          resolver: "",
          // Min 0┃Max 65535 Default: 80
          port: 80,
          // HTTP┃HTTPS┃HTTP2
          protocol: 'HTTP',
        }
      },
      regions: [
        {
          label: '默认',
          value: ''
        },
        {
          label: '亚洲',
          value: 'Eastern Asia'
        },
        {
          label: '东南亚',
          value: 'South-eastern Asia'
        },
        {
          label: '北非',
          value: 'Northern Africa'
        },
        {
          label: '东非',
          value: 'Eastern Africa'
        },
        {
          label: '中非',
          value: 'Middle Africa'
        },
        {
          label: '南部非洲',
          value: 'Southern Africa'
        },
        {
          label: '西非',
          value: 'Western Africa'
        },
        {
          label: '加勒比地区',
          value: 'Caribbean'
        },
        {
          label: '中美洲',
          value: 'Central America'
        },
        {
          label: '南美洲',
          value: 'South America'
        },
        {
          label: '北美',
          value: 'Northern America'
        },
        {
          label: '中亚',
          value: 'Central Asia'
        },

        {
          label: '南亚',
          value: 'Southern Asia'
        },
        {
          label: '西亚',
          value: 'Western Asia'
        },
        {
          label: '东欧',
          value: 'Eastern Europe'
        },
        {
          label: '北欧',
          value: 'Northern Europe'
        },
        {
          label: '南欧',
          value: 'Southern Europe'
        },
        {
          label: '西欧',
          value: 'Western Europe'
        },
        {
          label: '澳大利亚和新西兰',
          value: 'Australia and New Zealand'
        },
        {
          label: '美拉尼西亚',
          value: 'Melanesia'
        },
        {
          label: '密克罗尼西亚',
          value: 'Micronesia'
        },
        {
          label: '波利尼西亚',
          value: 'Polynesia'
        }
      ],

      showOptions: false,
      taskDetail: {
        type: null,
        results: []
      },

      timer: null,
    }
  },
  watch: {},
  computed: {
    finishedTaskNum(){
      if (!this.taskDetail.results) return 0;
      return this.taskDetail.results.filter(item => item.result.status === 'finished').length
    }
  },
  mounted() {
    if (window['utools']) {
      utools.onPluginEnter(({code, type, payload}) => {
        if (type === 'regex') {
          this.form.target = payload;
        }
        if (code === 'ping' || code === 'traceroute' || code === 'dns' || code === 'mtr' || code === 'http') {
          this.form.type = code;
        }
        if (this.form.target) {
          this.createTask();
        }
        console.log('用户进入插件', code, type, payload);
      });
    }
  },
  methods: {
    async createTask() {
      let params = {...this.form} as any;
      params.inProgressUpdates = true;
      params.measurementOptions = this.formTypeOptions[this.form.type];
      if (params.region) {
        params.locations = [{
          region: params.region
        }];
      }
      delete params.region;
      if (!params.target){
        this.$message.error('请输入目标地址');
        return;
      }
      if (params.target.startsWith('http://') || params.target.startsWith('https://')){
        this.$message.error('目标地址不要带http://或https://');
        return;
      }
      // 排除空数据
      for (let key in params.measurementOptions) {
        if (params.measurementOptions[key] === null || params.measurementOptions[key] === undefined || params.measurementOptions[key] === '') {
          delete params.measurementOptions[key];
        }
      }
      if (params.measurementOptions.request) {
        for (let key in params.measurementOptions.request) {
          if (params.measurementOptions.request[key] === null || params.measurementOptions.request[key] === undefined || params.measurementOptions.request[key] === '') {
            delete params.measurementOptions.request[key];
          }
        }
      }
      if (this.timer) clearInterval(this.timer);
      this.taskDetail = {
        type: null,
        status: 'in-progress',
        results: []
      };
      let loader = this.$loading({
        lock: true,
        text: '正在创建任务中..',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      try {
        let taskId = await createMeasurement(params);
        this.checkTaskLister(taskId, true);
      } catch (e) {
        console.error("createTask", e)
        this.$message.error(e.message);
        return;
      } finally {
        loader.close();
      }
    },
    checkTaskLister(taskId, first=false) {
      console.log(taskId);
      let runTask = async () => {
        try {
          let res = await checkMeasurement(taskId);
          console.log(res);
          this.taskDetail = res;
          console.log('finishedTaskNum', this.finishedTaskNum);
          // in-progress┃finished
          if (res.status === 'finished') {
            clearInterval(this.timer);
            this.timer = null;
          }
        } catch (e) {
          console.error("checkTaskLister", e)
          this.$message.error(e.message);
          return;
        }
      }
      if (first) {
        runTask();
      }
      this.timer = setInterval(runTask, 1000);
    }
  }
}
</script>

<template>
  <div id="app">
    <div style="background: #fff;padding: 20px;overflow: auto;width: 100%;">
      <el-form :inline="true" class="demo-form-inline" label-width="200px"
               label-position="top">
        <div>
          <el-form-item label="测试类型">
            <el-select placeholder="测试类型" v-model="form.type" size="small"
                       style="width: 120px;">
              <el-option label="ping" value="ping"></el-option>
              <el-option label="traceroute" value="traceroute"></el-option>
              <el-option label="dns" value="dns"></el-option>
              <el-option label="mtr" value="mtr"></el-option>
              <el-option label="http" value="http"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目标">
            <el-input placeholder="目标地址" v-model="form.target" size="small"
                      @keydown.native.enter="createTask"
                      style="width: 160px;"></el-input>
          </el-form-item>
          <el-form-item label="查询位置">
            <el-select placeholder="请选择位置" v-model="form.region" size="small"
                       style="width: 120px;">
              <el-option v-for="item in regions" :label="item.label"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="查询数量">
            <el-input-number v-model="form.limit" size="small" :min="1" :max="200"
                             style="width: 120px;"
                             controls-position="right"></el-input-number>
          </el-form-item>
          <el-form-item>
            <template v-slot:label>
              &nbsp;
            </template>
            <el-button type="primary" size="small"
                       @click="createTask">查询</el-button>
            <el-button v-if="showOptions" type="primary" size="small" icon="el-icon-arrow-up"
                       @click="showOptions = false">配置</el-button>
            <el-button v-else type="primary" size="small" icon="el-icon-arrow-down"
                       @click="showOptions = true">配置</el-button>
          </el-form-item>
        </div>
        <div v-show="showOptions">
          <template v-if="form.type === 'ping'">
            <el-form-item label="包数量">
              <el-input-number v-model="formTypeOptions.ping.packets" size="small" :min="1"
                               :max="16" style="width: 120px;"
                               controls-position="right"></el-input-number>
            </el-form-item>
          </template>
          <template v-else-if="form.type === 'traceroute'">
            <el-form-item label="端口">
              <el-input-number v-model="formTypeOptions.traceroute.port" size="small" :min="0"
                               :max="65535" style="width: 120px;"
                               controls-position="right"></el-input-number>
            </el-form-item>
            <el-form-item label="协议">
              <el-select v-model="formTypeOptions.traceroute.protocol" size="small"
                         style="width: 120px;">
                <el-option label="ICMP" value="ICMP"></el-option>
                <el-option label="TCP" value="TCP"></el-option>
                <el-option label="UDP" value="UDP"></el-option>
              </el-select>
            </el-form-item>
          </template>
          <template v-else-if="form.type === 'dns'">
            <el-form-item label="类型">
              <el-select v-model="formTypeOptions.dns.query.type" size="small"
                         style="width: 120px;">
                <el-option label="A" value="A"></el-option>
                <el-option label="AAAA" value="AAAA"></el-option>
                <el-option label="ANY" value="ANY"></el-option>
                <el-option label="CNAME" value="CNAME"></el-option>
                <el-option label="DNSKEY" value="DNSKEY"></el-option>
                <el-option label="DS" value="DS"></el-option>
                <el-option label="MX" value="MX"></el-option>
                <el-option label="NS" value="NS"></el-option>
                <el-option label="NSEC" value="NSEC"></el-option>
                <el-option label="PTR" value="PTR"></el-option>
                <el-option label="RRSIG" value="RRSIG"></el-option>
                <el-option label="SOA" value="SOA"></el-option>
                <el-option label="TXT" value="TXT"></el-option>
                <el-option label="SRV" value="SRV"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="端口">
              <el-input-number v-model="formTypeOptions.dns.port" size="small" :min="0" :max="65535"
                               style="width: 120px;"
                               controls-position="right"></el-input-number>
            </el-form-item>
            <el-form-item label="协议">
              <el-select v-model="formTypeOptions.dns.protocol" size="small" style="width: 120px;">
                <el-option label="TCP" value="TCP"></el-option>
                <el-option label="UDP" value="UDP"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="DNS解析器">
              <template v-slot:label>
                <span>DNS解析器</span>
                <i class="el-icon-info"
                   v-tooltip="'用于查询的DNS解析器。默认为探针的系统解析器。'"></i>
              </template>
              <el-input v-model="formTypeOptions.dns.resolver" placeholder="IP地址 / 域名"
                        size="small" style="width: 200px;"></el-input>
            </el-form-item>
            <el-form-item label="trace">
              <template v-slot:label>
                <span>trace</span>
                <i class="el-icon-info" v-tooltip="'切换从根服务器到目标域名的委托路径跟踪。'"></i>
              </template>
              <el-switch v-model="formTypeOptions.dns.trace"
                         size="small"></el-switch>
            </el-form-item>
          </template>
          <template v-else-if="form.type === 'mtr'">
            <el-form-item label="包数量">
              <el-input-number v-model="formTypeOptions.mtr.packets" size="small" :min="1" :max="16"
                               style="width: 120px;"
                               controls-position="right"></el-input-number>
            </el-form-item>
            <el-form-item label="端口">
              <el-input-number v-model="formTypeOptions.mtr.port" size="small" :min="0" :max="65535"
                               style="width: 120px;"
                               controls-position="right"></el-input-number>
            </el-form-item>
            <el-form-item label="协议">
              <el-select v-model="formTypeOptions.mtr.protocol" size="small" style="width: 120px;">
                <el-option label="ICMP" value="ICMP"></el-option>
                <el-option label="TCP" value="TCP"></el-option>
                <el-option label="UDP" value="UDP"></el-option>
              </el-select>
            </el-form-item>
          </template>
          <template v-else-if="form.type === 'http'">
            <el-form-item label="端口">
              <el-input-number v-model="formTypeOptions.http.port" size="small" :min="0"
                               :max="65535" style="width: 120px;"
                               controls-position="right"></el-input-number>
            </el-form-item>
            <el-form-item label="协议">
              <el-select v-model="formTypeOptions.http.protocol" size="small" style="width: 120px;">
                <el-option label="HTTP" value="HTTP"></el-option>
                <el-option label="HTTPS" value="HTTPS"></el-option>
                <el-option label="HTTP2" value="HTTP2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="DNS解析器">
              <template v-slot:label>
                <span>DNS解析器</span>
                <i class="el-icon-info"
                   v-tooltip="'用于查询的DNS解析器。默认为探针的系统解析器。'"></i>
              </template>
              <el-input v-model="formTypeOptions.http.resolver" placeholder="IP地址 / 域名"
                        size="small" style="width: 200px;"></el-input>
            </el-form-item>
            <el-form-item label="Method">
              <el-select v-model="formTypeOptions.http.request.method" size="small"
                         style="width: 120px;">
                <el-option label="HEAD" value="HEAD"></el-option>
                <el-option label="GET" value="GET"></el-option>
              </el-select>
            </el-form-item>
            <div>
              <el-form-item label="">
                <template v-slot:label>
                  <span>Host</span>
                  <i class="el-icon-info" v-tooltip="'主机标头的可选覆盖。默认基于目标。'"></i>
                </template>
                <el-input v-model="formTypeOptions.http.request.host" size="small"></el-input>
              </el-form-item>
              <el-form-item label="Path">
                <el-input v-model="formTypeOptions.http.request.path" size="small"></el-input>
              </el-form-item>
              <el-form-item label="Query">
                <el-input v-model="formTypeOptions.http.request.query" size="small"></el-input>
              </el-form-item>
            </div>
          </template>
        </div>
      </el-form>
      <div>
        <div v-if="taskDetail.status">
          查询状态：
          <el-tag v-if="taskDetail.status === 'in-progress'" type="warning">
            查询中 {{ finishedTaskNum }}/{{ taskDetail.results.length }}
          </el-tag>
          <el-tag v-if="taskDetail.status === 'finished'" type="success">查询完成</el-tag>
        </div>
        <result :task-detail="taskDetail"></result>
      </div>
    </div>

<!--    <amap-traceroute-map style="width: 600px;"></amap-traceroute-map>-->
    <!-- 添加全局公用el-tooltip -->
    <el-tooltip  :placement="tooltipPlacement" ref="tooltip" :content="tooltipContent"></el-tooltip>
  </div>
</template>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  background: #f2f2f2;
}

.task-detail-item-info {
  margin: 10px 0;
}

.task-detail-item-info > span {
  margin-right: 10px;
}
</style>


<style>
.el-form-item__label {
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 100% !important;
  color: #17233a !important;
}


</style>
