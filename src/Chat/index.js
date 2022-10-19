import React from "react";
import { ChatEngine } from "react-chat-engine";

const Chat =()=>{
    return(
        <ChatEngine
        projectID={process.env.REACT_APP_CE_PROJECT_ID}
        userName = 'John Demz'
        userSecret = 'johndemz'
        height = '100vh'
        />
    )
}

export default Chat