import React from 'react'
import CommunityCard from '../Components/Community/CommunityCard'
import Tab from '../Components/Community/Tab'
import Navbar from '../Components/Navbar'
import Topbar from '../Components/Topbar'
import CommunityCreate from '../Components/Community/CommunityCreate'
import { Link } from 'react-router-dom'
const Community = () => {
  return (
    <div className='flex flex-row'>
      <Navbar/>
      <div className='flex flex-col w-[100vw] h-[100vh]'>
      <div>
        <Topbar/>
      </div>

      <div className='flex flex-col'>
      <div>
      <Tab/>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-7 items-center overflow-y-scroll h-[65vh]'>
      {
        Array.from({ length: 5 }).map((_, i) => (
          <Link to='/tripposting/:communityid'>
            <CommunityCard key={i} />

          </Link>
        ))
      }
      <CommunityCreate/>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default Community