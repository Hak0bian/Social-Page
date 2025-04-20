import { API } from "../../api/api";

const SEARCH_USER = "SEARCH_USER"
const CLEAR_RESULTS = "CLEAR_RESULTS";
const initState = {
    searchedUsers: []
}

export const searchUserReducer = (state = initState, action) => {
    switch(action.type){
        case SEARCH_USER :
            return {
                ...state,
                searchedUsers: action.payload
            }
        case CLEAR_RESULTS:
            return {
                ...state,
                searchedUsers: []
            };
        default:
            return state;
    }
}

const searchUserAC = (userName) => ({type: SEARCH_USER, payload: userName})
export const clearResultsAC = () => ({ type: CLEAR_RESULTS })

export const searchUserThunk = (userName) => {
    return (dispatch) => {
        API.searchUser(userName)
        .then((res) => dispatch(searchUserAC(res?.data?.items)))
        .catch((err) => console.warn(err));
    }
}