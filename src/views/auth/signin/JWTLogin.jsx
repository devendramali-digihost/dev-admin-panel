import React from 'react';
import { Row, Col, Alert, Button, Form, FloatingLabel } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

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

				<FloatingLabel
					controlId="floatingInput"
					label="Email ID"
					className="mb-3"
				>
					<Form.Control
						type="email"
						name="email"
						placeholder="Email ID"
						onBlur={handleBlur}
						onChange={handleChange}
						// value={values.email}
					/>
					{touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
				</FloatingLabel>
				<FloatingLabel controlId="floatingPassword" label="Password">
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						onBlur={handleBlur}
						onChange={handleChange}
					/>
					{touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
				</FloatingLabel>
				{/* <div className="custom-control custom-checkbox  text-start mb-4 mt-2">
					<input type="checkbox" className="custom-control-input mx-2" id="customCheck1" />
					<label className="custom-control-label" htmlFor="customCheck1">
					Save credentials.
					</label>
				</div> */}
				{errors.submit && (
					<Col sm={12}>
					<Alert>{errors.submit}</Alert>
					</Col>
				)}
				<Row className="mt-4">
					<Col mt={2}>
						<Button className="btn-block mb-4" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
							Signin
						</Button>
					</Col>
				</Row>
			</form>
		)}
		</Formik>
	);
};

export default JWTLogin;
