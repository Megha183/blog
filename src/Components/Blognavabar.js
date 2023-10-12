import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Blognavabar() {
  const username = useSelector((state) => state.auth.user?state.auth.user.username:'');
  console.log(username);
  const navigate=useNavigate()
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("logout success");
    navigate("/login");
  };
  return (

    <div>
      <Container>
        <Navbar bg="light" expand="lg" className="mb-4">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Navbar.Brand href="/">Blogging Site</Navbar.Brand>
              <p>{username}</p>
              <Nav.Link href="/">Home</Nav.Link>
              {isLoggedIn ? (
                <Button onClick={logout}>Logout</Button>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline-primary" href="/signup" className="ms-2">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signUp">
                    <Button variant="primary" href="/signUp" className="ms-2">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
export default Blognavabar;