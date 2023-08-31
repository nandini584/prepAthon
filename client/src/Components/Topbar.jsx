import React from 'react'
import Logo from '../assets/logo.svg'
const Topbar = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full py-5 px-8'>
        <img src={Logo} alt="Travello" />
        <div>
            {/* Authentication */}
        </div>
    </div>
  )
}

export default Topbar