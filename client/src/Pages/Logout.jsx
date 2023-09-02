import React from 'react'
import { Link } from 'react-router-dom'
const Logout = (userDetails) => {
    const user=userDetails.user;
    const logout=()=>{
        window.open(
            `${import.meta.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
        )
    }
  return (
    <div className="flex flex-col items-center justify-center">
            <div className='flex flex-col '>
                <input type="text" name='Username'  placeholder='Your Username' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 mb-2'/>
                <input type="text" name='Email' placeholder='Your Email' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 mb-2'/>
            </div>
            <div className="flex flex-row items-center justify-center font-inter font-bold text-sm ">
            <Link to="/signup"><button onClick={logout}>Logout</button></Link>
            </div>
        </div>
  )
}

export default Logout