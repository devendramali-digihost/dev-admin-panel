import React, { useState, useMemo } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { FaCopy, FaFileExcel, FaFilePdf, FaPrint } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
// import "react-data-table-component-extensions/dist/index.css";
// import "@mui/icons-material";
import ReactPaginate from "react-paginate";
import deleteIcon from "./../../assets/images/delete.png";

const rowsPerPage = 10;

const ModuleList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClass, setSearchClass] = useState(["search-input"]);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchOnHandler = () => {
    // Logic for handling search input interactions
  };

  const columns = [
    {
      name: "Sr No #",
      selector: (row) => row.srNo,
      sortable: true,
      width: "300px", // Setting width for Sr No column
    },
    {
      name: "Page Name",
      selector: (row) => row.pageName,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="module-action">
          <a href="#" className="btn btn-action" title="Edit Product">
            <FaEdit />
          </a>

          <a
            href="#"
            className="btn btn-action"
            title="Delete Product"
            variant="primary"
            onClick={handleShow}
          >
            <FaTrashAlt />
          </a>
        </div>
      ),
      style: {
        textAlign: "right", // Aligning Actions column to the right
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
    pagination: {
      style: {
        display: "flex",
        justifyContent: "flex-end", // Ensure pagination is aligned correctly
        padding: "10px",
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "8px",
        margin: "0 5px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  };

  const data = [
    { srNo: 1, pageName: "Test" },
    { srNo: 2, pageName: "Blog Category" },
    { srNo: 3, pageName: "Blog Category" },
    { srNo: 4, pageName: "FAQ" },
    { srNo: 5, pageName: "Testimonials" },
    { srNo: 6, pageName: "SEO PAGE" },
    { srNo: 7, pageName: "Add Blog Category" },
    { srNo: 8, pageName: "Add Products" },
    { srNo: 9, pageName: "Add Products" },
    { srNo: 10, pageName: "Add Products" },
    { srNo: 11, pageName: "Add Products" },
    { srNo: 12, pageName: "Add Products" },
  ];

  const filteredRows = useMemo(() => {
    return data.filter((row) =>
      row.pageName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Card className="create_new_page_card add-module module-list">
            <Card.Header>
              <Row className="justify-content-between">
                <Col md={12}>
                  <h3>Module List</h3>
                </Col>
                <Col md={6}>
                  <div className="dt-buttons btn-group">
                    <Button className="btn btn-outline-secondary">
                      <FaCopy style={{ marginRight: "5px" }} />
                      Copy
                    </Button>
                    <Button className="btn btn-outline-secondary">
                      <FaFileExcel style={{ marginRight: "5px" }} />
                      Excel
                    </Button>
                    <Button className="btn btn-outline-secondary">
                      <FaFilePdf style={{ marginRight: "5px" }} />
                      PDF
                    </Button>
                    <Button className="btn btn-outline-secondary">
                      <FaPrint style={{ marginRight: "5px" }} />
                      Print
                    </Button>
                  </div>
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
                // data={filteredRows}
                data={filteredRows.slice(startIndex, endIndex)} // Paginated data
                // pagination={false}
                customStyles={customStyles}
                // pagination
                responsive
                striped
                paginationComponentOptions={{
                  rowsPerPageText: "Rows per page:",
                  rangeSeparatorText: "of",
                  // selectAllRowsItem: true,
                  // selectAllRowsItemText: "All",
                }}
              />
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={Math.ceil(filteredRows.length / rowsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
              ;
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
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h3>Do you really want to delete the file?</h3>
          <img src={deleteIcon} alt="Delete" />
          <div className="buttons">
            <button className="button-delete">Yes delete the file</button>
            <button className="button-cancel">Cancel this time</button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Container>
  );
};

export default ModuleList;
