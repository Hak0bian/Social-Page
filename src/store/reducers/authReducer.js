import { API } from "../../api/api"

const SET_LOGIN = "SET_LOGIN"

const initState = {
    userId : null
}

export const authReducer = (state = initState, action) => {
    switch(action.type){
        case SET_LOGIN :
            return {
                ...state,
                userId: action.payload
            }


        default :
            return state
    }
}

const setLoginAC = (id) => ({type: SET_LOGIN, payload : id})

export const setLoginThunk = (email, password) => {
    return(dispatch) => {
        API.setLogin(email, password)
        .then((res) => dispatch(setLoginAC(res?.data?.data?.userId)))
        .catch((err) => console.log(err))
    }
}