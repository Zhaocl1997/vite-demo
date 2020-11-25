<template>
  <div class="input-demo">
    <a-card size="small" :title="`普通输入框，当前绑定值：${inputValue1}`">
      <w-input v-model:value="inputValue1" @change="onInputChange" @pressEnter="onInputEnter">
        <template #suffix>
          <a-button size="small" @click="onChangeInputValue">change value</a-button>
        </template>
      </w-input>
    </a-card>

    <a-card size="small" :title="`前后缀输入框(prop)，当前绑定值：${inputValue2}`">
      <w-input v-model:value="inputValue2" prefix="￥" suffix="RMB"></w-input>
    </a-card>

    <a-card size="small" :title="`前后缀输入框(slot)，当前绑定值：${inputValue3}`">
      <w-input v-model:value="inputValue3">
        <template #prefix>
          <user-outlined type="user" />
        </template>
        <template #suffix>
          <info-circle-outlined style="color: rgba(0,0,0,.45)" />
        </template>
      </w-input>
    </a-card>

    <a-card size="small" :title="`前后置输入框(prop)，当前绑定值：${inputValue4}`">
      <w-input v-model:value="inputValue4" addon-before="Http://" addon-after=".com"></w-input>
    </a-card>

    <a-card size="small" :title="`前后置输入框(slot)，当前绑定值：${inputValue5}`">
      <w-input v-model:value="inputValue5">
        <template #addonBefore>
          <a-select v-model:value="selectValue1" style="width: 90px">
            <a-select-option value="Http://">Http://</a-select-option>
            <a-select-option value="Https://">Https://</a-select-option>
          </a-select>
        </template>

        <template #addonAfter>
          <a-select v-model:value="selectValue2" style="width: 80px">
            <a-select-option value=".com">.com</a-select-option>
            <a-select-option value=".jp">.jp</a-select-option>
            <a-select-option value=".cn">.cn</a-select-option>
            <a-select-option value=".org">.org</a-select-option>
          </a-select>
        </template>
      </w-input>
    </a-card>

    <a-card size="small" :title="`默认值输入框`">
      <w-input default-value="有-model，default-value会失效"></w-input>
    </a-card>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from "vue";
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";

import wInput from "/@/components/base/Input/index.vue";

export default defineComponent({
  name: "InputDemo",

  components: {
    UserOutlined,
    InfoCircleOutlined,

    wInput
  },

  setup() {
    const inputValue1 = ref("");
    const inputValue2 = ref("");
    const inputValue3 = ref("");
    const inputValue4 = ref("");
    const inputValue5 = ref("");
    const inputValue6 = ref("");

    const selectValue1 = ref("Http://");
    const selectValue2 = ref(".com");

    const onInputChange = event => {
      console.log("[input change]");
    };

    const onInputEnter = event => {
      console.log("[input enter]");
    };

    const onChangeInputValue = event => {
      inputValue1.value = inputValue1.value + "1";
    };

    return {
      onInputChange,
      onInputEnter,
      onChangeInputValue,

      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,
      inputValue5,
      inputValue6,

      selectValue1,
      selectValue2
    };
  }
});
</script>

<style lang='scss' scoped>
.input-demo ::v-deep(.ant-card:not(:last-child)) {
  margin-bottom: 10px;
}
</style>