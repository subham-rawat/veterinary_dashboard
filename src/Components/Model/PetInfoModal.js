import React, { useState } from 'react';

function PetInfoModal({ addService }) {
    const [newService, setNewService] = useState({
        petName: "",
        customerName: "",
        email: "",
    });

    const handleServiceChange = (e) => {
        const { name, value } = e.target;
        setNewService({ ...newService, [name]: value });
    };

    const addServiceToA1 = () => {
        addService(newService);
    };

    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3">
                        <div className="modal-body">
                            <form>
                                <div className="mb-4">
                                    <label className="form-label t text-muted fw-bold">PetName</label>
                                    <input className="form-control" type="text" name="petName"
                                        value={newService.petName} placeholder='Please enter PetName' onChange={handleServiceChange} />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label t text-muted fw-bold">CustomerName</label>
                                    <input className="form-control" type="text"
                                        name="customerName"
                                        value={newService.customerName} placeholder='Please enter Customer Name' onChange={handleServiceChange} />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label t text-muted fw-bold">Email</label>
                                    <input className="form-control" name="email" type="text" value={newService.email} placeholder='Please enter Email' onChange={handleServiceChange} />
                                </div>
                            </form>
                        </div>
                        <div className="d-flex justify-content-around">
                            <button type="submit" className="btn btn-light text-white w-25"  data-bs-dismiss="modal" onClick={addServiceToA1}>Add</button>
                            <button type="button" className="btn btn-light w-25 border" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PetInfoModal;
