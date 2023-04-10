import React, { useState } from 'react'
import search from "../images/search.png"

function Search() {

  const [searchText, setSearchText] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(searchText)
  }

  return (
  <>
    <form onSubmit={handleSubmit} className='d-flex gap-1 mt-1'>
      <input type="text" placeholder='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)} className="form-control search-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
      <button type='submit' className='btn-search'>
        <img src={search} />
      </button>
      <hr />
    </form>
    <div className='d-flex align-items-center justify-content-start mt-2 user-search'>
        <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        className='chat-image'/>
        <div className='w-100 d-flex flex-column' style={{paddingLeft: "0.5rem"}}>
          <span className='text-white fw-bold'>Kuldeep Singh</span>
          <span className='text-white'>hey there, how are you ?</span>
        </div>
    </div>
    <hr className='mt-0' style={{color: "white"}} />
  </>
  )
}

export default Search