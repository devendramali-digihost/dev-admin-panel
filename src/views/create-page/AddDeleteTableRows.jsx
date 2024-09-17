import React, { useState } from 'react';

const AddDeleteTableRows = () => {
  // Define the initial state of the rows (empty)
  const [rows, setRows] = useState([{ name: '', age: '' }]);

  // Add a new row
  const addRow = () => {
    setRows([...rows, { name: '', age: '' }]);
  };

  // Delete a specific row by index
  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  // Handle change in input fields
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  return (
    <div>
      <h2>Add/Delete Table Rows</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
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
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="age"
                  value={row.age}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
    </div>
  );
};

export default AddDeleteTableRows;
