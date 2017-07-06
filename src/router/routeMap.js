import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
// import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
// import City from '../containers/City'
// import User from '../containers/User'
// import Search from '../containers/Search'
// import Detail from '../containers/Detail'
// import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
          <HashRouter history={this.props.history}>
              <App>
                <Route component={Home}/>
                  {/*<Match exactly pattern="/" component={Home} />
                  <Match pattern="/search" component={Search} />*/}
                          {/*在这里添加你的Route*/}
              </App>
          </HashRouter>
            
        )
    }
}

export default RouterMap
