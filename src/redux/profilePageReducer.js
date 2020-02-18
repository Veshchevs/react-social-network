import {profileAPI} from "../dal/api";


const ADD_POST = "ADD_POST"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"
const UPDATE_STATUS = "UPDATE_STATUS"


const initialStateProfilePage = {

    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: "1"},
        {id: 2, message: "It` s my first post", likesCount: "23"},
        {id: 3, message: "OK", likesCount: "10"}
    ],
    newPostText: "",
    profile: null,
    status: ""
}


const profilePageReducer = (state = initialStateProfilePage, action) => {
    switch (action.type) {
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 2
            }
            return {
                ...state, posts:
                    [...state.posts, newPost], newPostText: ""
            }
        }
        default:
            return state
    }

}

export const updateStatus = (status) => ({type: UPDATE_STATUS, status})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})

export const getProfileThunk = (userId) => async (dispatch) => {
    let data = await  profileAPI.getProfile(userId)
    dispatch(setProfile(data))
}

export const getStatusThunk = (userId) => async (dispatch) => {
    let data = await  profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}
export const updateStatusThunk = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(updateStatus(status))
    }
}


export default profilePageReducer