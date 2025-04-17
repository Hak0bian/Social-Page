import axios from "axios";

const instance = axios.create({
    baseURL: "/api/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': '4ccf7727-db8a-4518-a4f6-776d1dea0ac8'
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
    }
}