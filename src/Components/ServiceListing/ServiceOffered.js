import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Master from '../Master/Master'
import axios from 'axios'
import vet from '../Images/vet.jpg'
import editing from '../Images/edit.png'
import deleting from '../Images/delete.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import ServiceModal from '../Model/ServiceModal'

function ServiceOffered() {

  const [services, setServices] = useState([
      { ServiceName: "Pet Examination", Prices: 40 },
      { ServiceName: "Vaccinations", Prices: 25 },
      { ServiceName: "Dental Cleaning", Prices: 60 },
      { ServiceName: "Spaying/Neutering", Prices: 80 },
      { ServiceName: "X-Rays", Prices: 70 },
      { ServiceName: "Microchipping", Prices: 35 },
      { ServiceName: "Basic Checkup", Prices: 30 },
      { ServiceName: "Flea and Tick Treatment", Prices: 20 },
      { ServiceName: "Wound Dressing", Prices: 15 },
      { ServiceName: "Lab Tests", Prices: 55 },
      { ServiceName: "Grooming", Prices: 45 },
      { ServiceName: "Pet Boarding", Prices: 50 },
      { ServiceName: "Behavioral Consultation", Prices: 65 },
      { ServiceName: "Pet Microscopy", Prices: 75 },
      { ServiceName: "Emergency Care", Prices: 90 }
    ]);

    

  const addService = (newService) => {
    setServices([...services, newService]);
    console.log("services",services)
  };


  const [filteredData, setFilteredData] = useState(services);
  const [filterDesignation, setFilterDesignation] = useState("");

  const [editIndex, setEditIndex] = useState(-1);
  const [editedRow, setEditedRow] = useState({});

  const headersName = ["ServiceName", "$Prices", "Actions"];


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

  const HandleLogOut = () => {
    // Clear user-related data from local storage
    localStorage.removeItem('userInfo');
  };


  // After the user logs in or authentication
  const userInfo = {
    FullName: 'Subham Rawat',
    RoleName: 'Admin',
  };

  // Store user information in localStorage
  localStorage.setItem('userInfo', JSON.stringify(userInfo));


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
    toast.success("Row has been deleted")

  };

  const handleFilterChange = (event) => {
    const inputValue = event.target.value;
    setFilterDesignation(inputValue);
  
    if (inputValue) {
      const filtered = services.filter((item) =>
        item.ServiceName.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      // No search query, display the original data
      setFilteredData(services);
    }
  };


  // this is for the edeting
  const handleEdit = (index) => {
    if (window.confirm('Are you update you want to edit this row?')) {
      setEditIndex(index);
      setEditedRow(filteredData[index]);
    }
  };


  // for saving 
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
      <div className='row container-fluid' style={{ backgroundImage: `url(${vet})`, backgroundSize: 'cover' }}>
        <div className='col-2 border bg-black'>
          <Master />
        </div>
        <div className='col-10 mb-4' >
          <div className='container-fluid'>
            <div className=' d-flex justify-content-between border-bottom border-dark mt-2'>
              <div>
                <h4 className='fw-bold mt-3 text-white'>SERVICES</h4>
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
              <h4 className='fw-bold text-white'>SERVICE OFFERED</h4>
              <button className="btn btn-light text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Services</button>
            </div>
            <div className="card mt-4">
              <div className="card-body background rounded">
                <div className='p-2'>
                  <h5 className="card-title">What are your looking for?</h5>
                  <div className="d-flex justify-content-between form-inputs">
                    <input
                      className="form-control w-25 mt-2"
                      type="text"
                      placeholder="Search service..."
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
                      {filteredData && (rowsPerPage > 0
                        ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : filteredData
                      ).map((item, index) => (
                        <TableRow key={index}>                         
                          <TableCell style={{ width: 260 }} align="left">
                            {editIndex === index ? (
                              <input
                                type="text"
                                value={editedRow.ServiceName}
                                onChange={(e) => handleEditChange('ServiceName', e.target.value)}
                              />
                            ) : (
                              item.ServiceName
                            )}
                          </TableCell>
                          <TableCell style={{ width: 360 }} align="left">
                            {editIndex === index ? (
                              <input
                                type="text"
                                value={editedRow.Prices}
                                onChange={(e) => handleEditChange('Prices', e.target.value)}
                              />
                            ) : (
                              item.Prices
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
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
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
      <ServiceModal addService={addService} />
      <ToastContainer />
    </>
  )
}

export default ServiceOffered;