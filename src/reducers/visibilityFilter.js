import actionTypes from '../constants/todo'

export const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBLITY_FILTER:
            return action.visibilityFilter
        default:
            return state
    }
}