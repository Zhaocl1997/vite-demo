<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    collapsible
    :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
  >
    <Logo />

    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <user-outlined />
        <span class="nav-text">nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span class="nav-text">nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span class="nav-text">nav 3</span>
      </a-menu-item>
      <a-menu-item key="4">
        <bar-chart-outlined />
        <span class="nav-text">nav 4</span>
      </a-menu-item>
      <a-menu-item key="5">
        <cloud-outlined />
        <span class="nav-text">nav 5</span>
      </a-menu-item>
      <a-menu-item key="6">
        <appstore-outlined />
        <span class="nav-text">nav 6</span>
      </a-menu-item>
      <a-menu-item key="7">
        <team-outlined />
        <span class="nav-text">nav 7</span>
      </a-menu-item>
      <a-menu-item key="8">
        <shop-outlined />
        <span class="nav-text">nav 8</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang='ts'>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined
} from "@ant-design/icons-vue";
import { ref, reactive, defineComponent } from "vue";

import Logo from "../Logo/index.vue";

export default defineComponent({
  name: "Sider",

  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,

    Logo
  },

  setup() {
    const collapsed = ref(false);
    const selectedKeys = reactive(["4"]);

    return {
      collapsed,
      selectedKeys
    };
  }
});
</script>

<style lang='scss' scoped>
</style>