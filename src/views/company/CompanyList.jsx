import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit, MdOutlineChevronLeft, MdChevronRight } from 'react-icons/md';
import DataTable from 'react-data-table-component';

const CompanyList = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Move the data array here
  const data = [
    { id: 1, companyname: 'Diigiihost', industry: 'Information Technology', domain: 'diigii' },
    { id: 2, companyname: 'DiiTech', industry: 'Information Technology', domain: 'diigii' },
    { id: 3, companyname: 'TechHost', industry: 'Software', domain: 'techhost' },
    { id: 4, companyname: 'DevCorp', industry: 'Development', domain: 'devcorp' },
    { id: 5, companyname: 'Webify', industry: 'Web Services', domain: 'webify' },
    { id: 6, companyname: 'NextGen', industry: 'AI Technology', domain: 'nextgen' },
    { id: 7, companyname: 'UltraCode', industry: 'Software Development', domain: 'ultracode' }
    // Add more data as needed
  ];

  // Calculate total pages after data array is defined
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Data table columns
  const columns = [
    {
      name: 'Sr. No',
      selector: (row) => row.id,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Company Name',
      selector: (row) => row.companyname,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Industry',
      selector: (row) => row.industry,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Domain',
      selector: (row) => row.domain,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'NS Record',
      cell: (row) => (
        <button className="btn btn-primary ns-button" onClick={handleShow}>
          NS Record
        </button>
      )
    },
    {
      name: 'Edit',
      cell: (row) => (
        <Link to="/company/edit-company" className="btn edit-button">
          <MdOutlineModeEdit />
        </Link>
      )
    }
  ];

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.companyname.toLowerCase().includes(search.toLowerCase()) ||
      item.industry.toLowerCase().includes(search.toLowerCase()) ||
      item.domain.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Pagination logic for showing numbers and ellipsis
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= 5 || (i > 5 && i === currentPage)) {
        pages.push(
          <button key={i} className={`pagination-button ${i === currentPage ? 'active' : ''}`} onClick={() => handlePageChange(i)}>
            {i}
          </button>
        );
      }
    }

    if (totalPages > 5 && currentPage < totalPages - 1) {
      pages.push(
        <span key="ellipsis" className="pagination-ellipsis">
          ...
        </span>
      );
    }

    return pages;
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#141b1b',
        border: '1px solid #f0f5f5',
        borderBottom: '0'
      }
    },
    rows: {
      style: {
        fontSize: '14px',
        color: '#555',
        borderBottom: '1px solid #f0f5f5'
        // '&:hover': {
        //   backgroundColor: '#f2f2f2'
        // }
      }
    },
    cells: {
      style: {
        padding: '10px 16px', // Adds padding to cells
        fontSize: '14px',
        color: '#444',
        border: '1px solid #f0f5f5',
        borderTop: '0',
        borderBottom: '0'
      }
    },
    pagination: {
      style: {
        fontSize: '14px',
        color: '#000'
      }
    }
  };

  return (
    <div className="company-list">
      <div className="card">
        <div className="data-table-header">
          <div className="search-input">
            <label htmlFor="">Search: </label>
            <Form.Control type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)}
          pagination
          paginationPerPage={rowsPerPage}
          paginationComponentOptions={{
            rowsPerPageText: 'Rows per page:',
            rangeSeparatorText: 'of',
            noRowsPerPage: false,
            selectAllRowsItem: true,
            selectAllRowsItemText: 'All'
          }}
          striped
          highlightOnHover
          pointerOnHover
          customStyles={customStyles}
        />
        <div className="pagination-container">
          <button onClick={prevPage} disabled={currentPage === 1}>
            <MdOutlineChevronLeft />
          </button>
          {renderPagination()}
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <MdChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
