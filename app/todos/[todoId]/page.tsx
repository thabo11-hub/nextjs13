import React from 'react';

type PageProps = {
    params: {
        todoId: string;
    };
};

const fetchTodo = async(todoId:string) => {
    
}

async function TodoPage({params: { todoId }}: PageProps) {
  const todo = await fetchTodo(todoId);
    return (
    <div>TodoPage: {todoId}</div>
  )
}

export default TodoPage;