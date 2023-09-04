import React,{useState} from 'react'
import TripCard from '../Components/Tripposting/TripCard'
import { useTrip} from '../context/TripContext'
import Navbar from '../Components/Navbar'
import Members from '../Components/Tripposting/Members'
import TripHead from '../Components/Tripposting/TripHead'
import Create from '../Components/Tripposting/Create'

const Tripposting = () => {
  const { tripdata } = useTrip();
  const [selectedTrip, setSelectedTrip] = useState(null);
 
  return (
    
    <div className='flex flex-row justify-between'>
      <div>
      <Navbar/>
      </div>
      <div className='flex flex-col w-full itekms-center h-[100vh]'>
        <div className='mb-10'>
        <TripHead />
        </div>
        <div className='ml-10 mb-10'>
        <Create />
        </div>
        <div className='ml-10 overflow-y-scroll flex flex-col '>
          <TripCard/>
        </div>
      </div>
      <div>
        <Members />
      </div>
    </div>
  )
}

export default Tripposting