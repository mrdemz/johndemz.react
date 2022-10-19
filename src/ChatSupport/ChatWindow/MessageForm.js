import React, {useState} from "react";
import {styles} from '../styles'
import {LoadingOutlined} from '@ant-design/icons'
import Profile from '../Profile'
import axios from 'axios'
const MessageForm = props =>{
    const [email, setAddress]= useState('')  
    const [loading, setLoading] = useState(false)


    function getOrCreateUser(callback){
        axios.put(
            'https://api.chatengine.io/users/',
            {
                "username":email,
                "secret": email,
                "email": email,
             },
        {headers:{"Private-Key":process.env.REACT_APP_CE_PRIVATE_KEY}}
        
        ) 
        .then (r=>callback(r.data))  
        }
    
    
    function getOrCreateChat(callback){
        axios.put(
            'https://api.chatengine.io/chats/',
            {
                "usernames": ['John Demz',email],
                "is_direct_chat":true
         
             },
        {headers:{"Private-Key":process.env.REACT_APP_CE_PRIVATE_KEY}}
        
        ) 
        .then (r=>callback(r.data))  

    }

    function handleSubmit(event){
        event.preventDefault();
        setLoading(true)

            getOrCreateUser(
                user=>{
                    props.setUser(user)
                    getOrCreateChat(
                        chat=> props.setChat(chat)
                    )
                }
            )





    }

    
    return(
        <div    
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: props.visible? '100%' : '0%',
                    opacity: props.visible? '1': '0',
                }
            }}
            >
              
                
            <div
                className="transition-5"
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex:loading? '10' : '-1',
                        opacity:loading? '0.33': '0',

                    }
                }}
            
            
            />
            <LoadingOutlined
            className="transition-5"
            style={{
                ...styles.loadingIcon,
                ...{
                    zIndex: loading ? '10': '-1',
                    opacity:loading ? '1' : '0',
                    fontSize:'82px',
                    top:'calc(50% - 41px)',
                    left:'calc(50% - 41px)',
                    
                }
            }}/>

            <div style= {{
                position:'absolute', 
                height:'100%', 
                width:'100%', 
                textAlign:'center'}}>
        

                <div style = {styles.topText}>
                    MessageME.
                </div>

                <form
                    onSubmit={e=>handleSubmit(e)}
                    style={{position:'relative',width:'100%', top:'19.75%'}}
                >
                    <input
                        style = {styles.emailInput}
                        onChange={e=>setAddress(e.target.value)}
                        placeholder = 'Your Email'
                    />

                </form>

                    <div style={styles.bottomText}>
                        Enter your email <br/> so we can chat
                    </div>


            </div>



            <div 
            
            
            style={{
                
                position:'absolute', 
                color:'white', 
                fontSize:'0.7em', 
                marginLeft:'10px', 
                bottom:'10px'}}>
                    Powered by ChatEngine
                </div>


            </div>
            

    )
}
export default MessageForm