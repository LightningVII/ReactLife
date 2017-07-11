import actionTypes from '../constants/todo'

export const visibilityFilter = (state = "ALL", action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBLITY_FILTER:
            return action.filter
        default:
            return state
    }
}