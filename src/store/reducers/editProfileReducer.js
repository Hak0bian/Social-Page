import { API } from "../../api/api"

const EDIT_PROFILE = "EDIT_PROFILE"
const initState = {
    editedValues: {}
}

export const editProfileReducer = (state = initState, action) => {
    switch(action.type){
        case EDIT_PROFILE :
            return {
                ...state,
                editedValues: action.payload
            }
        default :
            return state
    }
}

const editProfileAC = (data) => ({type: EDIT_PROFILE, payload : data})
export const editProfileThunk = (values) => {
    return(dispatch) => {
        API.editProfile(values)
        .then((res) => {dispatch(editProfileAC(res.data))
            console.log(res);
            
        })
        .catch((err) => console.log(err))
    }
}