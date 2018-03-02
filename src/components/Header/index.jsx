import React from 'react'

import { Icon } from 'antd'
import './style.css'
class Header extends React.Component {
  clickHandle () {
    window.history.back()
  }
  render () {
    return (
      <div className='header'>
        <div className='home-header-left float-left'>
          <span onClick={this.clickHandle}>
            <Icon type='left' />
          </span>
        </div>
        <div className='home-header-middle'>
          <span>{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default Header
