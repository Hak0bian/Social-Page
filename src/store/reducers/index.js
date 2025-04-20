import { getUsersReducer, changePageAC, getUsersThunk } from "./getUsersReducer"
import { profileReducer, getProfileThunk, getStatusThunk, setStatusThunk } from "./profileReducer"
import { authReducer, clearErrorAC, setLoginThunk, getCaptchaThunk } from "./authReducer"
import { editProfileReducer, editProfileThunk } from "./editProfileReducer"
import { changePhotoReducer, changePhotoThunk } from "./changePhoto"
import { logOutReducer, logOutThunk } from "./logOutReducer"
import { setFollowThunk } from "./followReducer"
import { searchUserReducer, searchUserThunk } from "./searchUserReducer"

export { getUsersReducer, changePageAC, getUsersThunk, profileReducer, getProfileThunk, getStatusThunk, setStatusThunk, 
    authReducer, clearErrorAC, setLoginThunk, getCaptchaThunk, editProfileReducer, editProfileThunk,
    changePhotoReducer, changePhotoThunk, logOutReducer, logOutThunk, setFollowThunk, searchUserReducer, searchUserThunk
 }