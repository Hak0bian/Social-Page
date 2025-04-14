import { API } from "../../api/api"

const USERS = "USERS"
const CHANGE_PAGE = "CHANGE_PAGE"
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT"

const initState = {
    users : [],
    page : 1,
    totalUsersCount : 0,
    totalPagesCount : 100
}

export const getUsersReducer = (state = initState, action) => {
    switch(action.type){
        case USERS : 
            return {
                ...state,
                users: action.payload
            }
        case CHANGE_PAGE : 
            return {
                ...state,
                page: action.payload
            }
        case TOTAL_USERS_COUNT : 
            return {
                ...state,
                totalUsersCount: action.payload
            }
        default: 
            return state
    }
}

const getUsersAC = (users) => ({type: USERS, payload: users})
const totalUsersCountAC = (totalCount) => ({type: TOTAL_USERS_COUNT, payload: totalCount})
export const changePageAC = (pageNum) => ({type: CHANGE_PAGE, payload: pageNum})

export const getUsersThunk = (page) => {
    return (dispatch) => {
        API.getUsers(page)
        .then(res => {
            dispatch(getUsersAC(res.data.items))
            dispatch(totalUsersCountAC(res.data.totalCount))
        })
    }
}