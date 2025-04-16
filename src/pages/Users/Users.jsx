import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersThunk } from "../../store/reducers/getUsersReducer";
import { UserCard, Pagination } from "../../components"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import st from "./Users.module.css"

const Users = () => {
    const dispatch = useDispatch();
    const { users, page, totalUsersCount, totalPagesCount } = useSelector((state) => state.users);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (users.length > 0) {
            setLoading(false); 
        }
    }, [users]);

    useEffect(() => {
        dispatch(getUsersThunk(page)); 
    }, [page]);

    return (
        <section>
            {loading ? (
                <div className={st.usersContainer}>
                    {[...Array(20)].map((_, ind) => (
                        <div key={ind} className={st.userDivSkeleton}>
                            <Skeleton  className={st.imgSkeleton} />
                            <Skeleton  className={st.titleSkeleton} />
                            <Skeleton  className={st.btnSkeleton} />
                        </div>
                    ))}
                </div>
            ) : (
                <UserCard users={users} />
            )}


            {loading ? (
                <div className={st.buttonsDivSkeleton}>
                    {[...Array(7)].map((_, ind) => (
                        <button key={ind}>
                            <Skeleton className={st.pageBtnSkeleton} />
                        </button>
                    ))}
                </div>
            ) : (
                <Pagination totalUsersCount={totalUsersCount} totalPagesCount={totalPagesCount} />
            )}
        </section>
    );
};

export default Users;