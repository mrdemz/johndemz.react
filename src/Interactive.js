import {useEffect, useRef, useState} from "react";
import "./interactive.css"
import Flag from "./Flag";


import playerImgRight from "./images/human_right.png"
import playerImgRunRight from "./images/human_run_right.png"
import playerImgLeft from "./images/human_left.png"
import playerImgRunLeft from "./images/human_run_left.png"



import platformImg from  "./images/platform.png"
import movingPlatformImg from "./images/moving_platform1.png"
import movingPlatformImg2 from "./images/moving_platform2.png"
import bgImg from "./images/bg.png"
import bldgImg from "./images/building_asset1.png"
import bldgImg2 from "./images/building_asset4.png"
import bldgImg3 from "./images/building_asset3.png"
import weatherImg from "./images/moon.png"
import  ProgressBar  from "react-bootstrap/ProgressBar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';








const Interactive=()=>{
	const [modalShow, setModalShow] = useState(false);



	const canvasRef = useRef(null);
	let [direc, setDir] = useState('left_up');
	let [mode, setMode] = useState(['Easy','Normal','Hard']);
	let [life, setLife] = useState(100);
	let[score,setScore] = useState(0);
	let [time, setTime] = useState(0);
	let [isDead, setStatus] = useState(false);
	useEffect(()=>{


	
	





		


const canvas = canvasRef.current
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 500

const gravity = 0.5
var counter = 0
var moving_counter = 0
let lastKey
var mouse_down = true
var walk_left = false
var walk_right = false
var using_key = false

setStatus(false);
let currentLife = 100
setLife(currentLife);

// ====================================Player Class====================================


function createImage(image_src){

 const img = new Image()
img.src = image_src
return img

}



class Player{
constructor(){
	this.position = {
		x:100,
		y:-100
	}
	this.velocity ={
		x:0,
		y:1
	}
const player_img_right = new Image()
const player_img_run_right = new Image()
const player_img_left = new Image()
const player_img_run_left = new Image()
player_img_right.src = playerImgRight
player_img_run_right.src = playerImgRunRight
player_img_left.src = playerImgLeft
player_img_run_left.src = playerImgRunLeft








this.width = 66
this.height = 150
this.image = createImage(player_img_right.src)
this.frames = 0
this.sprites = {
	stand:{
		right:createImage(player_img_right.src),
		left:createImage(player_img_left.src)

	},
	run:{
		right:createImage(player_img_run_right.src),
		left:createImage(player_img_run_left.src)
	}
}

this.currentSprite = this.sprites.stand.right

}
draw(){
	
c.drawImage(this.currentSprite,
	64*this.frames,
	0,
	64,
	128,

 this.position.x, 
 this.position.y,
  this.width,
  this.height)	
	}

	update(){

		counter++
		if (counter == 60){
			counter = 0
		}else if(counter%3 == 0){
			this.frames++
		}
		if(this.frames == 60) this.frames = 0
		this.draw()
		this.position.y += this.velocity.y
		this.position.x += this.velocity.x
		if(this.position.y + this.height + this.velocity.y <= canvas.height)
			this.velocity.y += gravity
		

	}



}






//===============================Generic Object Class========================================


class GenericBackGround{

constructor({x,y, bg_img}){
	this.position = {
	x,
	y: y

	}
this.image = bg_img
this.width = bg_img.width
this.height = bg_img.height

}
draw() {
	c.drawImage(this.image, this.position.x, this.position.y)	
	

	}
}


//======================================Platform Class=====================================

class GenericPlatform{

constructor({x,y, platform_img}){
	this.position = {
	x,
	y: y

	}
this.image = platform_img
this.width = 853
this.height = platform_img.height

}
draw() {
	c.drawImage(this.image, this.position.x, this.position.y)
	

	}
}




class MovingPlatform{

constructor({x,y, moving_platform_img,width,height}){
	this.position = {
	x,
	y: y

	}
this.image = moving_platform_img
this.width = width
this.height = height

}
draw() {
	c.drawImage(this.image, this.position.x, this.position.y)
	

	}
}




class Weather{

constructor({x,y, weather_img}){
	this.position = {
	x,
	y: y

	}
this.image = weather_img
this.width = weather_img.width
this.height = weather_img.height

}
draw() {
	c.drawImage(this.image, this.position.x, this.position.y)	
	

	}
}




class BuildingAsset{

constructor({x,y, bldg_img}){
	this.position = {
	x,
	y: y

	}
this.image = bldg_img
this.width = bldg_img.width
this.height = bldg_img.height

}
draw() {
	c.drawImage(this.image, this.position.x, this.position.y)	
	

	}
}



//==================================Image Object============================================= 
const platform_img = new Image()
const moving_platform_img = new Image()
const moving_platform_img2 = new Image()
const bg_img = new Image()
const bldg_img = new Image()
const bldg_img2 = new Image()
const bldg_img3 = new Image()
const weather_img = new Image()
//===============================Image Source=========================================
platform_img.src = platformImg
moving_platform_img.src = movingPlatformImg
moving_platform_img2.src = movingPlatformImg2
bg_img.src = bgImg
bldg_img.src = bldgImg
bldg_img2.src = bldgImg2
bldg_img3.src = bldgImg3
weather_img.src = weatherImg





//===============================Player Object=========================================
const player = new Player()

//==============================Platform Object==========================================
const platforms = [
new GenericPlatform({x:-100, y:420,platform_img}), 
new GenericPlatform({x:740, y:420,platform_img}), 

 new GenericPlatform({x:2420, y:420,platform_img}),
  new GenericPlatform({x:3260, y:420,platform_img}),
  new GenericPlatform({x:4100, y:420,platform_img}), 
  new GenericPlatform({x:4940, y:420,platform_img}), 
  new GenericPlatform({x:5780, y:420,platform_img}), 
  new GenericPlatform({x:6620, y:420,platform_img}), 
  new GenericPlatform({x:7460, y:420,platform_img}),
   new GenericPlatform({x:8300, y:420,platform_img}), 
  new GenericPlatform({x:9140, y:420,platform_img}),
   new GenericPlatform({x:9980, y:420,platform_img}), 
  new GenericPlatform({x:10820, y:420,platform_img})]





 const movingPlatforms = [
new MovingPlatform({x:1700, y:300,moving_platform_img,width:256,height:100}),
new MovingPlatform({x:11800, y:400,moving_platform_img: moving_platform_img2,width:512,height:120})]
//================================Generic Object=========================================
const genericBackGrounds = [new GenericBackGround({
	x:-100,
	y:0,
	bg_img}), new GenericBackGround({x:1720, y:0,bg_img})]


const buildingAssets = [
	 new BuildingAsset({x:0,y:-185,bldg_img}),
	 new BuildingAsset({x:1150, y:-185,bldg_img:bldg_img2}), 
	 new BuildingAsset({x:2400, y:-185,bldg_img:bldg_img3})
	 ]

	 const weathers = [
	 new Weather({x:650,y:0,weather_img})
	 ]


const keys ={
	right:{
		pressed:false
	},
	left:{
		pressed:false
	}
}


let scrollOffset = 100;




function animate(){


	//CHAR PIT FALL



	
	if( currentLife>0 ){
		requestAnimationFrame(animate)

	genericBackGrounds.forEach(genericBackGround=>{
	genericBackGround.draw()
	})
	weathers.forEach(weathers=>{
	weathers.draw()
	})


	buildingAssets.forEach(buildingAssets=>{
	buildingAssets.draw()
	})
	



	platforms.forEach(platforms=>{
	platforms.draw()
	})



	movingPlatforms.forEach(movingPlatforms=>{
	movingPlatforms.draw()
	})



player.update()








	if (keys.right.pressed && player.position.x < 600){
		player.velocity.x=5
	}else if(keys.left.pressed  && player.position.x > 100 ){
		player.velocity.x = -5
	}
	else if(keys.left.pressed && scrollOffset  <= 10 ){
		player.velocity.x = 0
	}
	else{
	
		player.velocity.x = 0
		if(keys.right.pressed){
			console.log(currentLife)
			scrollOffset +=  5
			currentLife-=0.1
			setLife(currentLife)
			platforms.forEach(platform=>{
			platform.position.x -= 5
			})
			movingPlatforms.forEach(movingPlatform=>{
			movingPlatform.position.x -= 5
			})
			genericBackGrounds.forEach(genericBackGround=>{
				genericBackGround.position.x -= 0.6 
			})
			buildingAssets.forEach(buildingAsset=>{
				buildingAsset.position.x -= 3 
			})
			weathers.forEach(weather=>{
				weather.position.x -= 0.2 
				weather.position.y += 0.05
			})
			
		}else if (keys.left.pressed){
			
			if(scrollOffset != 0)
			scrollOffset -=  5
			platforms.forEach(platform=>{
			platform.position.x += 5
			})
			movingPlatforms.forEach(movingPlatform=>{
			movingPlatform.position.x += 5
			})
			genericBackGrounds.forEach(genericBackGround=>{
				genericBackGround.position.x += 0.6
			})
			buildingAssets.forEach(buildingAsset=>{
				buildingAsset.position.x += 3 
			})
			weathers.forEach(weather=>{
				weather.position.x += 0.2 
				weather.position.y -= 0.05
			})
			
		}

	}



		platforms.forEach(platform=>{
	if (player.position.y+player.height <= platform.position.y+40 &&
	 player.position.y +player.height+player.velocity.y >= platform.position.y+40
	 && player.position.x +player.width >= platform.position.x&& 
	 player.position.x  <= platform.position.x+platform.width){
		player.velocity.y = 0
	}
})

				movingPlatforms.forEach(movingPlatform=>{
	if (player.position.y+player.height <= movingPlatform.position.y+40 &&
	 player.position.y +player.height+player.velocity.y >= movingPlatform.position.y+40
	 && player.position.x +player.width >= movingPlatform.position.x&& 
	 player.position.x  <= movingPlatform.position.x+movingPlatform.width){
		player.velocity.y = 0


		if(moving_counter <= 300){
			player.position.x += 0.64
		}
		else if (moving_counter > 300 && moving_counter < 600){
			player.position.x -= 0.64
		}


	
	}
})


handleDeath()

if (keys.right.pressed && lastKey === 'right' 
	&& player.currentSprite !== player.sprites.run.right 
	|| walk_right && keys.right.pressed){
	player.currentSprite = player.sprites.run.right
	if (using_key)player.frames = 1
	player.currentSprite = player.sprites.run.right
}else if (keys.left.pressed && lastKey === 'left' 
	&& player.currentSprite !== player.sprites.run.left 
	|| walk_left && keys.left.pressed){
	if (using_key)player.frames = 1
	player.currentSprite = player.sprites.run.left
}else if (!keys.right.pressed && lastKey === 'right' 
	&& player.currentSprite !== player.sprites.stand.right
	|| !keys.right.pressed && lastKey === 'right'){
	
	player.currentSprite = player.sprites.stand.right
}else if (!keys.left.pressed && lastKey === 'left'  
	&& player.currentSprite !== player.sprites.stand.left
	|| !keys.left.pressed && lastKey === 'left'){
	
	player.currentSprite = player.sprites.stand.left
}


	}else{
	
		
	dOutline();
	}



}

async function dOutline() {
	
	c.textAlign = "center"
	c.fillStyle = "#9CD0FF"
	c.font = "50px sans-serif";
	c.fillText("Defeated!", 500, 200); 
	setScore(0)
	await sleep(2000);
	setModalShow(true)
  }
		
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }







function handleDeath(){

	if (player.position.y > canvas.height && player.position.y < canvas.height+100  )
	currentLife = 0;
}









function move_platform(){
if(moving_counter <= 300){
moving_counter++

	movingPlatforms.forEach(movingPlatform=>{
			movingPlatform.position.x += 1
			})
}
else if(moving_counter > 300 && moving_counter <= 900){
	
	movingPlatforms.forEach(movingPlatform=>{
		moving_counter++
			movingPlatform.position.x -= 1
			})	
}
else if (moving_counter > 900){
	
	moving_counter = 0
}



}



setInterval(move_platform, 5)
animate()





var down = false;
// eslint-disable-next-line no-restricted-globals
addEventListener('keydown', ({keyCode})=> {
	
		switch (keyCode){
			case 65:
			keys.left.pressed = true
			lastKey = 'left'
			using_key = true
			walk_left = false
			walk_right = false
			break
			case 83:
			break
			case 68:
			keys.right.pressed = true
			lastKey = 'right'
			using_key = true
			walk_left = false
			walk_right = false
			break
			case 87:
			if (down) {

				return;

			}else if(player.velocity.y == 0 ){
			down = true
			player.velocity.y -= 15
			using_key = true
  				
  			}
  			break
		}
    
	})



// eslint-disable-next-line no-restricted-globals
addEventListener('keyup', ({keyCode})=> {
	
		switch (keyCode){
			case 65:
			keys.left.pressed = false
		
			break
			case 83:
			break
			case 68:
			keys.right.pressed = false
			
			break
			case 87:
				
							down = false;
							break
						
			
							


		}
	})

const direction = direc.current





if(direction === 'left_down'){
	left_button()
}
else if(direction === 'left_up'){
	left_release()
}
else if(direction === 'right_down'){
	right_button()
}
else if(direction === 'right_up'){
	right_release()
}
else if(direction === 'up_down'){
	up_button()
}
else if(direction === 'up_up'){
	up_release()
}



function  left_button(){
walk_right = false
keys.right.pressed = false
walk_left = true
keys.left.pressed = true
using_key = false
   
   	
		
}

function left_release(){
	walk_left = false
	keys.left.pressed = false
	lastKey = 'left'
		
}


function  right_button(){
walk_left = false
keys.left.pressed = false
walk_right = true
keys.right.pressed = true
using_key = false
   
				
}

function right_release(){
	walk_right = false
	keys.right.pressed = false
	lastKey = 'right'
	
}


function up_button(){
if (down) {

				return;

			}else if(player.velocity.y == 0 ){
			down = true
			player.velocity.y -= 15
			using_key = false
  				
  			}


		}


function up_release (){


	down = false;
}
		

},[isDead

])


return(
	
	<>
			<DefeatedModal
	show={modalShow}
	onHide={() => {
		
		setModalShow(false)
		setStatus(true)	
	}}/>
	<div style={{position:"absolute",height: "auto", top:"0", left:"25%", height:"700px"}}>


	
	<canvas id="canv" className="canvas-container" style= {{position: "fixed",  border:"solid", borderColor:"grey", borderRadius:"20px", top:"15%",height:"50%", width:"50%"}} ref={canvasRef}></canvas>
	
	<div id="container-cont">
		<div id = "intCont-1">
			<p style={{paddingLeft:"30%"}}>CONTROLS</p>
			<button id = "left-btn"onMouseUp={()=>setDir('left_down')} onMouseDown={()=>setDir('left_up')}>A</button>
			<button id = "up-btn"onMouseUp={()=>setDir('left_down')} onMouseDown={()=>setDir('left_up')}>W</button>
			<button id = "right-btn"onMouseUp={()=>setDir('left_down')} onMouseDown={()=>setDir('left_up')}>D</button>
			<p id="left-label">Walk Left</p>
			<p id="up-label">Jump</p>
			<p id="right-label">Walk Right</p>
		</div>


</div>
	
		<div id="intCont-2">
		<p style={{paddingLeft:"40%"}}>HEALTH</p>
			{life>=50?<ProgressBar variant="info" id="prog" animated now = {life}/>:life < 50 && life >=20?
			 <ProgressBar variant="warning" id="prog" animated now = {life}/>: 
			 <ProgressBar variant="danger" id="prog" animated now = {life}/> }
		</div>


	</div>



		
	</>

	
)







function DefeatedModal(props) {
	return (
		
	  <Modal
	  {...props}
		
		size="sm"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Header closeButton>
		  <Modal.Title id="contained-modal-title-vcenter"  >
			
			   <h3 id="mod-title"> Defeated</h3>
			
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body>
		  <h3 id="mod-bod">Your Score is: {score}</h3>
		
		</Modal.Body>
		<Modal.Footer>
		  <Button id="mod-but" onClick={props.onHide
			
			
			}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
  }



}








export default Interactive;