import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getDetailData} from '../../../fetch/detail'
import DetailInfo from '../../../components/DetailInfo'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.info
                    ? <DetailInfo data={this.state.info}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取商户信息
        const detailId = this.props.id
        this.getInfo(detailId)
    }
    getInfo(detailId) {
        const that = this
        getDetailData({
            id: detailId
        },function(data){
            that.setState({
                info: data.result
            })
        }).catch(ex => {
            console.log(ex)
            console.log(process.env)
            // if () {
            //     console.error('详情页，获取商户信息出错')
            // }
        })
    }
}

export default Info