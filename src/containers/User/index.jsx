import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        if(!this.props.userInfo.username){
            this.props.history.push('/login')
        }
    }
    render() {
        const userInfo = this.props.userInfo
        const username = userInfo.username
        return (
            <div>
                <Header title="用户中心"></Header>
                <UserInfo userInfo={userInfo}></UserInfo>
                <OrderList username={username}></OrderList>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.get("userInfo")
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)