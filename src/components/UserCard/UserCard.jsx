import React from 'react'
import profileImg from "../../assets/profile.png"
import st from "./UserCard.module.css"
import { NavLink } from 'react-router-dom'

const UserCard = ({users}) => {
    return (
        <div className={st.usersContainer}>
            {
                users?.map((user) => {
                    return (
                        <div key={user.id} className={st.userDiv}>
                            <NavLink to={`/profile/${user?.id}`}>
                                <img src={user?.photos?.large ? user?.photos?.large : profileImg} />
                                <h3>{user.name}</h3>
                            </NavLink>
                            <button className={st.flw}>Follow</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserCard