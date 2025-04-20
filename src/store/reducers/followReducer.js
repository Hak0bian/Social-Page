import { API } from "../../api/api";

export const setFollowThunk = (userId, setIsFollowed) => {
    return () => {
        API.setFollow(userId)
        .then((res) => {
            if (res?.data?.resultCode === 0) {
                setIsFollowed(true);
            } 
            else if (res?.data?.resultCode === 1) {
                return API.deleteFollow(userId)
                .then((delRes) => {
                    if (delRes.data) {
                        setIsFollowed(false);
                    }
                });
            }
        })
        .catch((err) => console.error(err));
    };
};