import React from 'react'

import Todo from './Todo'
import './style.css'

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
  }

  // ES7 写法 property initializers
  clickHandle (e) {
    this.props.onClick(e)
  }
  render () {
    const data = this.props.data
    return (
      <ul>
        {data.map((item, index) => {
          return <Todo key={index} {...item} onClick={this.clickHandle} />
        })}
      </ul>
    )
  }
}

export default TodoList
