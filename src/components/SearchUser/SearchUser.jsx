import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchUserThunk } from '../../store/reducers'
import SearchedUsersList from '../SearchedUsersList/SearchedUsersList'
import st from "./SearchUser.module.css"
import { clearResultsAC } from '../../store/reducers/searchUserReducer'


const SearchUser = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleSearch = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            if (inputValue.trim()) {
                dispatch(searchUserThunk(inputValue));
            }else{
                dispatch(clearResultsAC())
            }
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [inputValue]);


    return (
        <div className={st.searchDiv}>
            <input
                type="text"
                placeholder='Search User By Name'
                value={inputValue}
                onChange={(e) => handleSearch(e)}
                className={st.searchInput}
            />
            
            <SearchedUsersList inputValue={inputValue} setInputValue={setInputValue}/>
        </div>
    )
}

export default SearchUser