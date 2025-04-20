import { API } from "../../api/api"

const SET_LOGIN = "SET_LOGIN"
const ERROR_MESSAGE = "ERROR_MESSAGE";
const CLEAR_ERROR = "CLEAR_ERROR";
const CAPTCHA = "CAPTCHA"

const initState = {
    userId : null,
    errorMessages: [],
    captcha: {}
}

export const authReducer = (state = initState, action) => {
    switch(action.type){
        case SET_LOGIN :
            return {
                ...state,
                userId: action.payload,
                errorMessages: [],
            }
        case ERROR_MESSAGE : 
            return {
                ...state,
                errorMessages: action.payload,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                errorMessages: state?.errorMessages?.filter(err => err.field !== action.payload)
            }
        case CAPTCHA : 
            return {
                ...state,
                captcha: action.payload,
            }
        default :
            return state
    }
}

const setLoginAC = (id) => ({ type: SET_LOGIN, payload : id })
const errorMessageAC = (message) => ({ type: ERROR_MESSAGE, payload: message })
export const clearErrorAC = (field) => ({ type: CLEAR_ERROR, payload: field });
export const getCaptchaAC = (data) => ({ type: CAPTCHA, payload: data });

export const setLoginThunk = (email, password, captcha) => {
    return (dispatch) => {
        API.setLogin(email, password, captcha)
        .then((res) => {
            if (res?.data?.resultCode === 0) {
                dispatch(setLoginAC(res?.data?.data?.userId));
            } else {
                if (res?.data?.resultCode === 10){
                    dispatch(getCaptchaThunk());
                }
                dispatch(errorMessageAC(res?.data?.fieldsErrors || [])); 
            }
        })
    };
};

export const getCaptchaThunk = () => {
    return (dispatch) => {
        API.getCaptcha()
        .then((res) => dispatch(getCaptchaAC(res?.data)))
    }
}