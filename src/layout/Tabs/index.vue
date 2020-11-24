<template>
  <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"></a-tab-pane>
  </a-tabs>
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from "vue";

export default defineComponent({
  name: "",

  components: {},

  setup() {
    const panes = [
      { title: "Tab 1", key: "1" },
      { title: "Tab 2", key: "2" }
    ];

    function add() {
      const panes = this.panes;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({
        title: `New Tab ${activeKey}`,
        content: `Content of new Tab ${activeKey}`,
        key: activeKey
      });
      this.panes = panes;
      this.activeKey = activeKey;
    }

    function remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter(pane => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key;
        } else {
          activeKey = panes[0].key;
        }
      }
      this.panes = panes;
      this.activeKey = activeKey;
    }

    function onEdit(targetKey, action) {
      this[action](targetKey);
    }

    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0,

      add,
      remove,
      onEdit
    };
  }
});
</script>

<style lang='scss' scoped>
</style>