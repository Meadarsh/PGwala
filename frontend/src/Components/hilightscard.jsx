import React from 'react'
import { IoCall } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Hilightscard = ({data}) => {
  return (
    <div className=' lg:w-[20vw] overflow-hidden bg-white rounded-lg shadow-md'>
   <div className="relative">
      <img
        src={data.imageUrl[0]||'/default.jpeg'}
        className="h-[30vh] w-full object-cover border rounded-t-lg"
        alt="N/A"
      />
       <Link to={'/contact'}>
                <div className=" absolute bottom-2 lg:right-2 left-2 lg:left-auto  flex justify-center items-center px-3 hover:bg-red-700 py-2  text-white text-lg bg-red-800 rounded-xl gap-4"><IoCall/> Contact</div>
            </Link>
      </div>
     <div className='p-4'>
     <span className='text-xl font-semibold '>{data.rent} ₹</span>
     <h5 className='font-medium text-nowrap'><span className='text-red-800'>{data.flatType}</span> for rent in {data.city},{data.state}</h5>
     <div className='flex gap-2 overflow-hidden  mt-2'>


     {!(data.furnishing ==='0') && (
           <div className="flex gap-2 flex-shrink-0 items-center border border-red-800 p-1 rounded-md">

            <div className="text-sm  leading-none">
              <h1 className=" font-semibold">{data.furnishing}</h1>
            </div>
             </div>
          )}


          {!(data.carpetArea <=0) && (<div className="flex flex-shrink-0 gap-2 items-center border border-red-800 p-1 rounded-md">
            <div className=" leading-none">
              <h1 className="font-semibold">{data.carpetArea} sqft</h1>
            </div>
          </div>)}
         {(data.parking==1&&data.carpetArea <=0)&&(<div className="flex gap-2 flex-shrink-0 items-center border border-red-800 p-1 rounded-md">
            <h1 className="font-semibold">Parking</h1>
          </div>)}
          <div className="flex gap-2 flex-shrink-0 items-center border border-red-800 p-1 rounded-md">
            <h1 className="font-semibold">{data.tenantsPreferred}</h1>
          </div>

     </div>
     </div>
     </div>
  )
}

export default Hilightscard