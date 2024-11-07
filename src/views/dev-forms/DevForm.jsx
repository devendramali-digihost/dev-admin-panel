import React, { useState } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import logo from "../../assets/images/auth/logo.png";
import { Link } from "react-router-dom";
import { FaSearch, FaEdit, FaThLarge, FaRegEye } from "react-icons/fa";
import { admin1, admin2, website1, website2 } from "../../images";
import { AiOutlineImport } from "react-icons/ai";
import Switch from "react-switch";
import { DomainVerificationForm } from "./DomainVerificationForm";

const MultiStepForm = ({ num }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    plan: "",
    addOns: [],
    billingType: "Monthly",
  });

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 5));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const addOns = checked
        ? [...prev.addOns, value]
        : prev.addOns.filter((addon) => addon !== value);
      return { ...prev, addOns };
    });
  };

  const toggleBillingType = () => {
    setFormData((prev) => ({
      ...prev,
      billingType: prev.billingType === "Monthly" ? "Yearly" : "Monthly",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 5) {
      // Final submission logic
      console.log("Form submitted:", formData);
    } else {
      nextStep();
    }
  };



  // //////////////// Admin Panel Template ///////////////
  const [selectedOption, setSelectedOption] = useState("");
  const [checked, setChecked] = useState(true);
  const [showModuleBlock, setShowModuleBlock] = useState(false); // New state for showing ModuleBlock

  const [showScratchModules, setShowScratchModules] = useState(false);
  const [selectedCards, setSelectedCards] = useState({});
  const [reviewCards, setReviewCards] = useState({});

  const handleSelectCard = (id) => {
    setSelectedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSendForReview = (id) => {
    setReviewCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleStartFromScratchClick = () => {
    setShowScratchModules(true); // Show ScratchModules div on click
  };
  const handleResetStartFromScratchClick = () => {
    setShowScratchModules(false); // Hide ScratchModules div on reset
    console.log("Reset clicked!");
  };
  const [selectAll, setSelectAll] = useState(true); // New state for "Select All"
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleChange = (checked) => {
  //   setChecked(checked);
  // };

  const handleViewStructureClick = () => {
    setShowModuleBlock(true); // Show ModuleBlock
  };

  const handleResetClick = () => {
    setShowModuleBlock(false); // Show ModuleBlock
    console.log("Reset clicked!");
  };

  const switchesData = [
    { label: "Services", id: 1 },
    { label: " FAQ's", id: 2 },
    { label: "Testimonials ", id: 3 },
    { label: "Gallery ", id: 4 },
    { label: "Videos", id: 5 },
    { label: "Blogs ", id: 6 },
    { label: "Slider", id: 7 },
    { label: "Video Testimonials", id: 8 },
    { label: "Blogs without category", id: 9 },
    { label: "Gallery without category", id: 10 },
    { label: "Team", id: 11 },
    { label: "Before/After Images", id: 12 },
  ];

  // State to keep track of which switches are checked
  const [switchStates, setSwitchStates] = useState(
    switchesData.reduce((acc, item) => {
      acc[item.id] = true;
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
  // //////////////// Admin Panel Template ///////////////
  // Handle "Select All" toggle
  const handleSelectAllChange = (checked) => {
    setSelectAll(checked);
    const newSwitchStates = {};
    switchesData.forEach((item) => {
      newSwitchStates[item.id] = checked;
    });
    setSwitchStates(newSwitchStates);
  };

  // Handle category selection
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSendMailChecked, setIsSendMailChecked] = useState(false);

  // Toggle first checkbox state
  const handleFirstCheckboxChange = () => {
    setIsFirstChecked(!isFirstChecked);
  };

  // Toggle second checkbox state if it's enabled
  const handleSendMailCheckboxChange = () => {
    if (isFirstChecked) {
      setIsSendMailChecked(!isSendMailChecked);
    }
  };
  // State to manage selected cards
  //  const [selectedCards, setSelectedCards] = useState({});

  //  const handleSelectCard = (cardId) => {
  //    setSelectedCards((prevState) => ({
  //      ...prevState,
  //      [cardId]: !prevState[cardId],
  //    }));
  //  };

  const cardData = [
    { id: 1, title: "Real Estate", image: website1 }, // Replace with actual image path
    { id: 2, title: "Dental", image: website2 },
  ];

  //  For click and show
  const [showMain, setShowMain] = useState(true);
  const handleShowMain = () => {
    setShowMain(!showMain);
  };
  //  For click and show

  return (
    <div className="main-wrapper">
      <div className="formParentWrapper" data-step={step}>
        <div className="steps">
          <div className="sidebar-logo">
            <img className="logo" src={logo} alt="Logo" />
          </div>
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              className="stepInfo"
              key={num}
              onClick={() => {
                if (num === 4) handleResetClick();
                if (num === 4) handleResetStartFromScratchClick();
              }}
            >
              <div
                className={`step ${step === num ? "active" : ""}`}
                data-step={num}
                // onClick={num === 4 ? handleResetClick : null}
              >
                {num}
              </div>
              <div>
                <p className="label">STEP {num}</p>
                <p className="info">
                  {num === 1
                    ? "Business Account"
                    : num === 2
                      ? "Domain Verification"
                      : num === 3
                        ? "Update Name Server"
                        : num === 4
                          ? "Choose Admin Panel Template"
                          : "Choose Front Theme"}
                </p>
              </div>
              {num < 4 && (
                <div className={`${step === num ? "active" : ""}`}></div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="rightSectionParent">
          <div className="rightSectionWrapper">
            <div
              className={`formContainer ${step === 1 ? "" : "hide"}`}
              data-step="1"
            >
              {/* <BusinessAccountForm onChange={handleInputChange} formData={formData} /> */}
              <div className="mainForm">
                <p className="personal">
                  Business Account
                  <div class="icon-wrapper">
                    <Link to="/company/create-new-project">
                      <i class="fas fa-home custom-icon">
                        <span class="fix-editor">&nbsp;</span>
                      </i>
                    </Link>
                  </div>

                </p>
                <p className="personalInfo">
                  Please provide your company details.
                </p>

                <Row>
                  <Col lg={12}>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col lg={6}>
                          <Form.Group className="mb-3" controlId="CompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Company Name"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="CompanyDescription"
                          >
                            <Form.Label>Company Description</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={1}
                              placeholder="Add Company Description"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={6}>
                          <Form.Group className="mb-3" controlId="ClientName">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Client Name"
                            />
                          </Form.Group>
                        </Col>

                        {/* Contact Numbers Section */}
                        <Col sm={6}>
                          <Form.Group className="mb-3" controlId="ClientName">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Contact Number"
                            />
                          </Form.Group>
                          {/* <Row className="mb-3">
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
                            <Button onClick={() => removeContactNumber(index)} className="remove-field">
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
                  </Row> */}
                        </Col>

                        {/* Email Id Section */}
                        <Col sm={6}>
                          {/* <Row className="mb-3">
                    {emailIds.map((data, index) => (
                      <Col md={12} key={index}>
                        <Form.Group className="position-relative" controlId={`EmailId${index}`}>
                          <Form.Label>Email ID</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(event) => handleEmailIdChange(index, event)}
                            value={data.emailId}
                            name="emailId"
                            placeholder="Email ID"
                          />
                          {emailIds.length > 1 && (
                            <Button onClick={() => removeEmailId(index)} className="remove-field">
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
                  </Row> */}
                          <Form.Group className="mb-3" controlId="ClientName">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control type="text" placeholder="Email Id" />
                          </Form.Group>
                        </Col>

                        {/* Address Section */}
                        <Col sm={6}>
                          {/* <Row className="mb-3">
                    {addresses.map((data, index) => (
                      <Col md={12} key={index}>
                        <Form.Group className="position-relative" controlId={`Address${index}`}>
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(event) => handleAddressChange(index, event)}
                            value={data.address}
                            name="address"
                            placeholder="Address"
                          />
                          {addresses.length > 1 && (
                            <Button onClick={() => removeAddress(index)} className="remove-field">
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
                  </Row> */}
                          <Form.Group className="mb-3" controlId="ClientName">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>

            <div
              className={`formContainer ${step === 2 ? "" : "hide"}`}
              data-step="2"
            >
              <DomainVerificationForm
                onChange={handleInputChange}
                formData={formData}
              />
              {/* <div className="mainForm">
                <p className="personal">
                  Domain Verification Form{" "}
                  <div class="icon-wrapper">
                    <Link to="/company/create-new-project">
                      <i class="fas fa-home custom-icon">
                        <span class="fix-editor">&nbsp;</span>
                      </i>
                    </Link>
                  </div>
                </p>
                <p className="personalInfo">
                  Please provide your domain details.
                </p>

                <Row>
                  <Col lg={12}>
                    <Form>
                      <Row>
                        <Col lg={12}>
                          <Form.Group className="mb-3" controlId="DomainName">
                            <Form.Label>Enter Domains</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Domains"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={12}>
                          <div className="text-start gap-2 d-flex align-items-center buy-btn">
                            <button
                              type="submit"
                              className="btn btn-primary waves-effect waves-light"
                              variant="primary"
                            >
                              Verify
                            </button>
                            or
                            <Link to="/buy-domain">Buy Domain</Link>
                          </div>
                          <div className="details">
                            <h4>Details</h4>
                            <table>
                              <tr className="info">
                                <td>Is the domain correct?:</td>
                                <td>Yes</td>
                              </tr>
                              <tr className="info">
                                <td>Registry Domain ID:</td>
                                <td>HJIW4928</td>
                              </tr>
                              <tr className="info">
                                <td>Updated Date:</td>
                                <td>25th September 2024</td>
                              </tr>
                              <tr className="info">
                                <td>Creation Date: </td>
                                <td>25th September 2024</td>
                              </tr>
                              <tr className="info">
                                <td>
                                  Registrar Registration Expiration Date:{" "}
                                </td>
                                <td>25th September 2024</td>
                              </tr>
                            </table>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </div> */}
            </div>

            <div
              className={`formContainer ${step === 3 ? "" : "hide"}`}
              data-step="3"
            >
              {/* <UpdateNameserver
                onChange={handleInputChange}
                formData={formData}
              /> */}
              <div className="mainForm">
                <p className="personal">
                  Update Nameserver{" "}
                  <div class="icon-wrapper">
                    <Link to="/company/create-new-project">
                      <i class="fas fa-home custom-icon">
                        <span class="fix-editor">&nbsp;</span>
                      </i>
                    </Link>
                  </div>
                </p>
                <p className="personalInfo">Nameserver list</p>

                <Row>
                  <Col lg={12}>
                    <ul className="custom-list">
                      <li>
                        <i class="fas fa-chevron-right"></i> ns1.digihost.in
                      </li>
                      <li>
                        <i class="fas fa-chevron-right"></i> ns1.digihost.in
                      </li>
                    </ul>
                  </Col>
                  <Col lg={12}>
                    <div className="text-start gap-2 d-flex align-items-center buy-btn">
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        variant="primary"
                      >
                        Verify
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div
              className={`formContainer ${step === 4 ? "" : "hide"}`}
              data-step="4"
            >
              {/* <AdminPanelTemplate
                onChange={handleInputChange}
                formData={formData}
              /> */}
              <div className="admin-template">
                {/* AdminCardBlock with conditional visibility */}
                {!showScratchModules && (
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
                              <Form.Group
                                className="mb-3"
                                controlId="DomainName"
                              >
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
                                    <option value="option2">
                                      Admin Panel Templates
                                    </option>
                                    <option value="option3">
                                      E-commerce Templates
                                    </option>
                                  </select>

                                  <div className="text-right m-l-10">
                                    <Link
                                      to="#"
                                      className="create-button btn btn-primary"
                                      onClick={handleStartFromScratchClick}
                                    >
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
                                      href="#"
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
                                      href="#"
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
                )}
                {/* ModuleBlock with conditional visibility */}
                <div
                  className={`mainForm ${showModuleBlock ? "show" : "hide"}`}
                  id="ModuleBlock"
                >
                  <p className="personal">
                    Dental{" "}
                    <div className="icon-wrapper">
                      <Link to="/company/create-new-project">
                        <i className="fas fa-home custom-icon">
                          <span className="fix-editor">&nbsp;</span>
                        </i>
                      </Link>
                    </div>
                  </p>
                  <Row>
                    <Col lg={3}>
                      <div className="module-list">
                        <div class="checkboxes module-switch switch-no-bg">
                          <label className="switch-label">
                            <Switch
                              onChange={handleSelectAllChange}
                              checked={selectAll}
                            />
                            <span>Select All</span>
                          </label>
                        </div>
                      </div>
                    </Col>

                    <Col lg={5}></Col>

                    <Col lg={4}>
                      <div className="text-right">
                        <Link
                          to="/dev-forms/details-form"
                          className="create-button btn btn-primary waves-effect waves-light"
                          // onClick={handleStartFromScratchClick}
                        >
                          <AiOutlineImport /> Import Additional Modules
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <Row className="m-t-30">
                    <Col lg={12}>
                      <div className="module-list">
                        {/* <h3>Dental Modules</h3> */}
                        <div className="checkboxes module-switch">
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
                {showScratchModules && (
                  <div className="SracthModules" id="SracthModules">
                    <Row>
                      <Col lg={3}>
                        <div className="module-list">
                          <div class="checkboxes module-switch switch-no-bg">
                            <label className="switch-label">
                              <Switch
                                onChange={handleSelectAllChange}
                                checked={selectAll}
                              />
                              <span>Select All</span>
                            </label>
                          </div>
                        </div>
                      </Col>

                      <Col lg={5}>
                        <Form.Group className="mb-3" controlId="DomainName">
                          <div className="input-group rounded">
                            <Form.Control
                              type="text"
                              placeholder="Search modules by"
                              className="rounded-start"
                            />
                            <span className="input-group-text rounded-end">
                              <FaSearch />
                            </span>
                          </div>
                        </Form.Group>
                      </Col>

                      <Col lg={4}>
                        {/* <div className="text-right">
                          <Link
                            to="/dev-forms/details-form"
                            className="create-button btn btn-primary waves-effect waves-light"
                          >
                            <AiOutlineImport /> Import Additional Modules
                          </Link>
                        </div> */}
                      </Col>
                    </Row>
                    <Row className="m-t-30">
                      <Col lg={12}>
                        <div className="module-list">
                          {/* <h3>Dental Modules</h3> */}
                          <div className="checkboxes module-switch">
                            {/* <label>
                  <span>Services</span>
                  <Switch onChange={handleChange} checked={checked} />
                </label> */}
                            {switchesData.map((switchItem) => (
                              <label
                                key={switchItem.id}
                                className="switch-label"
                              >
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
                )}
              </div>
            </div>
            <div
              className={`formContainer ${step === 5 ? "" : "hide"}`}
              data-step="5"
            >
              <div className="mainForm">
                <p className="personal">
                  Choose Front Theme
                  <div class="icon-wrapper">
                    <Link to="/company/create-new-project">
                      <i class="fas fa-home custom-icon">
                        <span class="fix-editor">&nbsp;</span>
                      </i>
                    </Link>
                  </div>
                  {/* <span className='text-right'>
                          <a href="#" class="btn btn-primary btn-home">
                  <i class="fas fa-home"></i>
                </a></span> */}
                </p>

                <Row>
                  <Col lg={12}>
                    <Form>
                      <Row>
                        <Col lg={6}>
                          <p className="personalInfo">
                            Please Choose Front Theme
                          </p>
                        </Col>
                        <Col lg={6}>
                          <Row>
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
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        {cardData.map((card) => (
                          <Col lg={4} key={card.id}>
                            <Card
                              className={`project-card admin-card ${selectedCards[card.id] ? "selected" : ""}`}
                            >
                              <div className="card-image-wrapper">
                                <Card.Img variant="top" src={card.image} />
                                <div className="overlay">
                                  {/* <div className="checbox-pos">

                                    <label>
                                      <input
                                        type="checkbox"
                                        checked={
                                          selectedCards[card.id] || false
                                        }
                                        onChange={() =>
                                          handleSelectCard(card.id)
                                        }
                                      />
                                    </label>
                                  </div> */}
                                  <div className="button">
                                    <a
                                      href="#"
                                      target="_blank"
                                      className="create-button btn btn-primary"
                                    >
                                      Preview
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <Card.Body>
                                <Card.Title>
                                  {card.title}
                                  <div style={{ float: "right" }}>
                                    {/* <a
                                      href="#"
                                      title="View"
                                      target="_blank"
                                      className="view-color"
                                    >
                                      <FaRegEye />
                                    </a> */}
                                    <div className="checbox-pos">
                                     <label>
                                      <input
                                        type="checkbox"
                                        checked={
                                          selectedCards[card.id] || false
                                        }
                                        onChange={() =>
                                          handleSelectCard(card.id)
                                        }
                                      />
                                    </label>
                                    </div>
                                  </div>
                                </Card.Title>

                                <div>
                                  {/* Independent checkbox for "Send for review" */}
                                  <label className="label-check checbox-size">
                                    <input
                                      type="checkbox"
                                      checked={reviewCards[card.id] || false}
                                      onChange={() =>
                                        handleSendForReview(card.id)
                                      }
                                    />
                                    &nbsp;Send for review
                                  </label>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>

                      <Row>
                        <div>
                          <br />

                          <label class="label-check checbox-size">
                            <input
                              type="checkbox"
                              // checked={isSendMailChecked}
                              onChange={handleSendMailCheckboxChange}
                            />
                            &nbsp;Send mail to client for template approval
                          </label>

                          <br />
                          <button className="btn btn-primary">Skip</button>

                        </div>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          <div className="btnWrapper mt-3">
            <p
              className={`prev ${step === 1 ? "hideBtn" : ""}`}
              onClick={prevStep}
            >
              <a href="#">
                <i className="fas fa-arrow-left"></i> Go Back
              </a>
            </p>
            {/* <button
              type={step === 5 ? "submit" : "button"}
              className="btn btn-primary"
              onClick={step < 5 ? nextStep : undefined}
            >

              {step === 5 ? "Skip" : "Next Step"}
            </button> */}
            <button
              type={step === 5 ? "submit" : "button"}
              className="btn btn-primary"
              onClick={step < 5 ? nextStep : undefined}
            >
              {step === 5 ? "Proceed" : "Next Step"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
