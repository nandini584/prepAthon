import React from 'react'
import Member from './Member'
const Members = () => {
  return (
    <div className='w-80 h-44 p-5 flex flex-col'>
        <h1 className='text-[#22114F] text-xl'>Members</h1>
        <Member member="img"/>
    </div>
  )
}

export default Members