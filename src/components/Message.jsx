import React from 'react'

function Message() {
  return (
   <div className="message owner">
    <div className="message-info">
        <img src="https://images.pexels.com/photos/2626996/pexels-photo-2626996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Just Now</span>
    </div>
    <div className="message-Content owner">
        <p>Hey there</p>
        <img src="https://images.pexels.com/photos/2626996/pexels-photo-2626996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
   </div>
  )
}

export default Message;