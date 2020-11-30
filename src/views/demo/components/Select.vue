<template>
  <div class="input-demo">
    <a-card size="small" :title="`普通下拉框，当前绑定值：${selectValue1}`">
      <w-select
        v-model:value="selectValue1"
        :option="options"
        option-value="someId"
        option-label="someName"
      ></w-select>
    </a-card>

    <a-card size="small" :title="`多选下拉框，当前绑定值：${selectValue2}`">
      <w-select
        v-model:value="selectValue2"
        :option="options"
        option-value="someId"
        option-label="someName"
        mode="multiple"
      ></w-select>
    </a-card>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from "vue";

import wSelect from "/@/components/base/Select/index.vue";

export default defineComponent({
  name: "SelectDemo",

  components: {
    wSelect
  },

  setup() {
    const selectValue1 = ref("");
    const selectValue2 = ref(["1", "2"]);
    const selectValue3 = ref("");
    const selectValue4 = ref("");
    const selectValue5 = ref("");
    const selectValue6 = ref("");

    const options = [
      {
        someId: "1",
        someName: "lucy"
      },
      {
        someId: "2",
        someName: "jack"
      },
      {
        someId: "3",
        someName: "rose"
      },
      {
        someId: "4",
        someName: "lily"
      },
      {
        someId: "5",
        someName: "tom"
      }
    ];

    return {
      options,

      selectValue1,
      selectValue2,
      selectValue3,
      selectValue4,
      selectValue5,
      selectValue6
    };
  }
});
</script>

<style lang='scss' scoped>
</style>