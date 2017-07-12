import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import '../../fonts/style.css'
import './style.css'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取 star 数量，并取余5（最多5个star）
        let star = this.props.star || 0
        if (star > 5) {
            star %= 5
        }

        const forStar = length => {
            var res = [];
            for(var i=0;i<length;i++){
                res.push(<i key={i} className='icon-brand44'></i>)
            }
            return res
        }

        return (
            <div className="star-container">
                { forStar(star) }
            </div>
        )
    }
}

export default Star