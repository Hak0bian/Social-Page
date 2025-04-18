import React from 'react'
import profileImg from "../../assets/profile.png"
import st from "./UserCard.module.css"
import { NavLink } from 'react-router-dom'
import {FollowButton} from '../index'

const UserCard = ({users}) => {
    return (
        <div className={st.usersContainer}>
            {
                users?.map((user) => {
                    return (
                        <div key={user?.id} className={st.userDiv}>
                            <NavLink to={`/profile/${user?.id}`}>
                                <div className={st.profileDiv}>
                                    <img src={user?.photos?.large ? user?.photos?.large : profileImg} />
                                    <h3>{user.name}</h3>
                                </div>
                            </NavLink>
                            <FollowButton/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserCard