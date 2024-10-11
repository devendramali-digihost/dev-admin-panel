import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import loginImage from '../../assets/images/auth/login.jpg';
import logo from '../../assets/images/auth/logo.png';
import AuthLogin from './JWTLogin';
import { IoMdLock } from 'react-icons/io';

const SignIn = () => {
  return (
    <React.Fragment>
        <div className="auth-wrapper">
            <Container fluid>
                <Row className="auth-row d-flex align-items-center justify-content-center">
                    <div className="image">
                        <img src={loginImage} alt="" />
                    </div>
                    <Col sm={6} className="p-0">
                        <div className="auth-content">
                            <Card className="borderless d-flex align-items-center justify-content-center">
                                <Card.Body className="">
                                    <div className="mb-4 text-center">
                                        <div className="logo">
                                            <img src={logo} alt="" />
                                        </div>
                                        <h5 className="mt-1">Welcome Back !</h5>
                                        <p>Sign in to continue to DiigiiHost.</p>
                                    </div>
                                    <AuthLogin />
                                    <p className="mb-2 text-muted forgot">
                                        <NavLink to={'/auth/forgotpassword'} className="text-muted">
                                            <IoMdLock /> Forgot your password?
                                        </NavLink>
                                    </p>
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
                </Row>
            </Container>
        </div>
    </React.Fragment>
  );
};

export default SignIn;
