import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, CardBody } from 'react-bootstrap';

const NsVerify = () => {
  return (
    <>
    <Row>
        <Col lg={12}>
            <Card>
                <Card.Body>
                    <div className='nscontainer'>
                        <div className="details">
                            <h4>Instruction</h4>
                            <ul>
                                <li className="info">
                                If several languages coalesce, the grammar of the resulting
                                </li>
                                <li className="info">
                                Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. 
                                </li>
                                <li className="info">
                                Quisque arcu leo, facilisis in fringilla id, luctus in
                                </li>
                                <li className="info">
                                Nunc vestibulum est quis orci varius viverra. Curabitur dictum
                                </li>
                            
                            </ul>
                        </div>
                        <div className="ns-no">
                                <p><span>Ns1 :</span> NZ1563NZ1563</p>
                                <p><span>Ns2 :</span> FG1563NZ1563</p>
                        </div>
                        <div className="text-start">
                            <Button type="submit" className='waves-effect waves-light' variant="primary">
                                Verify
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    </Row>

    </>
  )
}

export default NsVerify