import React from 'react'
import './App.css'
import TodoApp from './components/TodoApp'
import {Provider} from 'react-redux'
import {store} from './store/store'

export default () => {
  return(
    <>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </>
  )
}