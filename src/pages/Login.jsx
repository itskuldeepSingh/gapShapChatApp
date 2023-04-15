import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const userFields = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState(userFields);
  const [spinner, setSpinner] = useState(false);
  const [btnText, setBtnText] = useState("Log In");
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    setBtnText("");
    setSpinner(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/home")
    } catch (error) {
      console.error(error);
    }
    setData(userFields);
    setBtnText("Log In");
    setSpinner(false);
  };

  return (
    <div className="container-fluid bg-color2 vw-100">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-10 col-md-6 col-lg-6 col-xl-4">
          <form className="p-sm-5 p-4 register-form bg-color1" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="text-center">GapShapp</h2>
            <p className="text-center">Log In</p>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
              className="form-control mb-3"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={(e) => handleChange(e)}
              className="form-control mb-3"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button type="submit" className="btn btn-sm w-100 mt-2 btn-signup p-2">
              <span>{btnText}</span>
              <span className="d-flex justify-content-center">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ display: spinner ? "block" : "none" }}></span>
              </span>
            </button>
            <p className="mt-2 text-center">
              Don't have an account? <Link className='link' to="/signup">Rejister</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
