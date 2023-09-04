import React from "react";

const TripTemp = (props) => {
    return (
      <div>
      <div className='w-[100%] h-32 mb-8 mr-96 mx-32 content-center drop-shadow-md flex flex-col bg-white rounded-2xl px-8 py-4'>
          <h1 className='text-2xl mb-2 font-bold items-left text-[#130223]'>{props.name}</h1>
          <p className='text-sm'>{props.message} </p>
      </div>
      </div>
    )
}

export default TripTemp