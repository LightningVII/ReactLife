import * as actionTypes from '../constants/userinfo'
import { fromJS } from 'immutable'
const initialState = fromJS({})

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            return action.data
        case actionTypes.USERINFO_UPDATE:
            return action.data
        case actionTypes.UPDAYE_CITYNAME:
            return action.data
        default:
            return state
    }
}