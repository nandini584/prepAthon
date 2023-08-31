import React from "react";

const Destination = (props) => {
    return (
      <div>
      <div className='w-96 h-52 mb-8  mx-32 content-center drop-shadow-md flex flex-col bg-white rounded-2xl px-8 py-4'>
          <h1 className='text-2xl mt-4 mb-2 font-bold items-left text-[#130223]'>Destination</h1>
          <p className='text-sm'>{props.destinationDetails} </p>
          <h1 className='text-2xl mb-2 mt-6 font-bold items-left text-[#130223]'>Date and Time</h1>
          <p className='text-sm'>{props.dateTimeDetails} </p>
      </div>
      </div>
    )
}

export default Destination