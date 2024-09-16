import React from 'react';
import { Card, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
const Resetpassword = () => {
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
                                <h5 className="mt-1">Reset Password</h5>
                            </div>
                            <Form>
                                <FloatingLabel controlId="floatingPassword" label="Set New Password">
                                    <Form.Control
                                        type="password"
                                        placeholder="Set New Password"
                                        className="mb-3"
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Confirm New Password">
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm New Password"
                                    />
                                </FloatingLabel>
                                <Row className="mt-4">
                                    <Col mt={2}>
                                        <Button className="btn-block mb-4" color="primary" size="large" type="submit" variant="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resetpassword;
