import React, { useContext, useState } from 'react'
import attachment from "../images/attachment.png"
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

function Input() {
  const [ text, setText ] = useState("")
  const [ img, setImg ] = useState(null)
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  
  const handleSend = async () => {
    if(img) {
      const storageRef = ref(storage, uuid())
      const uploadTask = uploadBytesResumable(storageRef, img)
      uploadTask.on((error) => {
        console.log(error)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL
            })
          })
        })
      })
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }
    await updateDoc(doc(db, "userChats", currentUser.uid),{
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })
    await updateDoc(doc(db, "userChats", data.user.uid),{
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId + ".userInfo"]:{
        displayName: currentUser.displayName,
        uid: currentUser.uid,
        photoURL: currentUser.photoURL
      },
      [data.chatId + ".date"]: serverTimestamp()
    })
    setText("")
    setImg(null)
  } 

  return (
    <div className='input'>
      <input type="text" placeholder='Type Here...' onChange={(e) => {setText(e.target.value)}} value={text} />
      <div className='d-flex gap-4'>
      <label htmlFor="formFileSm" className="form-label">
        <img src={attachment} />
      </label>
      <input className="form-control form-control-sm" id="formFileSm" type="file" encType="multipart/form-data" style={{ display: "none" }} 
      onChange={(e) => {setImg(e.target.files[0])}}/>
      <button 
      className='send-btn'
      onClick={handleSend} 
      >
        Send
      </button>
      </div>
    </div>
  )
}

export default Input