<template>
  <div>
    <!-- <a-input v-model:value="todoName" placeholder="Basic usage"></a-input> -->
    <input type="text">
    <ul>
      <li
        v-for="(item ,index) in todoList"
        :key="index"
      >
        <p>id：{{ item.id }}</p>
        <p>title：{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import {} from '../store'

export default {
  setup () {
    const store = useStore()
    console.log(store);
    
    const todoList = computed(() => store.state)
    console.log(todoList)

    return {
      todoList
    }
  }
}
</script>

<style scoped>
</style>
