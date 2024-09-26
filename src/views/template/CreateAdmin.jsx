import React from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Createadmin = () => {
  return (
    <>
    <Row>
        <Col lg={12}>
            <Card>
                <Card.Body>
                    <Form>
                        <Row >
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId='PageName'>
                                    <Form.Label>Enter Admin Name</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Admin Name'></Form.Control>
                                </Form.Group>
                            </Col>
                            
                            <Col lg={12}>
                                <div className="text-start">
                                    <Link type="submit" to="/create-page/create-module"  variant="primary" className='btn btn-primary waves-effect waves-light'>
                                        Submit
                                    </Link>
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