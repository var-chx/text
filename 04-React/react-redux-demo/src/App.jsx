import React from 'react'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'
import TodoListReactRedux from './TodoListReactRedux'
import TestCssMoudle from './pages/TestCssMoudle'

export default function App (props) {
  return (
    <div>
      <TodoList />
      <Provider store={store}>
        <TodoListReactRedux />
      </Provider>
      <TestCssMoudle />
      <div className="divNode">
          <p className={'pNode'}>测试会不会污染 真的污染了</p>
      </div>
    </div>
  )
}