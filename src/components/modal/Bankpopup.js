import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
// import './modal/Modal.css';
const Bankpopup = ({ closeModal }) => {
  return (
    <>
      <Modal centered show={true} size="lg">
      <div className=" mt-1 bg-white sticky-top overflow-hidden me-1 modal-content-header">
          <div className="text-end mt-0 my-0">
            <span>
              <div className=" pt-1 pe-1" onClick={() => closeModal(false)}>
                <MdCancel></MdCancel>
              </div>
            </span>
            <div>
              <p className="h3medium mt-0 my-0 mx-auto text-center">
                Bank Details
              </p>
            </div>
          </div>
        </div>
        <Modal.Body
          className="bg-white rounded  "
          style={{ width: "", height: "300px", border: " 2px solid #EDEDED;" }}
        >
          {/* <div className=" bg-white sticky-top overflow-hidden">
            <div className="text-end mt-0 my-0">
              <span>
                <div className=" pt-1 pe-1" onClick={() => closeModal(false)}>
                  <MdCancel></MdCancel>
                </div>
              </span>
              <div>
                <p className="h3medium mt-0 my-0 mx-auto text-center">
                  Bank Details
                </p>
              </div>
            </div>
          </div> */}
          <div className="container mt-0">
            <div className="row">
              <div className="mt-0"></div>
              <div className="col-12 mt-0 d-flex justify-content-center">
                <div className="mt-0 pt-0">
                  <form className="">
                    <div className="container position-relative  ">
                      <div className="row mt-4">
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Name as in Bank
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Name as in Bank"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Bank Name<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Bank Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div class="w-100"></div>

                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Bank Account No
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Bank Account No"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            IFSC Code<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="IFSC Code"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div class="w-100"></div>

                        <div className="col-sm-6 m-1 w-50">
                          <lable className="form-lable small mb-1">
                            Branch Address<span className="text-danger">*</span>
                          </lable>
                          <input
                            type="text"
                            class="form-control ps-1"
                            placeholder="Branch Address"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <div className="container  mb-3 bg-white sticky-bottom modal-content-footer">
            <div className="row">
              <div className="col text-center">
                <button
                  type="submit"
                  class="btn rounded-pill px-5 text-white"
                  style={{
                    background: "#FF9B44",
                    border: "#FF9B44",
                    width: "200px",
                  }}
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

export default Bankpopup;
