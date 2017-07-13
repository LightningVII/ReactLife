import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Button } from 'antd'

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    buyClickHandle = () => {
        this.props.buyHandle()
    }
    storeClickHandle = () => {
        this.props.storeHandle()
    }
    render() {
        return (
            <div>
                {
                    // 是否已经收藏了
                    this.props.isStore
                    ? <Button type="danger" onClick={this.storeClickHandle}>已收藏</Button>
                    : <Button type="primary" onClick={this.storeClickHandle}>收藏</Button>
                }
                <Button onClick={this.buyClickHandle}>购买</Button>
            </div>
        )
    }
}

export default BuyAndStore