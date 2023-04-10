import React from 'react'

const Chats = () => {
    return (
        <div className='d-flex align-items-center justify-content-start mt-2 user-search'>
            <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className='chat-image' />
            <div className='w-100 d-flex flex-column' style={{ paddingLeft: "0.5rem" }}>
                <span className='text-white fw-bold'>Kuldeep Singh</span>
                <span className='text-white'>hey there, how are you ?</span>
            </div>
        </div>
    )
}

export default Chats