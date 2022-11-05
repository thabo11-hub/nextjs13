import React from 'react'

async function TodoList() {

    const todos = await fetchTodos()

  return (
    <div>TodoList</div>
  )
}

export default TodoList