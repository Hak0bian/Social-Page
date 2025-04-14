import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";
import Pagination from "../Pagination/Pagination";

const Users = () => {
    const { users, totalUsersCount, totalPagesCount } = useSelector((state) => state.users);

    return (
        <section>
            <UserCard users={users} />
            <Pagination totalUsersCount={totalUsersCount} totalPagesCount={totalPagesCount} />
        </section>
    );
};

export default Users;