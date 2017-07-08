import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import '../../fonts/style.css'
import './style.css'
class Header extends React.Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  clickHandle(){
    window.history.back()
  }
  render(){
    return (
      <div className="header">
        <div className="home-header-left float-left">
          <span onClick={this.clickHandle}>
            <i className="icon-brand100"></i>
          </span>
        </div>
        {/*<div className="home-header-right float-right">
          <i className="icon-brand9"></i>
        </div>*/}
        <div className="home-header-middle">
          <span>{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default Header