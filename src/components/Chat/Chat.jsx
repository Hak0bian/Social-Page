import { useDispatch, useSelector } from "react-redux"
import { myMessageThunk, theirMessageThunk, clearMyMessagesAC, clearTheirMessagesAC } from "../../store/reducers"
import { useEffect, useState } from "react"
import profileImg from "../../assets/profile.png"
import st from "./Chat.module.css"

const Chat = ({profile}) => {
    const {theirMessages} = useSelector((state) => state.messages);
    const {myMessages} = useSelector((state) => state.messages);
    const dispatch = useDispatch()
    const [text, setText] = useState("");
    
    useEffect(() => {
        dispatch(clearMyMessagesAC()); 
        dispatch(clearTheirMessagesAC()); 
        dispatch(theirMessageThunk(profile?.userId));
      
        const interval = setInterval(() => {
            dispatch(theirMessageThunk(profile?.userId));
        }, 5000);
        
        return () => clearInterval(interval);
    }, [profile?.userId]);
    
    const handleSendMessage = () => {
        if (text.trim() !== "") {
            dispatch(myMessageThunk(profile?.userId, text));
            setText("");
        }
    };

    return (
        <div className={st.chat}>
            <div className={st.chatProfileDiv}>
                <img src={profile?.photos?.large ? profile?.photos?.large : profileImg} />
                <h4>{profile?.fullName}</h4>
            </div>

            <div className={st.chatBox}>
                {theirMessages?.map((msg) => (
                    <div key={msg.id} className={st.their}>
                        <p>{msg?.body}</p>
                    </div>
                ))}

                {myMessages?.map((msg, ind) => (
                    <div key={ind} className={st.mine}>
                        <p>{msg?.body}</p>
                    </div>
                ))}
            </div>
            <div>
                <input 
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write Message..."
                    className={st.messageInp}
                />
                <button onClick={handleSendMessage} className={st.messageBtn}>Send</button>
            </div>
        </div>
    )
}

export default Chat