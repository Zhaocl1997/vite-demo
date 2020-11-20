<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss" scoped>
#nav {
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
