import React from 'react'
import TodoList from './todos/TodoList'

function Home() {
  return (
    <>
      <h1>Loading Todos</h1>
      <div className='flex space-x-2'>
        <TodoList />
      </div>

      <h1>Loading Shopping Trolley</h1>
      <div className='flex space-x-2'>
        <TodoList />
      </div>
    </>
  )
}

export default Home