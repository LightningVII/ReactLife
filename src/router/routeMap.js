import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
// import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
// import User from '../containers/User' import Search from
// '../containers/Search' import Detail from '../containers/Detail'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置 参见
// https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <App>
                <Router>
                    <div>
                        <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/city" component={City}/>
                        <Route component={NotFound}/> 
                        </Switch>
                    </div>
                </Router>
            </App>
        )
    }
}

export default RouterMap
