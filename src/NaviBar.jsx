import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route,Switch, Router} from "react-router-dom";


import "./navibar.css"
import demzlogo from "./images/demzlogo.png";
import Home from "./Home";
import Project from "./Project";
import About from "./About"
import Skills from "./Skills";
import Contact from "./Contact";
function NaviBar() {

 


  return (
    <Router>
    <>
    <Navbar sticky="top" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><img id="nav-logo" src={demzlogo} alt="John Demz"/></Navbar.Brand>
      <Nav className="me-auto">
        <div className="wrapper">
          <ul>
            <li><b className="bi bi-house">
            <Nav.Link  to="/home"><i >Home</i></Nav.Link></b></li>
            <li><b  className="bi bi-person">
              <Nav.Link to="/about"><i >About</i></Nav.Link></b></li>
              <li><b  className="bi bi-gear">
              <Nav.Link to="/skills" ><i >Skills</i></Nav.Link></b></li>
              <li><b  className="bi bi-envelope">
              <Nav.Link to="/contact" ><i >Contact</i></Nav.Link></b></li>
              <li><b  className="bi bi-kanban">
              <Nav.Link to="/projects"  ><i >Projects</i></Nav.Link></b></li>
          </ul>
        </div>
      </Nav>
    </Container>
  </Navbar>
  <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Switch>
      <Route index element={<Home />} />
       <Route exact path="/home" component={Home}></Route>
       <Route path="/about" element={About}> </Route>
        <Route  exact path="/skills" element={Skills}> </Route>
        <Route  exact path="Contact" component={Contact}> </Route>
        <Route exact path="Projects" element={Project}> </Route>
        </Switch>
      </Routes>
    </BrowserRouter>
  </>
  </Router>
  );
}

export default NaviBar;