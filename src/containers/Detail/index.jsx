import React from 'react'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Buy from './subpage/Buy'
import Comment from './subpage/Comment'

class Detail extends React.Component {
  componentDidMount () {}
  render () {
    const param = this.props.match.params
    return (
      <div>
        <Header title='商品详情' />
        <Info id={param.id} />
        <Buy history={this.props.history} id={param.id} />
        <Comment id={param.id} />
      </div>
    )
  }
}

export default Detail
