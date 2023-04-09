import React, { useState } from 'react'

const userFields = {
  email: "",
  password: "",
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
            <p className='text-center'>Log In</p>
            <input type="email" placeholder='Email' name='email' value={data.email} onChange={(e) => handleChange(e)} className="form-control mb-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            <input type="password" placeholder='Password' name='password' value={data.password} onChange={(e) => handleChange(e)} className="form-control mb-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            <button type='submit' className="btn btn-sm w-100 mt-2 btn-signup p-2">
              <span>{btnText ? "Sign Up" : ""}</span>
              <span class="d-flex justify-content-center">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ display: spinner ? "block" : "none" }}></span>
              </span>
            </button>
            <p className='mt-2 text-center'>Don't have an account ?
              <a href="">Rejister</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Rejister;