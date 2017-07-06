import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey';
import * as userInfoActionsFormOtherFile from '../actions/userinfo';
import PCIndex from '../js/components/pc_index';
import MobileIndex from '../js/components/mobile_index';

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

class App extends Component {
		constructor(props, context) {
				super(props, context)
				this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
				this.state = {
						initDone: false
				}
				// console.log(props.children)
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
							{this.state.initDone ? this.props.children : <div>加载中...{this.props.userInfo.name}</div>}
							<MediaQuery query='(min-device-width: 1224px)'>
										<Router history={this.props.history}>
												<Route path="/" component={PCIndex}></Route>
												{/*<Route path="/lists/:uniquekey" component={PCNewsLists}></Route>
														<Route path="/usercenter/" component={PCUserCenter}></Route>*/}
												{/*<Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
														*/}
										</Router>
								</MediaQuery>
								<MediaQuery query='(max-device-width: 1224px)'>
										<Router history={this.props.history}>
												<Route path="/" component={MobileIndex}></Route>
												{/*<Route path="/usercenter/" component={PCUserCenter}></Route>*/}
										</Router>
										{/*<Router history={hashHistory}>
												<Route exact path="/" component={MobileIndex}></Route>
												<Route path="/usercenter/" component={PCUserCenter}></Route>
										</Router>*/}
								</MediaQuery>
						</div>
				);
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App; import React from 'react' import {   BrowserRouter as
// Router,   Route,   Link } from 'react-router-dom' import PCNewsLists from
// './js/components/pc_news_lists'; const Home = () => (   <div> <h2>Home</h2>
// </div> ) const About = () => (   <div>     <h2>About</h2> </div> ) const
// BasicExample = () => (   <Router>     <div>       <ul> <li><Link
// to="/">Home</Link></li>         <li><Link to="/about">About</Link></li>
// <li><Link to="/lists">Topics</Link></li>       </ul>       <hr/> <Route
// path="/lists" component={PCNewsLists}/>       <Route path="/about"
// component={About}/>     </div>   </Router> ) export default BasicExample