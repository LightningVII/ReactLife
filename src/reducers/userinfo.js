import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            return action.data
        case actionTypes.USERINFO_UPDATE:
            action.data.name = '阿策'
            return action.data
        case actionTypes.UPDAYE_CITYNAME:
            return action.data
        default:
            return state
    }
}