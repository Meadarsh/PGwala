import React, { useState } from "react";
import { BsGenderMale } from "react-icons/bs";
import { MdOutlinePeople } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,Navigation} from "swiper/modules"
import "swiper/css";
import 'swiper/css/navigation';


const CardPg = ({data}) => {

  const[moreOpen,setMoreOpen]=useState(false)
 if(!data){
  return;
 }
  return (
    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} className="flex flex-col pb-3  gap-2 lg:flex-row lg:w-[80%] flex-shrink-0 w-[97%] overflow-x-hidden items-center lg:items-center  mt-2 lg:mt-4 rounded-md lg:p-5 p-2 bg-white justify-between">
      <div className="img w-[99%] rounded-lg overflow-hidden lg:w-[25%] h-[30vh]  bg-slate-300">
      <Swiper
          modules={[Autoplay,Navigation]}
            slidesPerView={1}
            loop={true}
            navigation
            className=" homepageswiper relative w-full lg:rounded-2xl overflow-hidden lg:h-full "
          >
            {data?.imageUrl?.map((path) => (
              <SwiperSlide  key={path}>
                <img src={path||'/default.jpeg'} alt="N/a" className="w-full border h-full object-cover" />
              </SwiperSlide>
            ))}
             <p className="absolute bottom-2 text-red-700 z-10 font-bold right-2">Flat4u</p>
          </Swiper>
      </div>
      <div className=" h-auto lg:h-full relative  w-full lg:w-[70%]">
      {moreOpen&&<button onClick={()=> setMoreOpen(!moreOpen)} className="absolute right-10  z-30 top-3 font-bold text-3xl "><RxCross2/></button>
}
      {moreOpen&&<div className="absolute p-1 pt-10 gap-2 overflow-y-auto  left-0 w-[100%] h-[100%] z-10 bg-white">
      <h1 className="text-md font-semibold mb-1">Building amenities</h1>
     <div className="flex flex-wrap gap-2">
   { data.selectedBuildingItems.map((data, index)=>(
    <div key={index} className="flex gap-2 text-sm  leading-none h-8 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      {data}
          </div>
   ))
      }
     </div>
     <h1 className="text-md font-semibold my-1">Flat amenities</h1>
     <div className="flex flex-wrap gap-2">
     { data.selectedItems.map((data, index)=>(
    <div key={index} className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      {data}
          </div>
   ))
      }
     </div>
     <h1 className="text-md font-semibold  my-1">Others</h1>
     <div className="flex flex-wrap gap-2">
      {data?.amenities?.visitorsEntry&& <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      Visitors entry : {data.amenities.visitorsEntry}
          </div>}
      {data?.amenities?.smoking&& <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      Smoking : {data.amenities.smoking}
          </div>}
      {data?.amenities?.drinking&& <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      Drinking : {data.amenities.drinking}
          </div>}
      {data?.amenities?.food&& <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      Food : {data.amenities.food}
          </div>}
     </div>

       
           </div>}
     <div className="flex ">
     <div>
      <div className="flex flex-wrap lg:flex-nowrap  leading-tight gap-2">
     {data.singleSharingRent&&<div className="flex flex-col w-40  items-center  rounded-lg p-1 border">
      <span className=" text-md font-semibold text-nowrap">Single sharing</span>
      <h1>{data.singleSharingRent}₹/month</h1>
     </div>}
     {data.twinSharingRent&&<div className="flex flex-col w-40 items-center  rounded-lg p-1 border">
      <span className=" text-md font-semibold text-nowrap">Twin sharing</span>
      <h1>{data.twinSharingRent}₹/month</h1>
     </div>}
    {data.threeSharingRent&&<div className="flex flex-col w-40 items-center  rounded-lg p-1 border">
      <span className=" text-md font-semibold text-nowrap">Triple sharing</span>
      <h1>{data.threeSharingRent}₹/month</h1>
     </div>}
     {data.fourSharingRent&&<div className="flex flex-col w-40 items-center  rounded-lg p-1 border">
      <span className=" text-md font-semibold text-nowrap">Four sharing</span>
      <h1>{data.fourSharingRent}₹/month</h1>
     </div>}
</div>
{data.securityDeposit&&<p className="text-lg">Security deposit: <span className="font-semibold">{data.securityDeposit}</span> ₹</p>}

        <p className="lg:font-semibold text-red-800 mt-1">
        {data.rentalType} <span className="font-normal">available in {data.city},{data.state}</span>
        </p>
       </div>
       <div onClick={()=>setMoreOpen(!moreOpen)} className=" cursor-pointer shadow-sm rounded-lg text-red-700 absolute right-2 lg:right-6 top-3  h-10 px-1  bg-slate-100 flex items-center">
            Others
          </div>
     </div>
        <div className="pr-2 mt-6 relative flex   whitespace-nowrap no-scrollbar overflow-y-visible overflow-x-scroll scrollbarnone  gap-2">
  
         {!(data.carpetArea === '0') && (<div className="flex leading-none gap-2 items-center border border-red-800 p-1 rounded-md">
         <MdOutlinePeople className="lg:text-2xl text-xl" />
              <p className="font-semibold">Sharing: </p>
              <h1 className="font-semibold">{data.balcony}</h1>
          
          </div>)}
          
          {data.tenantsPreferred && <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <p className="font-semibold">Gender: </p>
            <h1 className={`font-semibold ${data.tenantsPreferred=='Boy'?'text-blue-500':'text-pink-500'}`}>{data.tenantsPreferred}</h1>
          </div>}
          {data?.washroom&& <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
          Washroom: {data.washroom}
          </div>}
          {data?.amenities?.visitorsEntry&& <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      Visitors entry: {data.amenities.visitorsEntry}
          </div>}
          {data?.amenities?.kitchen&& <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      Kitchen: {data.amenities.kitchen}
          </div>}
          {data?.amenities?.food&& <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
      Mesh: {data.amenities.food}
          </div>}
         
          
        </div>
       <div className="flex lg:gap-4 gap-3 justify-between lg:items-center text-sm flex-col lg:flex-row lg:mt-4 lg:w-[95%]">
       
        <div>
           <p className=" text-md font-medium"><span className="font-semibold text-lg">Building name : </span>{data.buildingName}</p>

            <p className=" text-md font-medium"><span className="font-semibold text-lg">Location : </span>{data?.location}</p>
            <p className=" text-md font-medium"><span className="font-semibold text-lg">Address : </span>{data.address}</p>

        </div>
        <div>
            <Link to={'/contact'}>
                <div className="flex justify-center items-center lg:px-3 hover:bg-red-700 py-2  text-white text-lg bg-red-800 rounded-xl gap-4"><IoCall/> Contact</div>
            </Link>
        </div>
       </div>
      </div>
    </div>
  );
};

export default CardPg;
