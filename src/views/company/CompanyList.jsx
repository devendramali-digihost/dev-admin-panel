import React from 'react';
import { Table } from 'react-bootstrap';
import Breadcrumb from 'layouts/AdminLayout/Breadcrumb';
import { MdOutlineModeEdit } from 'react-icons/md';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CompanyList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="company-list">
      <Breadcrumb />
      <div className="card">
        <h4>Company List</h4>
        <Table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Company Name</th>
              <th>Industry</th>
              <th>Domain</th>
              <th>NS Record</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>DiigiiHost</td>
              <td>IT</td>
              <td>com</td>
              <td>
                <button className="btn btn-primary ns-button" variant="primary" onClick={handleShow}>
                  Ns Record
                </button>
              </td>
              <td>
                <button className="btn edit-button">
                  <MdOutlineModeEdit />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>DiigiiHost</td>
              <td>IT</td>
              <td>com</td>
              <td>
                <button className="btn btn-primary ns-button" variant="primary" onClick={handleShow}>
                  Ns Record
                </button>
              </td>
              <td>
                <button className="btn edit-button">
                  <MdOutlineModeEdit />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>DiigiiHost</td>
              <td>IT</td>
              <td>com</td>
              <td>
                <button className="btn btn-primary ns-button" variant="primary" onClick={handleShow}>
                  Ns Record
                </button>
              </td>
              <td>
                <button className="btn edit-button">
                  <MdOutlineModeEdit />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NS 1</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NS 2</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CompanyList;
