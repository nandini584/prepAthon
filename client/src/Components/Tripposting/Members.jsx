import React from 'react'
import Communitymembers from './Communitymembers'

const Members = () => {
  return (
    <div className='flex flex-col w-80 h-[100vh] bg-white p-8 '>
        <h1 className='text-xl font-bold text-purple-900 mb-10'>Members(43)</h1>
        <div className='overflow-y-scroll'>
        <Communitymembers />
        <Communitymembers />
        <Communitymembers />
        <Communitymembers />
        <Communitymembers />
        <Communitymembers />
        <Communitymembers />
        <Communitymembers />
        </div>
    </div>
  )
}

export default Members