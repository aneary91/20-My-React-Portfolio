import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './MyNavbar.css';


function MyNavbar() {
    return (
        <>
        <Navbar className="my-nav" expand="lg" fixed='top'>
        <Navbar.Brand href="#home">ARN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link className=''href="#features">Home</Nav.Link>
        <Nav.Link className=''href="#pricing">About</Nav.Link>
        <Nav.Link className=''href="#pricing">Skills</Nav.Link>
        <Nav.Link className=''href="#pricing">Experience</Nav.Link>
        <Nav.Link className=''href="#pricing">Projects</Nav.Link>
        <Nav.Link className=''href="#pricing">Contacts</Nav.Link>

        <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
        )
      }
      
      export default MyNavbar;
      
      // <img className="myLogo" src={logo} alt=""/>