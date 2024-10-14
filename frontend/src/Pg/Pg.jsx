import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Helmet } from 'react-helmet';
import { PGPageSlider } from "../Data/data";
import Footer from "../Components/footer";
import CardPg from "../Components/cardPg";

const PG = () => {
  const [data, setData] = useState();
  const [flatType, setFlatType] = useState("All"); // default to "null"
  const [location, setLocation] = useState("All");
  const [tenantsPreferred, setTenantsPreferred] = useState("Independent");
  const [furnishing, setFurnishing] = useState("All"); // default to "null"
  const [price, setPrice] = useState(0);
  const [searched, setSearched] = useState([]);
  const FetchData = async () => {
    const resp = await fetch(`${import.meta.env.VITE_BASE_URL}/getall/Pg`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    setData(data);
    return;
  };
  useEffect(() => {
    FetchData();
  }, []);
  useEffect(() => {
    let filteredFlats = data;
    filteredFlats = data?.filter((flat) => {
      // Add your filtering conditions here
      let isTypeMatch = flatType === "All" || flat.flatType === flatType;
      let isTenantsPreferredMatch =
        tenantsPreferred === "Independent" ||
        flat.tenantsPreferred === tenantsPreferred;
      let isFurnishedMatch =
        furnishing === "All" || flat.balcony === furnishing;
      let isLocationMatch = location === "All" || flat.location === location;
      return (
        isTypeMatch &&
        isTenantsPreferredMatch &&
        isFurnishedMatch &&
        isLocationMatch /* && ... */
      );
    });
    if (data) {
      if (price == 1) {
        filteredFlats?.sort(
          (a, b) => a.singleSharingRent - b.singleSharingRent
        );
      }
      if (price == 2) {
        filteredFlats?.sort(
          (a, b) => b.singleSharingRent - a.singleSharingRent
        );
      }
    }
    setSearched(filteredFlats);
  }, [data, tenantsPreferred, furnishing, price, location]);

  return (
    <>
      <Helmet>
        <title>
          Male & Female PG Accommodation, Goregaon East, West, Malad West,
          Andheri West - Flat4U
        </title>
        <meta
          name="description"
          content="Flat 4 U is your most reliable choice for male and female PG accommodation in Goregaon East and West, Malad West, and Andheri West. Contact us today!"
        />
        <meta
          name="keywords"
          content="Female PG Accommodation in Goregaon East, Male PG Accommodation in Goregaon West, Female PG Accommodation in Goregaon West, Female PG Accommodation in Malad West, Male PG Accommodation in Malad West, Female PG Accommodation in Andheri West, Male PG Accommodation in Andheri West"
        />
      </Helmet>

      <div className="w-full overflow-x-hidden  relative">
        <h1 className="text-5xl lg:text-[4vw] font-bold absolute z-10 text-red-800 origin-center lg:left-[48%] left-[44%] lg:top-[20vh] top-[10vh] text-center">
          PG
        </h1>
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          slidesPerView={3}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="w-full  lg:mt-20 mt-16 lg:h-[35vh] h-[25vh]  overflow-hidden"
        >
          {PGPageSlider?.map((path, index) => (
            <SwiperSlide key={index}>
              <img
                src={path}
                alt="N/a"
                className="w-full lg:h-auto h-56 object-cover m-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full lg:px-[20%] px-10    overflow-x-auto h-16 flex justify-center gap-2">
          <div className="flex items-center gap-3">
            <label className="text-black" htmlFor="country">
              Gender
            </label>
            <select
              onChange={(e) => setTenantsPreferred(e.target.value)} // Attach the change event handler
              value={tenantsPreferred}
              className="w-full  rounded-md border focus:outline-none border-gray-700 text-black px-2 py-1"
              id="country"
            >
              <option value="Independent">All</option>
              <option value="Boy">Boy</option>
              <option value="Girl">Girl</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-black" htmlFor="country">
              Sharing
            </label>
            <select
              onChange={(e) => setFurnishing(e.target.value)} // Attach the change event handler
              value={furnishing}
              className="w-full  rounded-md border focus:outline-none border-gray-700 text-black px-2 py-1"
              id="country"
            >
              <option value="All">All</option>
              <option value="Single sharing">Single sharing</option>
              <option value="Twin sharing">Twin sharing</option>
              <option value="Triple sharing">Triple sharing</option>
              <option value="Four sharing">Four sharing</option>
            </select>
          </div>

          <div className="flex flex-row space-x-2">
            <div className="flex items-center gap-3 flex-nowrap">
              <label className="text-black text-nowrap" htmlFor="country">
                Price
              </label>
              <select
                className="w-full  border focus:outline-none rounded-md border-gray-700 text-black px-2 py-1"
                id="country"
                onChange={(e) => setPrice(e.target.value)}
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
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              >
                <option value="All">All </option>
                <option value="Goregaon west">Goregaon west</option>
                <option value="Goregaon east">Goregaon east</option>
                <option value="Malad east">Malad east</option>
                <option value="Malad west">Malad west</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex min-h-[30vh] flex-col items-center bg-slate-50">
          {searched?.map((data, index) => (
            <CardPg data={data} key={index} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PG;
