import React from 'react';
import { Row, Col, Alert, Button, Form, FloatingLabel } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FaRegUser } from 'react-icons/fa6';
import { MdLockOutline } from 'react-icons/md';

const JWTLogin = () => {
  return (
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
            <div className="input-container">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              <span className="icon">
                <FaRegUser />
              </span>
            </div>
            {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
          </Form.Group>

          {/* Password Input */}
          <Form.Group className="mb-3" controlId="password">
            <div className="input-container">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              <span className="icon">
                <MdLockOutline />
              </span>
            </div>
            {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
          </Form.Group>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check type={type} id={`default-${type}`} label={`Remember me`} />
            </div>
          ))}

          {/* Error Message for Submit */}
          {errors.submit && (
            <Col sm={12}>
              <Alert>{errors.submit}</Alert>
            </Col>
          )}

          {/* Submit Button */}
          <Row className="mt-4">
            <Col mt={2}>
              <Button className="btn-block mb-4" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
                Log In
              </Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default JWTLogin;
