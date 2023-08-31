import React from 'react'
import Navbar from '../Components/Navbar'
import Topbar from '../Components/Topbar'
import TripCard from '../Components/Tripposting/TripCard'
import Demo from '../assets/demo.svg'
import SearchFilters from '../Components/Home/SearchFilters'
const Home = () => {
  return (
    <div className='flex flex-row justify-between'>
      <Navbar />
      <div className='flex flex-col w-full'>
        <Topbar />
        <div className='flex flex-col items-center h-[80vh] overflow-y-scroll'>
        <TripCard title="Palawan, Philippines" description="Palawan is envisioned to become a premier province Lroem Ipsum Blah blah blah ad and  the am wdhuw vidi visioon  dhw uewe lkj etc..." date="20/07/2023 - 29/07/2023" destination="Philipinnies" img={Demo}/>
        <TripCard title="Palawan, Philippines" description="Palawan is envisioned to become a premier province Lroem Ipsum Blah blah blah ad and  the am wdhuw vidi visioon  dhw uewe lkj etc..." date="20/07/2023 - 29/07/2023" destination="Philipinnies" img={Demo}/>
        <TripCard title="Palawan, Philippines" description="Palawan is envisioned to become a premier province Lroem Ipsum Blah blah blah ad and  the am wdhuw vidi visioon  dhw uewe lkj etc..." date="20/07/2023 - 29/07/2023" destination="Philipinnies" img={Demo}/>
        <TripCard title="Palawan, Philippines" description="Palawan is envisioned to become a premier province Lroem Ipsum Blah blah blah ad and  the am wdhuw vidi visioon  dhw uewe lkj etc..." date="20/07/2023 - 29/07/2023" destination="Philipinnies" img={Demo}/>
        </div>
      </div>
      <div className='flex flex-col items-end justify-end mb-10'>
        <SearchFilters />
      </div>
    </div>
  )
}

export default Home