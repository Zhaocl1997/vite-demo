import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action
} from 'vuex-module-decorators'

import store from '../index'

interface TodoItem {
  id?: number;
  title: string;
  completed?: boolean;
  priority?: PriorityLevelEnum;

  createdAt?: string;
  updatedAt?: string;
}

enum PriorityLevelEnum {
  ALL = 0,
  LOW = 1,
  MIDDLE = 2,
  HIGH = 3,
}

enum CompletedTypeEnum {
  ALL = 0,
  DONE = 1,
  NOT_DONE = 2,
}

enum TodoListStoreEnum {
  CREATE = 'TODOS_CREATE',
  DELETE = 'TODOS_DELETE',
  UPDATE = 'TODOS_UPDATE',
}

interface TodoQuery {
  title: string;
  completed?: CompletedTypeEnum;
  priority?: PriorityLevelEnum;
}

@Module({ name: 'todoList', store: store, dynamic: true, namespaced: true })
export class TodoList extends VuexModule {
  private todoList: TodoItem[] = [];

  get getTodoList () {
    return (query: TodoQuery): TodoItem[] => {
      return this.todoList
        .filter((i) => {
          switch (query.completed) {
            case CompletedTypeEnum.DONE:
              return i.completed

            case CompletedTypeEnum.NOT_DONE:
              return !i.completed

            default:
              return i
          }
        })
        .filter((i) => {
          switch (query.priority) {
            case PriorityLevelEnum.ALL:
              return i

            default:
              return i.priority === query.priority
          }
        })
        .filter((i) => i.title.includes(query.title))
    }
  }

  @Action
  create (title: string): void {
    this.context.commit(TodoListStoreEnum.CREATE, title)
  }

  @Mutation
  [TodoListStoreEnum.CREATE] (payload: string): void {
    this.todoList.unshift({
      id: Math.floor(Math.random() * 1000),
      title: payload,
      completed: false,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      priority: PriorityLevelEnum.LOW
    })
  }

  @Action
  update (todo: TodoItem): void {
    this.context.commit(TodoListStoreEnum.UPDATE, todo)
  }

  @Mutation
  [TodoListStoreEnum.UPDATE] (payload: TodoItem): void {
    let target = this.todoList.find(
      (item) => item.id === payload.id
    ) as TodoItem
    target = payload
    target.updatedAt = new Date().toLocaleString()
  }

  @Action
  delete (id: number): void {
    this.context.commit(TodoListStoreEnum.DELETE, id)
  }

  @Mutation
  [TodoListStoreEnum.DELETE] (payload: number): void {
    this.todoList.splice(
      this.todoList.findIndex((item) => item.id === payload),
      1
    )
  }
}

export const todoListStore = getModule<TodoList>(TodoList)
