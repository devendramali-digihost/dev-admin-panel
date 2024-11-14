import React, { useState } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { FaCopy, FaFileExcel, FaFilePdf, FaPrint } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Switch from "react-switch";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ListModulePreview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClass, setSearchClass] = useState(["search-input"]);
  const [thumb, setThumb] = useState(false);
  const [headerCheckbox, setHeaderCheckbox] = useState(false);

  // const filteredRows = [
  //   { srNo: 1, pageName: "Test" },
  //   { srNo: 2, pageName: "Blog Category" },
  //   { srNo: 3, pageName: "Blog Category" },
  //   { srNo: 4, pageName: "FAQ" },
  //   { srNo: 5, pageName: "Testimonials" },
  //   { srNo: 6, pageName: "SEO PAGE" },
  //   { srNo: 7, pageName: "Add Blog Category" },
  //   { srNo: 8, pageName: "Add Products" },
  // ];

  // const [rowCheckboxes, setRowCheckboxes] = useState(
  //   filteredRows.map((row) => ({ id: row.srNo, checked: false })) // Initialize based on your row data
  // );

  // const handleHeaderCheckboxChange = () => {
  //   const newHeaderCheckboxState = !headerCheckbox;
  //   setHeaderCheckbox(newHeaderCheckboxState);

  //   // Update all row checkboxes to match the header checkbox state
  //   const updatedRowCheckboxes = rowCheckboxes.map((row) => ({
  //     ...row,
  //     checked: newHeaderCheckboxState,
  //   }));
  //   setRowCheckboxes(updatedRowCheckboxes);
  // };

  // // Handler for individual row checkbox changes
  // const handleRowCheckboxChange = (id) => {
  //   const updatedRowCheckboxes = rowCheckboxes.map((row) =>
  //     row.srNo === id ? { ...row, checked: !row.checked } : row
  //   );
  //   setRowCheckboxes(updatedRowCheckboxes);

  //   // Update header checkbox state based on the updated individual row checkboxes
  //   const allChecked = updatedRowCheckboxes.every((row) => row.checked);
  //   setHeaderCheckbox(allChecked);
  // };

  // const toggleThumb = () => {
  //   setThumb(!thumb);
  // };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchOnHandler = () => {
    // Logic for handling search input interactions
  };

  const switchesData = [{ label: "", id: 1 }];
  const [switchStates, setSwitchStates] = useState(
    switchesData.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {})
  );

  // const handleChange = (id) => {
  //   setSwitchStates((prevStates) => ({
  //     ...prevStates,
  //     [id]: !prevStates[id],
  //   }));
  // };

  const handleChange = (id) => {
    setFilteredRows((prevRows) =>
      prevRows.map((row) =>
        row.srNo === id ? { ...row, switchState: !row.switchState } : row
      )
    );
  };

  const [filteredRows, setFilteredRows] = useState([
    { srNo: 1, pageName: "Test", thumb: false, switchState: true },
    { srNo: 2, pageName: "Blog Category", thumb: false, switchState: true },
    { srNo: 3, pageName: "Blog Category", thumb: false, switchState: true },
    { srNo: 4, pageName: "FAQ", thumb: false, switchState: true },
    { srNo: 5, pageName: "Testimonials", thumb: false, switchState: true },
    { srNo: 6, pageName: "SEO PAGE", thumb: false, switchState: true },
    { srNo: 7, pageName: "Add Blog Category", thumb: false, switchState: true },
    { srNo: 8, pageName: "Add Products", thumb: false, switchState: true },
  ]);

  // const filteredRows = [
  //   { srNo: 1, pageName: "Test" },
  //   { srNo: 2, pageName: "Blog Category" },
  //   { srNo: 3, pageName: "Blog Category" },
  //   { srNo: 4, pageName: "FAQ" },
  //   { srNo: 5, pageName: "Testimonials" },
  //   { srNo: 6, pageName: "SEO PAGE" },
  //   { srNo: 7, pageName: "Add Blog Category" },
  //   { srNo: 8, pageName: "Add Products" },
  // ];

  // Initialize row checkboxes with srNo as unique identifier
  const [rowCheckboxes, setRowCheckboxes] = useState(
    filteredRows.map((row) => ({ id: row.srNo, checked: false }))
  );

  const handleHeaderCheckboxChange = () => {
    const newHeaderCheckboxState = !headerCheckbox;
    setHeaderCheckbox(newHeaderCheckboxState);

    const updatedRowCheckboxes = rowCheckboxes.map((row) => ({
      ...row,
      checked: newHeaderCheckboxState,
    }));
    setRowCheckboxes(updatedRowCheckboxes);
  };

  const handleRowCheckboxChange = (id) => {
    const updatedRowCheckboxes = rowCheckboxes.map((row) =>
      row.id === id ? { ...row, checked: !row.checked } : row
    );
    setRowCheckboxes(updatedRowCheckboxes);

    const allChecked = updatedRowCheckboxes.every((row) => row.checked);
    setHeaderCheckbox(allChecked);
  };

  const toggleThumb = (id) => {
    setFilteredRows((prevRows) =>
      prevRows.map((row) =>
        row.srNo === id ? { ...row, thumb: !row.thumb } : row
      )
    );
  };

  const columns = [
    {
      name: (
        <Form.Check
          type="checkbox"
          checked={headerCheckbox}
          onChange={handleHeaderCheckboxChange}
        />
      ),
      selector: (row) => (
        <Form.Check
          type="checkbox"
          checked={
            rowCheckboxes.find((checkbox) => checkbox.id === row.srNo)
              ?.checked || false
          }
          onChange={() => handleRowCheckboxChange(row.srNo)}
        />
      ),
      sortable: true,
      width: "300px",
    },
    {
      name: "Sr No #",
      selector: (row) => row.srNo,
      sortable: true,
      width: "300px",
    },
    {
      name: "Page Name",
      selector: (row) => row.pageName,
      sortable: true,
    },
    {
      name: "Current Status",
      selector: (row) => (
        // <div className="checkboxes module-switch">
        //   {/* {switchesData.map((switchItem) => ( */}
        //   <label key={row.srNo} className="switch-label">
        //     {/* <span>{row.pageName}</span> */}
        //     <Switch
        //       onChange={() => handleChange(row.srNo)}
        //       checked={row.switchStates}
        //     />
        //   </label>
        //   {/* ))} */}
        // </div>
        <div className="checkboxes module-switch">
          <label key={row.srNo} className="switch-label">
            <Switch
              onChange={() => handleChange(row.srNo)}
              checked={row.switchState}
            />
          </label>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Featured Blog",
      selector: (row) => (
        <div
          className={row.thumb ? "thumb down" : "thumb"}
          onClick={() => toggleThumb(row.srNo)}
        >
          {row.thumb ? <FaThumbsDown /> : <FaThumbsUp />}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="module-action">
          <a href="#" className="btn btn-action" title="Edit Product">
            <FaEdit />
          </a>
          <a href="#" className="btn btn-action" title="Delete Product">
            <FaTrashAlt />
          </a>
        </div>
      ),
      style: {
        textAlign: "right",
      },
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "20px",
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "16px",
        backgroundColor: "#e3f2fd",
      },
    },
  };

  return (
    <Container className="list-module-preview">
      <Row>
        <Col lg={12}>
          <Card className="create_new_page_card add-module module-list">
            <Card.Header>
              <Row className="justify-content-between">
                <Col md={6}>
                  <h3>List Module Preview</h3>
                </Col>
                <Col md={6} className="text-end">
                  <div className="data_tableHeader">
                    <div id="main-search" className={searchClass.join(" ")}>
                      <div className="input-group" onClick={searchOnHandler}>
                        <span
                          onKeyDown={searchOnHandler}
                          role="button"
                          tabIndex="0"
                          className="input-group-append search-btn"
                          style={{ borderRadius: "50%", marginRight: 15 }}
                        >
                          <i className="feather icon-search input-group-text" />
                        </span>
                        <Form.Control
                          type="text"
                          id="m-search"
                          placeholder="Search Page Name"
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <DataTable
                columns={columns}
                data={filteredRows}
                customStyles={customStyles}
                responsive
                striped
              />
              <Row>
                <Col lg={12} className="text-end mt-5">
                  <Button
                    variant="primary"
                    className="waves-effect waves-light"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ListModulePreview;
