<template>
  <div style="width:100%;">
    <div style="width:500px;margin:auto;">
      <a-input-search
        v-model:value="inputValue"
        placeholder="input your todo"
        size="large"
        @search="onAddTodo"
      >
        <template #enterButton>
          <a-button @click="onAddTodo">
            Add
          </a-button>
        </template>
      </a-input-search>

      <a-form
        layout="inline"
        :model="searchForm"
        @submit.native.prevent
      >
        <a-form-item label="Title">
          <a-input
            v-model:value="searchForm.title"
            size="small"
            allow-clear
          />
        </a-form-item>

        <a-form-item label="Status">
          <a-radio-group
            v-model:value="searchForm.completed"
            :options="completedOptions"
          />
        </a-form-item>

        <a-form-item label="Priority">
          <a-radio-group
            v-model:value="searchForm.priority"
            :options="priorityOptions"
          />
        </a-form-item>
      </a-form>
    </div>

    <br>
    <br>

    <a-row type="flex">
      <template
        v-for="item in todoLists"
        :key="item.id"
      >
        <a-col
          :xs="24"
          :sm="18"
          :md="12"
          :lg="12"
          :xl="8"
        >
          <a-card
            style="margin:0 20px 20px 20px;width:400px;"
            :title="`ID：${item.id}`"
          >
            <template #extra>
              <DeleteOutlined
                style="color:red;"
                class="u-pointer u-hover"
                @click="onDeleteTodo($event, item.id)"
              />
            </template>

            <a-descriptions
              bordered
              :column="1"
              size="small"
            >
              <a-descriptions-item label="Title">
                <span>{{ item.title }}</span>
              </a-descriptions-item>

              <a-descriptions-item label="completed">
                <a-switch
                  v-model:checked="item.completed"
                  @change="onUpdateTodo(value, _, item)"
                />
              </a-descriptions-item>

              <a-descriptions-item label="priority">
                <a-radio-group
                  v-model:value="item.priority"
                  @change="onUpdateTodo(_, $event, item)"
                >
                  <a-radio-button :value="1">
                    low
                  </a-radio-button>
                  <a-radio-button :value="2">
                    middle
                  </a-radio-button>
                  <a-radio-button :value="3">
                    high
                  </a-radio-button>
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
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  toRaw,
  reactive,
  onMounted,
  defineComponent
} from 'vue'
import { DeleteOutlined } from '@ant-design/icons-vue'

import { todoListStore } from '/@/store/modules/todo'

export default defineComponent({
  name: 'Todo',

  components: { DeleteOutlined },

  setup () {
    const inputValue = ref('')
    const searchForm = reactive({
      title: '',
      completed: 0,
      priority: 0
    })

    const todoLists = computed(() => todoListStore.getTodoList(searchForm))

    const completedOptions = [
      {
        label: 'All',
        value: 0
      },
      {
        label: 'Done',
        value: 1
      },
      {
        label: 'Not done yet',
        value: 2
      }
    ]

    const priorityOptions = [
      {
        label: 'All',
        value: 0
      },
      {
        label: 'Low',
        value: 1
      },
      {
        label: 'Middle',
        value: 2
      },
      {
        label: 'High',
        value: 3
      }
    ]

    const onAddTodo = todo => {
      if (!todo) return
      todoListStore.create(todo)
      inputValue.value = ''
    }

    const onUpdateTodo = (_a, _b, item) => {
      todoListStore.update(item)
    }

    const onDeleteTodo = (event, id) => {
      todoListStore.delete(id)
    }

    return {
      inputValue,
      searchForm,
      todoLists,

      completedOptions,
      priorityOptions,

      onAddTodo,
      onUpdateTodo,
      onDeleteTodo
    }
  }
})
</script>

<style scoped>
</style>
