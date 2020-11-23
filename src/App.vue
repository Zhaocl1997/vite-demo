<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <ConfigProvider :locale="zhCN">
      <router-view />
    </ConfigProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ConfigProvider } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default defineComponent({
  name: "App",

  components: { ConfigProvider },

  setup() {
    return {
      zhCN
    };
  }
});
</script>

<style lang="scss" scoped>
#nav {
  text-align: center;
  padding: 20px;

  a {
    padding: 20px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
