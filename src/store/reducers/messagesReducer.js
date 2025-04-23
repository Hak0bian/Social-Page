import { API } from "../../api/api";

const SEND_MESSAGES = "SEND_MESSAGES"
const GET_MESSAGES = "GET_MESSAGES"
const CLEAR_MY_MESSAGES = "CLEAR_MY_MESSAGES";
const CLEAR_THEIR_MESSAGES = "CLEAR_THEIR_MESSAGES"

const initState = {
    myMessages: [],
    theirMessages: []
}

export const messagesReducer = (state = initState, action) => {
    switch(action.type){
        case SEND_MESSAGES :
            return {
                ...state,
                myMessages: [...state.myMessages, action.payload]
            }
        case GET_MESSAGES :
            return {
                ...state,
                theirMessages: action.payload
            }
        case CLEAR_MY_MESSAGES :
            return {
                ...state,
                myMessages: []
            };
        case CLEAR_THEIR_MESSAGES :
            return {
                ...state,
                theirMessages: []
            };
        default:
            return state
    }
}

const myMessageAC = (mess) => ({type: SEND_MESSAGES, payload: mess})
const theirMessageAC = (mess) => ({type: GET_MESSAGES, payload: mess})
export const clearMyMessagesAC = () => ({ type: CLEAR_MY_MESSAGES });
export const clearTheirMessagesAC = () => ({ type: CLEAR_THEIR_MESSAGES });

export const myMessageThunk = (userId, message) => {
    return (dispatch) => {
        API.sendMessage(userId, message)
        .then((res) => dispatch(myMessageAC(res?.data?.data?.message)))
        .catch((err) => console.error(err))
    }
}

export const theirMessageThunk = (userId) => {
    return (dispatch) => {
        API.getMessage(userId)
        .then((res) => dispatch(theirMessageAC(res?.data?.items)))
        .catch((err) => console.error(err))
    }
}