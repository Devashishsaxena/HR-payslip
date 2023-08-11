import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai"
import { MdOutlineMail } from "react-icons/md"
import { IoCalendarOutline } from "react-icons/io5"
import { BiEditAlt } from "react-icons/bi"
import { CgNotes } from "react-icons/cg"
import { BsSliders } from "react-icons/bs"
import { FaUsers, FaBars, FaRegUser } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import "./Dashboard.css"
import "./switch.css"
import Logo from "../../assests/Logo.png"
import Dropdown from 'react-bootstrap/Dropdown';
import UserLogo from "../../assests/img/Rectangle.png"
import hamburger from "../../assests/img/hamburg.svg"

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <AiOutlineDashboard />
        },
        {
            path: "/employees",
            name: "Employees",
            icon: <FaUsers />
        },
        {
            path: "/sub-admin",
            name: "Sub Admin",
            icon: <FaRegUser />
        },
        {
            path: "/inbox",
            name: "Inbox",
            icon: <MdOutlineMail />
        },
        {
            path: "/events",
            name: "Events",
            icon: <IoCalendarOutline />
        },
        {
            path: "/web-contents",
            name: "Web Contents",
            icon: <FiEdit />
        },
        {
            path: "/custom-mail",
            name: "Custom Mail",
            icon: <BiEditAlt />
        },
        {
            path: "/hr-policy",
            name: "HR Policy",
            icon: <CgNotes />
        },
        {
            path: "/hr-configuration",
            name: "HR Configuration",
            icon: <BsSliders />
        },
    ]
    return (
        <div className="d-flex start">
            <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar">
                <div className="top_section">
                    {/* <h1 style={{display: isOpen ? "block" : "block"}} className="logo">
                        <img className="pt-1" src={Logo} style={{ width: "40px", height: "40px", }} alt="logo" />
                   </h1> */}
                    <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="bars pt-2 mt-1">
                        <img className="pt-0" src={Logo} style={{ width: "40px", height: "40px", }} alt="logo" />
                    </div>

                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{ textDecoration: "none" }}>
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

            <div >
                <nav className="navbar navbar-white bg-white d-flex justify-content-between sticky-top " style={{ height: "62px", width: isOpen ? "85vw" : "95vw" }}>
                    <div  className="bars">
                        <img className="pt-0" onClick={toggle} src={hamburger} style={{ width: "30px", height: "30px", }} alt="hamburger" />
                        {/* <FaBars onClick={toggle}/> */}
                        <h6 style={{ marginLeft: "10px", marginTop: "5px" }}>TechRadix Private Limited</h6>
                    </div>



                    <div className="bars" >
                        <div class="d-flex justify-content-end bd-highlight">
                            {/* Dark Mode Switch Button Start */}
                            <div class="p-2 bd-highlight">
                                <div className="container">
                                    <div className="switch-checkbox">
                                        <label className="switch">
                                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                            <span className="slider round"> </span>
                                        </label>
                                    </div>
                                    <p style={{ fontSize: "10px", marginTop: "10px" }}>{darkMode ? "Dark" : "Light"} Mode </p>
                                </div>
                            </div>
                            {/* Dark Mode Switch Button End */}
                            <div class="p-2 bd-highlight">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <img className='border-none' src={UserLogo} style={{ height: "20px", width: "20px", marginRight: "8px" }} alt="userlogo" />
                                        Admin
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">HR Pay</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                        </div>
                    </div>


                </nav>


                {/* <div className="bars" style={{ width: isOpen ? "92%" : "100%" }}> */}
                {/* <img className="pt-0"  onClick={toggle} src={hamburger} style={{width:"30px", height:"30px",}} alt="hamburger"/> */}
                <main>{children}</main>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Sidebar;
