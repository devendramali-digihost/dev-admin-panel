import React from 'react';
import TextEditor from './TextEditor'
import Select from 'react-select';
import { Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const FormTamplate = () => {
  const options = [
    { value: 'Number', label: 'Number' },
    { value: 'Text', label: 'Text' },
    { value: 'Password', label: 'Password' }
  ];
  return (
    <>
      {/* <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='PageName'>
                                        <Form.Label>Text</Form.Label>
                                        <Form.Control type="text" placeholder='Input'></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='PageName'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder='Email'></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='PageName'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder='Password'></Form.Control>
                                    </Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <FormControl aria-label="Text input with checkbox" />
                                    </InputGroup>
                                    
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3 ">
                                        <Form.Label className="mb-0">Email:</Form.Label>
                                        <Form.Control className="" plaintext readOnly defaultValue="email@example.com" />
                                    </Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </InputGroup>
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
                                        <Select options={options} />
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
                                    <Button type="submit" variant="primary" className='waves-effect waves-light'>
                                        Submit
                                    </Button>
                                </div>
                            </Col>
                           
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row> */}
      <Row className="mb-5 form-templates">
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Card.Title>Textual inputs</Card.Title>
              {/* <Card.Text>
                    Here are examples of <code class="highlighter-rouge">.form-control</code> applied to each
                    textual HTML5 <code class="highlighter-rouge">&lt;input&gt;</code><code class="highlighter-rouge">type</code>.
                </Card.Text> */}
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Text
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="text" placeholder="Enter Name" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Search
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="search" placeholder="Search Here..." />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Email
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="email" placeholder="bootstrap@example.com" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  URL
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="url" placeholder="https://getbootstrap.com" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Telephone
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="tel" placeholder="1-(555)-555-5555" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Password
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="password" value="hunter2" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Number
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="number" value="42" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Date and time
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="datetime-local" value="2024-09-30T13:45:00" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Date
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="date" value="2024-09-30" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Month
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="month" value="2024-09" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Week
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="week" value="2024-W31" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Time
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="time" value="13:45:00" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Color
                </Form.Label>
                <Col md={10}>
                  <Form.Control required type="color" value="#24786f" />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Select
                </Form.Label>
                <Col md={10}>
                  <Select options={options} />
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Form.Label className="mb-0" as={Col} md="2">
                  Textarea
                </Form.Label>
                <Col md={10}>
                  <Form.Control as="textarea" rows={3} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Checkboxes</Card.Title>
              <Row>
                <Col lg={5}>
                  <div className="Checkboxes-left">
                    <h6 class="font-size-14 mb-4">Form Checkboxes</h6>
                    <Form>
                      <Form.Check inline label="Checkbox" name="group1" type="checkbox" id="checkbox-2" />
                      <Form.Check inline label="Checkbox checked" name="group1" checked id="checkbox-1" />
                    </Form>
                  </div>
                </Col>
                <Col lg={6} className="ms-auto">
                  <div className="Checkboxes-right">
                    <h6 class="font-size-14 mb-4">Form Checkboxes Right</h6>
                    <Form>
                      <Form.Check reverse label="Checkbox Right" name="group1" type="checkbox" id="reverse-checkbox-2" />
                      <Form.Check reverse label="Checkbox Right checked" name="group1" type="checkbox" checked id="reverse-checkbox-1" />
                    </Form>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Radios</Card.Title>
              <Row>
                <Col lg={5}>
                  <div className="Checkboxes-left">
                    <h6 class="font-size-14 mb-4">Form Radios</h6>
                    <Form>
                      <Form.Check inline label="Radio" name="group1" type="radio" id="Radio-2" />
                      <Form.Check inline label="Radio checked" name="group1" type="radio" checked id="Radio-1" />
                    </Form>
                  </div>
                </Col>
                <Col lg={6} className="ms-auto">
                  <div className="Checkboxes-right">
                    <h6 class="font-size-14 mb-4">Form Radios Right</h6>
                    <Form>
                      <Form.Check reverse label="Radio Right" name="group1" type="radio" id="reverse-radio-2" />
                      <Form.Check reverse label="Radio checked checked" name="group1" type="radio" checked id="reverse-radio-1" />
                    </Form>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Range Inputs</Card.Title>
              <Form.Group controlId="Type">
                <Form.Label>Custom Range</Form.Label>
                <Form.Range />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Switches</Card.Title>
              {/* <Form.Group controlId="Type" className="switch">
                <Form.Label>Switch Button</Form.Label>
                <div class="toggle">
                  <Form.Check inline label="Toggle this switch element" name="group1" type="switch" defaultChecked />
                </div>
              </Form.Group> */}
              <div className="switch">
                <Form.Label>Switch Button</Form.Label>
                <span class="toggle">
                  <input type="checkbox" id="toggle-switch-2" />
                  <label for="toggle-switch-2"></label> Toggle this switch element
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>File browser</Card.Title>
              <Form.Group className="mb-3" controlId="PageName">
                <Form.Label>File Input</Form.Label>
                <Form.Control type="file" placeholder="Page Name"></Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Buttons</Card.Title>
              <h6 class="font-size-14 mb-3">Form Buttons</h6>
              <Button type="button" variant="primary" className="mb-3 waves-effect waves-light">
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
              <Card.Body>
                  <Card.Title>Text Editor</Card.Title>
                      <h6 class="font-size-14 mb-3">CKEditor</h6>
                      <TextEditor/>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FormTamplate;
