import React,{useState} from 'react'
import "./contact.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import ChatSupport from './ChatSupport'
const gooIc = <FontAwesomeIcon icon={faGoogle} />
const gitIc = <FontAwesomeIcon icon={faGithub} />
const linIc = <FontAwesomeIcon icon={faLinkedin} />

export default function Contact() {

    
    
  return (



    <>
    
    <div className='cont-main-cont' >
			<h1>Contact Me</h1>
				<h3><br/>Email Address:<br/>           
              {gooIc}
           
						<a href ="mailto:mrdemz14@gmail.com" className="con-p">mrdemz14@gmail.com</a>
				</h3><br/>
			<h3>LinkedIn:<br/>
            {gitIc}
				<a href = "https://linkedin.com/in/bell-john-demetria-16233b199" className="con-p">https://linkedin.com/in/bell-john-demetria-16233b199/</a></h3><br/>

			<h3>Github:<br/>
            {linIc}
				<a href = "https://github.com/mrdemz" className="con-p">https://github.com/mrdemz</a></h3>
                
                </div>

<div 
id="msg-me"
style={{
  position:'fixed', 
  color:'white', 
  fontSize:'1.5em', 
  right:'125px', 
  bottom:'20px'
  }}>
    MessageMe Now..👉
    </div>   
<ChatSupport
  
/>
  
</>

  )
}
