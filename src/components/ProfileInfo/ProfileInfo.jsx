
const ProfileInfo = ({profile}) => {
  return (
    <div>
        <p>{profile?.aboutMe ? profile?.aboutMe : ""}</p>
        <p>{profile?.contacts?.facebook ? profile?.contacts?.facebook : ""}</p>
        <p>{profile?.contacts?.instagram ? profile?.contacts?.instagram : ""}</p>
        <p>{profile?.contacts?.twitter ? profile?.contacts?.twitter : ""}</p>
        <p>{profile?.contacts?.vk ? profile?.contacts?.vk : ""}</p>
        <p>{profile?.contacts?.mainLink ? profile?.contacts?.mainLink : ""}</p>
        <p>{profile?.contacts?.github ? profile?.contacts?.github : ""}</p>
        <p>{profile?.contacts?.youtube ? profile?.contacts?.youtube : ""}</p>
    </div>
  )
}

export default ProfileInfo