import { API } from "../../api/api"

const SET_LOGIN = "SET_LOGIN"
const ERROR_MESSAGE = "ERROR_MESSAGE";
const CLEAR_ERROR = "CLEAR_ERROR";
const CAPTCHA = "CAPTCHA"
const GENERAL_ERROR = "GENERAL_ERROR"

const initState = {
    userId : null,
    errorMessages: [],
    generalError: [],
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
        case GENERAL_ERROR:
            return {
                ...state,
                generalError: action.payload
            };
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
const setGeneralErrorAC = (errorMsg) => ({ type: GENERAL_ERROR, payload: errorMsg });

export const setLoginThunk = (values) => {
    return (dispatch) => {
        API.setLogin(values)
        .then((res) => {
            if (res?.data?.resultCode === 0) {
                dispatch(setLoginAC(res?.data?.data?.userId));
            } else {
                if (res?.data?.resultCode === 10){
                    dispatch(getCaptchaThunk());
                }
                if (res?.data?.fieldsErrors.length > 0) {
                    dispatch(errorMessageAC(res?.data?.fieldsErrors));
                    dispatch(setGeneralErrorAC(null));
                } else if (res?.data?.messages?.length > 0) {
                    dispatch(errorMessageAC([])); 
                    dispatch(setGeneralErrorAC(res?.data?.messages[0]));
                }
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