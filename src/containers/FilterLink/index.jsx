import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Link from '../../components/Footer/Link'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as todoActionsFormOtherFile from '../../actions/todo';

class FilterLink extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    clickHandle = e =>{
        const action = this.props.todoActions
        action.setVisibility(e.target.text)
    }
    render() {
        const children = this.props.children
        const filter = this.props.filter
        const visibilityFilter = this.props.visibilityFilter
        let active = false
        if(filter === "SHOW_" + visibilityFilter){
            active = true
        }

        return (
            <Link active={active} onClick={this.clickHandle}>{children}</Link>
        )
    }
}

const mapStateToProps = state => {
  return {visibilityFilter: state.visibilityFilter}
}

const mapDispatchToProps = dispatch => {
  return {
    todoActions: bindActionCreators(todoActionsFormOtherFile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)