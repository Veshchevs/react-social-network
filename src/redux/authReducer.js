import {authAPI} from "../dal/api";
import {stopSubmit} from "redux-form"

const SET_ME_DATA = "SET_ME_DATA"

let initialMe = {
    userId: null,
    login: null,
    email: null,
    isAuth: false

}


const authReducer = (state = initialMe, action) => {
    switch (action.type) {
        case SET_ME_DATA: {
            return {
                ...state, ...action.data,
                isAuth: action.isAuth
            }
        }
        default:
            return state
    }
}
export const setMeData = (data, isAuth) => ({type: SET_ME_DATA, data, isAuth})

export const getMeDataThunk = () => async (dispatch) => {
    let data = await authAPI.getMeData()
    if (data.resultCode === 0) {
        dispatch(setMeData(data.data, true))
    }
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getMeDataThunk())
    }
    else {
        let messages = data.messages.length > 0 ? data.messages[0] : "Common error"
        dispatch(stopSubmit("login", {_error: messages}))
    }
}
export const logoutThunk = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setMeData({...initialMe}, false))
    }
}
export default authReducer