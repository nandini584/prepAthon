import React from 'react'
import Logo from '../assets/logo.svg'
import Authentication from './Authentication/Authentication'
const Topbar = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full py-10 px-8'>
        <img src={Logo} alt="Travello" />
        <div className='absolute right-10'>
        <Authentication/>
        </div>
    </div>
  )
}

export default Topbar