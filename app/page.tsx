import React ,{Suspense}from 'react'
import TodoList from './todos/TodoList'

function Home() {
  return (
    <>
      <Suspense>

        <h1>Loading Todos</h1>
        <div className='flex space-x-2'>
          {/*@ts-ignore*/}
          <TodoList />
        </div>
      </Suspense>

      <h1>Loading Shopping Trolley</h1>
      <div className='flex space-x-2'>
        {/*@ts-ignore*/}
        <TodoList />
      </div>
    </>
  )
}

export default Home