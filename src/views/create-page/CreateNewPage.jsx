import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import Select from 'react-select';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const CreateNewPage = () => {
    const [rows, setRows] = useState([{ name: "", age: "" }]);
    const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
    const [searchClass, setSearchClass] = useState(['']); // State for dynamic search class

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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Update the search term state
    };

    // Filtered rows based on search term
    const filteredRows = rows.filter((row) => {
        return (
            row.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Adjust fields as per your needs
            row.age.toString().includes(searchTerm) // Convert age to string for comparison
        );
    });

    // Options for Select components
    const options = [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }];
    const keyOptions = [{ value: 'Primary Key', label: 'Primary Key' }, { value: 'Foreign Key', label: 'Foreign Key' }, { value: 'Unique Key', label: 'Unique Key' }];
    const fieldsOptions = [{ value: 'Auto Save', label: 'Auto Save' }, { value: 'Optional', label: 'Optional' }, { value: 'Required', label: 'Required' }, { value: 'Backend', label: 'Backend' }];
    const fieldTypesOptions = [{ value: 'Text', label: 'Text' }, { value: 'Dropdown', label: 'Dropdown' }, { value: 'Textarea', label: 'Textarea' }, { value: 'file', label: 'file' }, { value: 'Radio', label: 'Radio' }, { value: 'CheckBox', label: 'CheckBox' }, { value: 'DatePicker', label: 'DatePicker' }, { value: 'Data Editor', label: 'Data Editor' }];

    // Columns for DataTable
    const columns = [
        {
            name: 'Name',
            cell: (row, index) => (
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={row.name}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter name"
                />
            ),
        },
        {
            name: 'Type',
            cell: () => (
                <Select
                    options={options}
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    styles={{
                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                        control: base => ({ ...base, minHeight: '40px' }),
                    }}
                />
            ),
        },
        {
            name: 'Length Value',
            cell: (row, index) => (
                <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={row.age}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter age"
                />
            ),
        },
        {
            name: 'Key',
            cell: () => (
                <Select
                    options={keyOptions}
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    styles={{
                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                        control: base => ({ ...base, minHeight: '40px' }),
                    }}
                />
            ),
        },
        {
            name: 'Field',
            cell: () => (
                <Select
                    options={fieldsOptions}
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    styles={{
                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                        control: base => ({ ...base, minHeight: '40px' }),
                    }}
                />
            ),
        },
        {
            name: 'Field Type',
            cell: () => (
                <Select
                    options={fieldTypesOptions}
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    styles={{
                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                        control: base => ({ ...base, minHeight: '40px' }),
                    }}
                />
            ),
        },
        {
            name: 'Actions',
            cell: (row, index) => (
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
            ),
        },
    ];

    // Custom search input with icon
    const searchOnHandler = () => {
        setSearchClass(['open-search']); // Custom logic to handle opening the search
    };

    const searchOffHandler = () => {
        setSearchClass(['']); // Custom logic to handle closing the search
    };

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col lg={3}>
                                    <div className="data_tableHeader">
                                        {/* Your custom search component */}
                                        <div id="main-search" className={searchClass.join(' ')}>
                                            <div className="input-group" onClick={searchOnHandler}>
                                                <span
                                                    onKeyDown={searchOnHandler}
                                                    role="button"
                                                    tabIndex="0"
                                                    className="input-group-append search-btn"
                                                    style={{ borderRadius: '50%', marginRight: 15 }}
                                                >
                                                    <i className="feather icon-search input-group-text" />
                                                </span>
                                                <input
                                                    type="text"
                                                    id="m-search"
                                                    className="form-control"
                                                    placeholder="Search..."
                                                    value={searchTerm}
                                                    onChange={handleSearch}
                                                />
                                                {/* Uncomment below to add the search close functionality */}
                                                {/* <Link to="#" className="input-group-append search-close" onClick={searchOffHandler}>
                                                    <i className="feather icon-x input-group-text" />
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <DataTable
                                columns={columns}
                                data={filteredRows} // Use filtered rows
                                responsive
                                striped
                            />
                            <Row>
                                <Col lg={12}>
                                    <div className="text-end mt-5">
                                        <Button className="waves-effect waves-light" variant="primary">
                                            Submit
                                        </Button>
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
