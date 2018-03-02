import React from 'react'

import { Card } from 'antd'

class UserInfo extends React.Component {
  constructor (props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
  }

  // ES7 写法 property initializers
  clickHandle (e) {
    this.props.onClick(e)
  }
  render () {
    const data = this.props.userInfo
    return (
      <div>
        <Card>
          <div className='custom-image'>
            <img
              alt='example'
              width='100%'
              src='http://szimg.mukewang.com/59006d090001508305400300-280-160.jpg'
            />
          </div>
          <div className='custom-card'>
            <h3>{data.username}</h3>
            <p>{data.cityName}</p>
          </div>
        </Card>
      </div>
    )
  }
}

export default UserInfo
