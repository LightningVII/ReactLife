import React from 'react'


import Header from '../components/Header'
import CurrentCity from '../components/CurrentCity'
import CityList from '../components/CityList'

const history = createBrowserHistory()

class City extends React.Component {
  constructor(props, context){
    super(props, context)
    
    this.state = {
      data:[]
    }
  }
  changeCity = newCity => {
    this.props.onClick(newCity)
  }
  render(){
    const setting = {
      title: "选择城市"
    }
    console.log("-------render----------")
    console.log(this.props.userInfo)
    return (
      <div>
          <Header {...setting}></Header>
          <CurrentCity cityName={this.props.userInfo.cityName}></CurrentCity>
          <CityList data={this.props.data} changeFn={this.changeCity}></CityList>
      </div>
    )
  }
}

export default City