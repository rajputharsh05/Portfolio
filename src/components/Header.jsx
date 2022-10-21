import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import{ Button }from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg"  fixed="top" >
        <Container fluid>
        <Navbar.Brand href="#home">Harsh Singh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="Main">About</Nav.Link>
            <Nav.Link href="Skills">Skills</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            <Button variant='dark' size='sm'>Dark Mode</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header