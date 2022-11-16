import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Project() {
const gooIc = <FontAwesomeIcon icon={faGoogle} />
const gitIc = <FontAwesomeIcon icon={faGithub} />

  return (
    <div>
      
      
      <div style={{userSelect:"none"}} >
      Engine Code Generator<br/>
      <a style={{color:"#DB4437"}} href = "https://drive.google.com/file/d/12YfD90V2uhfO6IV0SifGMpegFlUbwPoM/view?usp=share_link">
        {gooIc} 
      </a>
      &nbsp;&nbsp;&nbsp;
      <a style={{color:"#f5f5f5"}} href = "https://github.com/mrdemz/code-generate-encrypt">
        {gitIc}
      </a>
      </div>
    <div>
    Engine Decoder<br/>
    <a style={{color:"#DB4437"}} href = "https://drive.google.com/file/d/1q0tChFJpKAsNln8OuANhtZDbEcks3fPq/view?usp=share_link">
          {gooIc}
      </a>&nbsp;&nbsp;&nbsp;
      <a style={{color:"#f5f5f5"}} href = "https://github.com/mrdemz/code-decrypt-repo">
      {gitIc}
      </a>
    </div>
      
      
      
      
      
      </div>
  )
}
