import React, { useContext } from 'react'
import Input from './Input'
import Messages from './Messages'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext)
  
  return (
    <div className='chat-screen'>
      <div className="header">
        <span className='text-white'>{data.user?.displayName}</span>
      </div>
      <div className='chat-window'>
        <Messages />
      </div>
      <div className="chats_input ">
        <Input />
      </div>
    </div>
  )
}

export default Chat