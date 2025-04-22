import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom'
import profileImg from "../../assets/profile.png"
import { clearResultsAC } from "../../store/reducers/searchUserReducer";
import st from "./SearchedUsersList.module.css"
import { useEffect, useState } from "react";

const SearchedUsersList = ({inputValue, setInputValue}) => {
    const {searchedUsers} = useSelector((state) => state.search);
    const [notFound, setNotFound] = useState(false)
    const dispatch = useDispatch();

    const handleCleareResults = () => {
        setInputValue("");
        dispatch(clearResultsAC());
    }

    useEffect(() => {
        setNotFound(false); 
        const delayNotFound = setTimeout(() => {
            if (inputValue.trim() && searchedUsers.length === 0) {
                setNotFound(true);
            }
        }, 1000);
    
        return () => clearTimeout(delayNotFound);
    }, [inputValue, searchedUsers]);

    return (
        <div>
            {searchedUsers.length > 0 && (
                <ul className={st.resultList}>
                    {searchedUsers?.map((user, ind) => (
                        <NavLink to={`/profile/${user?.id}`} key={ind} onClick={handleCleareResults}>
                            <li key={user.id} className={st.userItem}>
                                <img src={user?.photos?.small || profileImg}  />
                                <span>{user?.name}</span>
                            </li>
                        </NavLink>
                    ))}
                </ul>
            )}

            { notFound && <p className={st.notFound}>User Not Found !</p> }
        </div>
    )
}

export default SearchedUsersList