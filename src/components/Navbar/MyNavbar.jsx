import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './MyNavbar.css';


function MyNavbar() {
    return (
        <>
        <Navbar className="my-nav" expand="lg" fixed='top'>
        <Navbar.Brand href="#home">ARN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle> 
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link className=''href="#home">Home</Nav.Link>
        <Nav.Link className=''href="#about">About</Nav.Link>
        <Nav.Link className=''href="#skills">Skills</Nav.Link>
        <Nav.Link className=''href="#experience">Experience</Nav.Link>
        <Nav.Link className=''href="#projects">Projects</Nav.Link>
        <Nav.Link className=''href="#contacts">Contacts</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </ >
        )
      }
      
      export default MyNavbar;
      
      // <img className="myLogo" src={logo} alt=""/>