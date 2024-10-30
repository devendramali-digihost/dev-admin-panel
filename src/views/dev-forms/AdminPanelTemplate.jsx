import React, { useState } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaEdit, FaThLarge, FaRegEye } from "react-icons/fa";
import { admin1, admin2 } from "../../images";
import Switch from "react-switch";

export const AdminPanelTemplate = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checked, setChecked] = useState(true);
  const [showModuleBlock, setShowModuleBlock] = useState(false); // New state for showing ModuleBlock

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleChange = (checked) => {
  //   setChecked(checked);
  // };

  const handleViewStructureClick = () => {
    setShowModuleBlock(true); // Show ModuleBlock
  };

  const switchesData = [
    { label: "Services", id: 1 },
    { label: " FAQ's", id: 2 },
    { label: "Testimonials ", id: 3 },
    { label: "Gallery ", id: 4 },
    { label: "Videos", id: 5 },
    { label: "Blogs ", id: 5 },
    { label: "Slider", id: 5 },
    { label: "Video Testimonials", id: 5 },
  ];

  // State to keep track of which switches are checked
  const [switchStates, setSwitchStates] = useState(
    switchesData.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );

  // Handler to toggle individual switch states
  const handleChange = (id) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <React.Fragment>
      {/* AdminCardBlock with conditional visibility */}
      <div
        className={`mainForm ${showModuleBlock ? "hide" : "show"}`}
        id="AdminCardBlock"
      >
        <p className="personal">
          Choose Admin Panel Template{" "}
          <div className="icon-wrapper">
            <Link to="/company/create-new-project">
              <i className="fas fa-home custom-icon">
                <span className="fix-editor">&nbsp;</span>
              </i>
            </Link>
          </div>
        </p>

        <Row>
          <Col lg={12}>
            <Form>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="DomainName">
                    <div className="input-group rounded">
                      <Form.Control
                        type="text"
                        placeholder="Search template by"
                        className="rounded-start"
                      />
                      <span className="input-group-text rounded-end">
                        <FaSearch />
                      </span>
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={8}>
                  <Row>
                    <div className="form-btn-panel">
                      <select
                        id="options"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="form-select category-form"
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option value="option1">
                          Corporate Business Templates
                        </option>
                        <option value="option2">Admin Panel Templates</option>
                        <option value="option3">E-commerce Templates</option>
                      </select>

                      <div className="text-right m-l-10">
                        <Link to="#" className="create-button btn btn-primary">
                          <FaEdit /> Start From Scratch
                        </Link>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col lg={4}>
                  <Card className="project-card admin-card">
                    <div className="card-image-wrapper">
                      <Card.Img variant="top" src={admin1} />
                      <div className="overlay">
                        <div className="button">
                          <a
                            href="#"
                            target="_blank"
                            className="create-button btn btn-primary"
                          >
                            Preview
                          </a>
                          <a
                            onClick={handleViewStructureClick}
                            className="create-button btn btn-primary"
                          >
                            View Structure
                          </a>
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title>
                        Real Estate
                        <div style={{ float: "right" }}>
                          <a
                            href="#"
                            title="View"
                            target="_blank"
                            className="view-color"
                          >
                            <FaRegEye />
                          </a>
                          <a
                            onClick={handleViewStructureClick}
                            title="View Structure"
                            className="view-color m-l-10"
                          >
                            <FaThLarge />
                          </a>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={4}>
                  <Card className="project-card admin-card">
                    <div className="card-image-wrapper">
                      <Card.Img variant="top" src={admin2} />
                      <div className="overlay">
                        <div className="button">
                          <a
                            href="#"
                            target="_blank"
                            className="create-button btn btn-primary"
                          >
                            Preview
                          </a>
                          <a
                            onClick={handleViewStructureClick}
                            className="create-button btn btn-primary"
                          >
                            View Structure
                          </a>
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title>
                        Dental
                        <div style={{ float: "right" }}>
                          <a
                            href="#"
                            title="View"
                            target="_blank"
                            className="view-color"
                          >
                            <FaRegEye />
                          </a>
                          <a
                            onClick={handleViewStructureClick}
                            title="View Structure"
                            className="view-color m-l-10"
                          >
                            <FaThLarge />
                          </a>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>

      {/* ModuleBlock with conditional visibility */}
      <div
        className={`mainForm ${showModuleBlock ? "show" : "hide"}`}
        id="ModuleBlock"
      >
        <p className="personal">
          Dental Modules List{" "}
          <div className="icon-wrapper">
            <Link to="/company/create-new-project">
              <i className="fas fa-home custom-icon">
                <span className="fix-editor">&nbsp;</span>
              </i>
            </Link>
          </div>
        </p>

        <Row>
          <Col lg={12}>
            <div className="module-list">
              {/* <h3>Dental Modules</h3> */}
              <div className="checkboxes">
                {/* <label>
                  <span>Services</span>
                  <Switch onChange={handleChange} checked={checked} />
                </label> */}
                {switchesData.map((switchItem) => (
                  <label key={switchItem.id} className="switch-label">
                    <span>{switchItem.label}</span>
                    <Switch
                      onChange={() => handleChange(switchItem.id)}
                      checked={switchStates[switchItem.id]}
                    />
                  </label>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
