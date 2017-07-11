import { combineReducers } from 'redux'
import userInfo from './userinfo'
import { todos } from './todo'
import { visibilityFilter } from './visibilityFilter'

export default combineReducers({
    userInfo,
    todos,
    visibilityFilter
})