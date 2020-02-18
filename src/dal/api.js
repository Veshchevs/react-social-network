import * as axios from "axios/index";

const inctance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY":
            "df34564f-9b39-458a-a367-5df81c8b67f3"
    }
})
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return inctance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(userId) {

        return inctance.post(`/follow/${userId}`, {})
            .then(response => {

                return response.data
            })
    },
    unfollow(userId) {

        return inctance.delete(`/follow/${userId}`)
            .then(response => {

                return response.data
            })
    },
}

export const profileAPI = {
    getProfile(userId) {
        return inctance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return inctance.get(`profile/status/ ` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status) {
        return inctance.put(`profile/status/ `, {status: status})
            .then(response => {
                return response.data
            })
    },
}

export const authAPI = {
    getMeData() {
        return inctance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe = false) {
        return inctance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return inctance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}