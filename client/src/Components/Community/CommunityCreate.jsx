import React from 'react'
import Create from '../../assets/create.svg'
const CommunityCard = () => {
  return (
    <div className='w-96 h-56 drop-shadow-md flex flex-col bg-white rounded-2xl justify-center items-center px-8 py-4'>
        <img src={Create} alt="create" />
    </div>
  )
}

export default CommunityCard