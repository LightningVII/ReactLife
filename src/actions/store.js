import actionTypes from '../constants/store'
let nextTodoId = 0
export const update = data => {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
}

export const add = data => {
    return {
        type: actionTypes.STORE_ADD,
        data
    }
}

export const rm = data => {
    return {
        type: actionTypes.STORE_RM,
        data
    }
}