import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditProperty from "./editData";

const Cardfordelete = ({ Refreshfunc, data}) => {
  function extractPublicId(cloudinaryUrl) {
    const parts = cloudinaryUrl.split('/');
    const publicIdWithExtension = parts.length >= 8 ? parts[7] : null;
  
    if (!publicIdWithExtension) {
      return null;
    }
  
    // Remove file extension from the public ID
    const publicIdWithoutExtension = publicIdWithExtension.split('.')[0];
    return publicIdWithoutExtension;
  }
 async function HandleDelete(){
  const publicIds = data.imageUrl.map(extractPublicId);
  const result = await fetch(`${import.meta.env.VITE_BASE_URL}/delete`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({publicIds,id:data._id}),
  });
  
 
  const res=await result.json();
   if (res) {
    alert(res.message)
    Refreshfunc()
    
    return
   }
  
  }
  const [editOption,setEditOption]=useState(false)
  return (
    <>
   
    <div key={data._id} style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} className="flex flex-col pb-3  gap-2 lg:flex-row lg:w-[80%] flex-shrink-0 w-[97%] relative lg:h-[30vh] items-center  mt-2 lg:mt-4 rounded-md  lg:p-5 p-2 bg-white justify-between">
    {editOption&&<EditProperty Refreshfunc={Refreshfunc} data={data} closeBox={()=>setEditOption(false)} />}
      <div className="img w-[99%] rounded-lg overflow-hidden lg:w-[25%] h-[30vh] lg:h-full bg-slate-300">
        <img
          src={data.imageUrl[0]}
          className="w-full h-full object-cover"
          alt="N/A"
        />
      </div>
      <div className=" h-auto   w-full lg:w-[70%]">
        <h1 className="lg:text-3xl text-2xl font-bold">{data.rent} ₹</h1>
        <p className="lg:font-semibold text-red-800 mt-1">
         {data.flatType} {data.rentalType} <span className="font-normal">for rent in {data.city} {data.state}</span>
        </p>
       <div className="flex lg:gap-4 justify-between text-sm flex-col lg:flex-row lg:mt-4 lg:w-[95%]">
        <div>
        <div>
            <h1 className="text-xl"><span className="font-semibold text-2xl">Address :</span> {data.address}</h1>
        </div>
        </div>
        <div> 
        <div onClick={HandleDelete} className="flex justify-center items-center lg:px-3 hover:bg-red-700 py-2  text-white text-lg bg-red-800 rounded-xl gap-4"><MdDelete/> Delete</div>
        <div onClick={()=>setEditOption(true)} className="flex mt-3 justify-center items-center lg:px-3 hover:bg-red-700 py-2  text-white text-lg bg-red-800 rounded-xl gap-4"><MdEdit/> Edit</div>
        </div>
       </div>
      </div>
    </div>
    </>
  );
};

export default Cardfordelete;
