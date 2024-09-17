import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import loginImage from '../../../assets/images/auth/login.jpg';
import logo from '../../../assets/images/auth/logo.png';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import AuthLogin from './JWTLogin';
import { IoMdLock } from 'react-icons/io';

const Signin1 = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
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

export default Signin1;
