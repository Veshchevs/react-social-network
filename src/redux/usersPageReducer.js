import {usersAPI} from "../dal/api";
import {updateObjectInArray} from "../components/common/validators/ObjectHelpers";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"

let initialStateUsersPage = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize:15,
    isFetching: false,
    followingInProgress: []

}


const usersPageReducer = (state = initialStateUsersPage, action) => {
    switch (action.type) {
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        default:
            return state
    }
}

export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsers = (users) => ({type: SET_USERS, users})
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})


export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    let data = await  usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
    /* .catch(error => console.log('eee', error))*/
}

export const followThunk = (userId) => async (dispatch) => {
    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(follow(userId))
    }
}
export const unfollowThunk = (userId) => async (dispatch) => {
    let data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollow(userId))
    }
}

export default usersPageReducer