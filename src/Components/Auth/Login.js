import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/AuthActions';
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login(props) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const username = useSelector(state => state.auth.user.username)
  const psw = useSelector(state => state.auth.user.password)

  // console.log(username,psw);
  const handleLogin = async (e) => {
    e.preventDefault()
    // Replace this with actual authentication logic
    // Check if the username and password are valid
    const userData = {
      userName, password
    };
    console.log(userData);
    const response = await axios.get('http://localhost:3001/users')
    
    if (response.data) {
      console.log(response.data);
      const user = response.data.find(user => user.username ? user.username == userData.userName : '')
      
      console.log(user,user.id,"user is.............");
      
  
      if (user) {
        if (password == user.password) {
         const userDetails={
            userName, password,userId:user.id
          }
          props.login(userDetails);
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
          alert('Login successful');
          navigate('/');
        } else {
          alert('incorrect psw')
        }
      } else {
        alert('user not found')
      }
    }

  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Login</h2>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Form>
          <p>
            Don't have an account?{' '}
            <Link to="/signup">Sign up here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
