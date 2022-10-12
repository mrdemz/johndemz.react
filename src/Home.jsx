import React, {useState} from 'react'
import "./home.css"


import Interactive from "./Interactive"
import bg_img from "./images/bg_img.png"
<meta content="width=device-width, initial-scale=1" name="viewport" />
export default function Home()  {


let [isTriggered, setTriggered] = useState(false)
let [tourText, setText] = useState("Explore")





function handlTourButton(e){
handleTrigger()
handleText()

}


function handleTrigger(){
if (isTriggered)
{setTriggered(false)}
else
{setTriggered(true)}
}

function handleText()	{
	if(isTriggered){
	setText("Explore")}
	else{
	setText("Close")}
}



  return (
    <>
   
<div className='container-fluid'  id ="main-cont">
	
	<div style={{ maxWidth:"50%",}}>
								
			{
			isTriggered?<Interactive/>:
			<div>
			<div id="cont-4"><img  id = "intr14" src={bg_img}></img>
			</div>		<div className='container' id="cont-1" >
			<h1 id = "intr1">H</h1>
			<h1 id = "intr2">i,<br/></h1>
			<h1 id = "intr3"></h1>
			<h1 id = "intr4">I</h1>
			<h1 id = "intr5">'</h1>
			<h1 id = "intr6">m </h1>
			<h1 id = "intr7"> </h1>
			<h1 id = "intr8">J</h1>
			<h1 id = "intr9">o</h1>
			<h1 id = "intr10">h</h1>
			<h1 id = "intr11">n </h1>
			<h1 id = "intr8"> </h1>
			<h1 id = "intr9"> D</h1>
			<h1 id = "intr10">e</h1>
			<h1 id = "intr11">m</h1>
			<h1 id = "intr11">z</h1>
			<p id = "intr12" style = {{ color: "dimgray"}}>τέχνη | δημιουργικότητα | ΜΟΥΣΙΚΗ</p>
			</div>
			</div>
			}
			
	
			<div className='container' id="cont-2" ><button type='button'  href="" id ="intr13" onClick={()=>{handlTourButton()}}  >{tourText}</button>
			</div>
	

	</div>


</div >


    
    
    </>
  )
}

