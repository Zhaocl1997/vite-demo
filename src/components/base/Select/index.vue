<template>
  <a-select v-bind="getBindValue" :style="{ width: width }">
    <a-select-option
      v-for="item in option"
      :value="item[optionValue]"
      :key="item[optionValue]"
    >{{ item[optionLabel] }}</a-select-option>
  </a-select>
</template>

<script lang='ts'>
import { Select } from "ant-design-vue";
import { defineComponent, computed, PropType } from "vue";

export default defineComponent({
  name: "wSelect",

  inheritAttrs: false,

  props: {
    ...Select.props,

    width: {
      type: String as PropType<string>,
      default: "200px"
    },

    option: {
      type: Array as PropType<any[]>,
      default: () => []
    },

    optionValue: {
      type: String as PropType<string>,
      default: "value"
    },

    optionLabel: {
      type: String as PropType<string>,
      default: "label"
    }
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