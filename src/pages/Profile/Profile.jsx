import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProfileThunk, getStatusThunk, changePhotoThunk, logOutThunk } from "../../store/reducers"
import { EditProfileForm, ChangeStatus } from "../../components"
import { BiSolidEditAlt } from "react-icons/bi";
import { LuUserPen } from "react-icons/lu";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import profileImg from "../../assets/profile.png"
import st from "./Profile.module.css"

const Profile = () => {
    const {id} = useParams()
    const {profile, userStatus} = useSelector((state) => state.userProfile)
    const [editProfile, setEditProfile] = useState(false)
    const [editStatus, setEditStatus] = useState(false)
    const myId = localStorage.getItem("userId")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileThunk(id))
        dispatch(getStatusThunk(id))
    }, [id])

    const handleChangePhoto = (e) => {
        const file = e.target.files[0]
        dispatch(changePhotoThunk(file))
    }

    const handleLogOut = () => {
        dispatch(logOutThunk())
        localStorage.removeItem("userId")
    }
    

    return (
        <section className={st.myProfile}>
            <div className={st.profileDiv}>
                <img src={profile?.photos?.large ? profile?.photos?.large : profileImg} />
                <h2>{profile?.fullName}</h2>
                {
                    myId === id 
                    ?   editStatus
                        ?   <ChangeStatus userStatus={userStatus} setEditStatus={setEditStatus}/>
                        :   <div className={st.changeDiv}>
                                <h4>{userStatus ? userStatus : "No Status"}</h4>
                                <BiSolidEditAlt onClick={() => setEditStatus(true)} className={st.editStatus}/>
                            </div>
                    
                    :   <h4>{userStatus ? userStatus : "No Status"}</h4>
                }

                <p>{profile?.aboutMe ? profile?.aboutMe : ""}</p>
                <p>{profile?.contacts?.facebook ? profile?.contacts?.facebook : ""}</p>
                <p>{profile?.contacts?.instagram ? profile?.contacts?.instagram : ""}</p>
                <p>{profile?.contacts?.twitter ? profile?.contacts?.twitter : ""}</p>
                <p>{profile?.contacts?.vk ? profile?.contacts?.vk : ""}</p>
                <p>{profile?.contacts?.mainLink ? profile?.contacts?.mainLink : ""}</p>
                <p>{profile?.contacts?.github ? profile?.contacts?.github : ""}</p>
                <p>{profile?.contacts?.youtube ? profile?.contacts?.youtube : ""}</p>

                {
                    myId === id && (
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
                    )
                }
            </div>

            <div>
                {
                    editProfile && <EditProfileForm setEditProfile={setEditProfile}/>
                }
            </div>
        </section>
    )
}

export default Profile