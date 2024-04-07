import React from 'react'

const MessageCard = ({message}) => {
    
  return (
    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} className="flex flex-col pb-3  gap-2 lg:flex-row lg:w-[32%] flex-shrink-0 w-[97%] lg:h-[30vh] items-center  mt-2 lg:mt-4 rounded-md  lg:p-5 p-2 bg-white justify-between">
    <div className=" h-auto   w-full lg:w-[70%]">
     <p className='text-red-700'>{message.from}</p>
     <h1><span className='font-bold'>Name:</span> {message.firstname} {message.lastname}</h1>
     <h1><span className='font-bold'>Email:</span> {message.email}</h1>
     <h1><span className='font-bold'>phoneNumber:</span> {message.phoneNumber}</h1>
     
    </div>
  </div>
  )
}

export default MessageCard