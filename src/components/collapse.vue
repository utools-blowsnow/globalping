<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "collapse",
  data() {
    return {
      show: true
    }
  },
})
</script>

<template>
  <div class="collapse">
    <div class="collapse-header">
      <div>
        <slot name="header"></slot>
      </div>
      <el-button v-if="show" circle style="padding: 5px;" icon="el-icon-arrow-up"
                 @click="show = false"></el-button>
      <el-button v-else circle style="padding: 5px;" icon="el-icon-arrow-down"
                 @click="show = true"></el-button>
    </div>
    <div v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.collapse {
  margin: 20px 0;
  padding: 20px 0;
  border-bottom: 1px solid #b2b2b2;
}

.collapse-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
