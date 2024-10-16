import React from 'react';
import { Container, Card ,Row, Col, Form,Button} from 'react-bootstrap';
import {soupherb, gaikwad,ongc,Lotus} from '../../images'
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegEye } from "react-icons/fa";
const CreateNewProject = () => {
  return (
    <div className="create-new-project mb40">

        {/* <Card>
          <Card.Body>

          </Card.Body>
        </Card> */}
        <Row className=''>
        <Col lg={4}>
        <div id="main-search" className="open-search">
                <div className="input-group mt-2">
                  <span
                    role="button"
                    tabIndex="0"
                    className="input-group-append search-btn"
                    style={{ borderRadius: '50%', marginRight: 15 }}
                  >
                    <i className="feather icon-search input-group-text" />
                  </span>
                  <input type="text" id="m-search" className="form-control" placeholder="Search websites..." />
                </div>
              </div>
        </Col>
        <Col lg={2}></Col>
        <Col lg={6}>
        <div className="text-right mt20">
              <Link to="/dev-forms/details-form" className="create-button btn btn-primary waves-effect waves-light">
                <AiOutlinePlus /> Create New Project
              </Link>
        </div>
        </Col>
        </Row>
        <Row>
        <Col lg={4}>
        <Card className="project-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={Lotus} />
              <div className="overlay">
                <div className="button">
                  <a href="https://www.lotusdevelopers.com/" target='_blank' className='create-button btn btn-primary waves-effect waves-light'>Preview</a>
                </div>
              </div>
              <Card.Body>
              <Card.Title>Lotus Developers <span style={{ float: 'right' }}><FaRegEye className="view-color"/></span></Card.Title>
            </Card.Body>
            </div>

        </Card>

        </Col>
        <Col lg={4}>
        <Card className="project-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={gaikwad} />
              <div className="overlay">
                <div className="button">
                  <a href="https://www.drgaikwad.com/" target='_blank' className='create-button btn btn-primary waves-effect waves-light'>Preview</a>
                </div>
              </div>
              <Card.Body>
              <Card.Title>Dr. S. Gaikwad  <span style={{ float: 'right' }}><FaRegEye className="view-color"/></span></Card.Title>
            </Card.Body>
            </div>

        </Card>

        </Col>
        <Col lg={4}>
        <Card className="project-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={ongc} />
              <div className="overlay">
                <div className="button">
                  <a href="https://digihostsolutions.com/ongc-live/" target='_blank' className='create-button btn btn-primary waves-effect waves-light'>Preview</a>
                </div>
              </div>
              <Card.Body>
              <Card.Title>ONGC  <span style={{ float: 'right' }}><FaRegEye className="view-color"/></span></Card.Title>
            </Card.Body>
            </div>

        </Card>

        </Col>
        </Row>
        <Row>
        <Col lg={4}>
        <Card className="project-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={soupherb} />
              <div className="overlay">
                <div className="button">
                  <a href="https://www.digihostsolutions.com/soupherb-new/" target='_blank' className='create-button btn btn-primary waves-effect waves-light'>Preview</a>
                </div>
              </div>
              <Card.Body>
              <Card.Title>SoupHerb - Soulful Sips Of Soma  <span style={{ float: 'right' }}><FaRegEye className="view-color"/></span></Card.Title>
            </Card.Body>
            </div>

        </Card>

        </Col>
        <Col lg={4}>
        <Card className="project-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={gaikwad} />
              <div className="overlay">
                <div className="button">
                  <a href="https://www.drgaikwad.com/" target='_blank' className='create-button btn btn-primary waves-effect waves-light'>Preview</a>
                </div>
              </div>
              <Card.Body>
              <Card.Title>Dr. S. Gaikwad  <span style={{ float: 'right' }}><FaRegEye className="view-color"/></span></Card.Title>
            </Card.Body>
            </div>

        </Card>

        </Col>
        <Col lg={4}>
        <Card className="project-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={ongc} />
              <div className="overlay">
                <div className="button">
                  <a href="https://digihostsolutions.com/ongc-live/" target='_blank' className='create-button btn btn-primary waves-effect waves-light'>Preview</a>
                </div>
              </div>
              <Card.Body>
              <Card.Title>ONGC  <span style={{ float: 'right' }}><FaRegEye className="view-color"/></span></Card.Title>
            </Card.Body>
            </div>

        </Card>

        </Col>
        </Row>
    </div>

  );
};

export default CreateNewProject;
