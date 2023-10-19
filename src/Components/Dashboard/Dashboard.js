import React, { useState } from 'react';
import vet from '../Images/vet.jpg'
import Master from '../Master/Master';
import social from '../Images/SocialPeople.png'


// Clear user-related data from local storage
const HandleLogOut = () => {
  localStorage.removeItem('userInfo');
};


// created UserInfo
const userInfo = {
  FullName: 'Subham Rawat',
  RoleName: 'Admin',
};

// Store user information in localStorage
localStorage.setItem('userInfo', JSON.stringify(userInfo));





function Dashboard() {

  const [data, setData] = useState("")


  const petInformation = [
    {
      petName: "Buddy",
      customerName: "John Doe",
      email: "john@example.com",
      age: 5,
    },
    {
      petName: "Fluffy",
      customerName: "Jane Smith",
      email: "jane@example.com",
      age: 12,
    },
    {
      petName: "Fido",
      customerName: "Alice Johnson",
      email: "alice@example.com",
      age: 13,
    },
    {
      petName: "Whiskers",
      customerName: "Bob Wilson",
      email: "bob@example.com",
      age: 7,
    },
    {
      petName: "Rex",
      customerName: "Emily Brown",
      email: "emily@example.com",
      age: 2,
    },
    {
      petName: "Luna",
      customerName: "Michael Davis",
      email: "michael@example.com",
      age: 6,
    }
  ]


  const availableServices = [
    { ServiceName: "Pet Examination", Prices: 40 },
    { ServiceName: "Vaccinations", Prices: 25 },
    { ServiceName: "Dental Cleaning", Prices: 60 },
    { ServiceName: "Spaying/Neutering", Prices: 80 },
    { ServiceName: "X-Rays", Prices: 70 },
    { ServiceName: "Microchipping", Prices: 35 },
    { ServiceName: "Basic Checkup", Prices: 30 },
    { ServiceName: "Flea and Tick Treatment", Prices: 20 },
    { ServiceName: "Wound Dressing", Prices: 15 },
    { ServiceName: "Lab Tests", Prices: 55 }]



  const customerInformation = [
    {
      petName: "Buddy",
      species: "Dog",
      name: "John Smith",
      contactNumber: "555-555-5555"
    },
    {
      petName: "Whiskers",
      species: "Cat",
      name: "Alice Johnson",
      contactNumber: "555-123-4567"
    },
    {
      petName: "Hopper",
      species: "Rabbit",
      name: "Emily Davis",
      contactNumber: "555-789-1234"
    },
    {
      petName: "Mittens",
      species: "Cat",
      name: "Robert Wilson",
      contactNumber: "555-987-6543"
    },
    {
      petName: "Rocky",
      species: "Hamster",
      name: "Sarah Brown",
      contactNumber: "555-456-7890"
    }
  ];


  return (

    <div className='row container-fluid '>
      <div className='col-2 border   bg-black' >
        <Master />
      </div>
      <div className='col-10 container-fluid' style={{ backgroundImage: `url(${vet})`, backgroundSize: 'cover' }}>
        <div className=' d-flex justify-content-between border-bottom border-dark mt-2'>
          <div>
            <h4 className='fw-bold mt-3 text-white'>DASHBOARD</h4>
          </div>
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <div className='me-4'>
                <h4 className='fw-bold mt-3 text-white'>{localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).FullName}</h4>
                <p className='text-end text-white fw-bold'>{localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).RoleName}</p>
              </div>
              <div className="dropdown">
                <img src={vet} className='mt-3 rounded-circle dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false" height="60px" width="60px" />
                <ul className="dropdown-menu">
                  <a className="dropdown-item" href="/" onClick={HandleLogOut}>
                    Log Out
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-3 position-relative'>
          <div className="card mb-3 p-2 text-white" id="dash" >
            <div className="row g-0">
              <div className="col-md-9 ">
                <div className="card-body">
                  <h5 className="card-title">Hello {localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).FullName}!</h5>
                  <p className="card-text">Today you have 9 new Pet Registrations.</p>
                  <p className="card-text mb-3"><button className='btn btn-light'>More</button></p>
                </div>
              </div>

              <div className="col-md-3 position-absolute">
                <img src={social} className="" height="293px" />
              </div>
            </div>
          </div>
        </div>
        {/* Data section */}
        <div className="d-flex mt-4 ">
          <div className="card w-100 me-4 border">
            <div className=" d-flex justify-content-between card-body background rounded ">
              <div className='p-2'>
                <h4 className="card-title fw-bold">CUSTOMER INFORMATION</h4>
              </div>
              <div>
                {/* <img src={birthday} /> */}
              </div>
            </div>
            <div className="tbl-content p-3">
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th >No.</th>
                    <th>Name</th>
                    <th className='ms-5'>PetName</th>
                    <th>Species</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {customerInformation.slice(0, 5).map((service, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{service.name}</td>
                      <td>{service.petName}</td>
                      <td>{service.species}</td>
                      <td>{service.contactNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card w-100">
            <div className="d-flex justify-content-between card-body background rounded">
              <div className='p-2'><h4 className="card-title fw-bold">AVAILABLE SERVICES</h4>
              </div>
              <div>
                {/* <img src={anniversary} /> */}
              </div>
            </div>
            <div className="p-3">
              <table className="table table-striped table-hover">
                <thead >
                  <tr>
                    <th>No.</th>
                    <th>Service Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {availableServices.slice(0, 5).map((service, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{service.ServiceName}</td>
                      <td>${service.Prices}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
        {/* section 2 */}
        <div className="mt-4 ">
          <div className="card w-100 me-4">
            <div className="d-flex justify-content-between card-body background rounded">
              <div className='p-2'>
                <h4 className="card-title fw-bold">PET RECORDS</h4>
              </div>
              <div>
                {/* <img src={birthday} /> */}
              </div>
            </div>
            <div className="p-3">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th >No.</th>
                    <th className='ms-5'>PetName</th>
                    <th>CustomerName</th>
                    <th>Email</th>
                    <th>PetAge</th>
                  </tr>
                </thead>
                <tbody>
                  {petInformation.slice(0, 5).map((service, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{service.petName}</td>
                      <td>{service.customerName}</td>
                      <td>{service.email}</td>
                      <td>{service.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default Dashboard;
