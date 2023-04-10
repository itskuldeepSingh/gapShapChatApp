import React from 'react'
import attachment from "../images/attachment.png"

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Here...' />
      <div className='d-flex gap-4'>
      <label htmlFor="formFileSm" className="form-label">
        <img src={attachment} />
      </label>
      <input className="form-control form-control-sm" id="formFileSm" type="file" encType="multipart/form-data" style={{ display: "none" }} />
      <button className='send-btn'>Send</button>
      </div>
    </div>
  )
}

export default Input