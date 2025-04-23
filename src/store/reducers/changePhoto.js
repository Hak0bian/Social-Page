import { API } from "../../api/api"

const CHANGE_PHOTO = "CHANGE_PHOTO"
const FILE_ERROR = "FILE_ERROR"
const initState = {
    file: {},
    fileError: ""
}

export const changePhotoReducer = (state = initState, action) => {
    switch(action.type){
        case CHANGE_PHOTO :
            return {
                ...state,
                file: action.payload,
                fileError: ""
            }
        case FILE_ERROR : 
            return {
                ...state,
                fileError: action.payload
            }
        default :
            return state
    }
}

const changePhotoAC = (file) => ({type: CHANGE_PHOTO, payload : file})
const fileErrorAC = (err) => ({type: FILE_ERROR, payload: err})

export const changePhotoThunk = (file) => {
    return(dispatch) => {
        API.changePhoto(file)
        .then((res) => {
            if(res?.data?.resultCode === 0){
                dispatch(changePhotoAC(res?.data))
            }else if(res?.data?.resultCode === 1){
                dispatch(fileErrorAC(res?.data?.messages[0]))
            }
        })
        .catch((err) => console.log(err))
    }
}