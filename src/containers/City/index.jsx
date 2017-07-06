import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as userInfoActionsFormOtherFile from '../../actions/userinfo';
import Header from '../../components/Header'

class Home extends React.Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    const setting = {
      title: "选择城市"
    }
    return (
      <div>
          <Header {...setting}></Header>
City
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