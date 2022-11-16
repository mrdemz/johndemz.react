import React,{useState} from "react";

import {styles} from '../styles'

import MessageForm from "./MessageForm";
import MessageMe from "./MessageMe"

const ChatWindow = props =>{
    const [user,setUser]  = useState(null)
    const [chat, setChat]  = useState(null)
    return(
        <div
            
            style={{
                ...styles.supportWindow,
                ...{opacity:props.visible? '1':'0'}
                
            }}
       >

            <MessageForm
                setUser = {user => setUser(user)}
                setChat = {chat => setChat(chat)}
                visible = {user === null || chat === null}
            />
            <MessageMe
                visible = {user !== null && chat !== null}
                chat = {chat}
                user = {user}
                
            />
            

       </div>
    )
}
export default ChatWindow