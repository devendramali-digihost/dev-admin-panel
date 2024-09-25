import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CompanySignUp = () => {
  // Separate states for Social Links and Contact Numbers
  const [socialLinks, setSocialLinks] = useState([{ socialLink: '' }]);
  const [contactNumbers, setContactNumbers] = useState([{ contact: '' }]);
  const [emailIds, setEmailIds] = useState([{ emailId: '' }]);
  const [address, setAddress] = useState([{ address: '' }]);

  // Handle adding new social link field
  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { socialLink: '' }]);
  };

  // Handle adding new contact number field
  const addContactNumber = () => {
    setContactNumbers([...contactNumbers, { contact: '' }]);
  };

  // Email Id
  const addEmailId = () => {
    setEmailIds([...emailIds, { emailId: '' }]);
  };

  // Address
  const addAddress = () => {
    setAddress([...address, { emailId: '' }]);
  };

  // Handle removing specific social link field
  const removeSocialLink = (index) => {
    const rows = [...socialLinks];
    rows.splice(index, 1);
    setSocialLinks(rows);
  };

  // Handle removing specific contact number field
  const removeContactNumber = (index) => {
    const rows = [...contactNumbers];
    rows.splice(index, 1);
    setContactNumbers(rows);
  };

  // Handle removing specific email id field
  const removeEmailId = (index) => {
    const rows = [...emailIds];
    rows.splice(index, 1);
    setEmailIds(rows);
  };

  // Handle removing specific email id field
  const removeAddress = (index) => {
    const rows = [...address];
    rows.splice(index, 1);
    setAddress(rows);
  };

  // Handle updating social link input
  const handleSocialChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...socialLinks];
    list[index][name] = value;
    setSocialLinks(list);
  };

  // Handle updating contact number input
  const handleContactChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...contactNumbers];
    list[index][name] = value;
    setContactNumbers(list);
  };

  // Handle updating contact number input
  const handleEmailIdChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...emailIds];
    list[index][name] = value;
    setEmailIds(list);
  };

  // Handle updating contact number input
  const handleAddress = (index, event) => {
    const { name, value } = event.target;
    const list = [...emailIds];
    list[index][name] = value;
    setEmailIds(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Social Links:', socialLinks);
    console.log('Contact Numbers:', contactNumbers);
    console.log('Email Id', emailIds);
    console.log('Address', address);
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
                    <Form.Group className="mb-3" controlId="CompanyLogo">
                      <Form.Label>Upload Logo</Form.Label>
                      <Form.Control type="file" placeholder="Company Name" />
                    </Form.Group>
                  </Col>

                  {/* Social Links Section */}
                  <Col sm={6}>
                    <Row className="mb-3">
                      {socialLinks.map((data, index) => {
                        const { socialLink } = data;
                        return (
                          <Col md={12} key={index}>
                            <Form.Group className="mb-3 position-relative" controlId={`SocialLink${index}`}>
                              <Form.Label>Add Social Link</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={(event) => handleSocialChange(index, event)}
                                value={socialLink}
                                name="socialLink"
                                placeholder="Add Social Link"
                              />
                              {socialLinks.length > 1 && index > 0 && (
                                <Button onClick={() => removeSocialLink(index)} className="remove-field btn-primary">
                                  <RiDeleteBin5Fill />
                                </Button>
                              )}
                              {index === 0 && (
                                <Button variant="primary" onClick={addSocialLink} className="add-button">
                                  <MdAdd />
                                </Button>
                              )}
                            </Form.Group>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>

                  {/* Contact Numbers Section */}
                  <Col sm={6}>
                    <Row className="mb-3">
                      {contactNumbers.map((data, index) => {
                        const { contact } = data;
                        return (
                          <Col md={12} key={index}>
                            <Form.Group className="mb-3 position-relative" controlId={`ContactNumber${index}`}>
                              <Form.Label>Contact Number</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={(event) => handleContactChange(index, event)}
                                value={contact}
                                name="contact"
                                placeholder="Contact Number"
                              />
                              {contactNumbers.length > 1 && index > 0 && (
                                <Button onClick={() => removeContactNumber(index)} className="remove-field btn-primary">
                                  <RiDeleteBin5Fill />
                                </Button>
                              )}
                              {index === 0 && (
                                <Button variant="primary" onClick={addContactNumber} className="add-button">
                                  <MdAdd />
                                </Button>
                              )}
                            </Form.Group>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>

                  {/* Email Id Section */}
                  <Col sm={6}>
                    <Row className="mb-3">
                      {emailIds.map((data, index) => {
                        const { emailId } = data;
                        return (
                          <Col md={12} key={index}>
                            <Form.Group className="mb-3 position-relative" controlId={`ContactNumber${index}`}>
                              <Form.Label>Email Id</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={(event) => handleEmailIdChange(index, event)}
                                value={emailId}
                                name="emailId"
                                placeholder="Email Id"
                              />
                              {emailIds.length > 1 && index > 0 && (
                                <Button onClick={() => removeEmailId(index)} className="remove-field btn-primary">
                                  <RiDeleteBin5Fill />
                                </Button>
                              )}
                              {index === 0 && (
                                <Button variant="primary" onClick={addEmailId} className="add-button">
                                  <MdAdd />
                                </Button>
                              )}
                            </Form.Group>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>

                  {/* Address Section */}
                  <Col sm={6}>
                    <Row className="mb-3">
                      {address.map((data, index) => {
                        const { address } = data;
                        return (
                          <Col md={12} key={index}>
                            <Form.Group className="mb-3 position-relative" controlId={`ContactNumber${index}`}>
                              <Form.Label>Address</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={(event) => handleAddress(index, event)}
                                value={address}
                                name="address"
                                placeholder="Address"
                              />
                              {address.length > 1 && index > 0 && (
                                <Button onClick={() => removeAddress(index)} className="remove-field btn-primary">
                                  <RiDeleteBin5Fill />
                                </Button>
                              )}
                              {index === 0 && (
                                <Button variant="primary" onClick={addAddress} className="add-button">
                                  <MdAdd />
                                </Button>
                              )}
                            </Form.Group>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>

                  <Col lg={12}>
                    <div className="text-end">
                      <Link to="/company/domain-verify" type="submit" className="btn btn-primary" variant="primary">
                        Create
                      </Link>
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
