import React from 'react'

function Navbar() {
  return (
    <div className="navbar px-2">
    <span className='pl-5'>Kuldeep Singh</span>
        <div className="user">
            <img className='profile' src="https://images.pexels.com/photos/1589082/pexels-photo-1589082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" width={"24px"} />
            <button className='btn-logout'>Log Out</button>  
        </div>
    </div>
  )
}

export default Navbar