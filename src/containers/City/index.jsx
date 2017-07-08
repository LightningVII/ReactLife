import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo';
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import {getCityListData} from '../../fetch/city/city'
import LocalStore from '../../util/localStore';
import {CITYNAME} from '../../config/localStoreKey';

const history = createBrowserHistory()

class Home extends React.Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.changeCity = this.changeCity.bind(this)
    this.state = {
      data:[]
    }
  }
  changeCity(newCity){
    if(newCity == null){
      return 
    }
    const userInfo = this.props.userInfo
    userInfo.cityName = newCity
    this.props.userInfoActions.update(userInfo)
    LocalStore.setItem(CITYNAME, newCity)
    history.push('/')
  }
  componentDidMount(){
    getCityListData(data=>{
      this.setState({
        data: data.result
      })
    })
  }
  render(){
    const setting = {
      title: "选择城市"
    }
    return (
      <div>
          <Header {...setting}></Header>
          <CurrentCity cityName={this.props.userInfo.cityName}></CurrentCity>
          <CityList data={this.state.data} changeFn={this.changeCity}></CityList>
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