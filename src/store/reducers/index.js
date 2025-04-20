import { getUsersReducer, changePageAC, getUsersThunk } from "./getUsersReducer"
import { profileReducer, getProfileThunk, getStatusThunk, setStatusThunk } from "./profileReducer"
import { authReducer, clearErrorAC, setLoginThunk, getCaptchaThunk } from "./authReducer"
import { editProfileReducer, editProfileThunk } from "./editProfileReducer"
import { changePhotoReducer, changePhotoThunk } from "./changePhoto"
import { logOutReducer, logOutThunk } from "./logOutReducer"
import { setFollowThunk } from "./followReducer"

export { getUsersReducer, changePageAC, profileReducer, authReducer, editProfileReducer, changePhotoReducer, 
    logOutReducer, getUsersThunk, getProfileThunk, getStatusThunk, setStatusThunk, setLoginThunk, 
    editProfileThunk, changePhotoThunk, logOutThunk, clearErrorAC, setFollowThunk, getCaptchaThunk
}