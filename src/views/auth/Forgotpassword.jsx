import React from 'react';
import { Row, Col, Alert, Button, Form, FloatingLabel, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import loginImage from '../../assets/images/auth/login.jpg';
import logo from '../../assets/images/auth/logo.png';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FiAlertTriangle } from "react-icons/fi";
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
                    <Col sm={7} className="p-0">
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
                                    <Formik
                                        initialValues={{
                                            email: 'info@codedthemes.com',
                                            password: '123456',
                                            submit: null
                                        }}
                                        validationSchema={Yup.object().shape({
                                            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                            password: Yup.string().max(255).required('Password is required')
                                        })}
                                        >
                                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                            <form noValidate onSubmit={handleSubmit}>
                                                {/* Email Input */}
                                                <Form.Group className="mb-3" controlId="email">
                                                    <FloatingLabel
                                                        controlId="floatingInput"
                                                        label="Enter Email"
                                                        className="mb-3"
                                                    >
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Enter Email"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            // value={values.email}
                                                        />
                                                    </FloatingLabel>
                                                    {touched.email && errors.email && <small className="text-danger form-text d-flex justify-content-start align-items-center gap-1"><FiAlertTriangle/>{errors.email}</small>}
                                                </Form.Group>


                                                {/* Error Message for Submit */}
                                                {errors.submit && (
                                                    <Col sm={12}>
                                                    <Alert>{errors.submit}</Alert>
                                                    </Col>
                                                )}

                                                {/* Submit Button */}
                                                <Row className="mt-4">
                                                    <Col mt={2} className='d-flex justify-content-between align-items-center'>
                                                        <Link to="/company/create-new-project" className="btn-block mb-0 create-button btn btn-primary waves-effect waves-light">
                                                            Sumbit
                                                        </Link>
                                                        <span className="mb-2 text-muted forgot">
                                                            <NavLink to={'/auth/signin'} className="text-muted">
                                                                <IoMdLock /> Don't have an account ? Log In
                                                            </NavLink>
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </form>
                                        )}
                                        </Formik>

                                    {/* <div className="below-text">
                                        <p>
                                            Don't have an account ? <NavLink to={'/auth/signin'}>Log In</NavLink>{' '}
                                        </p>

                                    </div> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='copyright_form'>
                        <p>Copyright © {new Date().getFullYear()} Dev Panel. All Rights Reserved. Powered By: <NavLink to={'https://www.digihost.in/'} targe="_blank">DigiHost Tech Solutions Pvt. Ltd.</NavLink></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </React.Fragment>
  );
};

export default SignIn;
