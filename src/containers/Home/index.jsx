import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Ad from './subpage/Ad'
import HomeHeader from '../../components/HomeHeader'
import Category from './subpage/Category'
import List from './subpage/List'


import * as userInfoActionsFormOtherFile from '../../actions/userinfo';

class Home extends React.Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
      console.log(this.props.history)
    return (
      <div>
        <HomeHeader history={this.props.history} cityName={this.props.userInfo.cityName} />
        <Category />
        <Ad />
        <List cityName={this.props.userInfo.cityName} />
      </div>
    )
  }
}

const mapStateToProps = state => {
		return {
			userInfo: state.userInfo
		}
}

const mapDispatchToProps = dispatch => {
		return {
				userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
		}
}

// export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Home)