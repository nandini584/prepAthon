import React from 'react'

const TripHead = (props) => {
  return (
    <div className='bg-white w-full py-4 text-[#22114F] flex flex-row items-center justify-start'>
        <h2 className='text-2xl font-bold px-6'>{props.community}IIT BHU</h2>
    </div>
  )
}

export default TripHead