import React, { useState } from 'react'
import vet from '../Images/vet.jpg'
import { Link, Navigate } from 'react-router-dom'



export default function Master() {

    // Color change for all the subComponents.
    const [dashboardtextcolor, setDashboardTextColor] = useState({ color: 'white' });
    const [petInformationtextcolor, setPetInformationTextColor] = useState({ color: 'white' });
    const [servicelistingtextcolor, setServiceListingTextColor] = useState({ color: 'white' });

    // Activating Headers components
    const [activeButton, setActiveButton] = useState(null);


    const dashboard = () => {
        setDashboardTextColor({ color: 'white', fontWeight: 'bold', backgroundColor: "#C61C66", borderRadius: '10px', width: "142px" });
        setPetInformationTextColor({ color: 'black' });
        setServiceListingTextColor({ color: 'black' });
    };


    const petinformation = () => {
        setPetInformationTextColor({ color: 'white', fontWeight: 'bold', backgroundColor: "#C61C66", borderRadius: '10px', width: "142px" });
        setDashboardTextColor({ color: 'black' });
        setServiceListingTextColor({ color: 'black' });
    };

    const service = () => {
        setServiceListingTextColor({ color: 'white', fontWeight: 'bold', backgroundColor: "#C61C66", borderRadius: '10px', width: "142px" });
        setPetInformationTextColor({ color: 'black' });
        setDashboardTextColor({ color: 'black' });
    };


    const handleMaster = (id) => {
        if (activeButton === id) {
            setActiveButton(null);
        } else {
            setActiveButton(id);
            if (id === 1) {
            }
        }
    };


    return (

        <>
            <div className='mb-5 '>
                <div className='row'>
                    <div className='' >
                        <Link to="/dashboard">
                            <div className='d-flex mb-3 mt-4 '>
                                <img className='mt-2 bg-dark rounded-circle ms-5' src={vet} height="70px" width="70px" />
                            </div>
                        </Link>
                        <div className="row" >
                            <div className="" style={{ color: 'white' }}>
                                <div className="" >
                                    <ul className="nav align-items-sm-start" id="menu">
                                        <li>

                                            <ul className="collapse show nav flex-column" id="submenu1" data-bs-parent="#menu">

                                                <li className="d-flex mt-1" onMouseEnter={dashboard}   >
                                                    <i className="fa-solid fa-dog mt-2" style={{ color: '#9A1951' }} ></i>
                                                    <Link className='text-decoration-none' to="/dashboard">
                                                        <a href="#" className="nav-link px-0 ms-2 text-white fw-bold"> DASHBOARD</a>
                                                    </Link>
                                                </li>
                                                <li className="d-flex mt-1" onMouseEnter={petinformation} >
                                                    <i className="fa-solid fa-dog mt-2" style={{ color: '#9A1951' }} ></i>
                                                    <Link className='text-decoration-none' to="/petinformation">
                                                        <a href="#" className="nav-link px-0 ms-2 text-white fw-bold">PET INFORMATION</a>
                                                    </Link>
                                                </li>

                                                <li className="d-flex mt-1" onMouseEnter={service} >
                                                    <i className="fa-solid fa-dog mt-2" style={{ color: '#9A1951' }} ></i>
                                                    <Link className='text-decoration-none' to="/service">
                                                        <a href="#" className="nav-link px-0 ms-2 text-white fw-bold">SERVICES</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

