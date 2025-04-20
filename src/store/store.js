import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { getUsersReducer, profileReducer, authReducer, editProfileReducer, 
    changePhotoReducer, logOutReducer, searchUserReducer } from "../store/reducers"

const rootReducer = combineReducers({
    users: getUsersReducer,
    userProfile: profileReducer,
    auth: authReducer,
    editProfile: editProfileReducer,
    photo: changePhotoReducer,
    logOutProfile: logOutReducer,
    search: searchUserReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

window.state = store