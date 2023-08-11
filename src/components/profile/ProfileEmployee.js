import React from 'react'
import './Profile.css'
import Proimg from "../../assests/proimg.png"
import { FaPen } from 'react-icons/fa'

export default function ProfileEmployee() {
    return (
        <div >
            <div className='container-fluid' style={{ backgroundColor: "#F7F7F7" }}>
                <div className='row col-12 '>
                    <div className='col h3book  pt-2'><h2>Profile </h2></div>
                </div>
                <div className='b3medium'><h4 >Dashboard<span className='text-muted'><span> / </span>Profile </span></h4></div>
                <div className='col'>
                    <div className="card  card-box mb-3 " >
                        <div className="row ">
                            <div className=" col mt-5 profile_img">
                                <img src={Proimg} alt="..." className='image-fluid ps-5' />
                            </div>
                            <div className="col-md-10">
                                <div className="card-body  row">
                                    <div className='row'>
                                        <h5 className="card-title col-11 d-flex pb-0 pt-0 h2bold"><b>John Doe</b></h5>
                                        <span className='col-1 ' ><button className='penbtn media-icon '><FaPen className='pen'></FaPen></button></span>
                                    </div>
                                    <div className='card-text  col wrapper_1'>
                                        <ul className='row list-unstyled pt-2 '>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Designation  :</li><li className="col-sm-8 c2book text-gry">Web Designer</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Department   :</li><li className="col-sm-8  c2book text-gry"> UI/UX Design Team</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Employee ID  :</li><li className="col-sm-8 c2book text-gry"> TR0007</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Date of Join :</li><li className="col-sm-8 c2book text-gry"> 1st Jan 2021</li>
                                        </ul>
                                    </div>
                                    <div className='card-text col'>
                                        <ul className='row list-unstyled pt-2'>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Phone     : </li><li className="col-sm-8 c2book text-blue">9876543210</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Email     : </li><li className="col-sm-8 c2book text-blue">johndoe@example.com</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Birthday  : </li><li className="col-sm-8 c2book text-gry">24th July</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Gender    :</li><li className="col-sm-8 c2book text-gry"> Male</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 d-flex'>
                            <div className='flex-fill'>
                                <div className="card card-box  pt-0 " >
                                    <div className="row pb-0">
                                        <div className="card-body ps-4 row">
                                            <div className='row'>
                                                <h5 className="card-title col pb-2 pt-0 b1bold text-content" ><b>Personal Informations</b></h5>
                                                <span className=' col-1 '><button className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                            </div>
                                            <div className='card-text col '>
                                                <ul className='row list-unstyled'>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">UAN number     </li><li className="col-6 col-md-4 c2book text-gry">  N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">ESIC number     </li><li className="col-6 col-md-4 c2book text-gry">  N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Tel             </li><li className="col-6 col-md-4 c2book text-gry"> N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Nationality    </li><li className="col-6 col-md-4 c2book text-gry">  N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Religion       </li><li className="col-6 col-md-4 c2book text-gry">  N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Marital status  </li><li className="col-6 col-md-4 c2book text-gry"> N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Aadhar card     </li><li className="col-6 col-md-4 c2book text-gry"> N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Pan card        </li><li className="col-6 col-md-4 c2book text-gry"> N/A</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="card mb-3 card-box pt-0" >
                                    <div className="row pb-0">
                                        <div className="card-body ps-4 row">
                                            <div className='row'>
                                                <h5 className="card-title col pb-2 pt-0 b1bold text-content" ><b>Bank information</b></h5>
                                                <span className='col-1'><button className='penbtn mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                            </div>
                                            <div className='card-text col '>
                                                <ul className='row list-unstyled'>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Name as in Bank  </li><li className="col-6 col-md-4 c2book text-gry"> N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Bank Name        </li><li className="col-6 col-md-4 c2book text-gry"> N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">IFSC Code        </li><li className="col-6 col-md-4 c2book text-gry"> N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Bank account no   </li><li className="col-6 col-md-4 c2book text-gry">N/A</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Bank Address     </li><li className="col-6 col-md-4 c2book text-gry"> N/A</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 d-flex'>
                            <div className="card  mb-3 flex-fill card-box pt-0" >
                                <div className="row pb-0">
                                    <div className="card-body ps-4 row">
                                        <div className='row'>
                                            <h5 className="card-title col py-2 pb-2 pt-0 b1bold text-content" > <b>Address</b></h5>
                                            <span className='col-1'><button className='penbtn mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                        </div>
                                        <div className='card-text col '>
                                            <h6 className='b2book text-content'><b>Present Address</b></h6>
                                            <ul className='row list-unstyled'>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Flat/Door No    </li><li className="col-sm-8 c2book text-gry"> N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Floor            </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Premises Name    </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Landmark (near)  </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Dist, Pin Code   </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">State           </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                            </ul>
                                        </div>
                                        <hr className='mt-4' />
                                        <div className='card-text col mt-2 '>
                                            <h6 className='b2book text-content mt-1'><b>Permanent Address</b></h6>
                                            <ul className='row list-unstyled'>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Flat/Door No    </li><li className="col-sm-8 c2book text-gry"> N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Floor            </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Premises Name    </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Landmark (near)  </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Dist, Pin Code   </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">State           </li><li className="col-sm-8 c2book text-gry">N/A</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-6 d-flex'>
                            <div className="card mb-3  card-box flex-fill" >
                                <div className="row ">
                                    <div className="card-body ps-4 row">
                                        <div className='row'>
                                            <h5 className="card-title col pb-2 pt-0 b1bold text-content" >Education Informations</h5>
                                            <span className='col-1'><button className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                        </div>
                                        <div className='card-text col text-center pt-5'>
                                            <p><small className=' c1book text-gry  pb-0 mb-0'>No Record Found</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 d-flex'>
                            <div className="card mb-3  card-box flex-fill" >
                                <div className="row">
                                    <div className="card-body ps-4 row">
                                        <div className='row'>
                                            <h5 className="card-title col pb-2 pt-0 b1bold text-content" ><b>Family Informations</b></h5>
                                            <span className='col-1'><button className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                        </div>
                                        <div className='card-text col '>
                                            <div className='table-responsive '>                                                <table className="table  ">
                                                <thead className='border-dark'>
                                                    <tr>
                                                        <th className='c1book text-content pb-0 mb-0 '>Name</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Relationship</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Date of Birth</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Occupation</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Phone</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                            </div>
                                            <div className='card-text col text-center pt-4'>
                                                <p><small className=' c1book text-gry  pb-0 mb-0'>No Record Found</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 d-flex'>
                            <div className="card mb-3 card-box flex-fill" >
                                <div className="row ">
                                    <div className="card-body ps-4 row">
                                        <div className='row'>
                                            <h5 className="card-title col pb-2 pt-0 b1bold text-content" ><b>Experience</b></h5>
                                            <span className='col-1'><button className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                        </div>
                                        <div className='card-text col text-center pt-5'>
                                            <p><small className=' c1book text-gry  pb-0 mb-0'>No Record Found</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 d-flex'>
                            <div className="card mb-3  card-box flex-fill" >
                                <div className="row ">
                                    <div className="card-body ps-4 row">
                                        <div className='row'>
                                            <h5 className="card-title col pb-2 pt-0 b1bold text-content" ><b>Languages Known</b></h5>
                                            <span className='col-1'><button className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                        </div>
                                        <div className='card-text col '>
                                            <div className='table-responsive'>
                                                <table className="table">
                                                    <thead className='border-dark'>
                                                        <tr>
                                                            <th className='c1book text-content px-4'>Languages</th>
                                                            <th className='c1book text-content px-4'>Read</th>
                                                            <th className='c1book text-content px-4'>Speak</th>
                                                            <th className='c1book text-content px-4'>Write</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='card-text col text-center pt-4'>
                                                <p><small className=' c1book text-gry  pb-0 mb-0'>No Record Found</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 d-flex'>
                            <div className="card mb-3 card-box flex-fill" >
                                <div className="row ">
                                    <div className="card-body ps-4 row">
                                        <div className='row'>
                                            <h5 className="card-title col pb-2 pt-0 b1bold text-content" > <b>Emergency Contact</b></h5>
                                            <span className='col-1'><button className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                        </div> <div className='card-text col '>
                                            <h6 className='c2medium text-content '>Contact 1</h6>
                                            <ul className='row list-unstyled'>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Name    </li><li className="col-6 col-md-4 c2book text-gry">N/A</li>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Relationship           </li><li className="col-6 col-md-4 c2book text-gry">N/A</li>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Phone    </li><li className="col-6 col-md-4  c2book text-gry">N/A</li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className='card-text col '>
                                            <h6 className='c2medium text-content'>Contact 2</h6>
                                            <ul className='row list-unstyled'>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Name    </li><li className="col-6 col-md-4 c2book text-gry">N/A</li>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Relationship           </li><li className="col-6 col-md-4 c2book text-gry">N/A</li>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Phone    </li><li className="col-6 col-md-4 c2book text-gry">N/A</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
