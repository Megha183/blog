import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/AuthActions';
import store from '../../Redux/Store/Store';
import { Row,Col,Form,Container,Button } from 'react-bootstrap';
function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can perform authentication logic here, e.g., making an API request
    // If authentication is successful, dispatch the login action.
    const userData = {
      username,
      password,
    };

    props.login(userData);
    console.log(store.getState());
  };

  return (
    <div>
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
        </Col>
      </Row>
    </Container>
    </div>
  );
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
