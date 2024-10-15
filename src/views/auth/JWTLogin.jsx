import React from 'react';
import { Row, Col, Alert, Button, Form, FloatingLabel } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FaRegUser } from 'react-icons/fa6';
import { MdLockOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FiAlertTriangle } from "react-icons/fi";
import { IoMdLock } from 'react-icons/io';
// const [columnGap, setColumnGap] = useState(10);
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

          {/* Password Input */}
          <Form.Group className="mb-3" controlId="password">
			<FloatingLabel
				controlId="floatingInput"
				label="Enter Password"
				className="mb-3"
            >
              	<Form.Control
					type="password"
					placeholder="Enter Password"
					onBlur={handleBlur}
                	onChange={handleChange}
                	// value={values.password}
				/>
            </FloatingLabel>
            {touched.password && errors.password && <small className="text-danger form-text d-flex justify-content-start align-items-center gap-1"><FiAlertTriangle/> {errors.password}</small>}
          </Form.Group>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-0 mt-4 d-flex justify-content-between align-items-center gap-5">
              	<Form.Check type={type} id={`default-${type}`} label={`Remember me`} />
			  	<span className="mb-0 text-muted forgot">
					<NavLink to={'/auth/forgotpassword'} className="text-muted">
						<IoMdLock /> Forgot your password?
					</NavLink>
				</span>
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
              {/* <Button className="btn-block mb-4" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
                Log In
              </Button> */}
              <Link to="/company/create-new-project" className="btn-block mb-0 create-button btn btn-primary waves-effect waves-light">
                Log In
              </Link>

            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default JWTLogin;
