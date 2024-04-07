import React from "react";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const HilightscardPg = ({ data }) => {
  return (
    <div className=" lg:w-[20vw] bg-white rounded-lg shadow-md ">
      <div className="relative">
      <img
        src={data.imageUrl[0]||'/default.jpeg'}
        className="h-[30vh] w-full border object-cover rounded-t-lg"
        alt="N/A"
      />
       <Link to={'/contact'}>
                <div className=" absolute bottom-2 lg:right-2 left-2 lg:left-auto flex justify-center items-center lg:px-3 hover:bg-red-700 py-2  text-white text-lg bg-red-800 rounded-xl gap-4"><IoCall/> Contact</div>
            </Link>
      </div>
      <div className="p-4">
        <p className="text-xl font-semibold ">
          {data.singleSharingRent} ₹
          <span className="text-sm">for single sharing</span>
        </p>
        <h5 className="font-medium">
          <span className="text-red-800">{data.rentalType}</span> for rent in{" "}
          {data.city}
        </h5>
        <div className="flex gap-2 mt-2">
          {data.balcony&&<div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <div className="text-sm  leading-none">
              <h1 className=" font-semibold">{data.balcony}</h1>
            </div>
          </div>}
          {data.tenantsPreferred&&<div className="flex gap-2 items-center border border-red-800 p-2 rounded-md">
            <div className="text-sm  leading-none">
              <h1 className=" font-semibold">{data.tenantsPreferred}</h1>
            </div>
          </div>}
          {data?.amenities?.kitchen&& <div className="flex gap-2 text-sm  leading-none py-1 font-semibold lg:text-md  items-center border border-red-800 p-2 rounded-md">
             Kitchen
          </div>}
          {data?.amenities?.food&& <div className="flex gap-2 text-sm  leading-none py-1 font-semibold lg:text-md  items-center border border-red-800 p-2 rounded-md">
             Mess
          </div>}

        </div>
      </div>
    </div>
  );
};

export default HilightscardPg;