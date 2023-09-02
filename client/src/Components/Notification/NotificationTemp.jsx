import React from "react";
import Speaker from "./speaker2.jpg"

const NotificationTemp = (props)=>{
    return (
        <div className='w-full mt-3 mx-auto content-center drop-shadow-md flex flex-col items-start bg-white rounded-2xl py-4 pb-5 pr-5'>
          <h1 className="px-10 mb-5 text-xl font-bold">{props.title}</h1>  
          <div className="flex flex-row items-center">
          <img src={Speaker} className="w-10 mr-12 mx-10"/>
          <p className='text-sm'>{props.message}</p>
          </div>
      </div>
    )
}


  
export default NotificationTemp;