import actionTypes from '../constants/todo'
let nextTodoId = 0
export const addItem = text => {
    return {
        type: actionTypes.ADD_ITEM,
        id: nextTodoId++,
        text
    }
}

export const setVisibility = filter => {
    return {
        type: actionTypes.SET_VISIBLITY_FILTER,
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: actionTypes.TOGGLE_TODO,
        id
    }
}

export function deleteItem(item) {
    return {
        type: actionTypes.DELETE_ITEM,
        item
    }
}
export function deleteAll() {
    return {
        type: actionTypes.DELETE_ALL
    }
}
export function filterItem(e) {
    let filterItem = e.target.value

    return {
        type: actionTypes.FILTER_ITEM,
        filterItem
    }
}