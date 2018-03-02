import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Ad from './subpage/Ad'
import HomeHeader from '../../components/HomeHeader'
import Category from './subpage/Category'
import List from './subpage/List'

import * as userInfoActionsFormOtherFile from '../../actions/userinfo'

class Home extends React.Component {
  render () {
    return (
      <div>
        <HomeHeader
          history={this.props.history}
          cityName={this.props.userInfo.cityName}
        />
        <Category />
        <Ad />
        <List cityName={this.props.userInfo.cityName} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.get('userInfo')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
