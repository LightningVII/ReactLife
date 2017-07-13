import actionTypes from '../constants/store'
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