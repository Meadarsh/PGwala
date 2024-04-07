import React,{useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,Navigation} from "swiper/modules"
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { RentPageSlider } from '../Data/data';
import Card from '../Components/card';
import Footer from '../Components/footer';

const Rent = () => {
  const [data,setData]=useState()
  const [flatType, setFlatType] = useState('All'); // default to "null"
  const[location,setLocation]=useState('All')
  const [tenantsPreferred, setTenantsPreferred] = useState('All');
  const [furnishing, setFurnishing] = useState('All'); // default to "null"
  const [price,setPrice]=useState(0)
  const [searched,setSearched]=useState([])
  const FetchData= async()=>{
   const resp=await fetch (`${import.meta.env.VITE_BASE_URL}/getall/Flat`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    }
  })
   const data= await resp.json();
   setData(data)
   return
  }
useEffect(()=>{
  FetchData()
},[])  

useEffect(()=>{
  let filteredFlats = data;
    filteredFlats = data?.filter((flat) => {
    // Add your filtering conditions here
    let isTypeMatch = flatType === 'All' || flat.flatType === flatType;
    let isTenantsPreferredMatch = tenantsPreferred === 'All' || flat.tenantsPreferred === tenantsPreferred;
    let  isFurnishedMatch = furnishing === 'All' || flat.furnishing === furnishing;
    let  isLocationMatch = location === 'All' || flat.location === location;
    return isTypeMatch && isTenantsPreferredMatch && isFurnishedMatch && isLocationMatch /* && ... */;
 });
if(data){if(price==1){
  filteredFlats?.sort((a, b) => a.rent - b.rent);
}
if(price==2){
  filteredFlats?.sort((a, b) => b.rent - a.rent)
}}
setSearched(filteredFlats)

},[data,flatType,location, tenantsPreferred, furnishing, price])

  return (
    <div  className="w-full overflow-x-hidden relative">
      <h1 className='text-5xl lg:text-[4vw] font-bold absolute z-10 text-red-800 origin-center lg:left-[46%] left-[36%] lg:top-[20vh] top-[10vh] text-center'>Rent</h1>
     <Swiper
          modules={[Autoplay,Navigation]}
            navigation
            slidesPerView={3}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="w-full  lg:mt-20 mt-16 lg:h-[35vh] h-[25vh]  overflow-hidden"
          >
            {RentPageSlider?.map((path,index) => (
              <SwiperSlide key={index}>
                <img src={path} alt="N/a" className="w-full h-full object-cover m-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='w-full px-10 pl-24 lg:px-10  overflow-x-auto h-16 flex justify-center gap-4 lg:gap-8'>
          <div className="flex items-center gap-3">
                    <label className="text-black" htmlFor="country">
                      Furnishing
                    </label>
                    <select
                      onChange={(e)=>setFurnishing(e.target.value)} // Attach the change event handler
                      value={furnishing}
                      className="w-full  rounded-md border focus:outline-none border-gray-700 text-black px-2 py-1"
                      id="country"
                    >
                      <option value="All">All</option>
                      <option value="Full furnished">Full furnished</option>
                      <option value="Semi furnished">Semi furnished</option>
                      <option value="Unfurnished">Unfurnished</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3">
                  <label className="text-black text-nowrap" htmlFor="country">
                    Flat type
                  </label>
                  <select
                    className="w-full  border focus:outline-none rounded-md border-gray-700 text-black px-2 py-1"
                    id="country"
                    onChange={(e) => setFlatType(e.target.value)}
                    value={flatType}
                  >
                    <option value="All">All</option>
                    <option value="Studio apt">Studio apt</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="1.5BHK">1.5BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="2.5BHK">2.5BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="3.5BHK">3.5BHK</option>
                    <option value="4BHK">4BHK</option>
                    <option value="4.5BHK">4.5BHK</option>
                  </select>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="flex items-center gap-3 flex-nowrap">
                    <label className="text-black text-nowrap" htmlFor="country">
                    Tenants Preferred
                    </label>
                    <select
                      className="w-full  border focus:outline-none rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e)=>setTenantsPreferred(e.target.value)}
                      value={tenantsPreferred}
                    >
                      <option value="All">All</option>
                      <option value="Both">Both</option>
                      <option value="Family">Family</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Independent">Company</option>
                      
                      
                    </select>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="flex items-center gap-3 flex-nowrap">
                    <label className="text-black text-nowrap" htmlFor="country">
                    Price
                    </label>
                    <select
                      className="w-full  border focus:outline-none rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e)=>setPrice(e.target.value)}
                      value={price}
                    >
                      <option value="0"></option>
                      <option value="1">Lowest</option>
                      <option value="2">Highest</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="flex items-center gap-3 flex-nowrap">
                    <label className="text-black text-nowrap" htmlFor="country">
                    Location
                    </label>
                    <select
                      className="w-full  border focus:outline-none rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e)=>setLocation(e.target.value)}
                      value={location}
                    >
                       <option value='All'>All </option>
                      <option value="Goregaon west">Goregaon west</option>
                      <option value="Goregaon east">Goregaon east</option>
                      <option value="Malad east">Malad east</option>
                      <option value="Malad west">Malad west</option>
                    </select>
                  </div>
                </div>
          </div>
        <div className="flex flex-col min-h-[50vh] items-center bg-slate-50">
         {searched?.map((data,index)=>(
           <Card data={data} key={index} />
         ))
         }
        </div>
         <Footer/>
    </div>
  )
}

export default Rent