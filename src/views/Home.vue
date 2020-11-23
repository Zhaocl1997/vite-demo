<template>
  <div style="width:500px;margin:auto;">
    <a-input-search
      v-model:value="inputValue"
      placeholder="input your todo"
      size="large"
      @search="onAddTodo"
    >
      <template #enterButton>
        <a-button @click="onAddTodo">Add</a-button>
      </template>
    </a-input-search>

    <a-form layout="inline" :model="searchForm" @submit.native.prevent>
      <a-form-item>
        <a-radio-group
          :options="completedOptions"
          v-model:value="searchForm.completed"
          @change="onSearchChange"
        />
      </a-form-item>
    </a-form>

    <br />
    <br />

    <a-card
      style="margin-bottom:20px;"
      v-for="item in todoLists"
      :key="item.id"
      :title="`Todo：${item.title}`"
    >
      <template #extra>
        <DeleteOutlined
          style="color:red;"
          class="u-pointer u-hover"
          @click="onDeleteTodo($event, item.id)"
        />
      </template>

      <a-descriptions bordered :column="1" size="small">
        <a-descriptions-item label="ID">
          <span>{{ item.id }}</span>
        </a-descriptions-item>

        <a-descriptions-item label="completed">
          <a-switch v-model:checked="item.completed" @change="onChange(value, _, item)" />
        </a-descriptions-item>

        <a-descriptions-item label="priority">
          <a-radio-group v-model:value="item.priority" @change="onChange(_, $event, item)">
            <a-radio-button :value="0">low</a-radio-button>
            <a-radio-button :value="1">middle</a-radio-button>
            <a-radio-button :value="2">high</a-radio-button>
          </a-radio-group>
        </a-descriptions-item>

        <a-descriptions-item label="createdAt">
          <span>{{ item.createdAt }}</span>
        </a-descriptions-item>

        <a-descriptions-item label="updatedAt">
          <span>{{ item.updatedAt }}</span>
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  reactive,
  onMounted,
  defineComponent
} from "vue";
import { DeleteOutlined } from "@ant-design/icons-vue";

import { todoListStore } from "/@/store/modules/todo";

export default defineComponent({
  name: "todo",

  components: { DeleteOutlined },

  setup() {
    const inputValue = ref("");
    let todoLists = computed(() => todoListStore.getTodoList);

    const searchForm = reactive({
      completed: "0"
    });

    const completedOptions = [
      {
        label: "All",
        value: "0"
      },
      {
        label: "done",
        value: "1"
      },
      {
        label: "noe done",
        value: "2"
      }
    ];

    const onSearchChange = () => {
      console.log(123);
    };

    const onListTodo = () => {
      console.log(todoListStore.list());
    };

    const onAddTodo = todo => {
      if (!todo) return;
      todoListStore.create(todo);
      inputValue.value = "";
      onListTodo();
    };

    const onUpdateTodo = todo => {
      todoListStore.update(todo);
    };

    const onDeleteTodo = (event, id) => {
      todoListStore.delete(id);
    };

    const onChange = (_a, _b, item) => {
      onUpdateTodo(item);
    };

    return {
      searchForm,

      completedOptions,
      onSearchChange,

      inputValue,
      todoLists,

      onAddTodo,
      onDeleteTodo,

      onChange
    };
  }
});
</script>

<style scoped>
</style>
