import React, { useState } from "react";
import { Row, Col, Card, Table, Form  } from 'react-bootstrap';

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
					{/* <Card.Header>
						<Card.Title as="h5">Basic Table</Card.Title>
						<span className="d-block m-t-5">
							use bootstrap <code>Table</code> component
						</span>
					</Card.Header> */}
					<Card.Body>
						<Table responsive>
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
									<th>Length Value</th>
									<th>Key</th>
									<th>Field</th>
									<th>field Type</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{rows.map((row, index) => (
									<tr key={index}>
										<td>
											<input
											type="text"
											name="name"
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
											<button onClick={() => handleRemoveRow(index)}>Delete</button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						<button onClick={handleAddRow}>Add Row</button>
					</Card.Body>
				</Card>
			</Row>
		</React.Fragment>
	);
};

export default CreateNewPage;
