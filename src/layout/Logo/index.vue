<template>
  <div class="logo" />
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from "vue";

export default defineComponent({
  name: "Logo",

  components: {},

  setup() {}
});
</script>

<style lang='scss' scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>