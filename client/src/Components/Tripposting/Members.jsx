import React from 'react'
import Communitymembers from './Communitymembers'
import Demo from '../../assets/demo.svg'
const Members = () => {
  return (
    <div className='flex flex-col w-80 h-[100vh] bg-white p-8 '>
        <h1 className='text-xl font-bold text-purple-900 mb-10'>Members(43)</h1>
        <div className='overflow-y-scroll'>
          {
            Array.from({length:10},(_,index)=>(
              <Communitymembers iconSrc={Demo}/>
            ))
          }
        </div>
    </div>
  )
}

export default Members