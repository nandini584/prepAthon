import React from 'react'

const CommunityCard = () => {
  return (
    <div className='w-96 h-56 drop-shadow-md flex flex-col bg-white rounded-2xl justify-around px-8 py-4'>
        <h1 className='text-2xl font-bold text-[#130223]'>IIT BHU Community</h1>
        <p className='text-sm'>The Community especially for IIT BHU students, travel along, plan trips and improve bonding....</p>
        <p className='text-orange-500 text-xs font-medium'>Members: 9047</p>
        <button className='py-2 px-4 w-36 bg-purple-700 text-white font-medium rounded-full'>Join in</button>
    </div>
  )
}

export default CommunityCard