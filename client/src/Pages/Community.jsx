import React from 'react'
import CommunityCard from '../Components/Community/CommunityCard'
import Tab from '../Components/Community/Tab'
const Community = () => {
  return (
    <div className='flex flex-col  w-[100vw] h-[93vh]'>
      <div>
      <Tab/>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-7 items-center'>
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      </div>
    </div>
  )
}

export default Community