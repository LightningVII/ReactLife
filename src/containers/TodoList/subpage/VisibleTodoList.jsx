import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoList from '../../../components/TodoList'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as todoActionsFormOtherFile from '../../../actions/todo';

class VisibleTodoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <TodoList data={this.props.todos}></TodoList>
        )
    }
}

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToProps = state => {
  return {todos: getVisibleTodos(state.todos, state.visibilityFilter)}
}

const mapDispatchToProps = dispatch => {
  return {
    todoActions: bindActionCreators(todoActionsFormOtherFile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)