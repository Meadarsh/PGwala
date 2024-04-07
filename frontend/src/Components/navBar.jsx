import React, { useEffect, useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
 const [openNav,setOpenNav]=useState(false)
  
  return (
    <>
    <div className=" bg-white mainNav w-[100vw] left-0 lg:h-20 h-16 z-50 fixed top-0 flex justify-between items-center lg:px-10 px-8">
      <div><img className="lg:w-14 w-12" src="/logo.jpg" alt="" /></div>
      <div className="lg:flex justify-end gap-4 hidden  w-[20%] ">
       
          {!(location.pathname == "/")&&(
           <Link to={"/"}>  <div className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-1 bg-red-800 lg:hover:bg-red-500">
              Home
            </div></Link>
          )}
        
        
          {!(location.pathname == "/rent")&&(
          <Link to={"/rent"}>  <div className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-1 bg-red-800 lg:hover:bg-red-500">
              Rent
            </div></Link>
          )}
        
       
          {!(location.pathname == "/pg")&&(
           <Link to={"/pg"}>  <div className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-1 bg-red-800 lg:hover:bg-red-500">
              PG
            </div> </Link>
          )}
       
        
          {!(location.pathname == "/contact") && (
           <Link to={"/contact"}> <div className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-1 bg-red-800 lg:hover:bg-red-500">
              Contact
            </div></Link>
          )}
        
      </div>
      {openNav&&<div className="h-[40vh] z-10 overflow-hidden absolute top-0 left-0 w-[100vw] bg-white lg:hidden text-red-800">
        <div className="h-16 w-full flex items-center justify-between px-8">
         <div>Logo</div>
         <div><RxCross2 className="text-4xl" onClick={()=>setOpenNav(false)}/></div>
        </div>
        <div className="text-gray-700 w-full h-full gap-4 flex items-center flex-col mt-10 text-3xl">
        <Link to={'/'}><h1 className={`${(location.pathname == "/")?'text-red-700':null}`}>Home</h1></Link>
        <Link to={'/rent'}><h1 className={`${(location.pathname == "/rent")?'text-red-700':null}`}>Rent</h1></Link>
        <Link to={'/pg'}><h1 className={`${(location.pathname == "/pg")?'text-red-700':null}`}>Pg</h1></Link>
        <Link to={'/contact'} className={`${(location.pathname == "/contact")?'text-red-700':null}`}><h1>Contact</h1></Link>
        </div>
      </div>}

      <CgDetailsMore onClick={()=>setOpenNav(true)} className="text-4xl lg:hidden" />
    </div>
    </>
  );
};

export default NavBar;
