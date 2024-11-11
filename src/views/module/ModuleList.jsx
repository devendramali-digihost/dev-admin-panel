import React from "react";
import { Container, Card } from 'react-bootstrap';

import { FaCopy, FaFileExcel, FaFilePdf, FaPrint } from "react-icons/fa";
const ModuleList = () => {
  return (
    <div className="module-list m-t-20">
       <Card>
          <Card.Body>
          <div className="row">
          <div className="col-sm-12 col-md-6">
            <h3>Module List</h3>
            </div>
            </div>
            <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="dt-buttons btn-group">
          <button
            className="btn btn-outline-secondary buttons-copy buttons-html5"
            type="button"
            aria-controls="example2"
          >
            <FaCopy style={{ marginRight: "5px" }} />
            <span>Copy</span>
          </button>
          <button
            className="btn btn-outline-secondary buttons-excel buttons-html5"
            type="button"
            aria-controls="example2"
          >
            <FaFileExcel style={{ marginRight: "5px", color: "green" }} />
            <span>Excel</span>
          </button>
          <button
            className="btn btn-outline-secondary buttons-pdf buttons-html5"
            type="button"
            aria-controls="example2"
          >
            <FaFilePdf style={{ marginRight: "5px", color: "red" }} />
            <span>PDF</span>
          </button>
          <button
            className="btn btn-outline-secondary buttons-print"
            type="button"
            aria-controls="example2"
          >
            <FaPrint style={{ marginRight: "5px" }} />
            <span>Print</span>
          </button>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div id="example2_filter" className="dataTables_filter pull-right">
          <label>

            <input
              type="search"
              className="form-control form-control-sm"
              placeholder="Search by:"
              aria-controls="example2"
            />
          </label>
        </div>
      </div>
    </div>
          </Card.Body>
        </Card>
    </div>
  );
};

export default ModuleList;
