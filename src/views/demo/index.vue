<template>
  <div
    :style="{ position:'absolute', top:'20px', right:'100px', bottom:0, left:'100px', margin:'auto' }"
  >
    <a-tabs tab-position="left">
      <a-tab-pane tab="Input" key="Input">
        <input-demo></input-demo>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from "vue";

import InputDemo from "./components/Input.vue";

export default defineComponent({
  name: "",

  components: {
    InputDemo
  },

  setup() {
    return {};
  }
});
</script>

<style lang='scss' scoped>
</style>