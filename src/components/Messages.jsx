import React, { useContext, useEffect, useState } from 'react'
import Message from './Message';
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

function Messages() {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)

  useEffect(() => {
    if (data.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages)
      })
      return () => {
        unSub()
      }
    }
  }, [data.chatId])

  return (
    <>
      {messages.map((m) => (
        <Message msg={m} key={m.id} />
      ))}
    </>
  ) 
}

export default Messages;
