import React, {Component} from 'react';
// import logo from './logo.svg';
import {Button, NavBar, Icon} from 'antd-mobile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar
          leftContent="back"
          mode="dark"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '0.32rem' }}/>, <Icon key="1" type="ellipsis" / >]}>NavBar</NavBar>
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo"/> */}
          <h2>Welcome to React</h2>
        </div>
        <Button size="small" className="btn" loading>loading button</Button>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
