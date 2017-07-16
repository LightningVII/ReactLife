import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey';
import * as userInfoActionsFormOtherFile from '../actions/userinfo';
// import PCIndex from '../js/components/pc_index';
// import MobileIndex from '../js/components/mobileIndex';
import NotFound from './404'


class App extends Component {
		constructor(props, context) {
				super(props, context)
				this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
				this.state = {
						initDone: false
				}
		}
		componentDidMount() {
				let cityName = LocalStore.getItem(CITYNAME)
				if (cityName == null) {
						cityName = '上海'
				}

				this.props.userInfoActions.update({cityName: cityName})

				this.setState({initDone: true})
		}
		render() {
				return (
						<div className="App">
							<MediaQuery query='(min-device-width: 1224px)'>
								<NotFound></NotFound>
							</MediaQuery>
							<MediaQuery query='(max-device-width: 1224px)'>
							{this.state.initDone ? this.props.children : <div>加载中...{this.props.userInfo.name}</div>}
							</MediaQuery>
						</div>
				);
		}
}

const mapStateToProps = state => {
		return {
			userInfo: state.get("userInfo")
		}
}

const mapDispatchToProps = dispatch => {
		return {
				userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)