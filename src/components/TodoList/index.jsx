import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Todo from './subpage/Todo'
import './style.css'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as todoActionsFormOtherFile from '../../actions/todo';

class TodoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    // ES7 写法 property initializers
    clickHandle = e => {
        const id = e.target.id
        this.props.todoActions.toggleTodo(+id)
    }
    render() {
        const data = this.props.data
        return (
            <ul>
                {data.map((item, index) => {
                    return <Todo key={index} {...item} onClick={this.clickHandle}/>
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
  return {todos: state.todos}
}

const mapDispatchToProps = dispatch => {
  return {
    todoActions: bindActionCreators(todoActionsFormOtherFile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)