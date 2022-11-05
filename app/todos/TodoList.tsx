import React from 'react';
import { Todo } from '../../typings';

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos: Todo[] = await res.json();
    return todos;
}

async function TodoList() {

    const todos = await fetchTodos()

  return (
    <div>TodoList</div>
  )
}

export default TodoList