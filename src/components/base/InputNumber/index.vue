<template>
  <a-input-number v-bind="getBindValue"></a-input-number>
</template>

<script lang='ts'>
import { InputNumber } from "ant-design-vue";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "wInputNumber",

  inheritAttrs: false,

  props: {
    ...InputNumber.props
  },

  setup(props, { attrs, emit }) {
    const getBindValue = computed((): any => {
      return { ...attrs, ...props };
    });

    return {
      getBindValue
    };
  }
});
</script>

<style lang='scss' scoped>
</style>