import React from 'react'
import { FaPhoneAlt,FaWhatsapp } from "react-icons/fa";
import Footer from '../Components/footer';
import MessageBox from '../Components/popWindow';


const Contact = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center lg:mt-20 mt-16'>
     <div className='lg:flex items-center'>
     <MessageBox/>
        <div className='flex flex-col pl-3 items-center border-l-2'>
        <h1 className='text-red-800 text-[8vw] lg:text-[3vw] mt-20'>Contact Us</h1>
        <div className="border border-black rounded-lg mb-[15vh] lg:mb-[2vh] h-[30vh] flex items-center justify-center gap-8 flex-col mt-10 w-[90%] lg:w-[30vw]">
        <div className='flex justify-center items-center gap-3 text-3xl'><FaPhoneAlt className='text-3xl text-red-800'/> <p>+918652869869</p></div>
        <a href="https://wa.me/+918652869869"><div className='flex justify-center items-center gap-3 text-3xl'><FaWhatsapp className='text-4xl text-green-600'/><p>Whatsapp</p> </div></a>
        </div>
        </div>
     </div>

        <Footer/>
        </div>
  )
}

export default Contact