import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import RouteMap from './router/routeMap'
import './index.css'
// 创建 Redux 的 store 对象
const store = configureStore()
const history = createBrowserHistory()

render(
  <Provider store={store}>
    <RouteMap history={history} />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
