import actionTypes from '../constants/todo'

const initialState = {}

export const todo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case actionTypes.TOGGLE_TODO:
            if (state.id !== action.id)
                return state
            return Object.assign({}, state, {
                completed: !state.completed
            })
        default:
            return state
    }
}

export const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return [...state, todo(void 0, action)]
        case actionTypes.TOGGLE_TODO:
            return state.map(t => todo(t, action))
        default:
            return state
    }
}