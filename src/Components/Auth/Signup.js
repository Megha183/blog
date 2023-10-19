import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Style.css';
import { Link } from 'react-router-dom';

const Signup = () => {
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSignup = () => {
    // handle signup logic here
 };

 return (
  <Container className="signup-container">
  <Row className="justify-content-center">
    <Col md={8} lg={6} xl={4}>
      <h2 className="text-center mb-4">Signup</h2>
      <Form>
        <Form.Group controlId="username">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </Form.Group>
            <Button variant="success" onClick={handleSignup} className="w-100">
              Signup
            </Button>
          </Form>
          <p className="text-center mt-3">
            Already have an account?{' '}
            <Link to="/login" className="text-primary">
              Log in here
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
 );
};

export default Signup;