import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Chats = () => {
    const currentUser = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)
    const { uid } = currentUser?.currentUser || {};
    const [chats, setChats] = useState([])
    
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", uid), (doc) => {
            setChats(doc.data())
        })
        return () => {
            unsub()
            }
        }  
        uid && getChats()
    },[uid])

    const handleSelect = (userInfo) => {
        dispatch({type:"CHANGE_USER", payload:userInfo })
    }

    console.log(chats)
    return (
        <>
          {chats &&
            Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
              <div
                className='d-flex align-items-center justify-content-start mt-2 user-search'
                key={chat[0]}
                onClick={() => handleSelect(chat[1].userInfo)}
              >
                {chat[1].userInfo && (
                  <>
                    <img src={chat[1].userInfo?.photoURL} className='chat-image' alt='chat avatar' />
                    <div className='w-100 d-flex flex-column' style={{ paddingLeft: '0.5rem' }}>
                      <span className='text-white fw-bold'>{chat[1].userInfo?.displayName}</span>
                      <span className='lastMessage'>{chat[1].lastMessage?.text}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
        </>
      );
      
}

export default Chats
