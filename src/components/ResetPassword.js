import React, { useState } from 'react'
import "./style.css"
import Logo from "../../src/assests/Logo.png"
import { AiOutlineEye } from "react-icons/ai"
import { AiOutlineEyeInvisible } from "react-icons/ai"


export default function ResetPassword() {
  const [password, setPassword] = useState('password')
  const onSetPassword = () => {
    if (password === 'password') {
      setPassword('text')
    } else {
      setPassword('password')

    }
  }
  return (

    <div className='container-fluid form' >
      <div className="row ">
        <div className="col-md-4 col-lg-4"></div>
        <div className="col-md-4 mt-1 pt-5 pb-5 mb-5 ">
          <img src={Logo} className="text-center rounded mx-auto mb-1 d-block img-fluid" alt='' />
          <h4 className='text-center b3black'>Welcome to Human Resources key</h4>
          <div className="card text-center d-flex form-body ">
            <div className="card-body text-center">
              <h4 className="mt-0 mb-0 b1book">Reset Password</h4>
              <p className='text-muted '>Enter your new password</p>
              <form className='mt-3'>
                <div className="input-container"><label className="w-100 mb-2 mt-1 text-start c2medium">Create New Password </label>
                  <div className="input-group mb-3">
                    <input style={{ background: "#FBFBFB", borderRight: "none" }} className=' form-control mt-1' type={password} name="password" placeholder="Password" />
                    <span className='input-group-text ' style={{ background: "#FBFBFB", color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }} onClick={() => { onSetPassword() }} id="basic-addon1">{password === 'password' &&
                      <AiOutlineEye></AiOutlineEye>}{password !== 'password' &&
                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                  </div >
                </div >
                <div className="input-container"><label className="w-100 mb-2 mt-1 text-start c2medium">Confirm New Password </label>
                  <div className="input-group">
                    <input style={{ background: "#FBFBFB", borderRight: "none" }} className=' form-control mt-1' type={password} name="password" placeholder="Password" />
                    <span className='input-group-text ' style={{ background: "#FBFBFB", color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }} onClick={() => { onSetPassword() }} id="basic-addon1">{password === 'password' &&
                      <AiOutlineEye></AiOutlineEye>}{password !== 'password' &&
                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                  </div>
                </div>
                <button type="button" className="btn w-100 col-10 mt-3 form-btn" >Change Password</button>
              </form >
            </div >
          </div >
        </div >
        <div className="col-md-4"></div>
      </div >
    </div >


  )
}

