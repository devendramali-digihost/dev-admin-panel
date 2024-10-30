import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/auth/logo.png";
import { MdLockOutline } from "react-icons/md";
import loginImage from "../../assets/images/auth/login.jpg";
import { Formik } from "formik";

const Resetpassword = () => {
  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <Row className="auth-row">
          <Col sm={12} md={6} className="image p-0">
            <img
              src={loginImage}
              alt="Login"
              loading="lazy"
              width="600"
              height="400"
            />
            <div className="copyright_form">
              <p>
                Copyright © {new Date().getFullYear()} Dev Panel. All Rights
                Reserved. Powered By:{" "}
                <NavLink to={"https://www.digihost.in/"} target="_blank">
                  DigiHost Tech Solutions Pvt. Ltd.
                </NavLink>
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} className="col-12 auth-content">
            <Card className="borderless d-flex align-items-center justify-content-center">
              <Card.Body>
                <div className="">
                  <div className="mb-4 text-center">
                    <div className="logo">
                      <img src={logo} alt="Logo" width="200" height="50" />
                    </div>
                    <h5 className="mt-1">Welcome Back!</h5>
                    <p>Reset Your Password.</p>
                  </div>
                </div>
                <Formik initialValues={{}} validationSchema={{}}>
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                  }) => (
                    <form action="" onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="old-password">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Old Password"
                          className="mb-3"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Old Password"
                          />
                        </FloatingLabel>
                        {touched.password && errors.password && (
                          <small className="text-danger form-text d-flex justify-content-start align-items-center gap-1">
                            <FiAlertTriangle /> {errors.password}
                          </small>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="new-password">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="New Password"
                          className="mb-3"
                        >
                          <Form.Control
                            type="email"
                            placeholder="New Password"
                          />
                        </FloatingLabel>
                        {touched.password && errors.password && (
                          <small className="text-danger form-text d-flex justify-content-start align-items-center gap-1">
                            <FiAlertTriangle /> {errors.password}
                          </small>
                        )}
                      </Form.Group>

                      <Row className="mt-4">
                        {errors.submit && (
                          <Col sm={12}>
                            <Alert>{errors.submit}</Alert>
                          </Col>
                        )}
                        <Col sm={12} mt={1}>
                          <Button
                            className="btn-block"
                            color="primary"
                            size="large"
                            type="submit"
                            variant="primary"
                          >
                            Reset
                          </Button>
                        </Col>
                        <Col sm={12} mt={2}>
                          <div className="below-text mt-3 text-center">
                            <p className="mb-4">
                              Don't have an account ?{" "}
                              <NavLink to={"#"}>Register</NavLink>{" "}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Resetpassword;
