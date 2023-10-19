import React, { useState } from 'react'


function ServiceModal({ addService }) {

  
    const [newService, setNewService] = useState({
        ServiceName: "",
        Prices: 0,
    });

    const handleServiceChange = (e) => {
        const { name, value } = e.target;
        setNewService({ ...newService, [name]: value });
    };

    const addServiceToA1 = () => {
        addService(newService)
    };

    return (
        <>
            {/* // <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3">
                        <div className="modal-body">
                            <form>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Service Name</label>
                                    <input type="email" className="form-control"
                                        name="ServiceName"
                                        value={newService.ServiceName}
                                        onChange={handleServiceChange} aria-describedby="emailHelp" placeholder='Please enter your ServiceName' />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">$Prices</label>
                                    <input type="number" className="form-control" aria-describedby="emailHelp"
                                        name="Prices"
                                        value={newService.Prices}
                                        onChange={handleServiceChange} placeholder='Please enter the Price' />
                                </div>
                            </form>
                        </div>
                        <div className=" d-flex justify-content-around">
                            <button type="submit" className="btn btn-Light text-white w-25 border" data-bs-dismiss="modal" style={{ backgroundColor: '#C61C66' }} onClick={addServiceToA1}>Add</button>
                            <button type="button" className="btn btn-light w-25 border" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default ServiceModal;