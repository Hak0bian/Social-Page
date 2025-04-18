import { API } from "../../api/api"

const GET_PROFILE = "GET_PROFILE"
const GET_STATUS = "GET_STATUS"
const SET_STATUS = "SET_STATUS"

const initState = {
    profile : {},
    userStatus: ""
}

export const profileReducer = (state = initState, action) => {
    switch(action.type){
        case GET_PROFILE :
            return {
                ...state,
                profile: action.payload
            }
        case GET_STATUS :
            return {
                ...state,
                userStatus: action.payload
            }
        case SET_STATUS :
            return {
                ...state,
                userStatus: action.payload
            }
        default :
            return state
    }
}

const getProfileAC = (data) => ({type: GET_PROFILE, payload : data})
const getStatusAC = (status) => ({type: GET_STATUS, payload : status})
const setStatusAC = (newStatus) => ({type: GET_STATUS, payload : newStatus})

export const getProfileThunk = (userId) => {
    return(dispatch) => {
        API.getProfile(userId)
        .then((res) => dispatch(getProfileAC(res.data)))
        .catch((err) => console.log(err))
    }
}

export const getStatusThunk = (userId) => {
    return(dispatch) => {
        API.getStatus(userId)
        .then((res) => dispatch(getStatusAC(res.data)))
        .catch((err) => console.log(err))
    }
}

export const setStatusThunk = (newStatus, userId) => {
    return(dispatch) => {
        API.setStatus(newStatus)
        .then((res) => {
            if(res?.data?.resultCode === 0){
                dispatch(getStatusThunk(userId))
            }
        })
        .catch((err) => console.log(err))
    }
}