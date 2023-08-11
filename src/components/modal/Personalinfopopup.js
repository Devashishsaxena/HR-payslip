import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import "./Personalpopupinfo.css"
import { MdCancel } from "react-icons/md"
const PersonalInfo = ({ closeModal }) => {
    const initialValues = {uan : '', esci : '', phone : '', religion: '', aadhar: '', pancard : ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({
            ...formValues,
            [name] : value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors])  

    const validate = (values) => {
        const errors = {};
        const mobilecheck = /^[0-9]{10}$/;
        const twelveval = /^[0-9]{12}$/;
        const pan = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

        if(!values.uan){
            errors.uan = "UAN is requried!"
        } else if(!twelveval.test(values.uan)){
            errors.uan = "UAN is incorrect!";
        }
        if(!values.esci){
            errors.esci = "ESCI is requried!"
        } else if(!twelveval.test(values.esci)){
            errors.esci = "ESCI is incorrect!";
        }
        if(!values.phone){
            errors.phone = "Phone number is requried!"
        } else if(!mobilecheck.test(values.phone)){
            errors.phone = "Phone number is incorrect!";
        }
        if(!values.aadhar){
            errors.aadhar = "Aadhar card number is requried!"
        } else if(!twelveval.test(values.aadhar)){
            errors.aadhar = "Aadhar card number is incorrect!";
        }
        if(!values.pancard){
            errors.pancard = "Pancard number is requried!"
        } else if(!pan.test(values.pancard)){
            errors.pancard = "Pancard number is incorrect!";
        }
        return errors;
    }
    return (
      <>
        <Modal
          className="pe-2 pt-3 mt-3"
          style={{ paddingRight: "222px" }}
          show={true}
        >
          <Modal.Body
            className="bg-white rounded-2"
            style={{ width: "700px", height: "480px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 mt-0 d-flex justify-content-center">
                  <form onSubmit={handleSubmit}>
                    <div className="container-fluid sticky-top bg-white ">
                      <div className="row">
                        <div className=" col-9 text-end h3medium mb-3 mt-0">
                          <h3>Personal Information</h3>
                        </div>
                        <div className=" col-3 pe-0">
                          <div className="text-end">
                            <span>
                              <div
                                className="rounded "
                                style={{ cursor: "pointer" }}
                                onClick={() => closeModal(false)}
                              >
                                <MdCancel></MdCancel>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container ">
                      <div className="row">
                        <div className="col m-2">
                          <lable className="form-lable small mb-1">
                            UAN Number<span className="text-danger">*</span>
                          </lable>
                          <div className="input-group mb-1 col-12">
                            <input
                              type="text"
                              className="form-control ps-1"
                              placeholder="UAN Number"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="uan"
                              value={formValues.uan}
                              onChange={handleChange}
                            />
                          </div>
                          <span className="text-danger">{formErrors.uan}</span>
                        </div>
                        <div className="col m-2">
                          <lable className="form-lable small mb-1">
                            ESCI Number<span className="text-danger">*</span>
                          </lable>
                          <div className="input-group mb-1 col-12">
                            <input
                              type="text"
                              className="form-control col-12 ps-1"
                              placeholder="ESCI Number"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="esci"
                              value={formValues.esci}
                              onChange={handleChange}
                            />
                          </div>
                          <span className="text-danger">{formErrors.esci}</span>
                        </div>
                        <div class="w-100"></div>
                        <div className="col m-2">
                          <lable className="form-lable small mb-1">
                            Telephone Number
                            <span className="text-danger">*</span>
                          </lable>
                          <div className="input-group mb-1 ps-1">
                            <input
                              type="text"
                              className="form-control ps-1"
                              placeholder="Telephone Number"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="phone"
                              value={formValues.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.phone}
                          </span>
                        </div>
                        <div className="col m-2">
                          <lable className="form-lable small mb-1">
                            Maritial Status
                            <span className="text-danger">*</span>
                          </lable>

                          <select
                            className="form-select"
                            aria-label="Default select example"
                            placeholder="Maritial Status"
                            required
                            style={{ cursor: "pointer" }}
                          >
                            <option value="2">Male</option>
                            <option value="1">Female</option>
                            <option value="3">Trans</option>
                          </select>
                        </div>
                        <div class="w-100"></div>
                        <div className="col m-2">
                          <lable className="form-lable small mb-1">
                            Nationality<span className="text-danger">*</span>
                          </lable>

                          <select
                            className="form-select"
                            aria-label="Default select"
                            required
                            style={{ cursor: "pointer" }}
                          >
                            <option selected>Nationality</option>
                            <option value="1">Indian</option>
                            <option value="2">Pakistan</option>
                            <option value="3">Thailand</option>
                          </select>
                        </div>
                        <div className="col m-2">
                          <lable className="form-lable small mb-1">
                            Religion<span className="text-danger">*</span>
                          </lable>

                          <div className="input-group mb-1">
                            <input
                              type="text"
                              className="form-control ps-1"
                              placeholder="Religion"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="religion"
                            />
                          </div>
                        </div>
                        <div class="w-100"></div>
                        <div className="col m-2">
                          <lable className="form-lable small mb-1">
                            Aadhar Card Number
                            <span className="text-danger">*</span>
                          </lable>

                          <div className="input-group mb-1">
                            <input
                              type="text"
                              className="form-control ps-1"
                              placeholder="Aadhar Card Number"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="aadhar"
                              value={formValues.aadhar}
                              onChange={handleChange}
                            />
                          </div>
                          <span className="text-danger ">
                            {formErrors.aadhar}
                          </span>
                        </div>
                        <div className="col m-2">
                          <lable className="form-lable small mb-1">
                            Pan Card Number
                            <span className="text-danger">*</span>
                          </lable>

                          <div className="input-group mb-1">
                            <input
                              type="text"
                              className="form-control ps-1"
                              placeholder="Pan Card Number"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="pancard"
                              value={formValues.pancard}
                              onChange={handleChange}
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.pancard}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="container sticky-bottom bg-white">
                      <div className="row">
                        <div className="col text-center mt-2 pt-2">
                          <button
                            type="submit"
                            className="btn rounded-pill px-5 text-white"
                            style={{ background: "#FF9B44", border: "#FF9B44" }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default PersonalInfo