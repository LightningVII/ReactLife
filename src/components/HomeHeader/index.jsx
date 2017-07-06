import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import '../../fonts/style.css'
import './style.css'
class HomeHeader extends React.Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <span>{this.props.cityName}</span> &nbsp;
          <i className="icon-brand8"></i>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-brand9"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            {/*<i className="icon-brand2"></i>*/}
            <span>搜索</span>
            <input type="text" placeholder="please enter key"/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader