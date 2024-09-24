import React from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const Createadmin = () => {
  return (
    <>
    <Row>
        <Col lg={12}>
            <Card>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId='PageName'>
                                    <Form.Label>Page Name</Form.Label>
                                    <Form.Control type='text' placeholder='Page Name'></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId='FieldName'>
                                    <Form.Label>Field Name</Form.Label>
                                    <Form.Control type='text' placeholder='Field Name'></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId='Type'>
                                    <Form.Label>Type</Form.Label>
                                    <Form.Select aria-label="type">
                                        <option value="Number">Number</option>
                                        <option value="Text">Text</option>
                                        <option value="Password">Password</option>
                                        <option value="Email">Email</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId='LengthValue'>
                                    <Form.Label>Length Value</Form.Label>
                                    <Form.Control type='text' placeholder='Length Value'></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId='Key'>
                                    <Form.Label>Key</Form.Label>
                                    <Form.Select aria-label="Key">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId='Field'>
                                    <Form.Label>Field</Form.Label>
                                    <Form.Select aria-label="Field">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId='FieldType'>
                                    <Form.Label>Field Type</Form.Label>
                                    <Form.Select aria-label="FieldType">
                                        <option value="button">button</option>
                                        <option value="Radio">Radio</option>
                                        <option value="checkbox">checkbox</option>
                                        <option value="submit">submit</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <div className="text-end">
                                    <Button type="submit" variant="primary">
                                        Submit
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default Createadmin