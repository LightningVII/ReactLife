import React from 'react'

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import { getListData } from '../../../fetch/home/home'

class List extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.loadMoreData = this.loadMoreData.bind(this)
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1
    }
  }

  loadFirstPageData () {
    const cityName = this.props.cityName
    getListData({ page: 0, cityName: cityName }, data => {
      this.setState({ data: data.result, hasMore: data.hasMore })
    })
  }

  loadMoreData () {
    this.setState({
      isLoadingMore: true
    })
    const cityName = this.props.cityName
    const page = this.state.page
    getListData({ page: page, cityName: cityName }, data => {
      this.setState({
        data: this.state.data.concat(data.result),
        hasMore: data.hasMore,
        page: page + 1,
        isLoadingMore: false
      })
    })
  }

  componentDidMount () {
    this.loadFirstPageData()
  }
  render () {
    return (
      <div>
        <h2>猜你喜欢</h2>
        {this.state.data.length
          ? <ListComponent data={this.state.data} />
          : <div>加载中</div>}
        {this.state.hasMore
          ? <LoadMore
            isLoadingMore={this.state.isLoadingMore}
            loadMoreFn={this.loadMoreData}
            />
          : ''}

      </div>
    )
  }
}

export default List
