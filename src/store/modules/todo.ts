
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'

import store from "../index";

interface TodoItem {
    id?: number
    title: string
    completed?: boolean
    priority?: PriorityLevel

    createdAt?: string
    updatedAt?: string
}

enum PriorityLevel {
    LOW = 0,
    MIDDLE = 1,
    HIGH = 2
}

enum TodoListStoreEnum {
    LIST = 'LIST_TODO_LIST',
    CREATE = 'CREATE_TODO_LIST',
    DELETE = 'DELETE_TODO_LIST',
    UPDATE = 'UPDATE_TODO_LIST'
}

@Module({ name: 'todoList', store: store, dynamic: true, namespaced: true })
export class TodoList extends VuexModule {
    private todoList: TodoItem[] = []

    get getTodoList(): TodoItem[] {
        return this.todoList
    }

    @Action
    list(): TodoItem[] { return this.getTodoList }

    @Action
    create(title: string): void { this.context.commit(TodoListStoreEnum.CREATE, title) }

    @Mutation
    [TodoListStoreEnum.CREATE](payload: string): void {
        this.todoList.unshift({
            id: Math.floor(Math.random() * 1000),
            title: payload,
            completed: false,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString(),
            priority: PriorityLevel.MIDDLE
        })
    }

    @Action
    update(todo: TodoItem): void { this.context.commit(TodoListStoreEnum.UPDATE, todo) }

    @Mutation
    [TodoListStoreEnum.UPDATE](payload: TodoItem): void {
        let target = (this.todoList.find(item => item.id === payload.id) as TodoItem)
        target = payload
        target.updatedAt = new Date().toLocaleString()
    }

    @Action
    delete(id: number): void { this.context.commit(TodoListStoreEnum.DELETE, id) }

    @Mutation
    [TodoListStoreEnum.DELETE](payload: number): void {
        this.todoList.splice(this.todoList.findIndex(item => item.id === payload), 1)
    }
}

export const todoListStore = getModule<TodoList>(TodoList);
