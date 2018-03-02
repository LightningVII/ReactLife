import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            isStore: false
        }
    }
    // 检验当前商户是否被收藏
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store

        store.forEach(item => {
            if (item.id === id) {
                // 已经被收藏
                this.setState({
                    isStore: true
                })
                return false
            }
        })
    }
    // 检查登录状态
    loginCheck() {
        const id = this.props.id
        const userInfo = this.props.userInfo
        if (!userInfo.username) {
            const history = this.props.history
            // 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来
            const location = {
                pathname: '/Login',
                state: { path: encodeURIComponent('/detail/' + id) }
            }
            history.push(location)
            return false
        }
        return true
    }
    // 购买事件
    buyHandle() {
        // 验证登录，未登录则retur
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        // 此过程为模拟购买，因此可省去复杂的购买过程

        // 跳转到用户主页
        const history = this.props.history
        history.push('/User')
    }
    // 收藏事件
    storeHandle() {
        // 验证登录，未登录则return
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        const id = this.props.id
        const storeActions = this.props.storeActions
        if (this.state.isStore) {
            // 已经被收藏了，则取消收藏
            storeActions.rm({id: id})
        } else {
            // 未收藏，则添加到收藏中
            storeActions.add({id: id})
        }
        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })
    }
    render() {
        return (
            <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
        )
    }
    componentDidMount() {
        // 验证当前商户是否收藏
        this.checkStoreState()
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.get("userInfo"),
        store: state.get("store")
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)