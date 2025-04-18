import { useState } from "react"
import { FaCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setStatusThunk } from "../../store/reducers";
import st from "./ChangeStatus.module.css"

const ChangeStatus = ({userStatus, setEditStatus}) => {
    const [myStatus, setmyStatus] = useState(userStatus) 
    const [letters, setLetters] = useState(300 - (userStatus?.length || 0)) 
    const userId = localStorage.getItem("userId")
    const dispatch = useDispatch()   

    const handleChangeStatus = (e) => {
        const newValue = e.target.value;
        setmyStatus(newValue);
        setLetters(300 - newValue.length);
    };
    
    const saveStatus = () => {
        dispatch(setStatusThunk(myStatus, userId));
        setEditStatus(false);
    };

    const saveByEnter = (e) => {
        if (e.key === "Enter") saveStatus();
    }

    return (
        <div>
            <div className={st.changeDiv}>
                <input 
                    value={myStatus} 
                    onChange={handleChangeStatus} 
                    maxLength={300} 
                    onKeyDown={saveByEnter}
                    className={st.inp}
                />
                <FaCheck onClick={saveStatus} className={st.checkStatus}/>
            </div>
            <span>{`${letters}/300`}</span>
        </div>
    )
}

export default ChangeStatus