import React from 'react'

import { Rate } from 'antd';

class Star extends React.Component {
    render() {
        // 获取 star 数量，并取余5（最多5个star）
        let star = this.props.star || 0
        if (star > 5) {
            star %= 5
        }
        return (
            <span>
                <Rate value={star}/> 
                {star && <span className="ant-rate-text">{star} stars</span>}
            </span>
        );
    }
}

export default Star