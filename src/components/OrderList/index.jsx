import React from 'react'

import Item from './Item'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.submitComment = this.submitComment.bind(this)
  }

  submitComment () {
    this.props.submitComment()
  }
  render () {
    const data = this.props.data
    return (
      <div id='order-list-container'>
        <h3>您的订单</h3>
        {data.map((item, index) => {
          return (
            <Item
              key={index}
              data={item}
              submitComment={this.props.submitComment}
            />
          )
        })}
      </div>
    )
  }
}

export default List
