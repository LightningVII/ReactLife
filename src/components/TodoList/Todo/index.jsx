import React from 'react'

import './style.css'

class Todo extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.onClick = this.onClick.bind(this)
  }
  onClick (e) {
    this.props.onClick(e)
  }
  render () {
    const text = this.props.text
    const id = this.props.id
    const completed = this.props.completed
    return (
      <li
        id={id}
        onClick={this.onClick}
        className={completed ? 'line-through' : ''}
      >
        {text}
      </li>
    )
  }
}

export default Todo
