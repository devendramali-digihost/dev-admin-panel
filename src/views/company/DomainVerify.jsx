import React from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';

const DomainVerify = () => {
  return (
    <div className="domain-verify">
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyIndustry">
                    <Form.Label>Company Industry</Form.Label>
                    <Form.Select aria-label="Company Industry">
                      <option>Select Industry</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyDescription">
                    <Form.Label>Company Description</Form.Label>
                    <Form.Control as="textarea" rows={1} placeholder="Add Company Description" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyLogo">
                    <Form.Label>Upload Logo</Form.Label>
                    <Form.Control type="file" placeholder="Company Name" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DomainVerify;
