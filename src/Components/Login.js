import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Style.css'
function Login() {
  return (
    <div>
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center ">
        <Col xs={12} md={6} lg={4}>
          <div className="text-center mb-4">
            <h2 className="login-heading">Login</h2>
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter your username"
                required
                className="input-field"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
                className="input-field"
              />
            </Form.Group>

            <Button variant="success" type="submit" block className="submit-button">
              Login
            </Button>
          </Form>
          </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Login