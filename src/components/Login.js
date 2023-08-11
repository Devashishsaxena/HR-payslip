import React, { useState } from 'react'
import "./style.css"
import Logo from "../../src/assests/Logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai"
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function Login({ auth }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })
  const [showPass, setShowPass] = useState("password")

  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    /* Form Validations */
    let errorCount = 0
    if (email === "") {
      errorCount++
      setErrors((prevState) => {
        return { ...prevState, email: "Email is required" }
      })
    } else {
      setErrors((prevState) => {
        return { ...prevState, email: "" }
      })
    }
    if (password === "") {
      errorCount++
      setErrors((prevState) => {
        return { ...prevState, password: "Password is required" }
      })
    } else {
      setErrors((prevState) => {
        return { ...prevState, password: "" }
      })
    }
    if (errorCount === 0) {
      /* Login API call */
      setLoading(true)
      let user = {
        email: email,
        password: password
      }
      let url = process.env.REACT_APP_BASEURL + "login/"
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json"
        }
      };
      axios.post(url, user, config)
        .then(res => {
          console.log(res.data);
          /*
            Destructuring the data
          */
          setLoading(false)
          const { access_token, fullname, roles } = res.data.data
          auth(roles)
          localStorage.setItem('token', access_token);
          localStorage.setItem('fullname', fullname);
          localStorage.setItem('role', roles);
          toast.success("Login successful!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            theme: "colored",
          });
          navigate("/dashboard")
        })
        .catch(error => {
          setLoading(false)
          toast.error(error.response.data.errors[0].error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            theme: "colored",
          });
        })
    }
  }

  const onSetPassword = () => {
    if (showPass === 'password') {
      setShowPass('text')
    } else {
      setShowPass('password')
    }
  }

  return (

    <>
      <ToastContainer />
      <div className='container-fluid form' >
        <div className="row ">
          <div className="col-md-4 col-lg-4"></div>
          <div className="col-md-4 mt-1 pt-5 pb-5 mb-5 ">
            <img src={Logo} className="text-center rounded mx-auto mb-1 d-block img-fluid" alt="logo" />
            <h4 className='text-center b3black'>Welcome to Human Resources key</h4>
            <div className="card text-center d-flex form-body ">
              <div className="card-body text-center">
                <h4 className="mt-0 mb-0 b1book">Login</h4>
                <p className='text-muted '>Access to our dashboard</p>
                <form className='mt-3'>
                  <div className="input-container">
                    <label className="w-100 mb-2 mt-1 text-start c2medium">Email Address </label>
                    <div className="input-group mb-3">
                      <span id="inputGroup-sizing-default"></span>
                      <input value={email} type="email" className="form-control form-input" placeholder='Email ID' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={handleEmail} />
                      {errors.email && <p className="w-100 mb-2 mt-1 text-start c2medium" style={{ color: "red" }}>{errors.email}</p>}
                    </div>
                  </div>
                  <div className="input-container"><label className="w-100 mb-2 mt-1 text-start c2medium">Password </label>
                    <div className="input-group">
                      <input style={{ borderRight: "none" }} className='form-input form-control mt-1' type={showPass} name="password" placeholder="Password" onChange={handlePassword} value={password} />
                      <span className='input-group-text form-input' style={{ color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }} onClick={() => { onSetPassword() }} id="basic-addon1">{showPass === 'password' &&
                        <AiOutlineEye />}{showPass !== 'password' &&
                          <AiOutlineEyeInvisible />}</span>
                    </div>
                    {errors.password && <p className="w-100 mb-2 mt-1 text-start c2medium" style={{ color: "red" }}>{errors.password}</p>}
                  </div>
                  <div className="row mt-3" style={{ fontSize: '14px', fontWeight: '450', lineHeight: '18px', letterSpacing: '0em' }}>
                    <div className="d-flex col d-grid gap-2">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: " 18.5px" }} />
                      <p className='fs-6 text-muted c2book'>Remember me</p>
                    </div>
                    <div className="col text-end">
                      <Link className="text-black fs-6 text-muted text-decoration-none c2book" to={"/forgot-password"}>Forgot password?</Link>
                    </div>
                  </div>
                  {loading ? <button className="btn w-100 col-10 mt-1 form-btn " type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button> : <button type="button" className="btn w-100 col-10 mt-1 form-btn" onClick={handleSubmit}>Login</button>}
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>

  )
}
