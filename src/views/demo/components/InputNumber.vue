<template>
  <div class="input-demo">
    <a-card size="small" :title="`普通数字输入框，当前绑定值：${inputValue1}`">
      <w-input-number v-model:value="inputValue1" :min="1" :max="10" :step="0.1" :precision="2"></w-input-number>
    </a-card>

    <a-card size="small" :title="`百分比输入框，当前绑定值：${inputValue2}`">
      <w-input-number
        v-model:value="inputValue2"
        :min="0"
        :max="100"
        :step="5"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
      ></w-input-number>
    </a-card>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from "vue";

import wInputNumber from "/@/components/base/InputNumber/index.vue";

export default defineComponent({
  name: "InputNumberDemo",

  components: {
    wInputNumber
  },

  setup() {
    const inputValue1 = ref("");
    const inputValue2 = ref("");
    const inputValue3 = ref("");
    const inputValue4 = ref("");
    const inputValue5 = ref("");
    const inputValue6 = ref("");

    return {
      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,
      inputValue5,
      inputValue6
    };
  }
});
</script>

<style lang='scss' scoped>
</style>