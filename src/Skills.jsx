import React, {useState} from 'react'
import "./skills.css"

export default function Skills() {


 const dat1p1 = require("./images/cplus1.PNG")
 const dat1p2 = require("./images/cplus2.PNG")
 const dat1p3 = require("./images/cplus3.PNG")
 const dat2p1 = require("./images/csharp1.PNG")
 const dat2p2 = require("./images/csharp2.PNG")
 const dat2p3 = require("./images/csharp3.PNG")
 const dat3p1 = require("./images/java1.PNG")
 const dat3p2 = require("./images/java2.PNG")
 const dat3p3 = require("./images/java3.PNG")
 const dat4p1 = require("./images/php1.PNG")
 const dat4p2 = require("./images/php2.PNG")
 const dat4p3 = require("./images/php3.PNG")
 const dat5p1 = require("./images/sql1.PNG")
 const dat5p2 = require("./images/sql2.PNG")
 const dat5p3 = require("./images/sql3.PNG")
 
const cPlus=[dat1p1,dat1p2,dat1p3]
const cSharp=[dat2p1,dat2p2,dat2p3]
const javaImg=[dat3p1,dat3p2,dat3p3]
const [phpImg, setPhImg]= useState([dat4p1,dat4p2,dat4p3])
const [sqlImg, setSqImg]= useState([dat5p1,dat5p2,dat5p3])
const [scroll, setScroll] = useState(false)
const [datImg, setDat]= useState([])




function setCplus(){
	setDat(cPlus)
}
function setCsharp(){
	setDat(cSharp)
}
function setJava(){
	setDat(javaImg)
}
function setPhp(){
	setDat(phpImg)
}
function setSQL(){
	setDat(sqlImg)
}


  return (
    <>
    
<div style={{marginTop:"5%"}} >	
	
	<div className='skillsMain-cont' style={{display:"inline-block"}}  >
		<div>
		<h1 >Skills & Experience</h1>
		<div className='skills-caption' onMouseEnter={()=>{
			setScroll(true)
			setCplus()
		} } onMouseOut={()=>setScroll(false)}  style={{paddingLeft:"15%"}} >C++</div>
		<div className='skills-caption' onMouseEnter={()=>{
			setScroll(true)
			setCsharp()
		} }  onMouseOut={()=>setScroll(false)}>C#</div>
		<div className='skills-caption' onMouseEnter={()=>{
			setScroll(true)
			setJava()
		} }  
		onMouseOut={()=>setScroll(false)}>Java</div>
		<div className='skills-caption' style={{paddingLeft:"5%"}}>JavaScript</div>
		<div className='skills-caption'>React</div>
		<div className='skills-caption' onMouseEnter={()=>{
			setScroll(true)
			setPhp()
			
		} } onMouseOut={()=>setScroll(false)} >php</div>
		<div className='skills-caption'  style={{paddingLeft:"15%"}}>HTML</div>
		<div className='skills-caption'>CSS</div>
		<div className='skills-caption' onMouseEnter={()=>{
			setScroll(true)
			setSQL()
			
		} 
			} onMouseOut={()=>setScroll(false)} >SQL</div>

		<div className='secSkills-caption' style={{marginTop:"45px", paddingLeft:"40px"}}>| Android Studio |</div>
		<div className='secSkills-caption'> Ruby on Rails |</div>
		<div className='secSkills-caption'> Unreal Engine 4 |</div>
		<div className='secSkills-caption'>| Blender |</div>
		<div className='secSkills-caption'> AutoCAD |</div>
		<div className='secSkills-caption'> SolidWorks |</div>
		<div className='secSkills-caption'> Engineering Practices |</div>
		</div>
	
	</div>
	<div className='sk-sec-cont' style={scroll?fadeStyle:
			unmountedStyle }>
		<div style={scroll?mountedStyle:
			unmountedStyle
		
		
			}>
		{datImg.map((dat,id)=><img src={dat} key={id} id="skill-dat" >
			{console.log(id)}
		
		
		</img>
			)}
	
	
		</div>
		

	</div>

</div>
	
    </>
  )
}

const fadeStyle = {animation:"fadeIn 2s"}
const mountedStyle ={ animation:"scroll 40s infinite", position:"relative"}
const unmountedStyle ={opacity:0,  position:"relative"}
