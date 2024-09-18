import React from 'react';
import { Card, Row, Container, Col, Button, Alert, Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import loginImage from '../../assets/images/auth/login.jpg';
import logo from '../../assets/images/auth/logo.png';
import { MdOutlineEmail } from 'react-icons/md';
const Forgotpassword = () => {
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
                      <p>Sign in to continue to DiigiiHost.</p>
                    </div>
                    <form action="">
                      <Alert variant="primary" className="text-start mt-3">
                        Enter your Email and instructions will be sent to you!
                      </Alert>
                      <Form.Group className="mb-3" controlId="email">
                        <div className="input-container">
                          <Form.Label>Email ID</Form.Label>
                          <Form.Control type="email" name="email" placeholder="Enter Email" />
                          <span className="icon">
                            <MdOutlineEmail />
                          </span>
                        </div>
                      </Form.Group>
                      <Row className="mt-4">
                        <Col mt={2}>
                          <Button className="btn-block mb-4" color="primary" size="large" type="submit" variant="primary">
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </form>
                    <div className="below-text">
                      <p>
                        Don't have an account ? <NavLink to={'/auth/signin'}>Log In</NavLink>{' '}
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

export default Forgotpassword;
