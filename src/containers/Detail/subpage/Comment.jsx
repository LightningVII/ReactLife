import React from 'react'

import { getCommentData } from '../../../fetch/detail'

import ListComponent from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'

// import './style.css'
let isMounted = true
class Comment extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    }
  }
  render () {
    return (
      <div className='detail-comment-subpage'>
        <h2>用户点评</h2>
        {this.state.data.length
          ? <ListComponent data={this.state.data} />
          : <div>{/* 加载中... */}</div>}
        {this.state.hasMore
          ? <LoadMore
            isLoadingMore={this.state.isLoadingMore}
            loadMoreFn={this.loadMoreData.bind(this)}
            />
          : ''}
      </div>
    )
  }
  componentDidMount () {
    isMounted = true
    this.loadFirstPageData()
  }
  componentWillUnmount () {
    isMounted = false
  }
  // 获取首页数据
  loadFirstPageData () {
    const id = this.props.id
    getCommentData(
      {
        page: 0,
        id: id
      },
      data => {
        if (isMounted) {
          this.resultHandle(data)
        }
      }
    )
  }
  // 加载更多数据
  loadMoreData () {
    // 记录状态
    this.setState({
      isLoadingMore: true
    })

    const id = this.props.id
    const page = this.state.page
    getCommentData(
      {
        page: page,
        id: id
      },
      data => {
        this.resultHandle(data)
      }
    )

    // 增加 page 技术
    this.setState({
      isLoadingMore: false
    })
  }
  // 处理数据
  resultHandle (result) {
    const page = this.state.page
    this.setState({
      page: page + 1
    })

    const hasMore = result.hasMore
    const data = result.result

    this.setState({
      hasMore: hasMore,
      // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
      data: this.state.data.concat(data)
    })
  }
}

export default Comment
