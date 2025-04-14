import axios from "axios";

const instance = axios.create({
    baseURL: "/api/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': '0bbdb113-f194-40dd-bc07-2aa853ad85f4'
    }
})

export const API = {
    getUsers(page = 1){
        return instance.get(`/users?count=100&page=${page}`)
    }
}