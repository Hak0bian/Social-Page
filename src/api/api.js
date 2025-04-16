import axios from "axios";

const instance = axios.create({
    baseURL: "/api/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': '827e614f-2385-4059-aeaa-c31d3557fb33'
    }
})

export const API = {
    getUsers(page = 1){
        return instance.get(`/users?count=100&page=${page}`)
    },

    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },

    setLogin(email, password){
        return instance.post(`/auth/login`, {email, password})
    },

    editProfile(values){
        return instance.put(`/profile`, values)
    },

    changePhoto(file){
        let formData = new FormData()
        formData.append("file", file)
        return instance.put(`/profile/photo`, formData)
    }
}