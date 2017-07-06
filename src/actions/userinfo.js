import * as actionTypes from '../constants/userinfo'
// const initialState = {}

export const login = data => {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}

export const update = data => {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}