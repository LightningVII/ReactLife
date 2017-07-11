import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <a>asds</a>
                <a>as</a>
            </div>
        )
    }
}

export default Footer