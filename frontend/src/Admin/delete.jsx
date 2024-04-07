import React, { useEffect } from 'react'
import Cardfordelete from './Cardfordelete'

const Delete = () => {

  const [data, setData] = React.useState([])
  const FetchData= async()=>{
    const resp=await fetch (`${import.meta.env.VITE_BASE_URL}/getall`, {
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
  return (
    <>
    <div className='flex flex-col w-full overflow-y-auto items-center'>
    {data?.map((e)=>(<Cardfordelete Refreshfunc={FetchData} data={e}/>))}
    </div>
    </>
  )
}

export default Delete