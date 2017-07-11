import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import FilterLink from '../../containers/FilterLink'
import './style.css'

export default class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                过滤条件：&nbsp;
                <FilterLink filter="SHOW_ALL">ALL</FilterLink>&nbsp;&nbsp;
                <FilterLink filter="SHOW_COMPLETED">COMPLETED</FilterLink>&nbsp;&nbsp;
                <FilterLink filter="SHOW_ACTIVE">ACTIVE</FilterLink>
            </div>
        )
    }
}