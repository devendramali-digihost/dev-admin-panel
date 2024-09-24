import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('update-profile');
  const [showPassword, setShowPassword] = useState({
    'old-password': false,
    'new-password': false,
    'confirm-new-password': false
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const toggleShowPassword = (id) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [id]: !prevState[id] // Toggle the state of the specific field
    }));
  };

  return (
    <div className="my-profile">
      <Container>
        <div className="card">
          <div className="tab-wrapper">
            <div className="tabs">
              <button className={`tab-button ${activeTab === 'update-profile'}`} onClick={() => handleTabClick('update-profile')}>
                Update Profile
              </button>
              <button className={`tab-button ${activeTab === 'change-password'}`} onClick={() => handleTabClick('change-password')}>
                Change Password
              </button>
            </div>
            <div className="tab-content">
              {activeTab === 'update-profile' && (
                <div>
                  {/* <h4>Update Profile</h4> */}
                  <form action="">
                    <Row>
                      <Col sm={6}>
                        <Form.Group className="mb-3">
                          <div className="input-container">
                            <Form.Label>
                              Name{' '}
                              <button>
                                <FaRegEdit />
                              </button>
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="password" />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3">
                          <div className="input-container">
                            <Form.Label>
                              Email{' '}
                              <button>
                                <FaRegEdit />
                              </button>
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name="password" />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3">
                          <div className="input-container">
                            <Form.Label>
                              Mobile Number{' '}
                              <button>
                                <FaRegEdit />
                              </button>
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile Number" name="password" />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="image">
                          <div className="input-container">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" name="image" />
                            {/* <button className="eye">{showPassword['confirm-new-password'] ? <FaRegEye /> : <FaRegEyeSlash />}</button> */}
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col mt={2}>
                        <Button className="btn-block mb-4" color="primary" size="large" type="submit" variant="primary">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
              {activeTab === 'change-password' && (
                <div>
                  {/* <h4>Change Password</h4> */}
                  <form action="">
                    <Row>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="old-password">
                          <div className="input-container">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control
                              type={showPassword['old-password'] ? 'text' : 'password'}
                              placeholder="Enter Old Password"
                              name="old-password"
                            />
                            <button
                              className="eye"
                              onClick={(e) => {
                                e.preventDefault();
                                toggleShowPassword('old-password');
                              }}
                            >
                              {showPassword['old-password'] ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="new-password">
                          <div className="input-container">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                              type={showPassword['new-password'] ? 'text' : 'password'}
                              placeholder="Enter New Password"
                              name="new-password"
                            />
                            <button
                              className="eye"
                              onClick={(e) => {
                                e.preventDefault();
                                toggleShowPassword('new-password');
                              }}
                            >
                              {showPassword['new-password'] ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="confirm-new-password">
                          <div className="input-container">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                              type={showPassword['confirm-new-password'] ? 'text' : 'password'}
                              placeholder="Confirm New Password"
                              name="confirm-new-password"
                            />
                            <button
                              className="eye"
                              onClick={(e) => {
                                e.preventDefault();
                                toggleShowPassword('confirm-new-password');
                              }}
                            >
                              {showPassword['confirm-new-password'] ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col mt={2}>
                        <Button className="btn-block" color="primary" size="large" type="submit" variant="primary">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProfile;
