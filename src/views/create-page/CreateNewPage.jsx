import React, { useState } from "react";
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

	return (
		<React.Fragment>
			<Row>
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
						<Table responsive hover>
							<thead>
								<tr>
									<th style={{minWidth:"170px"}}>Name</th>
									<th style={{minWidth:"155px"}}>Type</th>
									<th style={{minWidth:"130px"}}>Length Value</th>
									<th style={{minWidth:"160px"}}>Key</th>
									<th style={{minWidth:"160px"}}>Field</th>
									<th style={{minWidth:"170px"}}>Field Type</th>
									<th style={{minWidth:"75px"}}>Actions</th>
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
											<Form.Select aria-label="Default select example">
												<option >Select type</option>
												<option selected="">INT</option>
												<option>VARCHAR</option>
												<option>TEXT</option>
												<option>LONGTEXT</option>
												<option>DATETIME</option>
												<option>Data Editor</option>
											</Form.Select>
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
											<Form.Select aria-label="Default select example">
												<option	option>Select Key</option>
												<option selected="">Primary Key</option>
												<option>Foreign key</option>
												<option>Unique Key</option>
											</Form.Select>
										</td>
										<td>
											<Form.Select aria-label="Default select example">
												<option disabled="">Select Fields</option>
												<option selected="">Auto Save</option>
												<option>Optional</option>
												<option>Required</option>
												<option>Backend</option>
											</Form.Select>
										</td>
										<td>
											<Form.Select aria-label="Default select example">
												<option selected="">Select Option</option>
												<option>Text</option>
												<option>Dropdown</option>
												<option>Textarea</option>
												<option>file</option>
												<option>Radio</option>
												<option>CheckBox</option>
												<option>DatePicker</option>
												<option>Data Editor</option>
											</Form.Select>
										</td>
										<td>
											<a onClick={() => handleRemoveRow(index)} className="btn btn-outline-danger btn-sm edit" title="Delete">
												<i class="fas fa-times m-0" title="Close"></i>

											</a>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						<Row>
							<Col lg={12}>
								<div className="text-start mb-3 mt-5">
									<Button variant="primary" onClick={handleAddRow}>Add Row</Button>
								</div>
							</Col>
							<Col lg={12}>
								<div className="text-end">
									<Button variant="primary">Submit</Button>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Row>
		</React.Fragment>
	);
};

export default CreateNewPage;
