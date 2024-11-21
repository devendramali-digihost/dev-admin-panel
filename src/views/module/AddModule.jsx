import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Select from "react-select";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const AddModule = () => {
  const { id } = useParams();
  const isEdit = !!id;

  const [fields, setRows] = useState([
    { name: "status", validation: "Auto Save", inputtype: "" },
    { name: "createdBy", validation: "Auto Save", inputtype: "" },
    { name: "createdDate", validation: "Auto Save", inputtype: "" },
    { name: "", validation: "", inputtype: "" },
  ]);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const [searchClass, setSearchClass] = useState([""]); // State for dynamic search class

  // Function to handle adding a new row
  const handleAddRow = () => {
    setRows([...fields, { name: "", validation: "", inputtype: "" }]);
  };

  // Function to handle removing a row by index
  const handleRemoveRow = (index) => {
    const updatedRows = fields.filter((row, i) => i !== index);
    setRows(updatedRows);
  };

  // Function to handle input changes for a specific row
  const handleChange = (index, event, fieldName) => {
    const updatedRows = fields.map((row, i) => {
      if (i === index) {
        if (fieldName) {
          // Handle react-select changes
          return { ...row, [fieldName]: event.value }; // event contains { value, label }
        } else {
          // Handle standard input changes
          return { ...row, [event.target.name]: event.target.value };
        }
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term state
  };

  // Filtered rows based on search term
  const filteredRows = fields.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Adjust fields as per your needs
      row.length.toString().includes(searchTerm) // Convert age to string for comparison
    );
  });

  const [table_name, setModuleform] = useState("");

  const handleinput = (event) => {
    setModuleform(event.target.value);
  };

  const fieldsOptions = [
    { value: "Auto Save", label: "Auto Save" },
    { value: "Optional", label: "Optional" },
    { value: "Required", label: "Required" },
  ];
  const fieldTypesOptions = [
    { value: "Text", label: "Text" },
    { value: "Dropdown", label: "Dropdown" },
    { value: "Textarea", label: "Textarea" },
    { value: "file", label: "file" },
    { value: "Radio", label: "Radio" },
    { value: "CheckBox", label: "CheckBox" },
    { value: "DatePicker", label: "DatePicker" },
    { value: "Data Editor", label: "Data Editor" },
  ];

  const [errors, setErrors] = useState({});

  const validateRows = () => {
    const rowErrors = [];

    fields.forEach((row, index) => {
      // Ensure 'name' is a string and not empty
      if (!row.name || !row.name.trim()) {
        rowErrors.push(`Row ${index + 1}: "Name" is required.`);
      }
      // Ensure 'length' exists and is a valid number
      if (!row.length || isNaN(row.length)) {
        rowErrors.push(`Row ${index + 1}: "Length" must be a valid number.`);
      }
    });
    return rowErrors;
  };

  const handlesubmitbtn = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!table_name) newErrors.table_name = "Page name is required";

    // Check for empty fields in the rows
    fields.forEach((field, index) => {
      if (
        index >= 3 &&
        (!field.name || !field.validation || !field.inputtype)
      ) {
        newErrors.rowErrors = newErrors.rowErrors || [];
        newErrors.rowErrors.push(`Row ${index + 1} is incomplete`);
      }
    });

    // If errors exist, set state and do not proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (isEdit) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/form/updatepages/${id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ table_name, fields }),
          }
        );

        const res_data = await response.json();
        if (response.ok) {
          if (res_data.error == true) {
            toast.error(res_data.extraDetails || res_data.message);
          } else {
            toast.success("Module updated successfully!");
          }
          setErrors({});
        } else {
          toast.error(res_data.extraDetails || res_data.message);
        }
      } catch (error) {
        console.error("Error adding module:", error);
        toast.error("An error occurred.");
      }
    } else {
      try {
        const response = await fetch(
          `http://localhost:5000/api/form/createpages`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ table_name, fields }),
          }
        );

        const res_data = await response.json();
        if (response.ok) {
          if (res_data.error == true) {
            toast.error(res_data.extraDetails || res_data.message);
          } else {
            toast.success("Module added successfully!");
          }

          setRows([
            // Reset rows
            { name: "status", validation: "Auto Save", inputtype: "" },
            { name: "createdBy", validation: "Auto Save", inputtype: "" },
            { name: "createdDate", validation: "Auto Save", inputtype: "" },
            { name: "", validation: "", inputtype: "" },
          ]);
          setModuleform("");
          setErrors({});
        } else {
          toast.error(res_data.extraDetails || res_data.message);
        }
      } catch (error) {
        console.error("Error adding module:", error);
        toast.error("An error occurred.");
      }
    }
  };

  useEffect(() => {
    const getdatabyid = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/form/get/${id}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data.fields);
        console.log(data.page);
        setModuleform(data.page[0].page_name);
        setRows(
          data.fields.map((field) => ({
            name: field.fields_name,
            validation: field.fields_validation,
            inputtype: field.fields_type || "",
          }))
        );
      } catch (error) {
        console.error("Error adding module:", error);
      }
    };

    if (isEdit) {
      getdatabyid();
    }
  }, [isEdit, id]);

  // Columns for DataTable
  const columns = [
    {
      name: "Name",
      cell: (row, index) =>
        index >= 3 ? (
          <div>
            <input
              type="text"
              name="name"
              className="form-control"
              value={row.name}
              onChange={(e) => handleChange(index, e)}
              placeholder="Enter name"
            />
            {!row.name &&
              errors.rowErrors?.includes(`Row ${index + 1} is incomplete`) && (
                <small className="text-danger">Name is required</small>
              )}
          </div>
        ) : null,
    },
    {
      name: "Field",
      cell: (row, index) =>
        index >= 3 ? (
          <div>
            <Select
              options={fieldsOptions}
              name="validation"
              value={fieldsOptions.find(
                (option) => option.value === row.validation
              )}
              onChange={(selectedOption) =>
                handleChange(index, selectedOption, "validation")
              }
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                control: (base) => ({
                  ...base,
                  minHeight: "40px",
                  borderColor: errors.rowErrors?.includes(
                    `Row ${index + 2} is incomplete`
                  )
                    ? "red"
                    : base.borderColor,
                }),
              }}
            />
            {!row.validation &&
              errors.rowErrors?.includes(`Row ${index + 1} is incomplete`) && (
                <small className="text-danger">Field is required</small>
              )}
          </div>
        ) : null,
    },
    {
      name: "Field Type",
      cell: (row, index) =>
        index >= 3 ? (
          <div>
            <Select
              options={fieldTypesOptions}
              name="inputtype"
              value={fieldTypesOptions.find(
                (option) => option.value === row.inputtype
              )}
              onChange={(selectedOption) =>
                handleChange(index, selectedOption, "inputtype")
              }
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                control: (base) => ({
                  ...base,
                  minHeight: "40px",
                  borderColor: errors.rowErrors?.includes(
                    `Row ${index + 2} is incomplete`
                  )
                    ? "red"
                    : base.borderColor,
                }),
              }}
            />
            {!row.inputtype &&
              errors.rowErrors?.includes(`Row ${index + 1} is incomplete`) && (
                <small className="text-danger">Field Type is required</small>
              )}
          </div>
        ) : null,
    },
    {
      name: "Actions",
      cell: (row, index) => (
        <div className="d-flex align-items-center">
          {index >= 4 ? (
            <a
              onClick={() => handleRemoveRow(index)}
              className="btn btn-outline-danger btn-sm edit"
              title="Delete"
            >
              <MdDeleteOutline />
            </a>
          ) : null}
        </div>
      ),
    },
  ];

  // Custom search input with icon
  const searchOnHandler = () => {
    setSearchClass(["open-search"]); // Custom logic to handle opening the search
  };

  const searchOffHandler = () => {
    setSearchClass([""]); // Custom logic to handle closing the search
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <form onSubmit={handlesubmitbtn}>
            <Card className="create_new_page_card add-module add-module-table">
              <Card.Header>
                <Row className="justify-content-between">
                  <Col md={12}>
                    <h3>Add Module</h3>
                  </Col>
                  <Col lg={4}>
                    <div className="data_tableHeader">
                      <div className="search-input mb-1">
                        <Form.Label className="w-50 mb-0">Page Name</Form.Label>
                        <div>
                          <Form.Control
                            type="text"
                            value={table_name}
                            onChange={handleinput}
                            name="table_name"
                            placeholder="Page Name"
                          />
                          {errors.table_name && (
                            <span className="text-danger pg-er">
                              {errors.table_name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="data_tableHeader">
                      {/* Your custom search component */}
                      <div id="main-search" className={searchClass.join(" ")}>
                        {/* <div className="input-group" onClick={searchOnHandler}>
                          <span
                            onKeyDown={searchOnHandler}
                            role="button"
                            tabIndex="0"
                            className="input-group-append search-btn"
                            style={{ borderRadius: "50%", marginRight: 15 }}
                          >
                            <i className="feather icon-search input-group-text" />
                          </span>
                          <input
                            type="text"
                            id="m-search"
                            className="form-control"
                            placeholder="Search Page Name"
                            value={searchTerm}
                            onChange={handleSearch}
                          />
                        </div> */}
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
                <Button
                  className="waves-effect waves-light"
                  variant="primary"
                  onClick={handleAddRow}
                  style={{ marginRight: "5px", marginTop: "20px" }} // Adjust spacing for alignment
                >
                  <FaPlus /> Add Row
                </Button>

                <Row>
                  <Col lg={12}>
                    <div className="text-end mt-5">
                      <Button
                        type="submit"
                        className="waves-effect waves-light"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddModule;
