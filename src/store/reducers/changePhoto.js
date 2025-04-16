import { API } from "../../api/api"

const CHANGE_PHOTO = "CHANGE_PHOTO"

const initState = {
    file: {}
}

export const changePhotoReducer = (state = initState, action) => {
    switch(action.type){
        case CHANGE_PHOTO :
            return {
                ...state,
                file: action.payload
            }


        default :
            return state
    }
}

const changePhotoAC = (file) => ({type: CHANGE_PHOTO, payload : file})

export const changePhotoThunk = (file) => {
    return(dispatch) => {
        API.changePhoto(file)
        .then((res) => dispatch(changePhotoAC(res.data)))
        .catch((err) => console.log(err))
    }
}