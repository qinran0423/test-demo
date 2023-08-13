import { defineStore } from "pinia"
import { ref } from "vue"

interface Todo {
  title: string
}

export const useTodoStore = defineStore("todo", () => {
  const todoList = ref<Todo[]>([])

  function addTodo(newTodoTitle: string) {
    todoList.value.push({ title: newTodoTitle })
  }
  return {
    todoList,
    addTodo
  }
})
