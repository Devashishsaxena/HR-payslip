
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
const Experiencepopup = ({ closeModal }) => {
    const initialValues = {
        fullName: "",
        employeeID: "",
        birthday: "",
        email: "",
        joiningDate: "",
        number: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        var mobilecheck = /^[0-9]{10}$/;
        if (!values.fullName) {
            errors.fullName = "Name is required";
        }
        if (!values.employeeID) {
            errors.employeeID = "EmployeeID is required";
        }
        if (!values.birthday) {
            errors.birthday = "Birthday is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email.";
        }
        if (!values.joiningDate) {
            errors.joiningDate = "Joining Date is required";
        }
        if (!values.number) {
            errors.number = "Number is required";
        } else if (!mobilecheck.test(values.number)) {
            errors.number = "This is not valid phone number.";
        }
        return errors;
    };

    return (
        <>
            <Modal show={true} size="lg">
                <div className=" mt-1 bg-white sticky-top overflow-hidden me-1 modal-content-header">
                    <div className="text-end mt-0 my-0">
                        <span>
                            <div className=" pt-1 pe-1" onClick={() => closeModal(false)}>
                                <MdCancel></MdCancel>
                            </div>
                        </span>
                        <div>
                            <p className="h3medium mt-0 my-0 mx-auto text-center">Experience Information</p>
                        </div>
                    </div>
                </div>
                <Modal.Body className="bg-white rounded" style={{ height: "405px" }}>

                    <div className="container card mt-0">
                        <div className="row">
                            <div className="mt-0"></div>
                            <div className="col-12 mt-0 d-flex justify-content-center">
                                <div className="mt-0 pt-0">
                                    <form onSubmit={handleSubmit}>
                                        <div className="container position-relative">
                                            <div className="row">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <p className="b3medium mt-2 mb-2">Experience Information</p>
                                                    <div className='me-3'>
                                                        <AiOutlineDelete size={20} style={{ 'color': '#FF9B44' }} />
                                                    </div>
                                                </div>
                                                <div>
                                                    
                                                </div>

                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Company Name
                                                        <span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="text"
                                                            class="form-control ps-1"
                                                            name="fullName"
                                                            value={formValues.fullName}
                                                            onChange={handleChange}
                                                            placeholder="Company Name"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </div>
                                                    <span className="text-danger">
                                                        {formErrors.fullName}
                                                    </span>
                                                </div>
                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Location<span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="text"
                                                            class="form-control ps-1"
                                                            name="employeeID"
                                                            value={formValues.employeeID}
                                                            onChange={handleChange}
                                                            placeholder="Location"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </div>
                                                    <span className="text-danger">
                                                        {formErrors.employeeID}
                                                    </span>
                                                </div>
                                                <div class="w-100"></div>
                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Job Position<span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="text"
                                                            class="form-control ps-1"
                                                            name="employeeID"
                                                            placeholder="Job Position"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </div>
                                                    <span className="text-danger">
                                                        {formErrors.employeeID}
                                                    </span>
                                                </div>
                                                <div className="col m-1">
                                                    <lable className="form-lable small mb-1">
                                                        Period To<span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="date"
                                                            class="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="w-100"></div>
                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Period To<span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="date"
                                                            class="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col m-1 mt-0"></div>
                                                <div class="w-100"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3 "></div>
                        </div>
                    </div>
                    <div className="container card mt-3">
                        <div className="row">
                            <div className="mt-0"></div>
                            <div className="col-12 mt-0 d-flex justify-content-center">
                                <div className="mt-0 pt-0">
                                    <form onSubmit={handleSubmit}>
                                        <div className="container position-relative  ">
                                            <div className="row">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <p className="b3medium mt-2 mb-0">Experience Information</p>
                                                    <div className='me-3 mt-2'>
                                                        <AiOutlineDelete size={20} style={{ 'color': '#FF9B44' }} />
                                                    </div>
                                                </div>
                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Company Name
                                                        <span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="text"
                                                            class="form-control ps-1"
                                                            name="fullName"
                                                            placeholder="Company Name"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </div>
                                                    <span className="text-danger">
                                                        {formErrors.fullName}
                                                    </span>
                                                </div>
                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Location<span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="text"
                                                            class="form-control ps-1"
                                                            name="employeeID"
                                                            placeholder="Location"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </div>
                                                    <span className="text-danger">
                                                        {formErrors.employeeID}
                                                    </span>
                                                </div>
                                                <div class="w-100"></div>

                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Job Position<span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="text"
                                                            class="form-control ps-1"
                                                            name="employeeID"
                                                            placeholder="Job Position"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </div>
                                                    <span className="text-danger">
                                                        {formErrors.employeeID}
                                                    </span>
                                                </div>
                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Period To<span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="date"
                                                            class="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="w-100"></div>
                                                <div className="col m-1 mt-0">
                                                    <lable className="form-lable small mb-1">
                                                        Period To<span className="text-danger">*</span>
                                                    </lable>
                                                    <div class="input-group mb-1">
                                                        <input
                                                            type="date"
                                                            class="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col m-1 mt-0"></div>
                                                <div class="w-100"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3 "></div>
                        </div>
                    </div>

                </Modal.Body>
                <div className="container mt-1 mb-1 pt-3 pb-2 bg-white sticky-bottom modal-content-footer">
                    <div className="row">
                        <div className="col text-center ">
                            <button style={{backgroundColor: '#DDDDDD' }} className='btn btn rounded-pill px-5 text-secondary text-center mx-4 mt-2 c2book '>
                                <AiOutlinePlus style={{ marginBottom: '4px' }} /> Add More
                            </button>
                            <button
                                type="submit"
                                class="btn rounded-pill px-5 text-white"
                                style={{ background: "#FF9B44", border: "#FF9B44", width: "200px" }}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Experiencepopup;




