import React, {useState} from 'react'
import timeline_core from "./images/timeline_core.png"
import timeline from "./images/timeline.png"
import ring from "./images/ring.png"
import about from "./about.css"

import  ProgressBar  from "react-bootstrap/ProgressBar";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




export default function About() {

	
	const [modalShow, setModalShow] = useState(false);
	const [slide, setSlide]= useState(false);
	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
		  Rate my artistic design quality based on my web design :)
		</Tooltip>
	  );
  return (
    <>
          
	
		
			<div className='abtmain-cont' style={{ display:"inline-block"}} >

				<h1>About me</h1>
				
			<ul className='ab-ul' >
				<div id="ul-head" style={{marginTop:"50px"}}><p >Progress</p></div>
				<li className = "ab-li" style={{borderTopRightRadius:"15px"}} >
					Classical Solo <OverlayTrigger
					placement="right"
					delay={{ show: 250, hide: 400 }}
					overlay={renderTooltip}
					><Button id="ab-rating" onClick={()=>setModalShow(true)}>Rate me</Button></OverlayTrigger> 
					<ProgressBar variant="info" id="ab-prog"  now = {50}/>
				</li>
				<li className = "ab-li">
					Jazz Solo <ProgressBar variant="info" id="ab-prog"  now = {90}/>
				</li>
				<li className = "ab-li">
					Photorealism  <ProgressBar variant="info" id="ab-prog"  now = {95}/>
				</li>
				<li className = "ab-li" style={{borderBottomLeftRadius:"15px", borderBottomRightRadius:"15px"}}>
					Expressionism <ProgressBar variant="info" id="ab-prog"  now = {99}/>
				</li>
				
			</ul>

			<ul className='ab-ul' >
				
			<div id="ul-head"><p>Interests</p></div>

					<li className = "ab-li2" style={{borderTopRightRadius:"15px"}}>
						Design Patterns<ProgressBar variant="info" id="ab-prog"  now = {95}/>
					</li>
					<li className = "ab-li2">
						Small Projects <ProgressBar variant="info" id="ab-prog"  now = {80}/>
					</li>
					<li className = "ab-li2">
						Big Projects <ProgressBar variant="info" id="ab-prog"  now = {85}/>
					</li>
					<li className = "ab-li2" style={{borderBottomLeftRadius:"15px"}}>
					Digital & Physical Artworks <ProgressBar variant="info" id="ab-prog"  now = {95}/>
					</li>
					
				</ul>
					<div id="ab-drop-div">
					<DropdownButton id="ab-drop" title="More About">
					<Dropdown.Item onClick={()=>setSlide(!slide)}>Popular Titles</Dropdown.Item>
					<Dropdown.Item >Auction</Dropdown.Item>
					<Dropdown.Item >WIP</Dropdown.Item>
					</DropdownButton>
					</div>

			</div>

			<div  className='orb-set-cont' style={{ display:"inline-block"}}>
	
					<img  id = "timeline" src={timeline}/>
					<img  id = "core" src={timeline_core}/>	
					<img  id = "ring" src={ring}/>
					



					<div  id="ex-cont1"><div id="extr-1"><p id="extr-p"  style = {slide?mountedStyle1:unmountedStyle}>Baroque</p></div></div>
					<div  id="ex-cont2"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle2:unmountedStyle}>The House</p></div></div>
					<div  id="ex-cont3"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle3:unmountedStyle}>Why?</p></div></div>
					<div  id="ex-cont4"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle4:unmountedStyle}>Small World</p></div></div>
					<div  id="ex-cont5"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle5:unmountedStyle}>Little Things</p></div></div>
					<div  id="ex-cont6"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle6:unmountedStyle}>Bella Luna</p></div></div>
					<div  id="ex-cont7"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle7:unmountedStyle}>Contrary</p></div></div>
					<div  id="ex-cont8"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle8:unmountedStyle}>2007</p></div></div>
					<div  id="ex-cont9"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle9:unmountedStyle}>Isn't it?</p></div></div>
					<div  id="ex-cont10"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle10:unmountedStyle}>Paris o ui</p></div></div>
					<div  id="ex-cont11"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle11:unmountedStyle}>Cat</p></div></div>
					<div  id="ex-cont12"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle12:unmountedStyle}>Oh my</p></div></div>
					<div  id="ex-cont13"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle13:unmountedStyle}>Repent</p></div></div>
					<div  id="ex-cont14"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle14:unmountedStyle}>Legacy</p></div></div>
					<div  id="ex-cont15"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle15:unmountedStyle}>Cryptology</p></div></div>
					<div  id="ex-cont16"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle16:unmountedStyle}>Honeymoon</p></div></div>
					<div  id="ex-cont17"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle17:unmountedStyle}>The Baron</p></div></div>
					<div  id="ex-cont18"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle18:unmountedStyle}>Duke's Eye</p></div></div>
					<div  id="ex-cont19"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle19:unmountedStyle}>Ten Amendments</p></div></div>
					<div  id="ex-cont20"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle20:unmountedStyle}>Crash Me Later</p></div></div>
					<div  id="ex-cont21"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle21:unmountedStyle}>White</p></div></div>
					<div  id="ex-cont22"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle22:unmountedStyle}>Tea or Me</p></div></div>
					<div  id="ex-cont23"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle23:unmountedStyle}>Breath</p></div></div>
					<div  id="ex-cont24"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle24:unmountedStyle}>By</p></div></div>
					<div  id="ex-cont25"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle25:unmountedStyle}>Hive</p></div></div>
					<div  id="ex-cont26"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle26:unmountedStyle}>Quing</p></div></div>
					<div  id="ex-cont27"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle27:unmountedStyle}>Fun no</p></div></div>
					<div  id="ex-cont28"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle28:unmountedStyle}>Later</p></div></div>
					<div  id="ex-cont29"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle29:unmountedStyle}>Bold</p></div></div>
					<div  id="ex-cont30"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle30:unmountedStyle}>Sought</p></div></div>
					<div  id="ex-cont31"><div id="extr-1"><p id="extr-p" style = {slide?mountedStyle31:unmountedStyle}>Hi</p></div></div>

			</div>					
									
									
									
											
									
					
			
			
					
			
					
				

				
		


	
		
	<RatingModal
	show={modalShow}
	onHide={() => {
		
		setModalShow(false)
	
		
	}}

/>

	


    </>
	
  )
 


  function RatingModal(props) {
	return (
		
	  <Modal
	  {...props}
		
		size="sm"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Header closeButton>
		  <Modal.Title id="abmod-ti"  >
			
			   <h3 id="mod-title"> Rate Me</h3>
			
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body id="abmod-bo">
		  <input type="number" id="abmod-in" min={1} max={10}  onKeyDown={(event)=>{event.preventDefault()}}></input> out of 10
		
		</Modal.Body>
		<Modal.Footer id="abmod-foo">
		  <Button id="mod-but" onClick={props.onHide
			
			
			}>Submit</Button>
		</Modal.Footer>
	  </Modal>
	);
  }


  
}
const mountedStyle1 = {animation: "slide_left 0.5s forwards",
		animationDelay: "0.2s"}
		const mountedStyle2 = {animation: "slide_left 0.5s forwards",
		animationDelay: "0.4s"}
		const mountedStyle3 = {animation: "slide_left 0.5s forwards",
		animationDelay: "0.6s"}
		const mountedStyle4 = {animation: "slide_left 0.5s forwards",
		animationDelay: "0.8s"}
		const mountedStyle5 = {animation: "slide_left 0.5s forwards",
		animationDelay: "1s"}
		const mountedStyle6 = {animation: "slide_left 0.5s forwards",
		animationDelay: "1.2s"}
		const mountedStyle7 = {animation: "slide_left 0.5s forwards",
		animationDelay: "1.4s"}
		const mountedStyle8 = {animation: "slide_left 0.5s forwards",
		animationDelay: "1.6s"}
		const mountedStyle9 = {animation: "slide_left 0.5s forwards",
		animationDelay: "1.8s"}
		const mountedStyle10 = {animation: "slide_left 0.5s forwards",
		animationDelay: "2s"}
		const mountedStyle11 = {animation: "slide_left 0.5s forwards",
		animationDelay: "2.2s"}
		const mountedStyle12 = {animation: "slide_left 0.5s forwards",
		animationDelay: "2.4s"}
		const mountedStyle13 = {animation: "slide_left 0.5s forwards",
		animationDelay: "2.6s"}
		const mountedStyle14 = {animation: "slide_left 0.5s forwards",
		animationDelay: "2.8s"}
		const mountedStyle15 = {animation: "slide_left 0.5s forwards",
		animationDelay: "3s"}
		const mountedStyle16 = {animation: "slide_left 0.5s forwards",
		animationDelay: "3.2s"}
		const mountedStyle17 = {animation: "slide_left 0.5s forwards",
		animationDelay: "3.4s"}
		const mountedStyle18 = {animation: "slide_left 0.5s forwards",
		animationDelay: "3.6s"}
		const mountedStyle19 = {animation: "slide_left 0.5s forwards",
		animationDelay: "3.8s"}
		const mountedStyle20 = {animation: "slide_left 0.5s forwards",
		animationDelay: "4s"}
		const mountedStyle21 = {animation: "slide_left 0.5s forwards",
		animationDelay: "4.2s"}
		const mountedStyle22 = {animation: "slide_left 0.5s forwards",
		animationDelay: "4.4s"}
		const mountedStyle23 = {animation: "slide_left 0.5s forwards",
		animationDelay: "4.6s"}
		const mountedStyle24 = {animation: "slide_left 0.5s forwards",
		animationDelay: "4.8s"}
		const mountedStyle25 = {animation: "slide_left 0.5s forwards",
		animationDelay: "5s"}
		const mountedStyle26 = {animation: "slide_left 0.5s forwards",
		animationDelay: "5.2s"}
		const mountedStyle27 = {animation: "slide_left 0.5s forwards",
		animationDelay: "5.4s"}
		const mountedStyle28 = {animation: "slide_left 0.5s forwards",
		animationDelay: "5.6s"}
		const mountedStyle29 = {animation: "slide_left 0.5s forwards",
		animationDelay: "5.8s"}
		const mountedStyle30 = {animation: "slide_left 0.5s forwards",
		animationDelay: "6s"}
		const mountedStyle31 = {animation: "slide_left 0.5s forwards",
		animationDelay: "6.2s"}
		const unmountedStyle = {animation: "slide_back 0.5s forwards"
		}