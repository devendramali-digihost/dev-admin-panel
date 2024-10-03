import React, { useState } from 'react';
import { Button, Modal, Form , Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit, MdOutlineChevronLeft, MdChevronRight } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

const CompanyList = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchClass, setSearchClass] = useState([' w-100']); // State for dynamic search class
  const rowsPerPage = 5;

  // Move the data array here
  const data = [
    { 
      id: 1,
      companyname: 'Diigiihost',
      industry: 'Information Technology',
      domain: 'diigii',
      nsverify:"Yes",
      domainverify:"No",
      creationdate:"02/06/2024 06:32:45 AM",
      comimgsoon:true,
      email:"diigiihost@gmail.com",
      password:"123456789"
    },
    { 
      id: 2,
      companyname: 'DiiTech',
      industry: 'Information Technology',
      domain: 'diigii',
      nsverify:"No",
      domainverify:"Yes",
      creationdate:"07/03/2024 03:32:45 AM",
      comimgsoon:false,
      email:"diitech@gmail.com",
      password:"123456789" 
    },
    { 
      id: 3,
      companyname: 'TechHost', 
      industry: 'Software',
      domain: 'techhost',
      nsverify:"Yes",
      domainverify:"No",
      creationdate:"29/11/2024 10:32:45 AM",
      comimgsoon:true,
      email:"techhost@gmail.com",
      password:"123456789" 
    },
    { 
      id: 4,
      companyname: 'DevCorp', 
      industry: 'Development',
      domain: 'devcorp',
      nsverify:"No",
      domainverify:"Yes",
      creationdate:"24/12/2024 05:32:45 AM",
      comimgsoon:false, email:"devcorp@gmail.com",
      password:"123456789" 
    },
    { 
      id: 5,
      companyname: 'Webify', 
      industry: 'Web Services',
      domain: 'webify',
      nsverify:"Yes" ,
      domainverify:"No",
      creationdate:"15/09/2024 12:32:45 AM",
      comimgsoon:true,
      email:"webify@gmail.com",
      password:"123456789"
    },
    { 
      id: 6,
      companyname: 'NextGen', 
      industry: 'AI Technology',
      domain: 'nextgen',
      nsverify:"No",
      domainverify:"Yes",
      creationdate:"23/05/2024 05:32:45 pM",
      comimgsoon:false, email:"nextgen@gmail.com",
      password:"123456789" 
    },
    { 
      id: 7,
      companyname: 'UltraCode', 
      industry: 'Software Development',
      domain: 'ultracode',
      nsverify:"Yes",
      domainverify:"No",
      creationdate:"01/02/2024 10:32:45 AM",
      comimgsoon:true,
      email:"ultracode@gmail.com",
      password:"123456789"
    }
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
      width: '200px',
      selector: (row) => row.companyname,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Industry',
      width: '200px',
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
      width: '200px',
      style: {
        fontSize: '14px'
      }
    },
    
    {
      name: 'Edit',
      cell: (row) => (
        <Link to="/company/edit-company" className="btn edit-button">
          <MdOutlineModeEdit />
        </Link>
      )
    },
    {
      name: 'Date and Time',
      selector: (row) => row.creationdate,
      sortable: true,
      width: '250px',
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Domain Verified',
      selector: (row) => row.domainverify,
      sortable: true,
      width: '200px',
      style: {
        fontSize: '14px',
       
      },
      cell: (row) => (
        <span to="#!" className="domain-verify">
          <div className={row.domainverify==="Yes" ? 'yes' : 'no'}>
            {row.domainverify }
          </div>
        
        </span>
      )
    },
    {
      name: 'NS Record Verified',
      selector: (row) => row.nsverify,
      sortable: true,
      width: '200px',
      style: {
        fontSize: '14px'
      },
      cell: (row) => (
        <span to="#!" className="ns-verify">
          <div className={row.nsverify==="Yes" ? 'yes' : 'no'}>
            {row.nsverify }
          </div>
        
        </span>
      )
    },
    {
      name: 'Coming Soon',
      selector: (row) => row.comimgsoon,
      sortable: true,
      width: '150px',
      style: {
        fontSize: '14px',
      },
      cell: (row) => (
        <span to="#!" className="coming-soon ">
          <div className={row.comimgsoon ? 'yes' : 'd-none'}>
            <FcCheckmark />
          </div>
          <div className={!row.comimgsoon ? 'no' : 'd-none'}>
            <RxCross2 />  
          </div>
        </span>
      )
    },
    {
      name: 'Proceed Further',
      width: '200px',
      style: {
        // minWidth:"200px"
      },
      cell: (row) => (
        <Link to="/admin-template/create-admin-template" className="btn btn-primary waves-effect waves-light">
          Proceed Further
        </Link>
      )
    },
    ,
    {
      name: 'Admin Panel Credentials',
      selector: (row) => row.email,
      selector: (row) => row.password,
      sortable: true,
      width: '250px',
      style: {
        fontSize: '14px',
        // minWidth:"200px"
      },
      cell: (row) => (
        <div  className="">
          <span className="email d-block mb-2">Email: {row.email}</span>
          <span className="password">Password: {row.password}</span>
        </div>
      )
    },
    {
      name: 'Website',
      width: '150px',
      cell: (row) => (
        <Link to="#!" className="btn btn-primary waves-effect waves-light">
          Link
        </Link>
      )
    },
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
// Custom search input with icon
  const searchOnHandler = () => {
    setSearchClass(['open-search w-100 ']); // Custom logic to handle opening the search
  };

  const searchOffHandler = () => {
    setSearchClass([' w-100']); // Custom logic to handle closing the search
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
          <button key={i} className={`pagination-button waves-effect waves-light ${i === currentPage ? 'active' : ''}`} onClick={() => handlePageChange(i)}>
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
        <Row className="justify-content-end">
          <Col lg={3}>
            <div className="data-table-header w-100">
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
                          placeholder="Search Page Name"
                          value={search} 
                          onChange={(e) => setSearch(e.target.value)}
                      />
                  </div>
              </div>
          </div>
          </Col>
        </Row>
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
          <button onClick={prevPage} className='waves-effect waves-light' disabled={currentPage === 1}>
            <MdOutlineChevronLeft />
          </button>
          {renderPagination()}
          <button onClick={nextPage} className='waves-effect waves-light' disabled={currentPage === totalPages}>
            <MdChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
