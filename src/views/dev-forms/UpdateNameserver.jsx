import React from 'react';
import { Row, Col } from 'react-bootstrap';


export const UpdateNameserver = () => {
  return (
    <React.Fragment>
    <div className="mainForm">
      <p className="personal">Update Nameserver</p>
      <p className="personalInfo">Nameserver list</p>

    <Row>
        <Col lg={12}>
        <ul className="custom-list">
            <li>ns1.digihost.in</li>
            <li>ns1.digihost.in</li>
        </ul>
        </Col>
    </Row>
    </div>
    </React.Fragment>
    
  )
}
