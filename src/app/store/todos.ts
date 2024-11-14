import { StateCreator } from 'zustand'

import { TTodo } from '@/app/types/todos'
import { todoApi } from '@/app/api/todos'
import safeExecute from '@/app/utils/safe-execute'

export type TTodoSlice = {
  todos: TTodo[]
  addTodo: (todo: TTodo) => void
  fetchTodos: () => Promise<TTodo[] | void>
}

const createTodoSlice: StateCreator<TTodoSlice, [], [], TTodoSlice> = (set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo]
    }))
  },
  fetchTodos: async () => {
    const res = await safeExecute(async () => await todoApi.fetchTodos(), {
      data: []
    })
    if (res.data.length > 0) {
      set(() => ({
        todos: res.data
      }))
    }
  }
})

export { createTodoSlice }
