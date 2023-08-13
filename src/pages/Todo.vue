<template>
  <div>
    <h1>todo-list</h1>
    <div>
      <input type="text" v-model="newTodo" @keypress.enter="addTodo" />
    </div>
    <main>
      <div>
        <ul>
          <li v-for="todoItem in todoStore.todoList" :key="todoItem.title">
            <div>
              <h1>{{ todoItem.title }}</h1>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useTodoStore } from "../store"

const todoStore = useTodoStore()
const newTodo = ref("")

function addTodo() {
  console.log("aaa")
  todoStore.addTodo(newTodo.value)
}
</script>

<style scoped></style>
