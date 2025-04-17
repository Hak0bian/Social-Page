import { API } from "../../api/api"

const LOGOUT = "LOGOUT"
const initState = {
    logout: {}
}

export const logOutReducer = (state = initState, action) => {
    switch(action.type){
        case LOGOUT :
            return {
                ...state,
                logout: action.payload
            }
        default :
            return state
    }
}

const logOutAC = (data) => ({type: LOGOUT, payload: data})
export const logOutThunk = () => {
    return(dispatch) => {
        API.logOut()
        .then((res) => dispatch(logOutAC(res?.data?.data)))
        .catch((err) => console.log(err))
    }
}