import React, { useState, useEffect } from 'react'
import './Profile.css'
import { useNavigate, useParams } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'
import axios from 'axios'
import Proimg from '../../assests/proimg.png'
import ProfileInfo from '../ProfileInfo'
import PersonalInfo from '../modal/Personalinfopopup'
import Addresspop from '../modal/Addresspop'
import Bankpopup from '../modal/Bankpopup'
import Educationpopup from '../modal/Educationpopup'
import Familypopup from '../modal/Familypopup'
import Experiencepopup from '../modal/Experiencepopup'
import Languagepopup from '../modal/Languagepopup'
import Emergencypopup from '../modal/Emergencypopup'

export default function Profile() {

    const [click, setClick] = useState(false);
    const [pclick, psetClick] = useState(false);
    const [addClick, setAddClick] = useState(false);
    const [bankpop, setBankpopup] = useState(false);
    const [edupop, setEduPop] = useState(false);
    const [langpop, setLangpopup] = useState(false);
    const [exppop, setExppopup] = useState(false);
    const [emerpopup, setEmerpop] = useState(false);
    const [familypop, setFamilypopup] = useState(false);

    let { id } = useParams()
    const [employeedetail, setEmployeedetail] = useState([]);
    const [image, setImage] = useState(null)
    let navigate = useNavigate()
    useEffect(() => {
        getEmployeList()
    }, []);

    // onclick function
    const profileDetail = (public_id) => {
        console.log(public_id)
        navigate(`/profile/${public_id}`)

    }
    // fetch api
    const getEmployeList = () => {
        let url = process.env.REACT_APP_BASEURL + `employee/${id}/`
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
                "Authorization": "Bearer " + '6160b016c6c20ad11a915fc97a6f21d4a252a408acfbfb30f245be0e560da6764942c23da7a6b64c1cb37907def338621af493cee41ceaa2b619dad37324b5a0ebed8fd75f0a2ed44204b56ebbd8833f18010044f2f8683'
            }
        };
        axios.get(url, config)
            .then(res => {
                setEmployeedetail(res.data.data)
                setImage(res.data.data.avatar)
                console.log(res.data.data)
            }
            ).catch(err => {

            })
    }
    return (
        <div >
        <div className="container">
            <div className="row col-12">
                    <div className='col-3  '><h2>Profile </h2></div>
                    <div className=''><h4 >Dashboard<span className='text-muted'><span> / </span>Profile </span></h4></div>

            </div>
        </div>

            <div className='container ' style={{ backgroundColor: "#F7F7F7" }}>
                <div className='row '>
                    {/* <div className='col h3book  pt-2'><h2>Profile </h2></div> */}
                </div>
                {/* <div className='b3medium'><h4 >Dashboard<span className='text-muted'><span> / </span>Profile </span></h4></div> */}
                <div className='col'>
                    <div className="card  card-box mb-3 " >
                        <div className="row ">
                            <div className=" col mt-5 profile_img">
                                {(image == '' || image == null) ?
                                    <img src={require("../../assests/avatar.png")} alt="logo" width="70px" height="70px" className='mt-2 mr-2' style={{ borderRadius: "50%" }}></img> :
                                    <img src={image} alt="logo" width="70px" height="70px" className='mt-3 mr-1' style={{ borderRadius: "50%" }}></img>
                                }
                            </div>
                            <div className="col-md-10">
                                <div className="card-body  row">
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title git add . pb-0 pt-0 h2bold"><b>John Doe</b></h5>
                                        <span  >
                                            <button onClick={() => setClick(true)} className='penbtn  md:mx-4 md:ms-5 sm:ms-5'><FaPen className='pen'></FaPen>
                                            </button>
                                        </span>
                                        {
                                            click && <ProfileInfo closeModal={setClick} />
                                        }
                                    </div>
                                    <div className='card-text  col wrapper_1'>
                                        <ul className='row list-unstyled pt-2 '>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Designation  :</li><li className="col-sm-8 c2book text-gry">{employeedetail.designation ? <span>{employeedetail.designation}</span> : "N/A"}</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Department   :</li><li className="col-sm-8  c2book text-gry"> UI/UX Design Team</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Employee ID  :</li><li className="col-sm-8 c2book text-gry"> {employeedetail.emp_id ? <span>{employeedetail.emp_id}</span> : "N/A"}</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Date of Join :</li><li className="col-sm-8 c2book text-gry">{employeedetail.date_of_joining ? <span>{employeedetail.date_of_joining}</span> : "N/A"}</li>
                                        </ul>
                                    </div>
                                    <div className='card-text col'>
                                        <ul className='row list-unstyled pt-2'>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Phone     : </li><li className="col-sm-8 c2book text-blue">{employeedetail.mobile_no ? <span>{employeedetail.mobile_no}</span> : "N/A"}</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Email     : </li><li className="col-sm-8 c2book text-blue">{employeedetail.email ? <span>{employeedetail.email}</span> : "N/A"}</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Birthday  : </li><li className="col-sm-8 c2book text-gry">{employeedetail.date_of_birth ? <span>{employeedetail.date_of_birth}</span> : "N/A"}</li>
                                            <li className="col-sm-4 c1book text-content pb-0 mt-1">Gender    :</li><li className="col-sm-8 c2book text-gry">{employeedetail.gender ? <span>{employeedetail.gender}</span> : "N/A"}</li>
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
                                                <span className=' col-1 '><button onClick={() => psetClick(true)} className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                                {
                                                    pclick && <PersonalInfo closeModal={psetClick} />
                                                }
                                            </div>
                                            <div className='card-text col '>
                                                <ul className='row list-unstyled'>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">UAN number     </li><li className="col-6 col-md-4 c2book text-gry">  9876543210</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">ESIC number     </li><li className="col-6 col-md-4 c2book text-gry">  9876543210</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Tel             </li><li className="col-6 col-md-4 c2book text-blue"> 9876543210</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Nationality    </li><li className="col-6 col-md-4 c2book text-gry">  Indian</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Religion       </li><li className="col-6 col-md-4 c2book text-gry">  Christian</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Marital status  </li><li className="col-6 col-md-4 c2book text-gry"> Married</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Aadhar card     </li><li className="col-6 col-md-4 c2book text-gry"> 4588 5858 9696</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Pan card        </li><li className="col-6 col-md-4 c2book text-gry"> DVJPP8778L</li>
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
                                                <span className='col-1'><button onClick={() => setBankpopup(true)} className='penbtn mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                                {
                                                    bankpop && <Bankpopup closeModal={setBankpopup} />
                                                }
                                            </div>
                                            <div className='card-text col '>
                                                <ul className='row list-unstyled'>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Name as in Bank  </li><li className="col-6 col-md-4 c2book text-gry"> ICICI Bank</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Bank Name        </li><li className="col-6 col-md-4 c2book text-gry"> 159843014641</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">IFSC Code        </li><li className="col-6 col-md-4 c2book text-gry"> ICI24504</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Bank account no   </li><li className="col-6 col-md-4 c2book text-gry">159843014641</li>
                                                    <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mt-1">Bank Address     </li><li className="col-6 col-md-4 c2book text-gry"> ICI24504</li>
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
                                            <span className='col-1'><button onClick={() => setAddClick(true)} className='penbtn mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                            {
                                                addClick && <Addresspop closeModal={setAddClick} />
                                            }
                                        </div>
                                        <div className='card-text col '>
                                            <h6 className='b2book text-content'><b>Present Address</b></h6>
                                            <ul className='row list-unstyled'>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Flat/Door No    </li><li className="col-sm-8 c2book text-gry"> 105</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Floor            </li><li className="col-sm-8 c2book text-gry">1ST</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Premises Name    </li><li className="col-sm-8 c2book text-gry">Rituraaj Business center</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Landmark (near)  </li><li className="col-sm-8 c2book text-gry">UNO Business park building</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Dist, Pin Code   </li><li className="col-sm-8 c2book text-gry">452003</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">State           </li><li className="col-sm-8 c2book text-gry"> Madhya Pradesh</li>
                                            </ul>
                                        </div>
                                        <hr className='mt-4' />
                                        <div className='card-text col mt-2 '>
                                            <h6 className='b2book text-content mt-1'><b>Permanent Address</b></h6>
                                            <ul className='row list-unstyled'>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Flat/Door No    </li><li className="col-sm-8 c2book text-gry"> 105</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Floor            </li><li className="col-sm-8 c2book text-gry">1ST</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Premises Name    </li><li className="col-sm-8 c2book text-gry">Rituraaj Business center</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Landmark (near)  </li><li className="col-sm-8 c2book text-gry">UNO Business park building</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">Dist, Pin Code   </li><li className="col-sm-8 c2book text-gry">452003</li>
                                                <li className="col-sm-4 c1book text-content pb-0 mt-1">State           </li><li className="col-sm-8 c2book text-gry"> Madhya Pradesh</li>
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
                                            <span className='col-1'><button onClick={() => setEduPop(true)} className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                            {
                                                edupop && <Educationpopup closeModal={setEduPop} />
                                            }
                                        </div>
                                        <div className='card-text col '>
                                            <p className='c1book text-gry pb-0 mb-0 '>International College of Arts and Science (UG)</p>
                                            <p className='c1book text-gry pb-0 mb-0 '>Bsc Computer Science</p>
                                            <p><small className=' c3book mute-gry pb-0 mb-0 '>2000 - 2003</small></p>
                                            <p className="c1book pb-0 mb-0  text-content">International College of Arts and Science (PG)</p>
                                            <p className='c1book text-gry pb-0 mb-0 '>Msc Computer Science</p>
                                            <p><small className=' c3book mute-gry pb-0 mb-0 '>2000 - 2003</small></p>
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
                                            <span className='col-1'><button onClick={() => setFamilypopup(true)} className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                            {
                                                familypop && <Familypopup closeModal={setFamilypopup} />
                                            }
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
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                            <span className='col-1'><button onClick={() => setExppopup(true)} className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                            {
                                                exppop && <Experiencepopup closeModal={setExppopup} />
                                            }
                                        </div>
                                        <div className='card-text col '>
                                            <p className='pb-0 mb-0 text-gry c1book'>Web Designer at Zen Corporation</p>
                                            <p className='pb-0 mb-0 text-gry  '><small style={{ fontSize: "11px", lineHeight: "16px" }}>Jan 2013 - Present (5 years 2 months)</small></p>
                                            <p className='pb-0 mb-0 text-gry c1book'>Web Designer at Ron-tech</p>
                                            <p className='pb-0 mb-0 text-gry  '><small style={{ fontSize: "11px", lineHeight: "16px" }}>Jan 2013 - Present (5 years 2 months)</small></p>
                                            <p className='pb-0 mb-0 text-gry c1book'>Jan 2013 - Present (5 years 2 months)</p>
                                            <p className='pb-0 mb-0 text-gry  '><small style={{ fontSize: "11px", lineHeight: "16px" }}>Jan 2013 - Present (5 years 2 months)</small></p>

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
                                            <span className='col-1'><button onClick={() => setLangpopup(true)} className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                            {
                                                langpop && <Languagepopup closeModal={setLangpopup} />
                                            }
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
                                                        <tr>
                                                            <td className='c1book text-gry pb-0 mb-0 px-4' >English</td>
                                                            <td className='c1book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                            <td className='c2book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                            <td className='c2book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='c1book text-gry pb-0 mb-0 px-4' >Hindi</td>
                                                            <td className='c1book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                            <td className='c2book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                            <td className='c2book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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
                                            <span className='col-1'><button onClick={() => setEmerpop(true)} className='penbtn  mx-5 ms-4'><FaPen className='pen'></FaPen></button></span>
                                            {
                                                emerpopup && <Emergencypopup closeModal={setEmerpop} />
                                            }
                                        </div> <div className='card-text col '>
                                            <h6 className='c2medium text-content '>Contact 1</h6>
                                            <ul className='row list-unstyled'>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Name    </li><li className="col-6 col-md-4 c2book text-gry"> John Doe</li>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Relationship           </li><li className="col-6 col-md-4 c2book text-gry">Father</li>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Phone    </li><li className="col-6 col-md-4  c2book text-gry">9876543210, 9876543210</li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className='card-text col '>
                                            <h6 className='c2medium text-content'>Contact 2</h6>
                                            <ul className='row list-unstyled'>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Name    </li><li className="col-6 col-md-4 c2book text-gry"> John Doe</li>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Relationship           </li><li className="col-6 col-md-4 c2book text-gry">Father</li>
                                                <li className="col-12 col-sm-6 col-md-6 c1book text-content pb-0 mb-0">Phone    </li><li className="col-6 col-md-4 c2book text-gry">9876543210, 9876543210</li>
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
