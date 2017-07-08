import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFormOtherFile from '../../../actions/userinfo';
import {getListData} from '../../../fetch/home/home'
// 初始化一个组件的 state
const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 0
}

class List extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this)
    this.loadMoreData = this
      .loadMoreData
      .bind(this)
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1
    }
  }

  loadFirstPageData() {
    const cityName = this.props.userInfo.cityName
    const keyword = this.props.keyword
    const category = this.props.category
    getListData({
      page: 0,
      cityName: cityName,
      keyword: keyword,
      category: category
    }, data => {
      this.setState({"data": data.result, hasMore: data.hasMore})
    })
  }

  loadMoreData() {
    this.setState({isLoadingMore: true})
    const cityName = this.props.userInfo.cityName
    const page = this.state.page
    const keyword = this.props.keyword
    const category = this.props.category
    getListData({
      page: page,
      cityName: cityName,
      keyword: keyword,
      category: category
    }, data => {
      this.setState({
        "data": this
          .state
          .data
          .concat(data.result),
        hasMore: data.hasMore,
        page: page + 1,
        isLoadingMore: false
      })
    })
  }

  componentDidMount() {
    this.loadFirstPageData()
  }
  componentDidUpdate(prevProps, prevState) {
    const keyword = this.props.keyword
    const category = this.props.category

    // 搜索条件完全相等时，忽略。重要！！！
    if (keyword === prevProps.keyword && category === prevProps.category) {
      return
    }
    // 重置 state
    this.setState(initialState)

    // 重新加载数据
    this.loadFirstPageData()
  }
  render() {
    return (
      <div>
        {this.state.data.length
          ? <ListComponent data={this.state.data}></ListComponent>
          : <div>加载中</div>}
        {this.state.hasMore
          ? <LoadMore
              isLoadingMore={this.state.isLoadingMore}
              loadMoreFn={this.loadMoreData}></LoadMore>
          : ''}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {userInfo: state.userInfo}
}

const mapDispatchToProps = dispatch => {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
  }
}

// export default Home
export default connect(mapStateToProps, mapDispatchToProps)(List)