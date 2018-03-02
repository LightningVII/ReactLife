import React from 'react'

import { getOrderList } from '../../../fetch/orderList'
import List from '../../../components/OrderList'

let isMounted = true
class OrderList extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      data: []
    }
    this.submitComment = this.submitComment.bind(this)
  }
  componentDidMount () {
    isMounted = true
    getOrderList({
      id: this.props.username
    }).then(data => {
      if (isMounted) {
        this.setState({
          data: data.result
        })
      }
    })
  }
  // 提交评论数据
  submitComment (id, value, callback) {
    // const result = postComment(id, value)
    console.log(id)
    console.log(value)
    callback()
    // result.then(res => {
    //     return res.json()
    // }).then(json => {
    //     if (json.errno === 0) {
    //         // 已经评价，修改状态
    //         callback()
    //     }
    // }).catch(ex => {
    //     if (__DEV__) {
    //         console.error('提交评论数据错误, ', ex.message)
    //     }
    // })
  }
  componentWillUnmount () {
    isMounted = false
  }
  render () {
    return (
      <div>
        <List data={this.state.data} submitComment={this.submitComment} />
      </div>
    )
  }
}
export default OrderList
