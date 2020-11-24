<template>
  <a-layout>
    <Sider />

    <a-layout :style="{ marginLeft: '200px' }">
      <Header />

      <Content />

      <Footer />>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

import Sider from "./Sider/index.vue";
import Header from "./Header/index.vue";
import Content from "./Content/index.vue";
import Footer from "./Footer/index.vue";

export default defineComponent({
  name: "Console",

  components: {
    Sider,
    Header,
    Content,
    Footer
  },

  setup() {}
});
</script>

<style lang='scss' scoped>
</style>