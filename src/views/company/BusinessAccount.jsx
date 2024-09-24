import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const CompanySignUp = () => {
  const [inputFields, setInputFields] = useState([{ fullName: '' }]);

  const addInputField = () => {
    setInputFields([...inputFields, { fullName: '' }]);
  };

  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(inputFields);
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="CompanyName">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="text" placeholder="Company Name" />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="CompanyIndustry">
                      <Form.Label>Company Industry</Form.Label>
                      <Form.Select aria-label="Company Industry">
                        <option>Select Industry</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="CompanyDescription">
                      <Form.Label>Company Description</Form.Label>
                      <Form.Control as="textarea" rows={1} placeholder="Add Company Description" />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="CompanyName">
                      <Form.Label>Upload Logo</Form.Label>
                      <Form.Control type="file" placeholder="Company Name" />
                    </Form.Group>
                  </Col>
                  {/* <Col sm={12}>
                    <Row className="mb-3">
                      {inputFields.map((data, index) => {
                        const { fullName } = data;
                        return (
                          <Col md={6} key={index}>
                            <Form.Group className="mb-3 position-relative" controlId={`SocialLink${index}`}>
                              <Form.Label>Add Social Link</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={(event) => handleChange(index, event)}
                                value={fullName}
                                name="fullName"
                                placeholder="Add Social Link"
                              />
                              {inputFields.length > 1 && (
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeInputFields(index)}
                                  style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}
                                >
                                  <i className="fa fa-window-close"></i>
                                </Button>
                              )}

                              <Button variant="primary" onClick={addInputField}>
                                <MdAdd />
                              </Button>
                            </Form.Group>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col> */}
                  <Col sm={12}>
                    <Row className="mb-3">
                      {inputFields.map((data, index) => {
                        const { fullName } = data;
                        return (
                          <Col md={6} key={index}>
                            <Form.Group className="mb-3 position-relative" controlId={`SocialLink${index}`}>
                              <Form.Label>Add Social Link</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={(event) => handleChange(index, event)}
                                value={fullName}
                                name="fullName"
                                placeholder="Add Social Link"
                              />

                              {/* Show delete button on all fields except the first one */}
                              {inputFields.length > 1 && index > 0 && (
                                <Button onClick={() => removeInputFields(index)} className="remove-field btn-primary">
                                  <RiDeleteBin5Fill />
                                </Button>
                              )}

                              {/* Show add button only on the first input */}
                              {index === 0 && (
                                <Button variant="primary" onClick={addInputField} className="add-button">
                                  <MdAdd />
                                </Button>
                              )}
                            </Form.Group>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>
                  <Col md={6}></Col>
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
    </React.Fragment>
  );
};

export default CompanySignUp;
