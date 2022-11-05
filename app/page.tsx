import React, { Suspense } from 'react'
import TodoList from './todos/TodoList'

function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading Todos.....</p>}>
        <h1>Loading Todos</h1>
        <div className='flex space-x-2'>
          {/*@ts-ignore*/}
          <TodoList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading Shopping Trolley.....</p>}>

        <h1>Loading Shopping Trolley</h1>
        <div className='flex space-x-2'>
          {/*@ts-ignore*/}
          <TodoList />
        </div>
      </Suspense>
    </>
  )
}

export default Home