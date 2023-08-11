import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
const Addresspop = ({ closeModal }) => {
  const initialValues = {
    flatno: '',
    premisesName: '',
    landMark: '',
    city: '',
    state: '',
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
    if (!values.flatno) {
      errors.flatno = "Please fill the flat-number!"
    }
    if (!values.premisesName) {
      errors.premisesName = "Please fill the premises name!"
    }
    if (!values.landMark) {
      errors.landMark = "Please fiil the landmark field!"
    }
    if (!values.city) {
      errors.city = "Please fill the city field!"
    }
    if (!values.state) {
      errors.state = "Please fill the state field!"
    }
    return errors;
  };
  return (
    <>
      <Modal
        className=" d-flex justify-content-between self-align-start rounded-2 mt-5"
        show={true}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="">
          <div className="mt-0 w-100 sticky-top overflow-hidden mt-1 bg-white modal-content-header">
            <div className="text-end mt-0 my-0">
              <span>
                <div
                  className="rounded-circle mt-0 pe-1"
                  onClick={() => closeModal(false)}
                >
                  <MdCancel></MdCancel>
                </div>
              </span>
              <p className="h3medium mt-0 my-0 text-center ">Address</p>
            </div>
          </div>

          <Modal.Body className="bg-white rounded " style={{ height: "450px" }}>
            <div className="container mt-0 ">
              <div className="row">
                <div className="col-12 mt-0 d-flex justify-content-center">
                  <div className="container position-relative overflow-hidden mt-0 pt-0">
                    <div className="container position-relative">
                      <div className="row mt-4">
                        <div className="card">
                          <p className="b1medium mb-0 mt-2">Current Address</p>
                          <div className="row mb-2">
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Flat/Door No
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="flatno"
                                  value={formValues.flatno}
                                  onChange={handleChange}
                                  placeholder="Flat/Door No"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.flatno}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Permises Name
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="premisesName"
                                  value={formValues.premisesName}
                                  onChange={handleChange}
                                  placeholder="Permises Name"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.premisesName}
                              </span>
                            </div>
                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Landmark<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="landmark"
                                  value={formValues.landMark}
                                  onChange={handleChange}
                                  placeholder="Landmark"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.landMark}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                City<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="city"
                                  value={formValues.city}
                                  onChange={handleChange}
                                  placeholder="City"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.city}
                              </span>
                            </div>
                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Pincoad<span className="text-danger">*</span>
                              </lable>
                              <select
                                class="form-select ps-1"
                                aria-label="Default select example"
                              >
                                <option selected>Pincoad</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                State
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name=" state"
                                  value={formValues.state}
                                  onChange={handleChange}
                                  placeholder=" State"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.state}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="card mt-4">
                          <p className="b1medium mb-0 mt-2">
                            Permanent Address
                          </p>
                          <div className="row mb-2">
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Flat/Door No
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="flatno"
                                  value={formValues.flatno}
                                  onChange={handleChange}
                                  placeholder="Flat/Door No"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.flatno}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Permises Name
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="premisesName"
                                  value={formValues.premisesName}
                                  onChange={handleChange}
                                  placeholder="Permises Name"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.premisesName}
                              </span>
                            </div>
                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Landmark<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="landmark"
                                  value={formValues.landmark}
                                  onChange={handleChange}
                                  placeholder="Landmark"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.landMark}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                City<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="city"
                                  value={formValues.city}
                                  onChange={handleChange}
                                  placeholder="City"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.city}
                              </span>
                            </div>
                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Pincoad<span className="text-danger">*</span>
                              </lable>
                              <select
                                class="form-select ps-1"
                                aria-label="Default select example"
                              >
                                <option selected>Pincoad</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                State
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="state"
                                  value={formValues.state}
                                  onChange={handleChange}
                                  placeholder=" State"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.state}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </Modal.Body>
          <div className="container sticky-bottom mb-1 pb-2 bg-white modal-content-footer">
            <div className="row">
              <div className="col text-center ">
                <button
                  type="submit"
                  class="btn rounded-pill px-5 text-white"
                  style={{ background: "#FF9B44", border: "#FF9B44" }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Addresspop;



