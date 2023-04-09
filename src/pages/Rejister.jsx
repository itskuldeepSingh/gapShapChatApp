import React, { useState } from 'react'
import upload from "../images/upload.png"

const userFields = {
  username: "",
  email: "",
  password: "",
  file: "",
}

function Rejister() {

  const [data, setData] = useState(userFields);
  const [spinner, setSpinner] = useState(false)
  const [btnText, setBtnText] = useState(true)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    setData(userFields)
    setBtnText(false)
    setSpinner(true)
  }

  return (
    <div className="container-fluid bg-color2 vw-100">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-10 col-md-6 col-lg-6 col-xl-4">
          <form className='p-sm-5 p-4 rejister-form bg-color1' onSubmit={(e) => handleSubmit(e)}>
            <h2 className='text-center'>GapShapp</h2>
            <p className='text-center'>Rejister</p>
            <input type="text" placeholder='Your Name' name='username' value={data.username} onChange={(e) => handleChange(e)} className="form-control mb-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            <input type="email" placeholder='Email' name='email' value={data.email} onChange={(e) => handleChange(e)} className="form-control mb-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            <input type="password" placeholder='Password' name='password' value={data.password} onChange={(e) => handleChange(e)} className="form-control mb-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            <label htmlFor="formFileSm" className="form-label mb-3">
              <img src={upload} style={{color: "#213d4e"}}/>
            </label> <span style={{ marginLeft: "1rem" }}>Upload Profile</span>
            <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={(e) => setData({ ...data, file: e.target.files[0] })} encType="multipart/form-data" style={{ display: "none" }} />
            <button type='submit' className="btn btn-sm w-100 mt-2 btn-signup p-2">
              <span>{btnText ? "Sign Up" : ""}</span>
              <span class="d-flex justify-content-center">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ display: spinner ? "block" : "none" }}></span>
              </span>
            </button>
            <p className='mt-2 text-center'> Have an account already ?
              <a href="">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Rejister;