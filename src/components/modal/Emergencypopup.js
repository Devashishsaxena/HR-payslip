import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
// import './modal/Modal.css';
const Emergencypopup = ({ closeModal }) => {
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
      <div className=" mt-1 bg-white sticky-top overflow-hidden me-1">
            <div className="text-end mt-0 my-0">
              <span>
                <div className=" pt-1 pe-1" onClick={() => closeModal(false)}>
                  <MdCancel></MdCancel>
                </div>
              </span>
              <div>
              <p className="h3medium mt-0 my-0 mx-auto text-center">Emergency Contacts</p>
            </div>
            </div>
          </div>
        <Modal.Body className="bg-white rounded" style={{height: "405px"}}>
          
          <div className="container card mt-0 mb-2">
            <div className="row">
              <div className="mt-0"></div>
              <div className="col-12 mt-0 d-flex justify-content-center">
                <div className="mt-0 pt-0">
                  <form onSubmit={handleSubmit} className="">
                    <div className="container position-relative  ">
                      <div className="row mt-4 ">
                        <p className="b3medium mb-0 mt-0">Primary Contacts</p>
                         <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Name
                            <span className="text-danger">*</span>
                          </lable> 
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              name="fullName"
                              value={formValues.fullName}
                              onChange={handleChange}
                              placeholder="Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.fullName}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Relationship<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              name="employeeID"
                              value={formValues.employeeID}
                              onChange={handleChange}
                              placeholder="Relationship"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.employeeID}
                          </span>
                        </div>
                        <div class="w-100"></div>

                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Phone 1
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              name="Bank Account No"
                              onChange={handleChange}
                              placeholder="Phone"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.birthday}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Phone 2<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              onChange={handleChange}
                              placeholder="Phone 2"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
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
                  <form onSubmit={handleSubmit} className="">
                    <div className="container position-relative  ">
                      <div className="row mt-4">
                      <p className="b3medium mb-0 mt-0">Primary Contacts</p>
                         <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Name
                            <span className="text-danger">*</span>
                          </lable> 
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              name="fullName"
                              value={formValues.fullName}
                              onChange={handleChange}
                              placeholder="Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.fullName}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Relationship<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              name="employeeID"
                              value={formValues.employeeID}
                              onChange={handleChange}
                              placeholder="Relationship"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.employeeID}
                          </span>
                        </div>
                        <div class="w-100"></div>

                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Phone 1
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              name="Bank Account No"
                              onChange={handleChange}
                              placeholder="Phone"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.birthday}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Phone 2<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              onChange={handleChange}
                              placeholder="Phone 2"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
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
        <div className="container mt-1 mb-1 pt-3 pb-2 bg-white sticky-bottom">
            <div className="row">
              <div className="col text-center ">
                <button
                  type="submit"
                  class="btn rounded-pill px-5 text-white"
                  style={{ background: "#FF9B44", border: "#FF9B44" ,width:"200px"}}
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

export default Emergencypopup;



