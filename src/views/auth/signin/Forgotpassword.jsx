import React from 'react';
import { Card, Row, Col, Button, Alert, Form, FloatingLabel } from 'react-bootstrap';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
const Forgotpassword = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless text-center">
                        <Card.Body>
                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon" />
                                <h5 className="mt-1" mt={2}>Forgot Password</h5>
                            </div>
                            <form>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email Address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="Email address" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                                <Alert variant="primary" className="text-start mt-3">
                                    An mail with reset password link will be sent to the entered email id.
                                </Alert>
                                <Row className="mt-4">
                                    <Col mt={2}>
                                        <Button className="btn-block mb-4" color="primary" size="large" type="submit" variant="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Forgotpassword;
