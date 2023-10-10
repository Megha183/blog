import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Blognavabar() {
  return (
    <div>
    <Container>
    <Navbar bg="light" expand="lg" className="mb-4">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Navbar.Brand href="/">Blogging Site</Navbar.Brand>

      </Nav>
    </Navbar.Collapse>

    <Nav.Link href="/">Home</Nav.Link>
       <Link to="/login"> <Button variant="outline-primary" href="/signup" className="ms-2">Login</Button></Link>
       <Link to='/signUp'>
        <Button variant="primary" href="/signUp" className="ms-2">Sign Up</Button>
        </Link>
  </Navbar>
  </Container>
  </div>
  )
}

export default Blognavabar