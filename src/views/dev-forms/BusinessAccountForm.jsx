import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export const BusinessAccountForm = () => {
  // State Hooks
  const [socialLinks, setSocialLinks] = useState([{ socialLink: '' }]);
  const [contactNumbers, setContactNumbers] = useState([{ contact: '' }]);
  const [emailIds, setEmailIds] = useState([{ emailId: '' }]);
  const [addresses, setAddresses] = useState([{ address: '' }]);

  // Add new social link field
  const addSocialLink = () => setSocialLinks([...socialLinks, { socialLink: '' }]);

  // Add new contact number field
  const addContactNumber = () => setContactNumbers([...contactNumbers, { contact: '' }]);

  // Add new email ID field
  const addEmailId = () => setEmailIds([...emailIds, { emailId: '' }]);

  // Add new address field
  const addAddress = () => setAddresses([...addresses, { address: '' }]);

  // Remove social link field
  const removeSocialLink = (index) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    setSocialLinks(updatedLinks);
  };

  // Remove contact number field
  const removeContactNumber = (index) => {
    const updatedContacts = [...contactNumbers];
    updatedContacts.splice(index, 1);
    setContactNumbers(updatedContacts);
  };

  // Remove email ID field
  const removeEmailId = (index) => {
    const updatedEmails = [...emailIds];
    updatedEmails.splice(index, 1);
    setEmailIds(updatedEmails);
  };

  // Remove address field
  const removeAddress = (index) => {
    const updatedAddresses = [...addresses];
    updatedAddresses.splice(index, 1);
    setAddresses(updatedAddresses);
  };

  // Handle input changes for social links
  const handleSocialChange = (index, event) => {
    const { name, value } = event.target;
    const updatedLinks = [...socialLinks];
    updatedLinks[index][name] = value;
    setSocialLinks(updatedLinks);
  };

  // Handle input changes for contact numbers
  const handleContactChange = (index, event) => {
    const { name, value } = event.target;
    const updatedContacts = [...contactNumbers];
    updatedContacts[index][name] = value;
    setContactNumbers(updatedContacts);
  };

  // Handle input changes for email IDs
  const handleEmailIdChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEmails = [...emailIds];
    updatedEmails[index][name] = value;
    setEmailIds(updatedEmails);
  };

  // Handle input changes for addresses
  const handleAddressChange = (index, event) => {
    const { name, value } = event.target;
    const updatedAddresses = [...addresses];
    updatedAddresses[index][name] = value;
    setAddresses(updatedAddresses);
  };

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log data for now; replace with your actual submission logic
    console.log('Social Links:', socialLinks);
    console.log('Contact Numbers:', contactNumbers);
    console.log('Email IDs:', emailIds);
    console.log('Addresses:', addresses);
  };

  return (
    <React.Fragment>
      <div className="mainForm">
        <p className="personal">Business Account</p>
        <p className="personalInfo">Please provide your company details.</p>

        <Row>
          <Col lg={12}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="CompanyDescription">
                    <Form.Label>Company Description</Form.Label>
                    <Form.Control as="textarea" rows={1} placeholder="Add Company Description" />
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="ClientName">
                    <Form.Label>Client Name</Form.Label>
                    <Form.Control type="text" placeholder="Client Name" />
                  </Form.Group>
                </Col>

                {/* Contact Numbers Section */}
                <Col sm={6}>
                  <Row className="mb-3">
                    {contactNumbers.map((data, index) => (
                      <Col md={12} key={index}>
                        <Form.Group className="position-relative" controlId={`ContactNumber${index}`}>
                          <Form.Label>Contact Number</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(event) => handleContactChange(index, event)}
                            value={data.contact}
                            name="contact"
                            placeholder="Contact Number"
                          />
                          {contactNumbers.length > 1 && (
                            <Button
                              onClick={() => removeContactNumber(index)}
                              className="remove-field"
                            >
                              <RiDeleteBin5Fill />
                            </Button>
                          )}
                          {index === 0 && (
                            <Button onClick={addContactNumber} className="add-button">
                              <MdAdd />
                            </Button>
                          )}
                        </Form.Group>
                      </Col>
                    ))}
                  </Row>
                </Col>

                {/* Email Id Section */}
                <Col sm={6}>
                  <Row className="mb-3">
                    {emailIds.map((data, index) => (
                      <Col md={12} key={index}>
                        <Form.Group className="mt-3 position-relative" controlId={`EmailId${index}`}>
                          <Form.Label>Email ID</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(event) => handleEmailIdChange(index, event)}
                            value={data.emailId}
                            name="emailId"
                            placeholder="Email ID"
                          />
                          {emailIds.length > 1 && (
                            <Button
                              onClick={() => removeEmailId(index)}
                              className="remove-field"
                            >
                              <RiDeleteBin5Fill />
                            </Button>
                          )}
                          {index === 0 && (
                            <Button onClick={addEmailId} className="add-button">
                              <MdAdd />
                            </Button>
                          )}
                        </Form.Group>
                      </Col>
                    ))}
                  </Row>
                </Col>

                {/* Address Section */}
                <Col sm={6}>
                  <Row className="mb-3">
                    {addresses.map((data, index) => (
                      <Col md={12} key={index}>
                        <Form.Group className="mt-3 position-relative" controlId={`Address${index}`}>
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(event) => handleAddressChange(index, event)}
                            value={data.address}
                            name="address"
                            placeholder="Address"
                          />
                          {addresses.length > 1 && (
                            <Button
                              onClick={() => removeAddress(index)}
                              className="remove-field"
                            >
                              <RiDeleteBin5Fill />
                            </Button>
                          )}
                          {index === 0 && (
                            <Button onClick={addAddress} className="add-button">
                              <MdAdd />
                            </Button>
                          )}
                        </Form.Group>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
