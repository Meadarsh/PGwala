import React, { useState } from "react";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { FaCarSide, FaShower, FaRegBuilding, FaWhatsapp } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Card = ({ data }) => {
  const [moreOpen, setMoreOpen] = useState(false);
  if (!data) {
    return;
  }
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      className="flex flex-col pb-3  gap-2 lg:flex-row lg:w-[80%] flex-shrink-0 w-[97%] overflow-x-hidden items-center lg:items-center  mt-2 lg:mt-4 rounded-md lg:p-5 p-2 bg-white justify-between"
    >
      <div className="img w-[99%] rounded-lg overflow-hidden lg:w-[25%] h-[30vh]  bg-slate-300">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          loop={true}
          navigation
          className=" homepageswiper relative w-full lg:rounded-2xl overflow-hidden lg:h-full "
        >
          {data?.imageUrl?.map((path) => (
            <SwiperSlide key={path}>
              <img
                src={path || "/default.jpeg"}
                alt="N/a"
                className="w-full h-full  object-cover"
              />
            </SwiperSlide>
          ))}
          <p className="absolute bottom-2 text-red-700 z-10 font-bold right-2">
            Flat4u
          </p>
        </Swiper>
      </div>
      <div className=" h-auto lg:h-full relative  w-full lg:w-[70%]">
        {moreOpen && (
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="absolute right-5 z-20 top-3 text-xl "
          >
            <RxCross2 />
          </button>
        )}
        {moreOpen && (
          <div className="absolute p-1 pt-10 gap-2 overflow-y-auto  left-0 w-[100%] h-[100%] z-10 bg-white">
            <h1 className="text-md font-semibold mb-1">Building amenities</h1>
            <div className="flex flex-wrap gap-2">
              {data.selectedBuildingItems.map((data, index) => (
                <div
                  key={index}
                  className="flex gap-2 text-sm  leading-none h-8 lg:text-md  items-center border border-red-800 p-1 rounded-md"
                >
                  {data}
                </div>
              ))}
            </div>
            <h1 className="text-md font-semibold my-1">Flat amenities</h1>
            <div className="flex flex-wrap gap-2">
              {data.selectedItems.map((data, index) => (
                <div
                  key={index}
                  className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md"
                >
                  {data}
                </div>
              ))}
            </div>
            <h1 className="text-md font-semibold my-1">Others</h1>
            <div className="flex flex-wrap gap-2">
              {data?.amenities?.visitorsEntry && (
                <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
                  Visitors entry : {data.amenities.visitorsEntry}
                </div>
              )}
              {data?.amenities?.smoking && (
                <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
                  Smoking : {data.amenities.smoking}
                </div>
              )}
              {data?.amenities?.drinking && (
                <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
                  Drinking : {data.amenities.drinking}
                </div>
              )}
              {data?.amenities?.food && (
                <div className="flex gap-2 text-sm  leading-none py-1 lg:text-md  items-center border border-red-800 p-1 rounded-md">
                  Food : {data.amenities.food}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="flex justify-between">
          <div>
            <h1 className="lg:text-3xl text-2xl font-bold">
              {data.rent} ₹<span className="text-lg">/month</span>
            </h1>
            {data.securityDeposit && (
              <p className="text-lg">
                Security deposit:{" "}
                <span className="font-semibold">{data.securityDeposit}</span> ₹
              </p>
            )}
            <p className="lg:font-semibold text-red-800 mt-1">
              <span>{data.flatType}</span> Flat{" "}
              <span className="font-normal">
                for rent in {data.city},{data.state}
              </span>
            </p>
            <p className="lg:font-semibold text-red-800 -mt-1">
              {data.tenantsPreferred}
            </p>
          </div>
          <div
            onClick={() => setMoreOpen(!moreOpen)}
            className=" cursor-pointer shadow-sm w-24 rounded-lg text-red-700  h-10 px-1  bg-slate-100 flex items-center"
          >
            Others
          </div>
        </div>
        <div className="p-2 relative flex whitespace-nowrap no-scrollbar overflow-y-visible overflow-x-auto scrollbarnone  gap-2">
          {!(data.furnishing === "0") && (
            <div className="flex gap-2  lg:text-md text-sm items-center border border-red-800 p-1 rounded-md">
              <IoBedOutline className="lg:text-3xl text-2xl" />
              <div className="text-sm  leading-none">
                <p>Furnishing</p>
                <h1 className=" font-semibold">{data.furnishing}</h1>
              </div>
            </div>
          )}
          {!(data.carpetArea === "0") && (
            <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
              <HiOutlineRectangleGroup className="lg:text-3xl text-2xl" />
              <div className=" leading-none">
                <p>Carpet Area</p>
                <h1 className="font-semibold">{data.carpetArea}ft</h1>
              </div>
            </div>
          )}
          {data.parking && (
            <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
              <FaCarSide className="lg:text-3xl text-xl" />
              <h1 className="font-semibold">Parking</h1>
            </div>
          )}
          {!(data.bathroom === "0") && (
            <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
              <FaShower className="lg:text-2xl text-xl" />
              <div className=" leading-none">
                <p>Bath rooms</p>
                <h1 className="font-semibold">{data.bathroom}</h1>
              </div>
            </div>
          )}
          {!(data.balcony === "0") && (
            <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
              <MdBalcony className="lg:text-2xl text-xl" />
              <div className=" leading-none">
                <p>Balcony</p>
                <h1 className="font-semibold">{data.balcony}</h1>
              </div>
            </div>
          )}
          {!(data.onFloor && data.totalFloor === "0") && (
            <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
              <FaRegBuilding className="lg:text-2xl text-xl" />
              {!(data.onFloor === "0") && (
                <div className=" leading-none">
                  <p>Floor</p>
                  <h1 className="text-center font-semibold">{data.onFloor}</h1>
                </div>
              )}
              {!(data.totalFloor === "0") && (
                <div className=" leading-none">
                  <p>Total Floor</p>
                  <h1 className="font-semibold text-center">
                    {data.totalFloor}
                  </h1>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex lg:gap-4 gap-3 justify-between lg:items-center text-sm flex-col lg:flex-row lg:mt-4 lg:w-[95%]">
          <div>
            <p className=" text-md font-medium">
              <span className="font-semibold text-lg">Building name : </span>
              {data.buildingName}
            </p>

            <p className=" text-md font-medium">
              <span className="font-semibold text-lg">Location : </span>
              {data?.location}
            </p>
            <p className=" text-md font-medium">
              <span className="font-semibold text-lg">Address : </span>
              {data.address}
            </p>
          </div>
          <div className="flex gap-2 justify-evenly">
            <Link to={"https://wa.me/+918652869869"}>
                <div className="flex justify-center items-center px-3  hover:bg-green-700 py-2  text-white text-lg bg-green-800 rounded-xl gap-4"> <FaWhatsapp/> Message</div>
            </Link>
            <Link to={'/contact'}>
                <div className="flex justify-center items-center px-3 hover:bg-red-700 py-2  text-white text-lg bg-red-800 rounded-xl gap-4"><IoCall/> Contact</div>
            </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
