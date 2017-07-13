import { combineReducers } from 'redux'
import userInfo from './userinfo'
import { todos } from './todo'
import { visibilityFilter } from './visibilityFilter'
import store from './store'

export default combineReducers({
    userInfo,
    todos,
    store,
    visibilityFilter
})