
import store from '../index'

import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'

interface TodoItem {
    id?: number
    title: string
    completed?: boolean
}

enum TodoListStoreEnum {
    CREATE = 'CREATE_TODO_LIST'
}

@Module({ name: 'TodoList', dynamic: true, namespaced: true, store })
class TodoList extends VuexModule {
    private todoList: TodoItem[] = []

    get getTodoList(): TodoItem[] {
        return this.todoList
    }

    @Mutation
    [TodoListStoreEnum.CREATE](payload: TodoItem): void {
        this.todoList.push({ id: Math.random(), ...payload })
    }

    @Action({ commit: TodoListStoreEnum.CREATE })
    create(): void { }
}

export { TodoList }
export const TodoListStore = getModule<TodoList>(TodoList)
