import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Master from '../Master/Master'
import axios from 'axios'
import vet from '../Images/vet.jpg'
import PetInfoModal from '../Model/PetInfoModal'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import CustomPagination from '../pagination/customPagination';
import editing from '../Images/edit.png'
import deleting from '../Images/delete.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PetInformation() {

  const [services, setServices] = useState([
    {
      petName: "Buddy",
      customerName: "John Doe",
      email: "john@example.com",
      age: 1,
    },
    {
      petName: "Fluffy",
      customerName: "Jane Smith",
      email: "jane@example.com",
      age: 2,
    },
    {
      petName: "Fido",
      customerName: "Alice Johnson",
      email: "alice@example.com",
      age: 3,
    },
    {
      petName: "Whiskers",
      customerName: "Bob Wilson",
      email: "bob@example.com",
      age: 4,
    },
    {
      petName: "Rex",
      customerName: "Emily Brown",
      email: "emily@example.com",
      age: 5,
    },
    {
      petName: "Luna",
      customerName: "Michael Davis",
      email: "michael@example.com",
      age: 6,
    },
    {
      petName: "Max",
      customerName: "Sophia Lee",
      email: "sophia@example.com",
      age: 7,
    },
    {
      petName: "Misty",
      customerName: "William Taylor",
      email: "william@example.com",
      age: 8,
    },
    {
      petName: "Charlie",
      customerName: "Olivia Martinez",
      email: "olivia@example.com",
      age: 9,
    },
    {
      petName: "Lucy",
      customerName: "Ethan Jackson",
      email: "ethan@example.com",
      age: 10,
    },
    {
      petName: "Rocky",
      customerName: "Ava Harris",
      email: "ava@example.com",
      age: 11,
    },
    {
      petName: "Zoe",
      customerName: "Noah Clark",
      email: "noah@example.com",
      age: 12,
    },
    {
      petName: "Milo",
      customerName: "Abigail Lewis",
      email: "abigail@example.com",
      age: 13,
    },
    {
      petName: "Daisy",
      customerName: "Liam Rodriguez",
      email: "liam@example.com",
      age: 14,
    },
  ]);


  
  const addService = (newService) => {
    setServices([...services, newService]);
    console.log("petinfo",services)
  };


  const [filteredData, setFilteredData] = useState(services);
  const [filterDesignation, setFilterDesignation] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedRow, setEditedRow] = useState({});


  const headersName = ["Pet Name", "Customer Name", "Email", "Actions"];

  // #region pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (services ? services.length : 0)) : 0;

  const handleChangePage = (
    event,
    newPage,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //#endregion

  // Clear user-related data from local storage
  const HandleLogOut = () => {
    localStorage.removeItem('userInfo');

  };
  // this is userinfo
  const userInfo = {
    FullName: 'Subham Rawat',
    RoleName: 'Admin',
  };

  // Store user information in localStorage
  localStorage.setItem('userInfo', JSON.stringify(userInfo));

  // this is for the filter
  const handleFilterChange = (event) => {
    const inputValue = event.target.value;
    setFilterDesignation(inputValue);
  
    if (inputValue) {
      const filtered = services.filter((item) =>
        item.petName.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      // No search query, display the original data
      setFilteredData(services);
    }
  };
  


  // this is for deleting the row
  const handleDelete = (index) => {
    // Copy the current data and filteredData arrays
    const newService = [...services];
    const newFilteredData = [...filteredData];

    // Remove the row at the specified index
    newService.splice(index, 1);
    newFilteredData.splice(index, 1);

    // Update the state with the new data
    setServices(newService);
    setFilteredData(newFilteredData);
    toast.success("Row has been deleted");

  };


  // this is for the edeting
  const handleEdit = (index) => {
    if (window.confirm('Are you update you want to edit this row?')) {
      setEditIndex(index);
      setEditedRow(filteredData[index]);
    }
  };

// for saving data
  const handleSave = () => {
    if (editIndex !== -1) {
      // Copy the current data and filteredData arrays
      const newData = [...services];
      const newFilteredData = [...filteredData];

      // Update the data with the changes made to the edited row
      newData[editIndex] = editedRow;
      newFilteredData[editIndex] = editedRow;

      // Reset edit mode
      setEditIndex(-1);

      // Update the state with the new data
      setServices(newData);
      setFilteredData(newFilteredData);
      toast.success("Row has been updated")
    }
  };


  // Function to handle changes in the edited row
  const handleEditChange = (field, value) => {
    // Update the edited row with the changes
    setEditedRow({
      ...editedRow,
      [field]: value,
    });
  };



  return (
    <>
      <div className='row container-fluid'  style={{ backgroundImage: `url(${vet})`, backgroundSize: 'cover' }}>
        <div className='col-2 border bg-black'>
          <Master />
        </div>
        <div className='col-10 mb-4'>
          <div className='container-fluid'>
            <div className=' d-flex justify-content-between border-bottom border-dark mt-2'>
              <div>
                <h4 className='fw-bold mt-3 text-white'>PET MANAGEMENT</h4>
              </div>
              <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                  <div className='me-4'>
                    <h4 className='fw-bold mt-3 text-white'>{localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).FullName}</h4>
                    <p className='text-end text-white fw-bold'>{localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).RoleName}</p>
                  </div>

                  <div className="dropdown">
                    <img src={vet} className='mt-3 rounded-circle  dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false" height="60px" width="60px" />
                    <ul className="dropdown-menu">
                      <a className="dropdown-item" href="/" onClick={HandleLogOut}>Log Out</a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=' d-flex mt-3 justify-content-between'>
              <h4 className='fw-bold text-white'>PET INFORMATION</h4>
              <button className="btn btn-light text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Pet Information</button>
            </div>
            <div className="card mt-4">
              <div className="card-body background rounded">
                <div className='p-2'>
                  <h5 className="card-title">What are your looking for?</h5>
                  <div className="d-flex justify-content-between form-inputs">
                    <input
                      className="form-control w-25 mt-2"
                      type="text"
                      placeholder="Search PetName..."
                      value={filterDesignation}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-body background rounded">
                <TableContainer component={Paper}>
                  <Table stickyHeader sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                      <TableRow>
                        {headersName.map((item, index) => (
                          <TableCell
                            key={index}
                            align="left"
                            style={{ minWidth: 170, fontWeight: 'bold' }}
                          >
                            {item}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData  &&
                        (rowsPerPage > 0
                          ? filteredData .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          : filteredData 
                        ).map((item, index) => (
                          <TableRow key={index}>
                            <TableCell style={{ width: 260 }} align="left">
                              {editIndex === index ? (
                                <input
                                  type="text"
                                  value={editedRow.petName}
                                  onChange={(e) => handleEditChange('petName', e.target.value)}
                                />
                              ) : (
                                item.petName
                              )}
                            </TableCell>
                            <TableCell style={{ width: 360 }} align="left">
                              {editIndex === index ? (
                                <input
                                  type="text"
                                  value={editedRow.customerName}
                                  onChange={(e) => handleEditChange('customerName', e.target.value)}
                                />
                              ) : (
                                item.customerName
                              )}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="left">
                              {editIndex === index ? (
                                <input
                                  type="text"
                                  value={editedRow.email}
                                  onChange={(e) => handleEditChange('email', e.target.value)}
                                />
                              ) : (
                                item.email
                              )}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="left">
                              {editIndex === index ? (
                                <div className="d-flex justify-content-start">
                                  <i className="fa-solid fa-floppy-disk fa-2x" onClick={handleSave}></i>
                                </div>
                              ) : (
                                <div className="d-flex justify-content-start">
                                  <img className="me-3" src={editing} onClick={() => handleEdit(index)} />
                                  <img src={deleting} onClick={() => handleDelete(index)} />
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>

                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                          colSpan={5}
                          count={services ? services.length : 0}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: {
                              'aria-label': 'rows per page',
                            },
                            native: true,
                          }}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                          ActionsComponent={CustomPagination}
                        />
                      </TableRow>
                    </TableFooter>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PetInfoModal addService={addService} />
      <ToastContainer />
    </>
  )
}

export default PetInformation