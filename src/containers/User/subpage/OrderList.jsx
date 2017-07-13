import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderList } from '../../../fetch/orderList'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import List from '../../../components/OrderList'

let isMounted = true
class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          data: []
        }
    }
    componentDidMount() {
        isMounted = true
        getOrderList({
          id: this.props.username
        }).then(data=>{
          this.setState({
            data: data.result
          })
        })
    }
    // 提交评论数据
    submitComment = (id, value, callback) => {
        // const result = postComment(id, value)
        console.log(id)
        console.log(value)
        callback()
        // result.then(res => {
        //     return res.json()
        // }).then(json => {
        //     if (json.errno === 0) {
        //         // 已经评价，修改状态
        //         callback()
        //     }
        // }).catch(ex => {
        //     if (__DEV__) {
        //         console.error('提交评论数据错误, ', ex.message)
        //     }
        // })
    }
    componentWillUnmount() {
        isMounted = false
    }
    render() {
        return (
            <div>
                <List data={this.state.data} submitComment={this.submitComment}></List>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         userInfo: state.userInfo
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
//     }
// }
export default OrderList