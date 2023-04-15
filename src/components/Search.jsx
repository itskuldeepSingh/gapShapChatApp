import React, { useState, useEffect, useContext } from 'react'
import search from "../images/search.png"
import { db } from "../firebase"
import { getDocs, collection, query, where, setDoc, doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore'
import { AuthContext } from '../context/AuthContext'

function Search() {
  const currentUser = useContext(AuthContext)
  const [searchText, setSearchText] = useState("")
  const [user, setUser] = useState(null)

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchText)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      console.log(err)
    }
  }


  const handleSelect = async () => {
    console.log(user)
    console.log(currentUser)
    const { uid} = currentUser.currentUser;
    const combinedId = uid > user.uid ? uid + user.uid : user.uid + uid;
    const res = await getDoc(doc(db, "chats", combinedId));

    console.log(combinedId)
    if (!res.exists()) {
      await setDoc(doc(db, "chats", combinedId), {
        messages: [],
      });
      await updateDoc(doc(db, "userChats", uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.PhotoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    }
    setUser(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
    setSearchText('')
  }

  useEffect(() => {
  }, [user]);

  return (
    <>
      <form onSubmit={handleSubmit} className='d-flex gap-1 mt-1'>
        <input type="text" placeholder='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)} className="form-control search-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        <button type='submit' className='btn-search'>
          <img src={search} />
        </button>
        <hr />
      </form>
      {user && <div className='d-flex align-items-center justify-content-start mt-2 user-search'
        onClick={handleSelect}
      >
        <img src={user.PhotoURL}
          className='chat-image' />
        <div className='w-100 d-flex flex-column' style={{ paddingLeft: "0.5rem" }}>
          <span className='text-white fw-bold'>{user.displayName}</span>
        </div>
      </div>}
      <hr className='mt-0' style={{ color: "white" }} />
    </>
  )
}

export default Search
