import React from 'react';
import { useState } from "react"
import { Row, Col, Card, Form, Button, InputGroup,FloatingLabel, DropdownButton, Dropdown } from 'react-bootstrap';
const CompanySignUp = () => {
    const [inputFields, setInputFields] = useState([{
        fullName:'',
    } ]);
    const addInputField = ()=>{
        setInputFields([...inputFields, {
            fullName:'',
        } ])
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
    const handleChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    return (
        <React.Fragment>
            <Row className="g-2">
                <Col md={4}>
                    <FloatingLabel controlId="floatingInputGrid" label="Company Name">
                        <Form.Control type="text" placeholder="Company Name" />
                    </FloatingLabel>
                </Col>
                <Col md={4}>
                    <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Company Industry"
                    >
                        <Form.Select aria-label="Floating label select example">
                            <option>Company Industry</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md={4}>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Company description"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Add Company description" />
                    </FloatingLabel>
                </Col>
                <Col md={4}>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Company Domain"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Add Company Domain" />
                    </FloatingLabel>
                </Col>
                <Col md={4}>
                    {inputFields.map((data, index) => {
                        const { fullName, emailAddress, salary } = data;
                        return (
                            <div className="row mb-3 Addon_filed" key={index}>
                                <div className="col">
                                    <FloatingLabel controlId="floatingInputGrid" label="Add Social link">
                                        <Form.Control
                                            type="text"
                                            onChange={(evnt) => handleChange(index, evnt)}
                                            value={fullName}
                                            name="fullName"
                                            placeholder="Add Social link"
                                        />
                                        {inputFields.length !== 1 ? (
                                            <button
                                                className="btn btn-outline-danger btn_close"
                                                onClick={removeInputFields}
                                            >
                                             <i className='fa fa-window-close'></i>
                                            </button>
                                        ) : (
                                            ""
                                        )}
                                    </FloatingLabel>
                                </div>
                            </div>
                        );
                    })}
                </Col>
                <Col md={4}>
                    <button className="btn btn-outline-success " onClick={addInputField}>
                        Add New
                    </button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col mt={2}>
                    <Button className="btn-block mb-4" color="primary" size="large" type="button" variant="primary">
                        Submit
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CompanySignUp;
