import React from 'react'

import { Button } from 'antd'

class BuyAndStore extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.buyClickHandle = this.buyClickHandle.bind(this)
    this.storeClickHandle = this.storeClickHandle.bind(this)
  }
  buyClickHandle () {
    this.props.buyHandle()
  }
  storeClickHandle () {
    this.props.storeHandle()
  }
  render () {
    return (
      <div>
        {this.props.isStore
          ? <Button type='danger' onClick={this.storeClickHandle}>已收藏</Button>
          : <Button type='primary' onClick={this.storeClickHandle}>收藏</Button>}
        <Button onClick={this.buyClickHandle}>购买</Button>
      </div>
    )
  }
}

export default BuyAndStore
