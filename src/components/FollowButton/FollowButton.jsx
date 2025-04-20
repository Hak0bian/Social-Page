import { useDispatch } from "react-redux"
import { setFollowThunk } from "../../store/reducers"
import st from "./FollowButton.module.css"
import { useEffect, useState } from "react"

const FollowButton = ({ userId, UserFollowed }) => {
    const [isFollowed, setIsFollowed] = useState(UserFollowed);
    const dispatch = useDispatch();
  
    const handleFollowing = () => {
        dispatch(setFollowThunk(userId, setIsFollowed))
    };

    useEffect(() => {
        setIsFollowed(UserFollowed);
    }, [UserFollowed]);
  
    return (
        <button onClick={handleFollowing} className={st.followBtn}>
            { isFollowed ? "Unfollow" : "Follow" }
        </button>
    );
  };
  
  export default FollowButton;