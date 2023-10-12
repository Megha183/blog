import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/AuthActions';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this with actual authentication logic
    // Check if the username and password are valid
    if (username && password) {
      const userData = {
        username,
      };

      props.login(userData);
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      alert('Login successful');
      navigate('/');
    } else {
      alert('Invalid username or password');
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
                value={username}
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
