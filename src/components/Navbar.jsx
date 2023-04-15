import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const navigate = useNavigate()
  const currentUser = useContext(AuthContext)
  const { displayName, photoURL } = currentUser.currentUser;

  const handleSignOut = () => {
    signOut(auth)
    navigate("/login")
  }
  
  return (
    <div className="navbar px-2">
    <span className='pl-5'>{displayName}</span>
        <div className="user">
            <img className='profile' src={photoURL} alt="profile" width={"24px"} />
            <button 
            onClick={handleSignOut}
            className='btn-logout'>Log Out</button>  
        </div>
    </div>
  )
}

export default Navbar