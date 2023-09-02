import React from 'react'
import TripCard from '../Components/Tripposting/TripCard'
import Demo from '../assets/demo.svg'
import Navbar from '../Components/Navbar'
import Members from '../Components/Tripposting/Members'
import TripHead from '../Components/Tripposting/TripHead'
import Create from '../Components/Tripposting/Create'
const Tripposting = () => {
  const numComponents = 5;
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
      {Array.from({ length: numComponents }, (_, index) => (
          <div>
          <TripCard title="Palawan, Philippines" description="Palawan is envisioned to become a premier province Lroem Ipsum Blah blah blah ad and  the am wdhuw vidi visioon  dhw uewe lkj etc..." date="20/07/2023 - 29/07/2023" destination="Philipinnies" img={Demo}/>
          </div>
        ))}
        </div>
      </div>
      <div>
        <Members />
      </div>
    </div>
  )
}

export default Tripposting