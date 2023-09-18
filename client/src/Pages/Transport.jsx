import React from 'react'
import CommunityCard from '../Components/Community/CommunityCard'
import Tab from '../Components/Community/Tab'
import Navbar from '../Components/Navbar'
import Topbar from '../Components/Topbar'
import TransportCard from '../Components/Transport/Card'
import TransportInfo from '../Components/Transport/TransportInfo'

const Transport = () => {
  return (
    <div className='flex flex-row'>
      <Navbar />
      <div className='flex flex-col w-[100vw] h-[100vh]'>
        <div>
          <Topbar />
        </div>

        <div>
          <TransportCard />
          <TransportCard />
          <TransportCard />
          <TransportCard />
          <TransportCard />
        </div>
      </div>
      <div>
        <TransportInfo/>
      </div>
    </div>
  )
}

export default Transport