import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import {getListData} from '../../../fetch/home/home'

class List extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.loadMoreData = this.loadMoreData.bind(this)
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1
    }
  }

  loadFirstPageData() {
    const cityName = this.props.cityName
    getListData(cityName, 0, data => {
      this.setState({"data": data.result, hasMore: data.hasMore})
    })
  }

  loadMoreData() {
    this.setState({
      isLoadingMore: true
    })
    const cityName = this.props.cityName
    const page = this.state.page
    getListData(cityName, page, data => {
      this.setState({
        "data": this.state.data.concat(data.result),
        hasMore: data.hasMore,
        page: page + 1,
        isLoadingMore: false
      })
    })
  }

  componentDidMount() {
    this.loadFirstPageData()
  }
  render() {
    return (
      <div>
        <h2>猜你喜欢</h2>
        {this.state.data.length
          ? <ListComponent data={this.state.data}></ListComponent>
          : <div>加载中</div>}
        {this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData}></LoadMore>
          : ''}

      </div>
    )
  }
}

export default List