<template>
  <a-layout-header :style="{ background: 'grey', padding: 0}">
    <Tabs></Tabs>
  </a-layout-header>
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from "vue";

import Tabs from "../Tabs/index.vue";

export default defineComponent({
  name: "Header",

  components: { Tabs },

  setup() {}
});
</script>

<style lang='scss' scoped>
</style>