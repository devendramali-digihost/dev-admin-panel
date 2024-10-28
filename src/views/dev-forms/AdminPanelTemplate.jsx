import React from 'react';
import { Row, Col, Form, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { AiOutlinePlus } from 'react-icons/ai';
import {Lotus ,admin1,admin2} from '../../images'

export const AdminPanelTemplate = () => {
  return (
    <React.Fragment>
    <div className="mainForm">
    <p className="personal">Choose Admin Panel Template <div class="icon-wrapper"><Link to="/company/create-new-project"><i class="fas fa-home custom-icon"><span class="fix-editor">&nbsp;</span></i></Link></div></p>

   
      <Row>
        <Col lg={12}>
        <Form>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="DomainName">
                  
                    <Form.Control type="text" placeholder="Search template by" />
                  </Form.Group>
                </Col>
                <Col lg={8}>
                <div className='form-btn-panel'>
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-drop-category" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu m-l-10" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Corportrate Templates</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
                <div className="text-right m-l-10">
              <Link to='#' className="create-button btn btn-primary waves-effect waves-light">
                <AiOutlinePlus /> Start From Scratch
              </Link>
        </div>
        </div>
                </Col>
            
              </Row>
              <Row>
              <Col lg={4}>
              <Card className="project-card admin-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={admin1} />
              <div className="overlay">
                <div className="button">
                  <a href="https://www.lotusdevelopers.com/" target='_blank' className='create-button btn btn-primary waves-effect waves-light'>Preview</a>
                </div>
              </div>
             
            </div>
            <Card.Body>
              <Card.Title>Template 1 <a href="https://www.lotusdevelopers.com/" target="_blank" style={{ float: 'right' }} className="view-color">
  <FaRegEye />
</a></Card.Title>
            </Card.Body>
        </Card>
              </Col>
              <Col lg={4}>
              <Card className="project-card admin-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={admin2} />
              <div className="overlay">
                <div className="button">
                  <a href="https://www.lotusdevelopers.com/" target='_blank' className='create-button btn btn-primary waves-effect waves-light'>Preview</a>
                </div>
              </div>
             
            </div>
            <Card.Body>
              <Card.Title>Template 2 <a href="https://www.lotusdevelopers.com/" target="_blank" style={{ float: 'right' }} className="view-color">
  <FaRegEye />
</a></Card.Title>
            </Card.Body>
        </Card>
              </Col>
              </Row>
            </Form>
        </Col>
        </Row>
     </div>
        </React.Fragment>
  )
}
