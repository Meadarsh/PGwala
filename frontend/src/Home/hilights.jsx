import React,{useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {Autoplay} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Hilightscard from '../Components/hilightscard';
import HilightscardPg from '../Components/hilightscardPg';
import { Link } from 'react-router-dom';


const Hilights = () => {
  const [data , setData] = useState([]);
  const FetchData= async()=>{
    const resp=await fetch (`${import.meta.env.VITE_BASE_URL}/getrecent/Flat`, {
     method: "get",
     headers: {
       "Content-Type": "application/json",
     }
   })
    const data= await resp.json();
    setData(data)
    return
   }
  const [dataPg , setDataPg] = useState([]);
  const FetchDataPg= async()=>{
    const resp=await fetch (`${import.meta.env.VITE_BASE_URL}/getrecent/Pg `, {
     method: "get",
     headers: {
       "Content-Type": "application/json",
     }
   })
    const data= await resp.json();
    setDataPg(data)
    return
   }
 useEffect(()=>{
   FetchData()
   FetchDataPg()
 },[])
  return (
    <div className=' w-full flex flex-col items-center lg:p-10 '>
      <h1 className='text-3xl font-bold mt-9 lg:text-[3vw] text-red-800'>Recent Properties</h1>
      <div className='w-full mt-[15vh]'>
        <h1 className='text-4xl lg:text-5xl font-semibold  mb-2'>Rent</h1>
        <div className='relative h-[50vh] w-full flex items-center'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 3000}}
        loop={true}
        modules={[Autoplay,Pagination]}
        className='h-[48vh] w-full'
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {data?.map((data)=>(<SwiperSlide><Link to='/rent'><Hilightscard data={data}/></Link></SwiperSlide>))}


      </Swiper>
      <div className="absolute pr-6 top-0 right-0 z-10 flex flex-col justify-center items-end h-full text-red-800 w-[20vw] bg-gradient-to-r from-transparent to-white">
     <Link to='/rent'>
     <div className=' flex flex-col text-2xl items-center'>
        Explore
       <FaRegArrowAltCircleRight className='text-3xl'/>
       </div>
     </Link>
      </div>

        </div>
      </div>
      <div className='w-full mt-6 lg:mt-20'>
        <h1 className='text-4xl lg:text-5xl font-semibold  mb-2'>PG</h1>
        <div className='relative h-[50vh] w-full flex items-center'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className='h-[48vh] w-full'
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={{ delay: 3500}}
        loop={true}
        modules={[Autoplay,Pagination]}
      >
               {dataPg?.map((data)=>(<SwiperSlide><Link to='/pg'><HilightscardPg data={data}/></Link></SwiperSlide>))}


      </Swiper>
      <div className="absolute pr-6 top-0 right-0 z-10 flex flex-col justify-center items-end h-full text-red-800 w-[20vw] bg-gradient-to-r from-transparent to-white">
     <Link to='/pg'>
     <div className=' flex flex-col text-2xl items-center'>
        Explore
       <FaRegArrowAltCircleRight className='text-3xl'/>
       </div>
     </Link>
      </div>

        </div>
      </div>
    </div>
  )
}

export default Hilights