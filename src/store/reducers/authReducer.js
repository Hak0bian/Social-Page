import { API } from "../../api/api"

const SET_LOGIN = "SET_LOGIN"
const ERROR_MESSAGE = "ERROR_MESSAGE";
const CLEAR_ERROR = "CLEAR_ERROR";

const initState = {
    userId : null,
    errorMessages: [],
}

export const authReducer = (state = initState, action) => {
    switch(action.type){
        case SET_LOGIN :
            return {
                ...state,
                userId: action.payload,
                errorMessages: []
            }
        case ERROR_MESSAGE : 
            return {
                ...state,
                errorMessages: action.payload,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                errorMessages: state.errorMessages.filter(err => err.field !== action.payload)
            }
        default :
            return state
    }
}

const setLoginAC = (id) => ({ type: SET_LOGIN, payload : id })
const errorMessageAC = (message) => ({ type: ERROR_MESSAGE, payload: message })
export const clearErrorAC = (field) => ({ type: CLEAR_ERROR, payload: field });

export const setLoginThunk = (email, password) => {
    return (dispatch) => {
        API.setLogin(email, password)
            .then((res) => {
                if (res?.data?.resultCode === 0) {
                    dispatch(setLoginAC(res?.data?.data?.userId));
                } else {
                    dispatch(errorMessageAC(res?.data?.fieldsErrors));
                }
            })
            .catch((err) => {
                dispatch(errorMessageAC("Something went wrong!"));
                console.error(err);
            });
    };
};