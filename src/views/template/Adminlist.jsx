import React,{useState} from 'react';
import { Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit, MdOutlineChevronLeft, MdChevronRight ,MdDelete } from 'react-icons/md';

const Adminlist = () => {
  const [search, setSearch] = useState("")

  const [data,setData] = useState([
    {id:1, industry:'Information Technology',status:true},
    {id:2, industry:'Industrial',status:false}
  ])

  const filterdata = data.filter(
    item =>
      item.industry.toLowerCase().includes(search.toLowerCase()) 
  );
  const handleStatusChange = (id)=>{
    const updateddata = data.map(item=>
      item.id === id ?{...item, status:!item.status}:item
    );
    setData(updateddata)
  }
  // const handledeleteadmin =(id)=>{
  //   const updatedata = data.filter(item => item.id !== id);
  //   setData(updatedata)
  // }
  const columns = [
    {
      name:"Sr.No",
      selector: (row) => row.id,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name:"Industry",
      selector:(row)=>row.industry,
    },
    {
      name:"Edit",
      cell:(row) =>(
        <Link to="#" className="btn edit-button">
          <MdOutlineModeEdit />
        </Link>
      )
    },
    {
      name:"Status",
      cell:(row)=>(
        <Form.Check 
          type='switch'
          id={`status-switch-${row.id}`}
          checked={ row.status}
          onChange={()=> handleStatusChange(row.id)}
          label={row.status ? "Active" : "Deactive"}
          />
      )
    },
    // {
    //   name:"Delete",
    //   cell:(row)=>(
    //     <button onClick={handledeleteadmin(row.id)} className="btn delete-button"
    //       id={`delete-id-${row.id}`}
    //     >
    //       <MdDelete/>
    //     </button>
        
    //   )
    // }
  ]
  return (
    <>
        <div className="adminlist">
          <div className="card">
            <div className="data-table-header">
              <div className="search-input">
                <label htmlFor="">Search: </label>
                <Form.Control type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
              </div>
            </div>
            <DataTable
              columns={columns}
              data={filterdata}
            >
              
            </DataTable>
          </div>
        </div>

    </>
  )
}

export default Adminlist