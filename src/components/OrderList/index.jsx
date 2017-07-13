import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

class List extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  submitComment = () => {
     this.props.submitComment()
  }
  render() {
      const data = this.props.data
    return (
      <div id="order-list-container">
          <h3>您的订单</h3>
          {data.map((item, index) => {
            return <Item key={index} data={item} submitComment={this.props.submitComment}></Item>
          })}
      </div>
    )
  }
}

export default List

