import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePhotoThunk, logOutThunk } from '../../store/reducers'
import { LuUserPen } from "react-icons/lu";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import st from "./ProfileButtons.module.css"

const ProfileButtons = ({setEditProfile}) => {
    const {fileError} = useSelector((state) => state.photo)
    const dispatch = useDispatch()

    const handleChangePhoto = (e) => {
        const file = e.target.files[0]
        dispatch(changePhotoThunk(file))
    }

    const handleLogOut = () => {
        dispatch(logOutThunk())
        localStorage.removeItem("userId")
    }

    return (
        <div>
            <div className={st.buttonsDiv}>
                <button onClick={() => setEditProfile(true)} className={st.editBtn}>
                    <LuUserPen/>
                </button>
                <label className={st.uploadBtn}>
                    <MdOutlineAddAPhoto/>
                    <input type="file" onChange={handleChangePhoto} hidden/>
                </label>
                <button onClick={handleLogOut} className={st.logOutBtn}>
                    <TbLogout/>
                </button>
            </div>
            { fileError && <p className={st.fileError}>{fileError}</p> }
        </div>
    )
}

export default ProfileButtons