<template>
  <div
    :style="{ position:'absolute', top:'20px', right:'100px', bottom:0, left:'100px', margin:'auto' }"
  >
    <a-tabs tab-position="left">
      <a-tab-pane tab="Input" key="Input">
        <input-demo></input-demo>
      </a-tab-pane>

      <a-tab-pane tab="InputNumber" key="InputNumber">
        <input-number-demo></input-number-demo>
      </a-tab-pane>

      <a-tab-pane tab="Select" key="Select">
        <select-demo></select-demo>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from "vue";

import InputDemo from "./components/Input.vue";
import InputNumberDemo from "./components/InputNumber.vue";
import SelectDemo from "./components/Select.vue";

export default defineComponent({
  name: "",

  components: {
    InputDemo,
    InputNumberDemo,
    SelectDemo
  },

  setup() {
    return {};
  }
});
</script>

<style lang='scss' scoped>
</style>