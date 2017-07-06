import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd'
import {getAdData} from '../../../fetch/home/home'

class Ad extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    getAdData(data=>{
      this.setState({ "data": data.result })
    });
    // (async() => {
    //   let data = await this.getAdData();
    //   await this.setState({"data": data.result})
    // })()
  }
  render() {
    return (
      <div>
        {/*Ad {this.state.data.length}*/}
        <HomeAd data={this.state.data}></HomeAd>
      </div>
    )
  }
}

export default Ad