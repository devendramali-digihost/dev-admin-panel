import React, { useState } from "react";
import TextEditor from "./TextEditor";
import InputMask from "react-input-mask";
import Select from "react-select";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const AddModulePreview = () => {
  const options = [
    { value: "Number", label: "Number" },
    { value: "Text", label: "Text" },
    { value: "Password", label: "Password" },
  ];

  const multipleOptions = [
    { value: "Number", label: "Number" },
    { value: "Text", label: "Text" },
    { value: "Password", label: "Password" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const [dateMMDDYYYY, setDateMMDDYYYY] = useState("");
  const [dateDDMMYYYY, setDateDDMMYYYY] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");

  const [rangeValue, setRangeValue] = useState(50); // Default value for the range

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const [color, setColor] = useState("#24786f"); // Default color

  const handleColorChange = (e) => {
    setColor(e.target.value); // Update the color state
  };
  return (
    <>
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
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Text</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Name"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Search</Form.Label>
                    <div className="search_input">
                      <InputGroup>
                        <InputGroup.Text id="basic-addon1">
                          <i className="feather icon-search" />
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Search..."
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-2">
                    <Form.Label className="mb-0">Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="bootstrap@example.com"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">URL</Form.Label>
                    <Form.Control
                      required
                      type="url"
                      placeholder="https://getbootstrap.com"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Telephone</Form.Label>
                    <Form.Control
                      required
                      type="tel"
                      placeholder="1-(555)-555-5555"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Password</Form.Label>
                    <Form.Control required type="password" value="hunter2" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Number</Form.Label>
                    <Form.Control required type="number" value="42" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Date and time</Form.Label>
                    <Form.Control
                      required
                      type="datetime-local"
                      value="2024-09-30T13:45:00"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <Form.Label className="mb-0">Date</Form.Label>
                  <div className="mb-3">
                    <Form.Control required type="date" value="2024-09-30" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Month</Form.Label>
                    <Form.Control required type="month" value="2024-09" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Week</Form.Label>
                    <Form.Control required type="week" value="2024-W31" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Time</Form.Label>
                    <Form.Control required type="time" value="13:45:00" />
                  </div>
                </Col>
                <Col md={6}>
                  <Row className="mb-3 align-items-center">
                    <Form.Label className="mb-0">Color</Form.Label>
                    <Col md={8}>
                      <Form.Control
                        required
                        type="color"
                        value={color}
                        onChange={handleColorChange} // Update color on change
                      />
                    </Col>
                    <Col md={4}>
                      {/* Display the selected color value */}
                      <Form.Control
                        type="text"
                        value={color}
                        readOnly // Make it read-only to prevent manual editing
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Select</Form.Label>
                    <Select options={options} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Multiple Select</Form.Label>

                    <Select
                      options={multipleOptions}
                      isMulti
                      value={selectedOptions}
                      onChange={handleChange}
                      placeholder="Choose..."
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Card.Title>Form Mask</Card.Title>
              <Row className="mb-3 align-items-center">
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Date (MM/DD/YYYY):</label>
                    <InputMask
                      className="form-control"
                      mask="99/99/9999"
                      placeholder="MM/DD/YYYY"
                      value={dateMMDDYYYY}
                      onChange={(e) => setDateMMDDYYYY(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Date (DD/MM/YYYY):</label>
                    <InputMask
                      className="form-control"
                      mask="99/99/9999"
                      placeholder="DD/MM/YYYY"
                      value={dateDDMMYYYY}
                      onChange={(e) => setDateDDMMYYYY(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Phone Number:</label>
                    <InputMask
                      className="form-control"
                      mask="(999) 999-9999"
                      placeholder="Enter phone number"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Credit Card Number:</label>
                    <InputMask
                      className="form-control"
                      mask="9999 9999 9999 9999"
                      placeholder="1234 5678 9012 3456"
                      value={creditCardNumber}
                      onChange={(e) => setCreditCardNumber(e.target.value)}
                    />
                  </div>
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
                      <Form.Check
                        inline
                        label="Checkbox"
                        name="group1"
                        type="checkbox"
                        id="checkbox-2"
                      />
                      <Form.Check
                        inline
                        label="Checkbox checked"
                        name="group1"
                        defaultChecked
                        id="checkbox-1"
                      />
                    </Form>
                  </div>
                </Col>
                <Col lg={6} className="ms-auto">
                  <div className="Checkboxes-right">
                    <h6 class="font-size-14 mb-4">Form Checkboxes Right</h6>
                    <Form>
                      <Form.Check
                        reverse
                        label="Checkbox Right"
                        name="group1"
                        type="checkbox"
                        id="reverse-checkbox-2"
                      />
                      <Form.Check
                        reverse
                        label="Checkbox Right checked"
                        name="group1"
                        type="checkbox"
                        defaultChecked
                        id="reverse-checkbox-1"
                      />
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
                      <Form.Check
                        inline
                        label="Radio"
                        name="group1"
                        type="radio"
                        id="Radio-2"
                      />
                      <Form.Check
                        inline
                        label="Radio checked"
                        name="group1"
                        type="radio"
                        defaultChecked
                        id="Radio-1"
                      />
                    </Form>
                  </div>
                </Col>
                <Col lg={6} className="ms-auto">
                  <div className="Checkboxes-right">
                    <h6 class="font-size-14 mb-4">Form Radios Right</h6>
                    <Form>
                      <Form.Check
                        reverse
                        label="Radio Right"
                        name="group1"
                        type="radio"
                        id="reverse-radio-2"
                      />
                      <Form.Check
                        reverse
                        label="Radio checked checked"
                        name="group1"
                        type="radio"
                        defaultChecked
                        id="reverse-radio-1"
                      />
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
              <Form.Group controlId="customRange">
                <Form.Label>Custom Range</Form.Label>
                <Form.Range
                  min={0} // Minimum value
                  max={100} // Maximum value
                  step={1} // Step value
                  value={rangeValue} // Controlled value
                  onChange={handleRangeChange} // Change handler
                  style={{ cursor: "pointer", appearance: "none" }} // Custom cursor and appearance
                />
                <div style={{ marginTop: "10px" }}>
                  Selected Value: {rangeValue}{" "}
                  {/* Display the selected value */}
                </div>
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
                <span class="toggle mt-3">
                  <input type="checkbox" id="toggle-switch-2" />
                  <label for="toggle-switch-2"></label> Toggle this switch
                  element
                </span>
              </div>
              <div style={{ height: "20px" }}></div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>File browser</Card.Title>
              <Form.Group className="mb-3" controlId="PageName">
                <Form.Label>File Input</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Page Name"
                ></Form.Control>
              </Form.Group>
              <div style={{ height: "55px" }}></div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Buttons</Card.Title>
              <h6 class="font-size-14 mb-3">Form Buttons</h6>
              <Button
                type="button"
                variant="primary"
                className="mb-3 waves-effect waves-light"
              >
                Primary
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="mb-3 waves-effect waves-light"
              >
                Secondary
              </Button>
              <Button
                type="button"
                variant="success"
                className="mb-3 waves-effect waves-light"
              >
                Success
              </Button>
              <Button
                type="button"
                variant="danger"
                className="mb-3 waves-effect waves-light"
              >
                Danger
              </Button>
              <Button
                type="button"
                variant="warning"
                className="mb-3 ms-xl-0 ms-xxl-2 waves-effect waves-light"
              >
                Warning
              </Button>
              <Button
                type="button"
                variant="info"
                className="mb-3 waves-effect waves-light"
              >
                Info
              </Button>
              <Button
                type="button"
                variant="light"
                className="mb-3 waves-effect waves-light"
              >
                Light
              </Button>
              <Button
                type="button"
                variant="dark"
                className="mb-3 waves-effect waves-light"
              >
                Dark
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Card.Title>Text Editor</Card.Title>
              <h6 class="font-size-14 mb-3">CKEditor</h6>
              <TextEditor />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddModulePreview;
