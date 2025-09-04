import React, {StrictMode, useState} from 'react'
import './App.css'
import TodoApp from './components/TodoApp'

export default () => {
  return(
    <>
      <StrictMode>
        <TodoApp />
      </StrictMode>
    </>
  )
}