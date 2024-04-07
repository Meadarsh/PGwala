import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules"
import "swiper/css";
import 'swiper/css/navigation';
import {BrowseRentalList } from "../Data/data";
import gsap from  "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { Link } from "react-router-dom";

const SecondPage = () => {

  useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)

    gsap.to('.homepagepara',{
      color:'black',
      duration:1,
      delay:.2,
      scrollTrigger:{
        trigger: '.homepagepara',
        start: 'top 90%',
        end:  'bottom bottom',
      },
      stagger:.3
    })
    gsap.to('.homepageswiper',{
      scale:1,
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger: '.homepageswiper',
        start: 'top 90%',
        end:  'bottom bottom',
      },
      stagger: .3
    })
  })

  return (
    <div className="mt-10 w-full">
      <div className="flex justify-center items-center h-[10vh]">
        <h1 className="lg:text-[2vw] text-xl text-center text-red-800">
          Find the perfect space that feels like home across vibrant cities and
          serene landscapes.
        </h1>
      </div>
      <div className="nav flex justify-evenly mt-5">
        <Link to='/rent' >
        <div className="rent p-3 w-32 rounded cursor-pointer bg-red-800 hover:bg-red-500">
          <h1 className="text-center text-xl font-bold text-white tracking-widest">
            Rent
          </h1>
        </div></Link>
        <Link to='/pg' >
        <div className="rent p-3 w-32 rounded cursor-pointer bg-red-800 hover:bg-red-500">
          <h1 className="text-center text-xl font-bold text-white tracking-widest">
            PG
          </h1>
        </div>
        </Link>
      </div>
      <div className="lg:mt-[10vh]">
        <div className="flex justify-center items-center mt-[10vh] h-[10vh]">
          <h1 className="lg:text-[3vw] font-bold text-4xl text-center text-red-800">
            Browse Rentals
          </h1>
        </div>
        {BrowseRentalList.map((data)=>(<div className="flex mt-12 lg:flex-row flex-col justify-between items-center lg:h-[40vh] h-[65vh]">
          <Swiper
          modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className=" homepageswiper scale-95 opacity-50 w-full lg:w-[40%] lg:rounded-2xl overflow-hidden lg:h-full h-[50vh]"
          >
            {data.Img.map((path) => (
              <SwiperSlide>
                <img src={path} alt="N/a" className="w-full h-full object-cover m-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full lg:w-[50%] lg:h-full flex flex-col lg:pr-[4vw] p-4 justify-center ">
            <h1 className="lg:text-4xl text-2xl">{data.Heading}</h1>
            <p className=" homepagepara lg:text-2xl text-lg text-white">
             {data.Paragraph}
            </p>
          </div>
        </div>))}
      </div>
    </div>
  );
};

export default SecondPage;
