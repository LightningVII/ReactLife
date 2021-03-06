import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import { getCityListData } from '../../fetch/city/city'
import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'

class City extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.changeCity = this.changeCity.bind(this)
    this.state = {
      data: [],
      cityName: ''
    }
  }
  changeCity (newCity) {
    if (newCity == null) {
      return
    }
    const userInfo = this.props.userInfo
    userInfo.cityName = newCity
    this.props.userInfoActions.update(userInfo)
    LocalStore.setItem(CITYNAME, newCity)
    this.setState({
      cityName: newCity
    })
    const history = this.props.history
    history.push('/')
  }
  componentDidMount () {
    const userInfo = this.props.userInfo
    getCityListData(data => {
      this.setState({
        data: data.result
      })
      this.setState({
        cityName: userInfo.cityName
      })
    })
  }
  render () {
    const setting = {
      title: '选择城市'
    }
    return (
      <div>
        <Header {...setting} />
        <CurrentCity cityName={this.state.cityName} />
        <CityList data={this.state.data} changeFn={this.changeCity} />
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

export default connect(mapStateToProps, mapDispatchToProps)(City)
