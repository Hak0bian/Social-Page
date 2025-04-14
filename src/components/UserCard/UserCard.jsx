import React from 'react'
import profile from "../../assets/profile.png"
import st from "./UserCard.module.css"

const UserCard = ({users}) => {
    return (
        <div className={st.usersContainer}>
            {
                users?.map((user) => {
                    return (
                        <div key={user.id} className={st.userDiv}>
                            <img src={user?.photos?.large ? user?.photos?.large : profile} />
                            <h3>{user.name}</h3>
                            <button className={st.flw}>Follow</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserCard