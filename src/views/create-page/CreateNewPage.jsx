import React, { useState } from "react";
import Select from 'react-select';
import { Row, Col, Card, Table, Form, Button } from 'react-bootstrap';

const CreateNewPage = () => {
    // Initial state for rows, each row contains a name and an age
    const [rows, setRows] = useState([{ name: "", age: "" }]);

    // Function to handle adding a new row
    const handleAddRow = () => {
        setRows([...rows, { name: "", age: "" }]);
    };

    // Function to handle removing a row by index
    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((row, i) => i !== index);
        setRows(updatedRows);
    };

    // Function to handle input changes for a specific row
    const handleChange = (index, event) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [event.target.name]: event.target.value } : row
        );
        setRows(updatedRows);
    };

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' }
    ];

    const key = [
        { value: 'Primary Key', label: 'Primary Key' },
        { value: 'Foreign Key', label: 'Foreign Key' },
        { value: 'Unique Key', label: 'Unique Key' }
    ];

    const fields = [
        { value: 'Auto Save', label: 'Auto Save' },
        { value: 'Optional', label: 'Optional' },
        { value: 'Required', label: 'Required' },
        { value: 'Backend', label: 'Backend' }
    ];

    const fields_type = [
        { value: 'Text', label: 'Text' },
        { value: 'Dropdown', label: 'Dropdown' },
        { value: 'Textarea', label: 'Textarea' },
        { value: 'file', label: 'file' },
        { value: 'Radio', label: 'Radio' },
        { value: 'CheckBox', label: 'CheckBox' },
        { value: 'DatePicker', label: 'DatePicker' },
        { value: 'Data Editor', label: 'Data Editor' }
    ];

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col lg={3}>
                                    <Form.Group controlId="PageName">
                                        <Form.Label>Page Name</Form.Label>
                                        <Form.Control type="text" placeholder="Page Name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover bordered striped >
                                <thead>
                                    <tr>
                                        <th style={{ minWidth: "170px" }}>Name</th>
                                        <th style={{ minWidth: "120px" }}>Type</th>
                                        <th style={{ minWidth: "130px" }}>Length Value</th>
                                        <th style={{ minWidth: "150px" }}>Key</th>
                                        <th style={{ minWidth: "150px" }}>Field</th>
                                        <th style={{ minWidth: "150px" }}>Field Type</th>
                                        <th style={{ minWidth: "130px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    value={row.name}
                                                    onChange={(e) => handleChange(index, e)}
                                                    placeholder="Enter name"
                                                />
                                            </td>
                                            <td>
                                                <Select
                                                    options={options}
                                                    menuPortalTarget={document.body}
                                                    menuPosition="fixed"
                                                    styles={{
                                                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                        control: base => ({ ...base, minHeight: '40px' }),
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="age"
                                                    value={row.age}
                                                    onChange={(e) => handleChange(index, e)}
                                                    placeholder="Enter age"
                                                />
                                            </td>
                                            <td>
                                                <Select
                                                    options={key}
                                                    menuPortalTarget={document.body}
                                                    menuPosition="fixed"
                                                    styles={{
                                                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                        control: base => ({ ...base, minHeight: '40px' }),
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <Select
                                                    options={fields}
                                                    menuPortalTarget={document.body}
                                                    menuPosition="fixed"
                                                    styles={{
                                                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                        control: base => ({ ...base, minHeight: '40px' }),
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <Select
                                                    options={fields_type}
                                                    menuPortalTarget={document.body}
                                                    menuPosition="fixed"
                                                    styles={{
                                                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                        control: base => ({ ...base, minHeight: '40px' }),
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    {index === 0 && (
                                                        <Button
                                                            className="waves-effect waves-light ms-2"
                                                            variant="primary"
                                                            onClick={handleAddRow}
                                                        >
                                                            Add Row
                                                        </Button>
                                                    )}
                                                    {index !== 0 && (
                                                        <a
                                                            onClick={() => handleRemoveRow(index)}
                                                            className="btn btn-outline-danger btn-sm edit"
                                                            title="Delete"
                                                        >
                                                            <i className="fas fa-times m-0" title="Close"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>


                            </Table>
                            <Row>
                                {/* <Col lg={12}>
                    <div className="text-start mb-3 mt-5">
                    <Button className="waves-effect waves-light" variant="primary" onClick={handleAddRow}>
                        Add Row
                    </Button>
                    </div>
                </Col> */}
                                <Col lg={12}>
                                    <div className="text-end">
                                        <Button className="waves-effect waves-light" variant="primary">Submit</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CreateNewPage;
