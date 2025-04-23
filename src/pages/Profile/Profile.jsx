import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProfileThunk, getStatusThunk } from "../../store/reducers"
import { EditProfileForm, ChangeStatus, FollowButton, ProfileInfo, ProfileButtons, Chat } from "../../components"
import { BiSolidEditAlt } from "react-icons/bi";
import profileImg from "../../assets/profile.png"
import st from "./Profile.module.css"

const Profile = () => {
    const {id} = useParams()
    const {profile, userStatus} = useSelector((state) => state.userProfile)
    const [editProfile, setEditProfile] = useState(false)
    const [editStatus, setEditStatus] = useState(false)
    const [openChat, setOpenChat] = useState(false)
    const myId = localStorage.getItem("userId")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileThunk(id))
        dispatch(getStatusThunk(id))
    }, [id])
    

    return (
        <section className={st.myProfile}>
            <div>
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
                        
                        :   <div>
                                <h4>{userStatus ? userStatus : "No Status"}</h4>
                                <div className={st.btnDiv}>
                                    <FollowButton userId={id} UserFollowed={profile?.userId}/>
                                    <button onClick={() => setOpenChat(!openChat)} className={st.messBtn}>Message</button>
                                </div>
                            </div>
                    }

                    <ProfileInfo profile={profile}/>
                    { 
                        myId === id && <ProfileButtons setEditProfile={setEditProfile}/> 
                    }
                </div>
            </div>

            { editProfile && <EditProfileForm setEditProfile={setEditProfile}/> }
            { openChat && <Chat key={profile?.userId} profile={profile}/> }
        </section>
    )
}

export default Profile