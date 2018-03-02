import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActionsFormOtherFile from '../../../actions/todo'

class AddTodo extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.addItem = this.addItem.bind(this)
    this.input = null
  }
  addItem (e) {
    e.preventDefault()
    if (!this.input.value.trim()) {
      return
    }
    this.props.todoActions.addItem(this.input.value)
    this.input.value = ''
  }
  render () {
    return (
      <div>
        <form onSubmit={this.addItem} action=''>
          <input
            type='text'
            ref={node => {
              this.input = node
            }}
          />
          <button type='submit'>添加</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todo: state.todos }
}

const mapDispatchToProps = dispatch => {
  return {
    todoActions: bindActionCreators(todoActionsFormOtherFile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
