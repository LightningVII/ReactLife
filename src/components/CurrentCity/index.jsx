import React from 'react'

import './style.css'
class Header extends React.Component {
  render () {
    return (
      <h2 className='cityName'>
        {this.props.cityName}
      </h2>
    )
  }
}

export default Header
