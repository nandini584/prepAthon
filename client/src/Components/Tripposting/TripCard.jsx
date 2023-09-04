import React from 'react'
import {useTrip} from '../../context/TripContext'
const TripCard = () => {
  const {tripdata}=useTrip()

  return (
    <div className='flex flex-row items-center justify-around p-5 drop-shadow-lg w-[700px] h-[180px] text-[#130223] bg-white rounded-2xl mb-5'>
       
          {
            tripdata.map((trip,index)=>(
              <div key={index}>
                  <div className='flex flex-col'>
            <h1 className='text-xl font-bold mb-1'>{trip.tripname}</h1>
            <h1 className='text-base opacity-60 mb-3'>{trip.tripdescription}</h1>
            <div className='flex flex-row text-sm items-center text-[#FF9529] mb-3'>
                <h1 className='mr-28'>Date: {trip.tripdate}</h1>
                <h1>Destination: {trip.tripdestination}</h1>
            </div>
            <button className='text-white text-sm py-2 px-8 rounded-lg bg-[#6041B0] w-28'>Join in</button>
        </div>
        <div>
            <img src={trip.tripimg} alt="location" className='w-48'/>
        </div>
              </div>
            ))
          }
         
    </div>
  )
}

export default TripCard