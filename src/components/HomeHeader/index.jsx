import React from 'react'
import SearchInput from '../SearchInput'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import './style.css'
export default class HomeHeader extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.enterHandle = this.enterHandle.bind(this)
    this.state = {
      kwd: ''
    }
  }
  enterHandle (value) {
    this.props.history.push('/search/all/' + encodeURIComponent(value))
  }
  render () {
    return (
      <div id='home-header' className='clear-fix'>
        <div className='home-header-left float-left'>
          <Link to='/city'>
            <span>{this.props.cityName}</span>
          </Link>
        </div>
        <div>
          <Link to='/user'>
            <Icon type='user' />
          </Link>
        </div>
        <div className='home-header-middle'>
          <div className='search-container'>
            <span>搜索</span>
            <SearchInput value='aaa' enterHandle={this.enterHandle} />
          </div>
        </div>
      </div>
    )
  }
}
