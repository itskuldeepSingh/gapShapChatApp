import React, { useState } from 'react'
import upload from "../images/upload.png"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom';

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
  const [err, setErr] = useState(false)
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, password, file } = data

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, username);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on((error) => {
        setErr(true)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateProfile(res.user, {
            displayName: username,
            photoURL: downloadURL,
          })
          await setDoc(doc(db, "users", res.user.uid),{
            displayName: username,
            email: email,
            PhotoURL: downloadURL,
            uid: res.user.uid
          })
          await setDoc(doc(db, "userChats", res.user.uid),{})
          navigate("/home")
        });
      });
    } catch (err) {
      setErr(true)
    }
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
              <img src={upload} style={{ color: "#213d4e" }} />
            </label> <span style={{ marginLeft: "1rem" }}>Upload Profile</span>
            <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={(e) => setData({ ...data, file: e.target.files[0] })} encType="multipart/form-data" style={{ display: "none" }} />
            <button type='submit' className="btn btn-sm w-100 mt-2 btn-signup p-2">
              <span>{btnText ? "Sign Up" : ""}</span>
              <span className="d-flex justify-content-center">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ display: spinner ? "block" : "none" }}></span>
              </span>
            </button>
            {err && <span>Something Went Wrong !</span>}
            <p className='mt-2 text-center'> Have an account already ?<Link className='link' to="/login"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Rejister;