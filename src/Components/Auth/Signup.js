import React, { useState } from 'react';
import store from '../../Redux/Store/Store'
import { connect } from 'react-redux';
import { signup } from '../../Redux/Actions/AuthActions';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup =async () => {
    // Replace this with actual signup logic
    // Check if the username, email, and password are valid
    if (username && email && password) {
      const userData = {
        username,
        password,
        email,
      };
      const response=await axios.post('http://localhost:3001/users',userData)

     console.log(store.getState());
      console.log(userData,"userdata ....");
      alert('Signup successful');
      navigate('/login');
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Signup</h2>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <Button variant="success" onClick={handleSignup}>
              Signup
            </Button>
          </Form>
          <p>
            Already have an account?{' '}
            <Link to="/login">Log in here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}


export default Signup;
