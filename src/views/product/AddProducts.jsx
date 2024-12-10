import React, { useState } from "react";
import Select from "react-select";
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

// import { FaPlus } from "react-icons/fa6";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaPlus, FaTrash } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import Table from "react-bootstrap/Table";

const AddProducts = () => {
  const options = [
    { value: "Auto Save", label: "Auto Save" },
    { value: "Optional", label: "Optional" },
    { value: "Required", label: "Required" },
  ];

  const [rows, setRows] = useState([]);
  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), role: "", hours: "" }]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const [developRows, setDevelopRows] = useState([]);
  const handleDevelopAddRow = () => {
    setDevelopRows([...developRows, { id: Date.now(), role: "", hours: "" }]);
  };

  const handleDevelopDeleteRow = (id) => {
    setDevelopRows(developRows.filter((row) => row.id !== id));
  };

  return (
    <Row className="mb-5 form-templates">
      <Col lg={12}>
        <Card>
          <Card.Body>
            <Tabs
              defaultActiveKey="basic-details"
              id="add-products"
              className="mb-3"
            >
              <Tab eventKey="basic-details" title="Basic Details">
                <form action="">
                  <Row className="mb-3 align-items-center">
                    <Col md={12}>
                      <div className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Product Name"
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3">
                        <Form.Label>Other Details</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Enter Other details"
                          style={{ height: "100px" }}
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="Checkboxes-left mb-3">
                        <Form.Label>Fixed</Form.Label>
                        <div className="d-flex align-items-center">
                          <Form>
                            <Form.Check
                              inline
                              label="Website Designing"
                              name="group1"
                              type="checkbox"
                              id="checkbox-2"
                            />
                          </Form>
                          <Form>
                            <Form.Check
                              inline
                              label="Devlopement"
                              name="group1"
                              type="checkbox"
                              id="checkbox-2"
                            />
                          </Form>
                        </div>
                      </div>
                      <div className="Checkboxes-left mb-3">
                        <Form.Label>Basic</Form.Label>
                        <div className="d-flex align-items-center">
                          <Form>
                            <Form.Check
                              inline
                              label="Website Designing 1"
                              name="group1"
                              type="checkbox"
                              id="checkbox-2"
                            />
                          </Form>
                          <Form>
                            <Form.Check
                              inline
                              label="Testing"
                              name="group1"
                              type="checkbox"
                              id="checkbox-2"
                            />
                          </Form>
                          <Form>
                            <Form.Check
                              inline
                              label="dyanamic"
                              name="group1"
                              type="checkbox"
                              id="checkbox-2"
                            />
                          </Form>
                        </div>
                      </div>
                      <div className="Checkboxes-left mb-3">
                        <Form.Label>Premium</Form.Label>
                        <div className="d-flex align-items-center">
                          <Form>
                            <Form.Check
                              inline
                              label="teted"
                              name="group1"
                              type="checkbox"
                              id="checkbox-2"
                            />
                          </Form>
                        </div>
                      </div>
                      <div className="Checkboxes-left mb-3">
                        <Form.Label>Premium</Form.Label>
                        <div className="d-flex align-items-center">
                          <Form>
                            <Form.Check
                              inline
                              label="sd2121"
                              name="group1"
                              type="checkbox"
                              id="checkbox-2"
                            />
                          </Form>
                        </div>
                      </div>
                      <div className="Checkboxes-left mb-3">
                        <Form.Label>Premium</Form.Label>
                        <div className="d-flex align-items-center">
                          <Form>
                            <Form.Check
                              inline
                              label="Project"
                              name="group1"
                              type="checkbox"
                              id="checkbox-2"
                            />
                          </Form>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="text-end mt-4">
                        <Button variant="primary">Submit</Button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </Tab>
              <Tab eventKey="assign-hours" title="Assign Hours">
                <form action="">
                  <div className="addons">
                    <h3>Addons Set Hours</h3>
                    <div className="websites">
                      <h5>Website Designing</h5>
                      <Row className="row-head">
                        <Col sm={5}>
                          <h6>Select Role</h6>
                        </Col>
                        <Col sm={5}>
                          <h6>Enter Hours</h6>
                        </Col>
                        <Col sm={2}>
                          <h6>Action</h6>
                        </Col>
                      </Row>
                      <Row className="row-field">
                        <Col sm={5}>
                          <div className="data">
                            <Select options={options} />
                          </div>
                        </Col>
                        <Col sm={5}>
                          <div className="data">
                            <Form.Control
                              type="text"
                              placeholder="Enter Hours"
                            />
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="data">
                            <Button variant="primary" onClick={handleAddRow}>
                              <FaPlus />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                      {rows.map((row) => (
                        <Row key={row.id} className="row-field">
                          <Col sm={5}>
                            <div className="data">
                              <Select options={options} />
                            </div>
                          </Col>
                          <Col sm={5}>
                            <div className="data">
                              <Form.Control
                                type="text"
                                placeholder="Enter Hours"
                              />
                            </div>
                          </Col>
                          <Col sm={2}>
                            <div className="data">
                              <Button
                                variant="danger"
                                onClick={() => handleDeleteRow(row.id)}
                              >
                                <FaTrash />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    <div className="websites">
                      <h5>Devlopement</h5>
                      <Row className="row-head">
                        <Col sm={5}>
                          <h6>Select Role</h6>
                        </Col>
                        <Col sm={5}>
                          <h6>Enter Hours</h6>
                        </Col>
                        <Col sm={2}>
                          <h6>Action</h6>
                        </Col>
                      </Row>
                      <Row className="row-field">
                        <Col sm={5}>
                          <div className="data">
                            <Select options={options} />
                          </div>
                        </Col>
                        <Col sm={5}>
                          <div className="data">
                            <Form.Control
                              type="text"
                              placeholder="Enter Hours"
                            />
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="data">
                            <Button
                              variant="primary"
                              onClick={handleDevelopAddRow}
                            >
                              <FaPlus />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                      {rows.map((row) => (
                        <Row key={row.id} className="row-field">
                          <Col sm={5}>
                            <div className="data">
                              <Select options={options} />
                            </div>
                          </Col>
                          <Col sm={5}>
                            <div className="data">
                              <Form.Control
                                type="text"
                                placeholder="Enter Hours"
                              />
                            </div>
                          </Col>
                          <Col sm={2}>
                            <div className="data">
                              <Button
                                variant="danger"
                                onClick={() => handleDevelopDeleteRow(row.id)}
                              >
                                <FaTrash />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    <div className="websites">
                      <h5>Website Designing 1</h5>
                      <Row className="row-head">
                        <Col sm={5}>
                          <h6>Select Role</h6>
                        </Col>
                        <Col sm={5}>
                          <h6>Enter Hours</h6>
                        </Col>
                        <Col sm={2}>
                          <h6>Action</h6>
                        </Col>
                      </Row>
                      <Row className="row-field">
                        <Col sm={5}>
                          <div className="data">
                            <Select options={options} />
                          </div>
                        </Col>
                        <Col sm={5}>
                          <div className="data">
                            <Form.Control
                              type="text"
                              placeholder="Enter Hours"
                            />
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="data">
                            <Button variant="primary" onClick={handleAddRow}>
                              <FaPlus />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                      {rows.map((row) => (
                        <Row key={row.id} className="row-field">
                          <Col sm={5}>
                            <div className="data">
                              <Select options={options} />
                            </div>
                          </Col>
                          <Col sm={5}>
                            <div className="data">
                              <Form.Control
                                type="text"
                                placeholder="Enter Hours"
                              />
                            </div>
                          </Col>
                          <Col sm={2}>
                            <div className="data">
                              <Button
                                variant="danger"
                                onClick={() => handleDeleteRow(row.id)}
                              >
                                <FaTrash />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    <div className="websites">
                      <h5>Dynamic</h5>
                      <Row className="row-head">
                        <Col sm={5}>
                          <h6>Select Role</h6>
                        </Col>
                        <Col sm={5}>
                          <h6>Enter Hours</h6>
                        </Col>
                        <Col sm={2}>
                          <h6>Action</h6>
                        </Col>
                      </Row>
                      <Row className="row-field">
                        <Col sm={5}>
                          <div className="data">
                            <Select options={options} />
                          </div>
                        </Col>
                        <Col sm={5}>
                          <div className="data">
                            <Form.Control
                              type="text"
                              placeholder="Enter Hours"
                            />
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="data">
                            <Button variant="primary" onClick={handleAddRow}>
                              <FaPlus />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                      {rows.map((row) => (
                        <Row key={row.id} className="row-field">
                          <Col sm={5}>
                            <div className="data">
                              <Select options={options} />
                            </div>
                          </Col>
                          <Col sm={5}>
                            <div className="data">
                              <Form.Control
                                type="text"
                                placeholder="Enter Hours"
                              />
                            </div>
                          </Col>
                          <Col sm={2}>
                            <div className="data">
                              <Button
                                variant="danger"
                                onClick={() => handleDeleteRow(row.id)}
                              >
                                <FaTrash />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                  </div>
                  <div className="addons">
                    <h3>Project Set Hours</h3>
                    <div className="websites">
                      <Row className="row-head">
                        <Col sm={5}>
                          <h6>Select Role</h6>
                        </Col>
                        <Col sm={5}>
                          <h6>Enter Hours</h6>
                        </Col>
                        <Col sm={2}>
                          <h6>Action</h6>
                        </Col>
                      </Row>
                      <Row className="row-field">
                        <Col sm={5}>
                          <div className="data">
                            <Select options={options} />
                          </div>
                        </Col>
                        <Col sm={5}>
                          <div className="data">
                            <Form.Control
                              type="text"
                              placeholder="Enter Hours"
                            />
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="data">
                            <Button variant="primary" onClick={handleAddRow}>
                              <FaPlus />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                      {rows.map((row) => (
                        <Row key={row.id} className="row-field">
                          <Col sm={5}>
                            <div className="data">
                              <Select options={options} />
                            </div>
                          </Col>
                          <Col sm={5}>
                            <div className="data">
                              <Form.Control
                                type="text"
                                placeholder="Enter Hours"
                              />
                            </div>
                          </Col>
                          <Col sm={2}>
                            <div className="data">
                              <Button
                                variant="danger"
                                onClick={() => handleDeleteRow(row.id)}
                              >
                                <FaTrash />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                  </div>
                  {/* <Col sm={12}> */}
                  <div className="text-end mt-4">
                    <Button variant="primary">Submit</Button>
                  </div>
                  {/* </Col> */}
                </form>
              </Tab>
              <Tab eventKey="feature-payment" title="Features Payment">
                <form action="">
                  <div className="info-design">
                    <h4>Website Designing</h4>
                    <Row>
                      <Col sm={3}>
                        <Form.Label>
                          Actual Price in <MdOutlineCurrencyRupee />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </Col>
                      <Col sm={3}>
                        <Form.Label>
                          Discounted Price in <MdOutlineCurrencyRupee />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </Col>
                      <Col sm={3}>
                        <Form.Label>
                          Actual Price in <TbCurrencyDollar />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </Col>
                      <Col sm={3}>
                        <Form.Label>
                          Discounted Price in <TbCurrencyDollar />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </Col>
                    </Row>
                  </div>
                  <div className="info-design">
                    <h4>Devlopement</h4>
                    <Row>
                      <Col sm={3}>
                        <Form.Label>
                          Actual Price in <MdOutlineCurrencyRupee />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </Col>
                      <Col sm={3}>
                        <Form.Label>
                          Discounted Price in <MdOutlineCurrencyRupee />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </Col>
                      <Col sm={3}>
                        <Form.Label>
                          Actual Price in <TbCurrencyDollar />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </Col>
                      <Col sm={3}>
                        <Form.Label>
                          Discounted Price in <TbCurrencyDollar />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </Col>
                      <Col sm={12}>
                        <div className="text-end mt-4">
                          <Button variant="primary">Submit</Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </form>
              </Tab>
              <Tab eventKey="product-payment" title="Product Payment">
                <form action="">
                  <Row>
                    <Col sm={6}>
                      <div className="mb-3">
                        <Form.Label>
                          Actual Price in <MdOutlineCurrencyRupee />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="mb-3">
                        <Form.Label>
                          Discounted Price in <MdOutlineCurrencyRupee />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="mb-3">
                        <Form.Label>
                          Discounted Price in <TbCurrencyDollar />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="mb-3">
                        <Form.Label>
                          Discounted Price in <TbCurrencyDollar />
                        </Form.Label>
                        <Form.Control type="text" value={"1000"} />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <Table bordered hover className="mt-3 table-product">
                        <thead>
                          <tr>
                            <th>Sr No.</th>
                            <th>Addons</th>
                            <th>Category</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Website Designing</td>
                            <td>Fixed</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Website Designing</td>
                            <td>Fixed</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col sm={12}>
                      <div className="text-end mt-4">
                        <Button variant="primary">Submit</Button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddProducts;
