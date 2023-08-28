import React from 'react'

const TripCard = (props) => {
  return (
    <div className='flex flex-row items-center justify-around p-5 drop-shadow-lg w-[700px] h-[180px] text-[#130223] bg-white rounded-2xl'>
        <div className='flex flex-col'>
            <h1 className='text-xl font-bold mb-1'>{props.title}</h1>
            <h1 className='text-base opacity-60 mb-3'>{props.description}</h1>
            <div className='flex flex-row text-sm items-center text-[#FF9529] mb-3'>
                <h1 className='mr-28'>Date: {props.date}</h1>
                <h1>Destination: {props.destination}</h1>
            </div>
            <button className='text-white text-sm py-2 px-8 rounded-lg bg-[#6041B0] w-28'>Join in</button>
        </div>
        <div>
            <img src={props.img} alt="location" />
        </div>
    </div>
  )
}

export default TripCard