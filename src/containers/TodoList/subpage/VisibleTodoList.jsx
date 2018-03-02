import React from 'react'

import TodoList from '../../../components/TodoList'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActionsFormOtherFile from '../../../actions/todo'

class VisibleTodoList extends React.Component {
  clickHandle (e) {
    const id = +e.target.id
    this.props.todoActions.toggleTodo(id)
  }
  render () {
    const data = this.props.todos
    return <TodoList data={data} onClick={this.clickHandle} />
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter(t => t.completed)
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return []
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    todoActions: bindActionCreators(todoActionsFormOtherFile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
