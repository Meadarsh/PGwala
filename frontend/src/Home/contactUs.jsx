import React from 'react'
import { FaPhoneAlt,FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className='w-full h-[30vh] flex flex-col items-center justify-center mt-10'>
        <h1 className='text-red-800 text-[8vw] lg:text-[3vw] mt-20'>Contact Us</h1>
        <div className=" rounded-lg h-[30vh] flex items-center justify-center gap-8 lg:flex-row flex-col mt-5 w-[90%] lg:w-[30vw]">
        <div className='flex justify-center items-center gap-3 text-2xl'><FaPhoneAlt className='text-2xl text-red-800'/> <p>+918652869869</p></div>
        <a href="https://wa.me/+918652869869"><div className='flex justify-center items-center gap-3 text-2xl'><FaWhatsapp className='text-2xl text-green-600'/><p>Whatsapp</p> </div></a>
        </div>
        </div>

    </>
  )
}

export default ContactUs