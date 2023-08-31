import React from "react";
import Speaker from "./speaker2.jpg"

const NotificationTemp = (props)=>{
    return (
        <div className='w-2/3 mt-2 h-24  mx-auto content-center drop-shadow-md flex flex-row items-center justify-center bg-white rounded-2xl px-8 py-4'>
          {/* <h1 className='text-2xl font-bold text-[#130223]'>IIT BHU Community</h1> */}
          <img src={Speaker} className="w-10 mr-12"/>
          <p className='text-sm'>{props.message}</p>
          {/* <p className='text-orange-500 text-xs font-medium'>Members: 9047</p> */}
          {/* <button className='py-2 px-4 w-36 bg-purple-700 text-white font-medium rounded-full'>Join in</button> */}
      </div>
    )
}


  
export default NotificationTemp;