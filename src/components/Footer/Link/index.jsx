import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class Link extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    clickHandle = e => {
        this.props.onClick(e)
    }
    render() {
        const active = this.props.active
        const children = this.props.children
        if(active){
            return (
                <span>{children}</span>
            )
        }
        return (
            <a onClick={this.clickHandle}>{children}</a>
        )
    }
}