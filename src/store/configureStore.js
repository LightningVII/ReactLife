import { createStore } from 'redux'
import rootReducer from '../reducers'
import { fromJS } from 'immutable'

export default function configureStore (initialState = fromJS({})) {
  const store = createStore(rootReducer, initialState)
  return store
}
