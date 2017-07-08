import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
class Header extends React.Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <h2 className="cityName">
        {this.props.cityName}
      </h2>
    )
  }
}

export default Header