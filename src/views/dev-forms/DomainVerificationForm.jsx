import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const DomainVerificationForm = () => {
  return (
   
    <React.Fragment>
    <div className="mainForm">
    <p className="personal">Domain Verification Form</p>
    <p className="personalInfo">Please provide your company details.</p>
   
      <Row>
        <Col lg={12}>
        <Form>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyName">
                    <Form.Label>Domain ID</Form.Label>
                    <Form.Control type="text" placeholder="Domain ID" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyName">
                    <Form.Label>Domain Password</Form.Label>
                    <Form.Control type="password" placeholder="Company Name" />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <div className="text-start gap-2 d-flex align-items-center buy-btn">
                    <button type="submit" className="btn btn-primary waves-effect waves-light" variant="primary">
                      Verify
                    </button>
                    or
                    <Link to="/buy-domain">Buy Domain</Link>
                  </div>
                  <div className="details">
                    <h4>Details</h4>
                    <ul>
                      <li className="info">
                        <span className="dt">Is the domain correct?: </span>
                        <span>Yes</span>
                      </li>
                      <li className="info">
                        <span className="dt">Registry Domain ID: </span>
                        <span>HJIW4928</span>
                      </li>
                      <li className="info">
                        <span className="dt">Registrar URL: </span>
                        <span>HJIW4928</span>
                      </li>
                      <li className="info">
                        <span className="dt">Updated Date: </span>
                        <span>25th September 2024</span>
                      </li>
                      <li className="info">
                        <span className="dt">Creation Date: </span>
                        <span>25th September 2024</span>
                      </li>
                      <li className="info">
                        <span className="dt">Registrar Registration Expiration Date: </span>
                        <span>25th September 2024</span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Form>
        </Col>
        </Row>
        </div>
        </React.Fragment>
  )
}
