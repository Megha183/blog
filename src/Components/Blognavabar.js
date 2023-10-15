import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/AuthActions";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Blognavabar() {

  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  console.log(isLoggedIn,"isLogged ");
  const username = useSelector((state) => state.auth.user.userName);
  console.log(username,"username");
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const handleLogout = () => {
    dispatch(logout())
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
                <>
                <Link to={'/addNewBlog'}>
                <Button className="ms-2" >New Post</Button>
                </Link>
                <Button className="ms-2" >Setting</Button>

                <Dropdown data-bs-theme="dark" className="ms-2" >
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
         {username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          
          <Dropdown.Item href="#/action-2">Account</Dropdown.Item>
         
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4" onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                </>
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