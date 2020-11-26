<template>
  <a-input v-bind="getBindValue" @change="onChange">
    <template #prefix>
      <slot name="prefix" />
    </template>

    <template #addonBefore>
      <slot name="addonBefore" />
    </template>

    <template #addonAfter>
      <slot name="addonAfter" />
    </template>

    <template #suffix>
      <slot name="suffix" />
    </template>
  </a-input>
</template>

<script lang='ts'>
import { Input } from "ant-design-vue";
import { ref, reactive, computed, defineComponent, onMounted } from "vue";

import { clearIllegalChars } from "easy-fns-ts";

export default defineComponent({
  name: "wInput",

  inheritAttrs: false,

  components: {},

  props: {
    ...Input.props,

    blackList: {
      type: Array,
      default: () => []
    }
  },

  setup(props, { attrs, emit }) {
    const onChange = event => {
      emit("change", event);
      emit(
        "update:value",
        clearIllegalChars(event.target.value, props.blackList)
      );
    };

    const getBindValue = computed((): any => {
      return { ...attrs, ...props, onChange };
    });

    return {
      onChange,
      getBindValue
    };
  }
});
</script>

<style lang='scss' scoped>
</style>