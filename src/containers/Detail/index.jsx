import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/Info'
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
        <Comment id={param.id}></Comment>
        {/*detial + {this.state.data.id}*/}
      </div>
    )
  }
}

export default Detail