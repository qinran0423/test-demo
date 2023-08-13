import { describe, test, expect, beforeEach } from "vitest"
import { useTodoStore } from "."
import { createPinia, setActivePinia } from "pinia"

describe("测试todoList", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test("add todo", () => {
    // 准备数据
    const todoStore = useTodoStore()
    const title = "吃饭"
    // 调用
    todoStore.addTodo(title)

    expect(todoStore.todoList[0].title).toBe(title)
  })
})
