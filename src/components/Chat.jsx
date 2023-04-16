import React, { useContext } from 'react'
import Input from './Input'
import Messages from './Messages'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'

const Chat = () => {
  const { data } = useContext(ChatContext)
  const currentUser = useContext(AuthContext)
  const { displayName, photoURL } = currentUser.currentUser;
  
  return (
    <div className='chat-screen'>
      <div className="header">
        <span className='text-white'>{!data.user?.displayName ? displayName : data.user?.displayName}</span>
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