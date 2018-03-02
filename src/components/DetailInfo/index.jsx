import React from 'react'
import Star from '../../components/Star'

import './style.css'

class DetailInfo extends React.Component {
  render () {
    // 获取数据
    const data = this.props.data

    return (
      <div id='detail-info-container'>
        <div className='info-container clear-fix'>
          <div className='info-img-container float-left'>
            <img src={data.img} alt={data.title} />
          </div>
          <div className='info-content'>
            <h1>{data.title}</h1>
            <div className='star-container'>
              {/* 引用 Star 组件 */}
              <Star star={data.star} />
            </div>
            <p className='sub-title'>
              {data.cname}
              <span className='price'>￥{data.price}</span>
            </p>
          </div>
        </div>
        {/* 设置 innerHTML */}
        <p className='info-desc'>{data.paragraph}</p>
        <p className='info-desc'>营业时间：{data.date}</p>
      </div>
    )
  }
}

export default DetailInfo
