import React from 'react'

const Communitymembers = ({iconSrc}) => {
  return (
    <div className='flex flex-row items-center justify-content bg-white mb-7'>
        <img src={iconSrc} alt="members image" className='rounded-full w-12 h-42 mr-5 '/>
        <h1 className='text-base font-medium'>Members name</h1>
    </div>
  )
}

export default Communitymembers