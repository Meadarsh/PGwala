import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import { LandingPageSlider,LandingPageTxt } from "../Data/data";

const LandingPage = () => {
  return (
    <div className=" h-[100vh] flex items-center justify-center relative w-[100vw]">
      <div className="h-[calc(100vh-80px)] relative mt-20 w-full bg-slate-200">
        <Swiper
          modules={[EffectFade,Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          className="w-full h-full object-cover overflow-hidden"
        >
          {LandingPageSlider.map((path,index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={path}
                alt="N/a"
                className="w-full h-full object-cover m-auto"
              />
             
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="txt lg:w-[60%] absolute top-[10vh] left-8 z-10">
          <h1 className=" lg:leading-snug font-semibold text-xl lg:text-[2vw]">
            <span className="text-red-800 underline font-bold text-4xl lg:text-[5vw]">FLAT4U</span>
            <br /> Rental and PG expert Goregaon and Malad (E) and (W).
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;