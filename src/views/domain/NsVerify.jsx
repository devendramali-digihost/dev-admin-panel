import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, CardBody } from 'react-bootstrap';

const NsVerify = () => {
  return (
    <>
    <Row>
        <Col lg={12}>
            <Card>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className='mb-3' controlId='ns1'>
                                    <Form.Label>Ns1</Form.Label>
                                    <Form.Control type='text' placeholder='Ns1'></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className='mb-3' controlId='ns2'>
                                    <Form.Label>Ns2</Form.Label>
                                    <Form.Control type='text' placeholder='Ns2'></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <div className="text-start">
                                    <Button type="submit" variant="primary">
                                        Verify
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

export default NsVerify