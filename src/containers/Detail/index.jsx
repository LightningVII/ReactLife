import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/Info'
import Buy from './subpage/Buy'
import Comment from './subpage/Comment'

class Detail extends React.Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  componentDidMount (){
    
  }
  render(){
    const param = this.props.match.params
    return (
      <div>
        <Header title="商品详情"></Header>
        <Info id={param.id}></Info>
        <Buy history={this.props.history} id={param.id}></Buy>
        <Comment id={param.id}></Comment>
      </div>
    )
  }
}

export default Detail