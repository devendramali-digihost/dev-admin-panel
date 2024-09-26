import React from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const FormTamplate = () => {
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
                                        <Form.Label>Input</Form.Label>
                                        <Form.Control type="text" placeholder='Input'></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='PageName'>
                                        <Form.Label>File Input</Form.Label>
                                        <Form.Control type="file" placeholder='Page Name'></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                        <Form.Label>Select Dropdown</Form.Label>
                                        <Form.Select aria-label="type">
                                            <option value="Number">Number</option>
                                            <option value="Text">Text</option>
                                            <option value="Password">Password</option>
                                            <option value="Email">Email</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                    <Form.Label>Checkbox Button</Form.Label>
                                        <div>
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type="checkbox"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group1"
                                            type="checkbox"
                                        />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                    <Form.Label>Radio Button</Form.Label>
                                       <div>
                                       <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group1"
                                            type="radio"
                                        />
                                       </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                    <Form.Label>Switch Button</Form.Label>
                                       <div>
                                       <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type="switch"
                                        />
                                       </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                        <Form.Label>Range</Form.Label>
                                        <Form.Range />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                <Form.Group className="mb-3" controlId='PageName'>
                                    <Form.Label>Text Area</Form.Label>
                                    <Form.Control  as="textarea" rows={3} placeholder='Text Area' ></Form.Control>
                                </Form.Group>
                            </Col>
                                <Col lg={12}>
                                <div className="text-start">
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

export default FormTamplate