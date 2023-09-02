import React from "react";

const EssentialandPrice = (props) => {
    return (
      <div className="flex">
      <div className='w-80 h-64 mb-8  ml-32 mr-2 content-center drop-shadow-md flex flex-col bg-white rounded-2xl px-8 py-4'>
          <h1 className='text-2xl mt-2 mb-1 font-bold items-left text-[#130223]'>Travel Essentials</h1>
          <p className='text-sm'>{props.essential1} </p>
          <p className='text-sm'>{props.essential2} </p>
          <p className='text-sm'>{props.essential3} </p>
          <h1 className='text-2xl mt-2 font-bold items-left text-[#130223]'>Transport Details</h1>
          <p className='text-sm'>Arrival Time:  {props.arTime} </p>
          <p className='text-sm'>Departure Time: {props.drTime} </p>
          <p className='text-sm'>Start Point: {props.startPoint} </p>
          <p className='text-sm'>End Point: {props.endPoint} </p>
      </div>

      
      
      
      <div className='w-80 h-64 mb-8 ml-2 content-center drop-shadow-md flex flex-col bg-white rounded-2xl px-8 py-4'>
          <h1 className='text-2xl mb-1 mt-2 font-bold items-left text-[#130223]'>Trip Price</h1>
          
          <p className='text-sm'>{props.priceDetails1} </p>
          <p className='text-sm'>{props.priceDetails2} </p>
          <p className='text-sm'>{props.priceDetails3} </p>
          <h1 className='text-2xl mb-1 mt-2 font-bold items-left text-[#130223]'>Planned Activities</h1>
          <p className='text-sm'>{props.actDetails1} </p>
          <p className='text-sm'>{props.actDetails2} </p>
          <p className='text-sm'>{props.actDetails3} </p>

      </div>

      

      </div>
    )
}

export default EssentialandPrice