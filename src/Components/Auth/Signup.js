import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../Redux/Actions/AuthActions';
import store from '../../Redux/Store/Store';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Signup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // You can perform signup logic here, e.g., making an API request
    // If signup is successful, dispatch the signup action.
    const userData = {
      username,
      email,
      password,
    };

    props.signup(userData);
    console.log(store.getState());
  };

  return (
    <div>
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
      </Col>
    </Row>
  </Container>

    </div>
  );
}

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);
