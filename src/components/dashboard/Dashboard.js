import React from 'react'
import DashboardCircle from "../../assests/img/DashboardCircle.svg"
import { GoPlus } from 'react-icons/go'

const Dashboard = () => {

  return (
    <>
      <div className='container-fluid'>
        <div className='row b3book align-item-center pt-4'>
          <div className='col h1book'><h2>Welcome Admin! </h2></div>
          <div className='col-auto float-end ms-auto mb-2'><button className='addemp c2book mt-2 font-weight-bold'><GoPlus ></GoPlus> Upload Attendance Sheet</button></div>
        </div>
        <div className='b3medium text-muted'><p>Dashboard</p></div>

      </div>

      <div className='container-fluid'>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 ">
            <div className="card">
              <div className="card-body">
                <div className="d-flex bd-highlight">
                  <div className="me-auto p-2 bd-highlight">
                    <img src={DashboardCircle} alt="DashboardCircle" />
                  </div>
                  <div className='d-flex flex-column'>
                    <h4 className=" bd-highlight">112</h4>
                    <p className=" bd-highlight">Total Employees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex bd-highlight">
                  <div className="me-auto p-2 bd-highlight">
                    <img src={DashboardCircle} alt="DashboardCircle" />
                  </div>
                  <div className='d-flex flex-column'>
                    <h4 className=" bd-highlight">44</h4>
                    <p className="bd-highlight">Active Employees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex bd-highlight">
                  <div className="me-auto p-2 bd-highlight">
                    <img src={DashboardCircle} alt="DashboardCircle" />
                  </div>
                  <div className='d-flex flex-column'>
                    <h4 className=" bd-highlight">37</h4>
                    <p className="bd-highlight">Inactive Employees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
