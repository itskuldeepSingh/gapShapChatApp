import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
    navigate("/login")
  }
  return (
    <div className="navbar px-2">
    <span className='pl-5'>Kuldeep Singh</span>
        <div className="user">
            <img className='profile' src="https://images.pexels.com/photos/1589082/pexels-photo-1589082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" width={"24px"} />
            <button 
            onClick={handleSignOut}
            className='btn-logout'>Log Out</button>  
        </div>
    </div>
  )
}

export default Navbar