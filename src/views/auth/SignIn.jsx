import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import loginImage from '../../assets/images/auth/login.jpg';  // Convert to WebP for better performance
import logo from '../../assets/images/auth/logo.png';
import AuthLogin from './JWTLogin';

const SignIn = () => {
  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <Row className="auth-row">
          <Col sm={6} className="image p-0">
            <img
              src={loginImage}
              alt="Login"
              loading="lazy"  // Lazy load non-essential images
              width="600"
              height="400"
            />
            <div className='copyright_form'>
              <p>
                Copyright © {new Date().getFullYear()} Dev Panel. All Rights Reserved.
                Powered By: <NavLink to={'https://www.digihost.in/'} target="_blank">DigiHost Tech Solutions Pvt. Ltd.</NavLink>
              </p>
            </div>
          </Col>
          <Col sm={6} className="p-0">
            <div className="auth-content">
              <Card className="borderless d-flex align-items-center justify-content-center">
                <Card.Body>
                  <div className="mb-4 text-center">
                    <div className="logo">
                      <img src={logo} alt="Logo" width="200" height="50" />  {/* Preload the logo */}
                    </div>
                    <h5 className="mt-1">Welcome Back!</h5>
                    <p>Sign in to continue to DiigiiHost.</p>
                  </div>
                  <AuthLogin />
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
