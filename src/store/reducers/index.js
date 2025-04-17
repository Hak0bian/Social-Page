import { getUsersReducer, changePageAC, getUsersThunk } from "./getUsersReducer"
import { profileReducer, getProfileThunk } from "./profileReducer"
import { authReducer, clearErrorAC, setLoginThunk } from "./authReducer"
import { editProfileReducer, editProfileThunk } from "./editProfileReducer"
import { changePhotoReducer, changePhotoThunk } from "./changePhoto"
import { logOutReducer, logOutThunk } from "./logOutReducer"

export { getUsersReducer, changePageAC, profileReducer, authReducer, editProfileReducer, changePhotoReducer, logOutReducer,
    getUsersThunk, getProfileThunk, setLoginThunk, editProfileThunk, changePhotoThunk, logOutThunk, clearErrorAC
 }