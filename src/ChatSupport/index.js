import React,{useRef,useEffect,useState} from "react";
import Profile from "./Profile";
import ChatWindow from "./ChatWindow";

 

const ChatSupport = ()=>{
    const ref = useRef(null)
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
        function handleClickOutside(event){
            if(ref.current&&!ref.current.contains(event.target)){
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[ref])
    return(

        <div ref = {ref}  >

                <ChatWindow
                visible = {visible}    />
                <Profile        
                 onClick = {()=>setVisible(true)}
                 style={{
                    position:'fixed',
                    bottom:'24px',
                    right:'20px'
                 }}
                />






        </div>




    )






}
export default ChatSupport