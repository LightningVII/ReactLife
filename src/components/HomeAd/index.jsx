import React from 'react'
import './style.css'

class HomeHeader extends React.Component {
  render () {
    return (
      <div id='home-ad'>
        <h2>超值特惠</h2>
        <div className='ad-container clear-fix'>
          <ul>
            {this.props.data.map((item, index) => {
              return (
                <li key={index} className='ad-item'>
                  <a href={item.link} target='_blank'>
                    <img src={item.img} alt={item.title} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeHeader
