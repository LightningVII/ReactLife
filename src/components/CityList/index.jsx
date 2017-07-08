import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class CityList extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this)
    this.clickHandle = this.clickHandle.bind(this)
  }
  clickHandle(event){
    this.props.changeFn(event.target.dataset.name)
  }
  render() {
    const data = this.props.data
    return (
      <div className="cityNameList">
        {data
          .map((item, index) => {
            return <div
              key={index}
              className="cityNameItem"
              data-name={item.cityName}
              onClick={this.clickHandle}>{item.cityName}</div>
          })}
      </div>
    )
  }
}

export default CityList
