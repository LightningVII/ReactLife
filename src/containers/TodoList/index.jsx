import React from 'react'

import AddTodo from './subpage/AddTodo'
import VisibleTodoList from './subpage/VisibleTodoList'
import Footer from '../../components/Footer'

class TodoList extends React.Component {
  render () {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default TodoList
