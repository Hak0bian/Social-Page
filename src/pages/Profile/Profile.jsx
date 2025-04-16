import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getProfileThunk } from "../../store/reducers/profileReducer"
import { changePhotoThunk } from "../../store/reducers/changePhoto"
import profileImg from "../../assets/profile.png"
import { EditProfileForm } from "../../components"
import st from "./Profile.module.css"

const Profile = () => {
    const {id} = useParams()
    const {profile} = useSelector((state) => state.userProfile)
    const [edit, setEdit] = useState(false)
    const myId = localStorage.getItem("userId")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileThunk(id))
    }, [id])

    const changePhoto = (e) => {
        const file = e.target.files[0]
        dispatch(changePhotoThunk(file))
    }

    const showEditForm = () => {
        setEdit(!edit)
    }


    return (
        <section className={st.myProfile}>
            <div className={st.profileDiv}>
                <img src={profile?.photos?.large ? profile?.photos?.large : profileImg} />
                <h2>{profile?.fullName}</h2>
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
                            <button onClick={showEditForm} className={st.editBtn}>Edit Profile</button>
                            <label className={st.uploadBtn}>
                                Change Photo
                                <input type="file" onChange={changePhoto} hidden/>
                            </label>
                            <button className={st.logOutBtn}>Log Out</button>
                        </div>
                    )
                }
            </div>

            <div>
                {
                    edit && <EditProfileForm edit={edit} setEdit={setEdit}/>
                }
            </div>
        </section>
    )
}

export default Profile