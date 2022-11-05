import React from 'react'

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await res.json();
}

async function TodoList() {

    const todos = await fetchTodos()

  return (
    <div>TodoList</div>
  )
}

export default TodoList