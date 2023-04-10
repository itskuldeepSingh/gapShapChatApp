import React from 'react'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='chat-screen'>
      <div className="header">
        <span className='text-white'>Kuldeep Singh</span>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat