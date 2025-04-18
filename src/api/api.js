import axios from "axios";

const instance = axios.create({
    baseURL: "/api/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': '6c22b697-2339-43bf-9aa6-f7e38c469e53'
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

    logOut(){
        return instance.delete(`/auth/login`)
    },

    editProfile(values){
        return instance.put(`/profile`, values)
    },

    changePhoto(file){
        let formData = new FormData()
        formData.append("file", file)
        return instance.put(`/profile/photo`, formData)
    },

    getStatus(userId){
        return instance.get(`/profile/status/${userId}`)
    },

    setStatus(newStatus){
        return instance.put(`/profile/status`, {status: newStatus})
    }
}