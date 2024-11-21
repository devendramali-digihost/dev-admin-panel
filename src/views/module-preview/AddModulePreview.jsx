import React, { useState } from "react";
import TextEditor from "./TextEditor";
import InputMask from "react-input-mask";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Row className="mb-5 form-templates">
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Row className="mb-3 align-items-center">
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Text Input</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Name"
                    />
                  </div>
                </Col>
                {/* <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control
                      required
                      type="tel"
                      placeholder="1-(555)-555-5555"
                    />
                  </div>
                </Col> */}
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Number</Form.Label>
                    <Form.Control required type="number" value="42" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Date Picker</Form.Label>
                    {/* <Form.Control
                      required
                      type="datetime-local"
                      value="2024-09-30T13:45:00"
                    /> */}
                    <div className="w-100">
                      <DatePicker
                        selected={startDate}
                        className="form-control"
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Select</Form.Label>
                    <Select options={options} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Multiple Select</Form.Label>

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
                    <Form.Label>Textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </div>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="PageName">
                    <Form.Label>File Input</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Page Name"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <div className="Checkboxes-left mb-3">
                    <Form.Label>Form Checkboxes</Form.Label>
                    <div className="d-flex align-items-center">
                      <Form>
                        <Form.Check
                          inline
                          label="Checkbox"
                          name="group1"
                          type="checkbox"
                          id="checkbox-2"
                        />
                      </Form>
                      <Form>
                        <Form.Check
                          inline
                          label="Checkbox"
                          name="group1"
                          type="checkbox"
                          defaultChecked
                          id="checkbox-2"
                        />
                      </Form>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="Checkboxes-left  mb-3">
                    <Form.Label>Form Radios</Form.Label>
                    <div className="d-flex align-items-center">
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
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="switch mb-3">
                    <Form.Label>Switch</Form.Label>
                    <span class="toggle">
                      <input type="checkbox" id="toggle-switch-2" />
                      <label for="toggle-switch-2"></label> Toggle switch
                    </span>
                  </div>
                </Col>
                <Col sm={12}>
                  <Form.Label>Text Editor</Form.Label>
                  <TextEditor />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddModulePreview;
