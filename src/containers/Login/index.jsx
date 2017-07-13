import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    doCheck() {
        const userInfo = this.props.userInfo
        if (userInfo.username) {
            // 已经登录，则跳转到用户主页
            const history = this.props.history
            history.push('/')
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }
    // 处理登录之后的事情
    loginHandle(username) {
        // 保存用户名
        const actions = this.props.userInfoActions
        let userInfo = this.props.userInfo
        const history = this.props.history
        userInfo.username = username
        actions.update(userInfo)

        const params = this.props.location.state
        if (params && params.path) {
            const router = params.path
            // 跳转到指定的页面
            history.push(decodeURIComponent(router))
        } else {
            // 跳转到用户主页
            this.goUserPage()
        }
    }
    goUserPage() {
        const history = this.props.history
        history.push('/User')
    }
    componentDidMount() {
        // 判断是否已经登录
        this.doCheck()
    }

    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                    ? <div>{/* 等待中 */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
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
)(Login)