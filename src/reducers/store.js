import actionTypes from '../constants/store'
import { Map, List } from 'immutable'

let initialState = List([{ id: 30, text: "text3" }]);

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            return state.unshift(action.data)
        case actionTypes.STORE_RM:
            return state.delete(state.indexOf(action.data))
        default:
            return state
    }
}