import React from 'react';
import { Card, Row, Col, Button, Form, FloatingLabel, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/auth/logo.png';
import { MdLockOutline } from 'react-icons/md';
import loginImage from '../../assets/images/auth/login.jpg';
const Resetpassword = () => {
  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <Container fluid>
          <Row className="auth-row">
            <Col sm={4} className="p-0">
              <div className="auth-content">
                <Card className="borderless text-center">
                  <Card.Body>
                    <div className="mb-4">
                      <div className="logo">
                        <img src={logo} alt="" />
                      </div>
                      <h5 className="mt-1">Welcome Back !</h5>
                      <p>Sign in to continue to DigiHost.</p>
                    </div>
                    <form action="">
                      <Form.Group className="mb-3" controlId="password">
                        <div className="input-container">
                          <Form.Label>New Password</Form.Label>
                          <Form.Control type="password" placeholder="Enter New Password" name="password" />
                          <span className="icon">
                            <MdLockOutline />
                          </span>
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="password">
                        <div className="input-container">
                          <Form.Label>New Password</Form.Label>
                          <Form.Control type="password" placeholder="Confirm New Password" name="password" />
                          <span className="icon">
                            <MdLockOutline />
                          </span>
                        </div>
                      </Form.Group>
                      <Row className="mt-4">
                        <Col mt={2}>
                          <Button className="btn-block mb-4" color="primary" size="large" type="submit" variant="primary">
                            Reset
                          </Button>
                        </Col>
                      </Row>
                    </form>
                    <div className="below-text">
                      <p>
                        Don't have an account ? <NavLink to={'#'}>Register</NavLink>{' '}
                      </p>
                      <p>Copyright © 2024 DigiHost - All Rights Reserved.</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={8} className="p-0">
              <div className="image">
                <img src={loginImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>

  );
};

export default Resetpassword;
