import React from 'react'

import {getDetailData} from '../../../fetch/detail'
import DetailInfo from '../../../components/DetailInfo'
let isMounted = true
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div>
                {this.state.info
                    ? <DetailInfo data={this.state.info}/>
                    : ''
            }
            </div>
        )
    }
    componentDidMount() {
        // 获取商户信息
        isMounted = true
        const detailId = this.props.id
        this.getInfo(detailId)
    }
    componentWillUnmount() {
        isMounted = false
    }
    getInfo(detailId) {
        const that = this
        getDetailData({
            id: detailId
        }, data => {
            if(isMounted){
                that.setState({info: data.result})
            }
        }).catch(ex => {
            console.log(ex)
            console.log(process.env)
            // if () {     console.error('详情页，获取商户信息出错') }
        })
    }
}

export default Info