import React, { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'

function Message({ msg }) {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext) 
  const ref = useRef()
  
  useEffect(()=>{
   ref.current?.scrollIntoView({
    behavior:"smooth"
   }) 
  },[msg])

  return (
   <div ref={ref} className={`message ${msg?.senderId === currentUser.uid && "owner"}`}>
    <div className="message-info">
        <img 
        src={msg?.senderId === currentUser.uid 
        ? currentUser.photoURL 
        : data.user.photoURL} 
        alt="" />
        <span>Just Now</span>
    </div>
    <div className={`message-Content ${msg?.senderId === currentUser.uid && "owner"}`}>
        <p>{msg?.text}</p>
        {msg.img && <img className='mb-2' src={msg?.img} alt="" />}
    </div>
   </div>
  )
}

export default Message;