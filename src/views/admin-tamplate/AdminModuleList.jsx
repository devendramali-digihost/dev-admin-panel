import React, { useState } from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const AdminModuleList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="admin-module-list">
      <Container>
        <Card className="mb-3">
          <Card.Body>
            <div className="heading-texts">
              <h4>Default Modules</h4>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check type={type} id={`default-${type}`} label={`Check All`} />
                </div>
              ))}
            </div>
            <div className="switch-container">
              <div className="switch">
                <span>About Us</span>
                <span class="toggle" onClick={handleShow}>
                  <input type="checkbox" id="toggle-switch-1" />
                  <label for="toggle-switch-1"></label>
                </span>
              </div>
              <div className="switch">
                <span>FAQ</span>
                <span class="toggle" onClick={handleShow}>
                  <input type="checkbox" id="toggle-switch-2" />
                  <label for="toggle-switch-2"></label>
                </span>
              </div>
              <div className="switch">
                <span>Clientle</span>
                <span class="toggle" onClick={handleShow}>
                  <input type="checkbox" id="toggle-switch-3" />
                  <label for="toggle-switch-3"></label>
                </span>
              </div>
              <div className="switch">
                <span>Testimonial</span>
                <span class="toggle" onClick={handleShow}>
                  <input type="checkbox" id="toggle-switch-4" />
                  <label for="toggle-switch-4"></label>
                </span>
              </div>
              <div className="switch">
                <span>About Us</span>
                <span class="toggle" onClick={handleShow}>
                  <input type="checkbox" id="toggle-switch-5" />
                  <label for="toggle-switch-5"></label>
                </span>
              </div>
              <div className="switch">
                <span>About Us</span>
                <span class="toggle" onClick={handleShow}>
                  <input type="checkbox" id="toggle-switch-6" />
                  <label for="toggle-switch-6"></label>
                </span>
              </div>
              <div className="switch">
                <span>About Us</span>
                <span class="toggle" onClick={handleShow}>
                  <input type="checkbox" id="toggle-switch-7" />
                  <label for="toggle-switch-7"></label>
                </span>
              </div>
              <div className="switch">
                <span>About Us</span>
                <span class="toggle" onClick={handleShow}>
                  <input type="checkbox" id="toggle-switch-8" />
                  <label for="toggle-switch-8"></label>
                </span>
              </div>
            </div>
            <Link to="" class="btn btn-primary waves-effect waves-light">
              <AiOutlinePlus /> Create New Module
            </Link>
          </Card.Body>
        </Card>
        <Card className="">
          <Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Corporate template modules</Accordion.Header>
                <Accordion.Body>
                  <div className="switch-container">
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-1.1" />
                        <label for="toggle-switch-1.1"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>FAQ</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-2.1" />
                        <label for="toggle-switch-2.1"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>Clientle</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-3.1" />
                        <label for="toggle-switch-3.1"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>Testimonial</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-4.1" />
                        <label for="toggle-switch-4.1"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-5.1" />
                        <label for="toggle-switch-5.1"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-6.1" />
                        <label for="toggle-switch-6.1"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-7.1" />
                        <label for="toggle-switch-7.1"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-8.1" />
                        <label for="toggle-switch-8.1"></label>
                      </span>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Dentel template modules</Accordion.Header>
                <Accordion.Body>
                  <div className="switch-container">
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-1.2" />
                        <label for="toggle-switch-1.2"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>FAQ</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-2.2" />
                        <label for="toggle-switch-2.2"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>Clientle</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-3.2" />
                        <label for="toggle-switch-3.2"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>Testimonial</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-4.2" />
                        <label for="toggle-switch-4.2"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-5.2" />
                        <label for="toggle-switch-5.2"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-6.2" />
                        <label for="toggle-switch-6.2"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-7.2" />
                        <label for="toggle-switch-7.2"></label>
                      </span>
                    </div>
                    <div className="switch">
                      <span>About Us</span>
                      <span class="toggle" onClick={handleShow}>
                        <input type="checkbox" id="toggle-switch-8.2" />
                        <label for="toggle-switch-8.2"></label>
                      </span>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminModuleList;
